"use client";
import { AppShell, Grid, Group, Stack, Text, Title } from "@mantine/core";
import { useLanguage } from "@/context/LanguageContext";
import { IconSparkles } from "@tabler/icons-react";
import { leagueSpartanClass } from "@/lib/font";
import BrainRing from "@/components/Content/Home/BrainRing/BrainRing";
import ScrollVelocity from "@/components/ReactBits/ScrollVelocity/ScrollVelocity";
import CharactersCard from "../components/Content/Home/CharactersCard/CharactersCard";
import clsx from "clsx";
import TestCard from "@/components/Content/Home/TestCard/TestCard";
import Footer from "@/components/Content/Home/Footer/Footer";
import Header from "@/components/Header/Header";
import style from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [tested, setTested] = useState(false);

  useEffect(() => {
    const answersData = localStorage.getItem("big5-answers");
    const questionsData = localStorage.getItem("big5-questions");

    if (answersData && questionsData) {
      setTested(true);
    }
  }, []);

  return (
    <AppShell header={{ height: 60 }} padding="md" withBorder={false}>
      <AppShell.Header className={style.header}>
        <Header />
      </AppShell.Header>

      <AppShell.Main className={style.main}>
        <Grid
          w={"90%"}
          px={"md"}
          style={{ height: "max-content" }}
          mt={{ base: "20px", md: "40px" }}
        >
          <Grid.Col span={{ base: 12, md: 7 }} className={style.wrapper}>
            <Stack mb={{ base: "20px", lg: "40px" }}>
              <Group mb={{ base: "-20px", lg: "-30px" }}>
                <IconSparkles className={style.icon} />
                <Title order={5} className={style.title1}>
                  {t.home.title1.toUpperCase()}
                </Title>
              </Group>
              <Title
                order={1}
                className={clsx(leagueSpartanClass, style.title2)}
              >
                {t.home.title2}
              </Title>
              <Text className={style.greeting}>{t.home.greeting}</Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }} className={style.wrapper}>
            <BrainRing />
          </Grid.Col>
        </Grid>

        <div className={style.characters}>
          <div className={style.velocity} style={{ color: "#1f1f1f" }}>
            <ScrollVelocity
              texts={[t.characacters.title2.toLowerCase() + " ."]}
              velocity={30}
              className={leagueSpartanClass}
            />
          </div>

          <CharactersCard />
        </div>

        <div className={style.test}>
          <div className={style.velocity} style={{ color: "black" }}>
            <ScrollVelocity
              texts={[t.test.title1.toLowerCase() + " ."]}
              velocity={30}
              className={leagueSpartanClass}
            />
          </div>

          <TestCard haveResult={tested} />
        </div>

        <div className={style.footer}>
          <Footer />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
