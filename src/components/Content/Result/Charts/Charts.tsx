import { Card, Grid, Stack, Text, Image } from "@mantine/core";
import styles from "./Charts.module.css";
import { useCharacters } from "@/hook/useCharacters";
import { leagueSpartanClass } from "@/lib/font";
import { useLanguage } from "@/context/LanguageContext";

interface IChartsProps {
  scores: Record<string, number> | null;
  distScores: Record<string, number> | null;
}

export default function Charts({ scores, distScores }: Readonly<IChartsProps>) {
  const { t } = useLanguage();
  const { color, titleColor, logoSrc, imgSrc } = useCharacters();

  const intensityData = scores
    ? Object.entries(scores).map(([trait, score]) => ({
        label: trait.charAt(0).toUpperCase(),
        value: score.toFixed(0),
        fill: titleColor[trait],
        logo: logoSrc[trait],
      }))
    : [];

  const distData = distScores
    ? Object.entries(distScores).map(([trait, score]) => ({
        label: trait.charAt(0).toUpperCase(),
        value: score,
        fill: color[trait],
        logo: logoSrc[trait],
        img: imgSrc[trait],
      }))
    : [];

  return (
    <Card w={{ base: "90%", md: "50%" }} bg={"transparent"} mt={"md"}>
      <Text
        className={leagueSpartanClass}
        fw={700}
        fz={{ base: "h1", md: "60px" }}
        c={"var(--mantine-color-lime-4)"}
        w={"100%"}
        ta={"center"}
        lh={"0.9"}
        mt={"md"}
      >
        {t.others.closure1}
      </Text>
      <Text
        className={leagueSpartanClass}
        fz={{ base: "md", md: "xl" }}
        w={"100%"}
        ta={"center"}
        style={{ textWrap: "balance" }}
        lh={"0.9"}
        // mt={"-xs"}
      >
        {t.others.closure2}
      </Text>
      <Grid w={"100%"} gutter={"md"} mt={"md"}>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          w={"100%"}
          display={"flex"}
          style={{ alignItems: "center" }}
        >
          <Card w={"100%"} bdrs={"xl"} bg={"transparent"}>
            <Stack w={"100%"} align="center">
              <Text className={leagueSpartanClass} fz={"lg"} mb={"-xs"}>
                {t.result.absolute}
              </Text>
              <Grid grow gutter="md" className={styles.gridContainer}>
                {intensityData.map((stat) => (
                  <Grid.Col
                    span={12 / intensityData.length}
                    key={stat.label}
                    className={styles.statCol}
                  >
                    <div className={styles.stat}>
                      <div className={styles.progress}>
                        <div
                          className={styles.fill}
                          style={{
                            height: `${stat.value}%`,
                            backgroundColor: stat.fill,
                          }}
                        >
                          <div className={styles.value}>
                            <Image src={stat.logo} alt={stat.label} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.label}>{stat.value}%</div>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          w={"100%"}
          display={"flex"}
          style={{ alignItems: "center" }}
        >
          <Card w={"100%"} bdrs={"xl"} bg={"transparent"}>
            <Stack w={"100%"} align="center">
              <Text className={leagueSpartanClass} fz={"lg"} mb={"-xs"}>
                {t.result.relative}
              </Text>
              <Grid grow gutter="md" className={styles.gridContainer}>
                {distData.map((stat) => (
                  <Grid.Col
                    span={12 / distData.length}
                    key={stat.label}
                    className={styles.statCol}
                  >
                    <div className={styles.stat}>
                      <div className={styles.progress}>
                        <div
                          className={styles.fill}
                          style={{ height: "100%", backgroundColor: stat.fill }}
                        >
                          <div className={styles.value}>
                            <Image src={stat.logo} alt={stat.label} />
                          </div>
                        </div>
                        <Image src={stat.img} alt={stat.label} style={{ zIndex: 4, width: "250%", position: "absolute"}}/>
                      </div>
                      <div className={styles.label}>{stat.value}%</div>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
