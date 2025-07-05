import { useCharacters } from "@/hook/useCharacters";
import { Accordion, Badge, Group, Image, Stack, Text } from "@mantine/core";
import styles from "./OthersTrait.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { leagueSpartanClass } from "@/lib/font";

interface IOthersTraitProps {
  dominantTrait: string;
  scores: Record<string, number> | null;
}
export default function OthersTrait({
  dominantTrait,
  scores,
}: Readonly<IOthersTraitProps>) {
  const { t } = useLanguage();
  const { chars, charIndex, imgSrc, titleColor } = useCharacters();

  const dominantTraitIndex = charIndex[dominantTrait];

  return (
    <Stack w={{ base: "90%", md: "50%" }}>
      <Text
        className={leagueSpartanClass}
        fz={{ base: "xl", md: "h1" }}
        w={"100%"}
        ta={"center"}
        mt={"md"}
        style={{ textWrap: "balance" }}
        lh={"0.9"}
      >
        {t.others.title1} <b>{scores?.[dominantTrait] ?? 0}%</b>{" "}
        {t.others.title2}
      </Text>
      <Text
        className={leagueSpartanClass}
        fw={700}
        fz={{ base: "h1", md: "60px" }}
        c={"var(--mantine-color-lime-4)"}
        w={"100%"}
        ta={"center"}
        lh={"0.9"}
        mt={"-xs"}
      >
        {t.others.title3}
      </Text>
      <Accordion classNames={styles}>
        {chars.map(
          (char, index) =>
            index !== dominantTraitIndex && (
              <Accordion.Item key={char.name} value={char.name}>
                <Accordion.Control
                  style={{ position: "relative", overflow: "hidden" }}
                  icon={
                    <Image
                      src={imgSrc[char.name.toLowerCase()]}
                      alt={char.name}
                      h={{ base: "120px", md: "180px" }}
                      w={{ base: "120px", md: "180px" }}
                      mt={{ base: "45px", md: "70px" }}
                      ml={"-18px"}
                      mr={"-10px"}
                    />
                  }
                  bg={"black"}
                  h={{ base: "80px", md: "120px" }}
                >
                  <Text c="white" fw={700} fz={{ base: "xl", md: "h1" }}>
                    {scores?.[char.name.toLowerCase()] ?? 0}%
                  </Text>
                  <Text
                    c={titleColor[char.name.toLowerCase()]}
                    fw={500}
                    fz={{ base: "md", md: "h3" }}
                  >
                    {char.name}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack>
                    <Text
                      fz={{ base: "sm", md: "md" }}
                      style={{ textWrap: "pretty" }}
                    >
                      {char.description2}
                    </Text>
                    <Group gap={"xs"}>
                      {char.core.map((item, index) => (
                        <Badge
                          key={index + 1}
                          variant="light"
                          color={"var(--mantine-color-lime-4)"}
                          size={"sm"}
                        >
                          {item}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            )
        )}
      </Accordion>
    </Stack>
  );
}
