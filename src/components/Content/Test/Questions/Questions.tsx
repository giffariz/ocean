import { useLanguage } from "@/context/LanguageContext";
import { Question } from "@/lib/questions";
import { Stack, Card, Text, Radio, Group, Box } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface IQuestionsProps {
  currentQuestions: Question[];
  answers: Record<number, number>;
  handleAnswer: (questionId: number, value: number) => void;
  currentPage: number;
  questionsPerPage: number;
}
export const Questions = ({
  currentQuestions,
  answers,
  handleAnswer,
  currentPage,
  questionsPerPage,
}: IQuestionsProps) => {
  const { t, lang } = useLanguage();

  return (
    <Stack w={{ base: "100%", lg: "60%" }} align="center" m={"md"}>
      {currentQuestions.map((q, i) => (
        <Card
          w={"100%"}
          key={q.id}
          withBorder={false}
          shadow="md"
          radius="md"
          mb={"sm"}
        >
          <Group mb={"sm"} wrap="nowrap" w={"100%"} preventGrowOverflow={false}>
            <Box
              variant="filled"
              w={"30px"}
              h={"30px"}
              bg="var(--mantine-color-lime-4)"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                borderRadius: "50%",
                aspectRatio: "1/1",
                fontWeight: 600,
                fontSize: "12px",
              }}
            >
              {answers[q.id] !== undefined ? (
                <IconCheck size={"80%"}/>
              ) : (
                currentPage * questionsPerPage + i + 1
              )}
            </Box>
            <Text>{lang === "en" ? q.text.en : q.text.id}</Text>
          </Group>
          <Radio.Group
            value={answers[q.id]?.toString() ?? undefined}
            onChange={(value) => handleAnswer(q.id, Number(value))}
          >
            <Group justify="space-between" align="center" grow>
              {[1, 2, 3, 4, 5].map((value) => (
                <Radio
                  key={value}
                  value={value.toString()}
                  variant="outline"
                  color="var(--mantine-color-lime-4)"
                  size="lg"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.2s ease-in-out",
                  }}
                />
              ))}
            </Group>
          </Radio.Group>
          <Group justify="space-between" align="flex-start" grow mt={"xs"}>
            {t.test.scaleLabels.map((l, i) => (
              <Text
                key={l}
                ta={"center"}
                size="xs"
                c={
                  i + 1 === answers[q.id]
                    ? "var(--mantine-color-lime-4)"
                    : "dimmed"
                }
                style={{ transition: "all 0.2s ease-in-out" }}
              >
                {l}
              </Text>
            ))}
          </Group>
        </Card>
      ))}
    </Stack>
  );
};
