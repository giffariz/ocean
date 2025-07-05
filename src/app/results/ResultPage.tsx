"use client";
import { calculateScores } from "@/lib/scoring";
import { AppShell, Badge, Card, Group, Stack, Text } from "@mantine/core";
import { Suspense, useEffect, useState } from "react";
import { IconBolt, IconBrain } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header/Header";
import ResultCard from "@/components/Content/Result/ResultCard/ResultCard";
import style from "./ResultPage.module.css";
import TraitsScore from "@/components/Content/Result/TraitsScore/TraitsScore";
import { calculateRelativeDistribution } from "@/lib/distributing";
import ScrollVelocity from "@/components/ReactBits/ScrollVelocity/ScrollVelocity";
import { leagueSpartanClass } from "@/lib/font";
import TraitDesc from "@/components/Content/Result/TraitDesc/TraitDesc";
import Charts from "@/components/Content/Result/Charts/Charts";
import ShareButton from "@/components/Content/Result/ShareButton/ShareButton";
import NoResult from "@/components/Content/Result/NoResult/NoResult";
import OthersTrait from "@/components/Content/Result/OthersTrait/OthersTrait";

function ResultPage() {
  const { t, lang } = useLanguage();
  const [showNoResult, setShowNoResult] = useState(false);

  const [scores, setScores] = useState<Record<string, number> | null>(null);
  const [distScores, setDistScores] = useState<Record<string, number> | null>(
    null
  );
  const [dominantTrait, setDominantTrait] = useState<string>("");
  const [testType, setTestType] = useState<string>("quick");

  useEffect(() => {
    const answersData = localStorage.getItem("big5-answers");
    const testTypeData = localStorage.getItem("big5-test-type");
    const questionsData = localStorage.getItem("big5-questions");

    if (answersData && questionsData) {
      const answers = JSON.parse(answersData);
      const questions = JSON.parse(questionsData);
      const calculatedScores = calculateScores(answers, questions);
      const calculatedDistScores = calculateRelativeDistribution(
        answers,
        questions
      );
      setDistScores(calculatedDistScores);
      setScores(calculatedScores);
      setTestType(testTypeData ?? "quick");

      const dominant = Object.entries(calculatedScores).reduce(
        (a, b) => (calculatedScores[a[0]] > calculatedScores[b[0]] ? a : b),
        Object.entries(calculatedScores)[0]
      )[0];
      setDominantTrait(dominant);
    } else {
      setShowNoResult(true);
    }
  }, []);

  if (!scores && showNoResult) return <NoResult />;

  return (
    <AppShell header={{ height: 60 }} padding="md" withBorder={false}>
      <AppShell.Header className={style.header}>
        <Header />
      </AppShell.Header>

      <AppShell.Main className={style.main}>
        <Card
          w={{ base: "95%", md: "50%" }}
          bg={"transparent"}
          bdrs={"xl"}
          p={"xs"}
        >
          <Stack w={"100%"} align="center" p={0}>
            <Badge
              variant="outline"
              color="var(--mantine-color-lime-4)"
              size="md"
              leftSection={
                testType === "quick" ? (
                  <IconBolt color="var(--mantine-color-lime-4)" size={16} />
                ) : (
                  <IconBrain color="var(--mantine-color-lime-4)" size={16} />
                )
              }
            >
              <Text c={"white"} fw={600} size="sm">
                {lang === "id" && "Hasil "}
                {testType === "quick" ? t.test.quick1 : t.test.full1}
                {lang === "en" && " Results"}
              </Text>
            </Badge>
            <Text fz={"sm"} lts={"3px"} mt={"md"} mb={"-25px"}>
              {t.result.intro.toUpperCase()}
            </Text>
            <ResultCard scores={scores} dominantTrait={dominantTrait} />
            <TraitsScore
              dominantTrait={dominantTrait}
              scoreAbsolute={scores?.[dominantTrait] ?? 0}
              scoreRelative={distScores?.[dominantTrait] ?? 0}
            />
          </Stack>
        </Card>

        <div className={style.description}>
          <div className={style.velocity} style={{ color: "black" }}>
            <ScrollVelocity
              texts={[dominantTrait + " ."]}
              velocity={30}
              className={leagueSpartanClass}
            />
          </div>
          <TraitDesc dominantTrait={dominantTrait} />
        </div>

        <div className={style.charts}>
          <div className={style.velocity} style={{ color: "#1f1f1f" }}>
            <ScrollVelocity
              texts={[t.others.velocity]}
              velocity={30}
              className={leagueSpartanClass}
            />
          </div>
          <OthersTrait dominantTrait={dominantTrait} scores={distScores}/>
          <Charts scores={scores} distScores={distScores} />
          <ShareButton
            dominantTrait={dominantTrait}
            scores={scores}
            testType={testType}
            scoreAbsolute={scores?.[dominantTrait] ?? 0}
            scoreRelative={distScores?.[dominantTrait] ?? 0}
          />

          <Group gap={3} mt={"xl"} mb={"md"}>
            <Text c="white">{t.footer.copyright}</Text>
            <Text
              component="a"
              href="https://www.giffariz.com"
              target="_blank"
              c={"var(--mantine-color-lime-4)"}
              fw={600}
              td={"underline"}
            >
              {t.footer.textLink}
            </Text>
          </Group>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default function Result() {
  return (
    <Suspense>
      <ResultPage />
    </Suspense>
  );
}
