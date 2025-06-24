import { useLanguage } from "@/context/LanguageContext";
import { Button, Flex, Group, Stack, Text, Highlight } from "@mantine/core";
import { IconBolt, IconBrain, IconSparkles } from "@tabler/icons-react";
import style from "./TestCard.module.css";
import clsx from "clsx";
import { leagueSpartanClass } from "@/lib/font";

export default function TestCard() {
  const { t } = useLanguage();

  return (
    <Stack w={{ base: "80%", md: "50%" }} align="center" mb={{ base: "20px", lg: "40px" }}>
      <Group mb={{ base: "-25px", lg: "-30px" }}>
        <IconSparkles className={style.icon} />
        <Text className={style.title1}>{t.test.title1.toUpperCase()}</Text>
      </Group>
      <Text className={clsx(leagueSpartanClass, style.title2)}>
        {t.test.title2}
      </Text>
      <Highlight
        ta="justify"
        highlight={["Quick", "Full", "Kilat", "Lengkap", "40", "140"]}
        className={style.description}
        highlightStyles={{
          backgroundImage:
            "linear-gradient(to right, white, white)",
          fontWeight: 600,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t.test.description}
      </Highlight>
      <Flex
        gap={"xs"}
        w={"100%"}
        mt={"md"}
        direction={{ base: "column", md: "row" }}
      >
        <Button
          variant="filled"
          color="var(--mantine-color-lime-4)"
          fullWidth
          radius={"xl"}
          leftSection={<IconBolt color="black" />}
        >
          <Text c={"black"} fw={600}>
            {t.test.quick1}
          </Text>
        </Button>
        <Button
          variant="outline"
          color="var(--mantine-color-lime-4)"
          fullWidth
          radius={"xl"}
          leftSection={<IconBrain />}
        >
          <Text fw={600}>{t.test.full1}</Text>
        </Button>
      </Flex>
    </Stack>
  );
}
