import { leagueSpartanClass } from "@/lib/font";
import { RadarChart } from "@mantine/charts";
import { Stack, Card, Grid, Image, Text } from "@mantine/core";

interface ICharacterCardProps {
  dominantTrait: string;
  charImg: string;
  logoImg: string;
  cardColor: string;
  radarData: {
    Trait: string;
    Score: string;
  }[];
}
export default function CharactersCard(props: Readonly<ICharacterCardProps>) {
  return (
    <Stack w={"100%"} align="center" pos={"relative"}>
      <Text
        className={leagueSpartanClass}
        fw={700}
        fz={"36px"}
        tt={"uppercase"}
        mb={"-20px"}
      >
        {props.dominantTrait.toUpperCase()}
      </Text>
      <Image
        src={props.charImg}
        alt={props.dominantTrait}
        h={"310px"}
        w={"310px"}
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
      <Card w={"95%"} h={"250px"} bg={props.cardColor} radius={"xl"} p={"xs"}>
        <Grid>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Image
              src={props.logoImg}
              alt={props.dominantTrait}
              h={"95%"}
              w={"95%"}
              radius={"md"}
              fit="contain"
              opacity={0.5}
              style={{ pointerEvents: "none" }}
            />
          </Grid.Col>
          <Grid.Col
            span={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <RadarChart
              h={"100%"}
              data={props.radarData}
              dataKey="Trait"
              series={[{ name: "Score", color: "#a9e34b" }]}
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
                domain: [0, 100],
                tickCount: 3,
              }}
              bdrs={"xl"}
              className="chart"
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                paddingTop: "10px",
                backdropFilter: "blur(4px) !important",
                WebkitBackdropFilter: "blur(4px)",
                aspectRatio: "1 / 1",
                zIndex: 3,
              }}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </Stack>
  );
}