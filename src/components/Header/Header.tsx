import { Group, Text } from "@mantine/core";
import style from "./Header.module.css";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

export default function Header() {
  return (
    <Group
      w={{ base: "60%", md: "20%" }}
      align="center"
      justify="space-between"
      px={"sm"}
      py={"xs"}
      className={style.glassmorphism}
    >
      <Text
        component="a"
        href="/"
        fw={700}
        c={"var(--mantine-color-lime-4)"}
        size="xl"
      >
        OCEAN
      </Text>
      <LanguageToggle />
    </Group>
  );
}
