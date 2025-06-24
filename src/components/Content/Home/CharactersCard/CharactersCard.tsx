import {
  AspectRatio,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import style from "./CharactersCard.module.css";
import { IconSparkles } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";
import { leagueSpartanClass } from "@/lib/font";

export default function CharactersCard() {
  const { t } = useLanguage();

  const color: Record<string, string> = {
    openness: "rgba(66, 71, 140, 0.3)", // #42478C
    conscientiousness: "rgba(150, 98, 50, 0.3)", // #966232
    extraversion: "rgba(255, 222, 89, 0.3)", // #FFDE59
    agreeableness: "rgba(0, 191, 99, 0.3)", // #00BF63
    neuroticism: "rgba(115, 115, 115, 0.3)", // #737373
  };

  const imgSrc: Record<string, string> = {
    openness: "/char/char_openness.webp",
    conscientiousness: "/char/char_conscientiousness.webp",
    extraversion: "/char/char_extraversion.webp",
    agreeableness: "/char/char_agreeableness.webp",
    neuroticism: "/char/char_neuroticism.webp",
  };

  const logoSrc: Record<string, string> = {
    openness: "/char/logo_openness.webp",
    conscientiousness: "/char/logo_conscientiousness.webp",
    extraversion: "/char/logo_extraversion.webp",
    agreeableness: "/char/logo_agreeableness.webp",
    neuroticism: "/char/logo_neuroticism.webp",
  };

  const titleColor: Record<string, string> = {
    openness: "#2b8da5",
    conscientiousness: "#966232",
    extraversion: "#f5ae14",
    agreeableness: "#707f3a",
    neuroticism: "#545454",
  };

  const chars = [
    t.characacters.openness,
    t.characacters.conscientiousness,
    t.characacters.extraversion,
    t.characacters.agreeableness,
    t.characacters.neuroticism,
  ];

  return (
    <Grid w={"90%"} style={{ height: "max-content", display: "flex" }} mb={{ base: "40px", lg: "80px" }}>
      <Grid.Col span={{ base: 12, md: 4 }} className={style.col}>
        <Stack>
          <Group mb={{ base: "-25px", lg: "-30px" }}>
            <IconSparkles className={style.icon} />
            <Text className={style.title1}>
              {t.characacters.title1.toUpperCase()}
            </Text>
          </Group>
          <Text className={clsx(leagueSpartanClass, style.title2)}>
            {t.characacters.title2}
          </Text>
        </Stack>
      </Grid.Col>

      {chars.map((char, index) => (
        <Grid.Col
          span={{ base: 12, md: 4 }}
          className={style.col}
          key={index + 1}
        >
          <AspectRatio ratio={2.5 / 1} style={{ position: "relative" }}>
            <Card
              w={"100%"}
              style={{ backgroundColor: color[char.name.toLowerCase()] }}
              className={style.card}
            >
              <div className={style.overlay} />
              <Image
                src={imgSrc[char.name.toLowerCase()]}
                alt={char.name}
                className={style.img}
              />
              <Text className={clsx(leagueSpartanClass, style.name)}>
                {char.name}
              </Text>
              <Text className={style.title} style={{ color: titleColor[char.name.toLowerCase()] }}>
                {char.title}
              </Text>
            </Card>
            <Image
              src={logoSrc[char.name.toLowerCase()]}
              alt={char.name}
              className={style.logo}
            />
          </AspectRatio>
        </Grid.Col>
      ))}
    </Grid>
  );
}
