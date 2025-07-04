import { useLanguage } from "@/context/LanguageContext";
import { useCharacters } from "@/hook/useCharacters";
import { leagueSpartanClass } from "@/lib/font";
import { Badge, Card, Divider, Grid, Group, Stack, Text } from "@mantine/core";

interface ITraitsScoreProps {
  dominantTrait: string;
  scoreAbsolute: number;
  scoreRelative: number;
}

export default function TraitsScore({
  dominantTrait,
  scoreAbsolute,
  scoreRelative,
}: Readonly<ITraitsScoreProps>) {
  const { t } = useLanguage();
  const { charIndex, chars, titleColor } = useCharacters();
  const char = chars?.[charIndex[dominantTrait]];

  return (
    <Stack w={"100%"} align="center">
      <Card
        w={"100%"}
        display={"flex"}
        style={{ alignItems: "center" }}
        bg={"transparent"}
        p={"md"}
        bdrs={"xl"}
      >
        <Text
          className={leagueSpartanClass}
          c={titleColor[dominantTrait]}
          fw={700}
          fz={{ base: "24px", md: "60px" }}
          lh={"0.95"}
          mb={"xs"}
        >
          {char?.title.toUpperCase()}
        </Text>
        <Grid w={"100%"} mt={"sm"}>
          <Grid.Col span={6} p={0}>
            <Stack w={"100%"} justify="center" align="center">
              <Text fz={{ base: "24px", md: "50px" }} fw={800} mb={-20}>
                {scoreAbsolute.toFixed(0)}%
              </Text>
              <Text fz={{ base: "xs", md: "sm" }} c={"dimmed"}>
                {t.result.absolute}
              </Text>
              <Divider
                mt={"-xs"}
                color="var(--mantine-color-lime-4)"
                w={{ base: "30%", md: "10%" }}
                size={"sm"}
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6} p={0}>
            <Stack w={"100%"} justify="center" align="center">
              <Text fz={{ base: "24px", md: "50px" }} fw={800} mb={-20}>
                {scoreRelative}%
              </Text>
              <Text fz={{ base: "xs", md: "sm" }} c={"dimmed"}>
                {t.result.relative}
              </Text>
              <Divider
                mt={"-xs"}
                color="var(--mantine-color-lime-4)"
                w={{ base: "30%", md: "10%" }}
                size={"sm"}
              />
            </Stack>
          </Grid.Col>
        </Grid>
        <Card
          w={"100%"}
          mt={{ base: "md", md: "xl" }}
          bg={"transparent"}
          display={"flex"}
          style={{ alignItems: "center" }}
        >
          <Text
            className={leagueSpartanClass}
            fw={700}
            ta={"center"}
            fz={{ base: "md", md: "xl" }}
          >
            {t.result.core.title1.toUpperCase()}
          </Text>
          <Text
            className={leagueSpartanClass}
            ta={"center"}
            c={"dimmed"}
            fz={{ base: "xs", md: "sm" }}
          >
            {t.result.core.title2.toUpperCase()}
          </Text>
          <Divider
            my={"xs"}
            color="var(--mantine-color-lime-4)"
            w={{ base: "50%", md: "20%" }}
            size={"sm"}
          />
          <Group
            w={"100%"}
            p={0}
            justify="center"
            align="center"
            gap={"sm"}
            mt={"sm"}
          >
            {char?.core.map((trait) => (
              <Badge
                key={trait}
                color={"var(--mantine-color-lime-4)"}
                variant="light"
                p={{ base: "sm", md: "md" }}
                fz={{ base: "sm", md: "xl" }}
              >
                {trait}
              </Badge>
            ))}
          </Group>
        </Card>
      </Card>
    </Stack>
  );
}