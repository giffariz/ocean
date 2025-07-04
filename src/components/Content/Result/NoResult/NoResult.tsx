import { useLanguage } from "@/context/LanguageContext";
import { leagueSpartanClass } from "@/lib/font";
import { Button, Image, Stack, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function NoResult() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <Stack
      w={"100dvw"}
      h={"100dvh"}
      justify={"center"}
      align={"center"}
      bg={"black"}
    >
      <Text
        className={leagueSpartanClass}
        fw={700}
        fz={{ base: "40px", md: "70px" }}
        mb={{ base: "-95px", md: "-140px" }}
        c={"var(--mantine-color-lime-4)"}
      >
        {t.noResult}
      </Text>
      <Image
        src="/no_result.webp"
        alt="no result"
        w={{ base: "80%", md: "30%" }}
      />
      <Button
        color="var(--mantine-color-lime-4)"
        w={{ base: "50%", md: "20%" }}
        bdrs={"xl"}
        p={0}
        leftSection={<div></div>}
        rightSection={
          <div
            style={{
              aspectRatio: 1,
              height: "100%",
              padding: "5px",
              background: "black",
              borderRadius: "50px",
            }}
          >
            <IconArrowUpRight color="var(--mantine-color-lime-4)" />
          </div>
        }
        justify="space-between"
        style={{ color: "black", fontSize: "14px" }}
        onClick={() => router.push("/")}
      >
        Back Home
      </Button>
    </Stack>
  );
}
