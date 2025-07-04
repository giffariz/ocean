import ShinyText from "@/components/ReactBits/ShinyText/ShinyText";
import { useCharacters } from "@/hook/useCharacters";
import { leagueSpartanClass } from "@/lib/font";
import { RadarChart } from "@mantine/charts";
import { Grid, Stack, Card, Image } from "@mantine/core";
import clsx from "clsx";
import style from "./ResultCard.module.css";

interface IResultCardProps {
  scores: Record<string, number> | null;
  dominantTrait: string;
}

export default function ResultCard({
  scores,
  dominantTrait,
}: Readonly<IResultCardProps>) {
  const { color, imgSrc, logoSrc } = useCharacters();

  const radarData = scores
    ? Object.entries(scores).map(([trait, score]) => ({
        Trait: trait.charAt(0).toUpperCase(),
        Score: score.toFixed(0),
      }))
    : [];

  return (
    <Stack w={"100%"} align="center" pos={"relative"}>
      <ShinyText
        text={dominantTrait}
        speed={5}
        className={clsx(leagueSpartanClass, style.title)}
      />
      <Image
        src={imgSrc[dominantTrait]}
        alt={dominantTrait}
        mah={"100%"}
        radius={"md"}
        fit="contain"
        style={{
          pointerEvents: "none",
          position: "absolute",
          bottom: "-10%",
          zIndex: 2,
        }}
        ml={"-25%"}
      />
      <Card
        w={"100%"}
        h={"100%"}
        bg={color[dominantTrait]}
        radius={"xl"}
        p={"xs"}
      >
        <Grid>
          <Grid.Col
            span={6}
            h={{ base: "auto", lg: "40dvh" }}
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={logoSrc[dominantTrait]}
              alt={dominantTrait}
              h={"78%"}
              radius={"md"}
              fit="contain"
              opacity={0.5}
              style={{ pointerEvents: "none" }}
              ml={"-15%"}
            />
          </Grid.Col>
          <Grid.Col
            span={6}
            h={{ base: "auto", lg: "40dvh" }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <RadarChart
              h={"100%"}
              data={radarData}
              dataKey="Trait"
              series={[{ name: "Score", color: "var(--mantine-color-lime-4)" }]}
              withPolarGrid
              withPolarAngleAxis
              withDots
              withPolarRadiusAxis
              polarRadiusAxisProps={{
                angle: 90,
                orientation: "middle",
                axisLine: false,
                tick: {
                  dy: 10,
                  fill: "#ccc",
                  fontSize: 12,
                  opacity: 0.5,
                },
                domain([dataMin, dataMax]) {
                  const start = Math.max(
                    0,
                    Math.floor((dataMin - 10) / 10) * 10
                  );
                  const end = Math.min(
                    100,
                    Math.ceil((dataMax + 10) / 10) * 10
                  );
                  return [start, end];
                },
              }}
              bdrs={"xl"}
              className={style.chart}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </Stack>
  );
}
