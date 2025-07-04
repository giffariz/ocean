import { useLanguage } from "@/context/LanguageContext";
import { leagueSpartanClass } from "@/lib/font";
import { Grid, Stack, Divider, Card, Group, Badge, Text } from "@mantine/core";

interface ICharactersScoreProps {
  titleColor: string;
  charTitle: string;
  scoreAbsolute: number;
  scoreRelative: number;
  charCore: string[];
}
export default function CharactersScore(props: Readonly<ICharactersScoreProps>) {
  const { t } = useLanguage();

  return (
    <>
      <Text
        className={leagueSpartanClass}
        c={props.titleColor}
        fw={700}
        fz={"36px"}
        lh={"0.95"}
        mb={"xs"}
        tt={"uppercase"}
      >
        {props.charTitle}
      </Text>
      <Grid w={"100%"} mt={"sm"}>
        <Grid.Col span={6} p={0}>
          <Stack w={"100%"} justify="center" align="center">
            <Text fz={"50px"} fw={800} mb={-20}>
              {props.scoreAbsolute.toFixed(0)}%
            </Text>
            <Text fz={"sm"} c={"dimmed"}>
              {t.result.absolute}
            </Text>
            <Divider mt={"-xs"} color="#a9e34b" w={"10%"} size={"sm"} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={6} p={0}>
          <Stack w={"100%"} justify="center" align="center">
            <Text fz={"50px"} fw={800} mb={-20}>
              {props.scoreRelative}%
            </Text>
            <Text fz={"sm"} c={"dimmed"}>
              {t.result.relative}
            </Text>
            <Divider mt={"-xs"} color="#a9e34b" w={"10%"} size={"sm"} />
          </Stack>
        </Grid.Col>
      </Grid>
      <Card
        w={"100%"}
        mt={"xl"}
        bg={"transparent"}
        display={"flex"}
        style={{ alignItems: "center" }}
      >
        <Text className={leagueSpartanClass} fw={700} ta={"center"} fz={"xl"}>
          {t.result.core.title1.toUpperCase()}
        </Text>
        <Text
          className={leagueSpartanClass}
          ta={"center"}
          c={"dimmed"}
          fz={"sm"}
        >
          {t.result.core.title2.toUpperCase()}
        </Text>
        <Divider my={"xs"} color="#a9e34b" w={"20%"} size={"sm"} />
        <Group
          w={"100%"}
          p={0}
          justify="center"
          align="center"
          gap={"sm"}
          mt={"sm"}
        >
          {props.charCore.map((trait) => (
            <Badge
              key={trait}
              color={"#a9e34b"}
              variant="light"
              p={"md"}
              fz={"xl"}
            >
              {trait}
            </Badge>
          ))}
        </Group>
      </Card>
    </>
  );
}
