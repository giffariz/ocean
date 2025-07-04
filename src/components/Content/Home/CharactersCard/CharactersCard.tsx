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
import { useCharacters } from "@/hook/useCharacters";

export default function CharactersCard() {
  const { t } = useLanguage();
  const { chars, color, imgSrc, logoSrc, titleColor } =useCharacters();
  

  return (
    <Grid
      w={"90%"}
      style={{ height: "max-content", display: "flex" }}
      mb={{ base: "40px", lg: "80px" }}
    >
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
              <Text
                className={style.title}
                style={{ color: titleColor[char.name.toLowerCase()] }}
              >
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
