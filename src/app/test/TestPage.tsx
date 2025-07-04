"use client";
import { getRandomizedQuestions, Question } from "@/lib/questions";
import { Box, ScrollArea } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Content/Test/Footer/Footer";
import { Header } from "@/components/Content/Test/Header/Header";
import { Questions } from "@/components/Content/Test/Questions/Questions";
import { AnimatePresence, motion } from "framer-motion";
import style from "./page.module.css";

function TestPage() {
  const viewport = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const testType = searchParams.get("type") ?? "quick";

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const randomizedQuestions = getRandomizedQuestions(testType);
    setQuestions(randomizedQuestions);
  }, [testType]);

  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const isPageComplete = currentQuestions.every(
    (q) => answers[q.id] !== undefined
  );
  const isTestComplete = Object.keys(answers).length === questions.length;

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const scrollToTop = () => {
    viewport.current!.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setTimeout(scrollToTop, 100);
      }, 200);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setTimeout(scrollToTop, 100);
      }, 200);
    }
  };

  const finishTest = () => {
    localStorage.setItem("big5-answers", JSON.stringify(answers));
    localStorage.setItem("big5-test-type", testType);
    localStorage.setItem("big5-questions", JSON.stringify(questions));
    router.push("/results");
  };

  return (
    <Box className={style.pageWrapper}>
      <Box className={style.header}>
        <Header testType={testType} progress={progress} />
      </Box>

      <Box className={style.scrollWrapper}>
        <ScrollArea
          scrollbars="y"
          viewportRef={viewport}
          className={style.scrollArea}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ willChange: "opacity" }}
            >
              <Box className={style.content}>
                <Questions
                  currentQuestions={currentQuestions}
                  answers={answers}
                  handleAnswer={handleAnswer}
                  currentPage={currentPage}
                  questionsPerPage={questionsPerPage}
                />
              </Box>
            </motion.div>
          </AnimatePresence>
        </ScrollArea>
        <div className={style.vignetteTop} />
        <div className={style.vignetteBottom} />
      </Box>

      <Box className={style.footer}>
        <Footer
          currentPage={currentPage}
          totalPages={totalPages}
          isPageComplete={isPageComplete}
          isTestComplete={isTestComplete}
          prevPage={prevPage}
          nextPage={nextPage}
          finishTest={finishTest}
        />
      </Box>
    </Box>
  );
}

export default function Test() {
  return (
    <Suspense>
      <TestPage />
    </Suspense>
  );
}
