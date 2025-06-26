import { useLanguage } from "@/context/LanguageContext";
import { Group, Button, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface IFooterProps {
  currentPage: number;
  totalPages: number;
  isPageComplete: boolean;
  isTestComplete: boolean;
  prevPage: () => void;
  nextPage: () => void;
  finishTest: () => void;
}

export const Footer = (props: IFooterProps) => {
  const { lang } = useLanguage();

  return (
    <Group w={{ base: "100%", lg: "30%" }} justify="space-between">
      <Button
        w={"38%"}
        disabled={props.currentPage === 0}
        onClick={props.prevPage}
        variant="filled"
        radius="xl"
        color="var(--mantine-color-lime-4)"
        leftSection={<IconArrowLeft />}
        style={{ color: "black", fontSize: "12px" }}
      >
        {lang === "en" ? "PREV" : "KEMBALI"}
      </Button>

      <Text c={"white"} size="xs">
        {props.currentPage + 1} / {props.totalPages}
      </Text>

      {props.currentPage === props.totalPages - 1 ? (
        <Button
          w={"38%"}
          disabled={!props.isTestComplete}
          onClick={props.finishTest}
          variant="filled"
          radius="xl"
          color="var(--mantine-color-lime-4)"
          style={{ color: "black", fontSize: "12px" }}
        >
          {lang === "en" ? "RESULT" : "HASIL"}
        </Button>
      ) : (
        <Button
          w={"38%"}
          disabled={!props.isPageComplete}
          onClick={props.nextPage}
          variant="filled"
          radius="xl"
          color="var(--mantine-color-lime-4)"
          rightSection={<IconArrowRight />}
          style={{ color: "black", fontSize: "12px" }}
        >
          {lang === "en" ? "NEXT" : "LANJUT"}
        </Button>
      )}
    </Group>
  );
};
