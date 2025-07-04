import { useLanguage } from "@/context/LanguageContext";
import { Button, Flex, Group, Stack, Text, Highlight } from "@mantine/core";
import {
  IconArrowUpRight,
  IconBolt,
  IconBrain,
  IconReload,
  IconSparkles,
} from "@tabler/icons-react";
import style from "./TestCard.module.css";
import clsx from "clsx";
import { leagueSpartanClass } from "@/lib/font";
import { useDisclosure } from "@mantine/hooks";
import WarningModal from "./WarningModal";
import { useRouter } from "next/navigation";

interface ITestCardProps {
  haveResult: boolean;
}

export default function TestCard({ haveResult }: Readonly<ITestCardProps>) {
  const { t } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  if (haveResult) {
    return (
      <Stack
        w={{ base: "80%", md: "50%" }}
        align="center"
        mb={{ base: "20px", lg: "40px" }}
      >
        <Group mb={{ base: "-25px", lg: "-30px" }}>
          <IconSparkles className={style.icon} />
          <Text className={style.title1}>{t.tested.title1.toUpperCase()}</Text>
        </Group>
        <Text className={clsx(leagueSpartanClass, style.title2)}>
          {t.tested.title2}
        </Text>
        <Text ta="justify" mt={0} className={style.description}>
          {t.tested.description}
        </Text>
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
            size="lg"
            leftSection={<IconArrowUpRight color="black" />}
            onClick={() => router.push("/results")}
          >
            <Text c={"black"} fw={600}>
              {t.tested.seeResult}
            </Text>
          </Button>

          <Button
            variant="outline"
            color="var(--mantine-color-lime-4)"
            fullWidth
            radius={"xl"}
            size="lg"
            leftSection={<IconReload />}
            onClick={open}
          >
            <Text fw={600}>{t.tested.retest}</Text>
          </Button>
        </Flex>

        <WarningModal opened={opened} close={close} />
      </Stack>
    );
  }

  return (
    <Stack
      w={{ base: "80%", md: "50%" }}
      align="center"
      mb={{ base: "20px", lg: "40px" }}
    >
      <Group mb={{ base: "-25px", lg: "-30px" }}>
        <IconSparkles className={style.icon} />
        <Text className={style.title1}>{t.test.title1.toUpperCase()}</Text>
      </Group>
      <Text className={clsx(leagueSpartanClass, style.title2)}>
        {t.test.title2}
      </Text>
      <Highlight
        ta="justify"
        mt={0}
        highlight={["Quick", "Full", "Kilat", "Lengkap", "40", "140"]}
        className={style.description}
        highlightStyles={{
          backgroundImage: "linear-gradient(to right, white, white)",
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
          size="lg"
          leftSection={<IconBolt color="black" />}
          onClick={() => router.push("/test?type=quick")}
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
          size="lg"
          leftSection={<IconBrain />}
          onClick={() => router.push("/test?type=full")}
        >
          <Text fw={600}>{t.test.full1}</Text>
        </Button>
      </Flex>
    </Stack>
  );
}
