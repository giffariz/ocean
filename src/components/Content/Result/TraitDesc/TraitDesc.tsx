import { useLanguage } from "@/context/LanguageContext";
import { useCharacters } from "@/hook/useCharacters";
import { leagueSpartanClass } from "@/lib/font";
import { Card, List, Space, Text } from "@mantine/core";

interface ITraitDescProps {
  dominantTrait: string;
}

function SectionTitle({
  title1,
  title2,
}: Readonly<{ title1: string; title2: string }>) {
  return (
    <>
      <Text
        className={leagueSpartanClass}
        c={"var(--mantine-color-lime-4)"}
        fw={800}
        lh={"0.9"}
        fz={{ base: "xl", md: "h1" }}
      >
        {title1.toUpperCase()}
      </Text>
      <Text
        className={leagueSpartanClass}
        c={"dimmed"}
        fw={300}
        fz={{ base: "sm", md: "lg" }}
        style={{ textWrap: "balance" }}
      >
        {title2.toUpperCase()}
      </Text>
    </>
  );
}

export default function TraitDesc({
  dominantTrait,
}: Readonly<ITraitDescProps>) {
  const { t } = useLanguage();
  const { charIndex, chars } = useCharacters();
  const char = chars?.[charIndex[dominantTrait]] ?? {
    name: "",
    title: "",
    description: "",
    core: [],
    strength: [],
    weakness: [],
    funfacts: [],
  };

  return (
    <Card
      w={{ base: "90%", md: "50%" }}
      p={"xs"}
      mt={"md"}
      mb={"xl"}
      bg={"transparent"}
      display={"flex"}
    >
      <SectionTitle
        title1={t.result.description.title1}
        title2={t.result.description.title2}
      />
      {char.description.split("\n\n").map((item, index) => (
        <Text
          key={index + 1}
          component="p"
          mt={"xs"}
          ta={"justify"}
          fz={{ base: "md", md: "xl" }}
        >
          {item}
        </Text>
      ))}

      <Space h={"xl"} />
      <SectionTitle
        title1={t.result.strength.title1}
        title2={t.result.strength.title2}
      />
      <List mt={"xs"} px={"xs"}>
        {char.strength.map((item, index) => (
          <List.Item key={index + 1} fz={{ base: "md", md: "xl" }}>
            {item}
          </List.Item>
        ))}
      </List>

      <Space h={"xl"} />
      <SectionTitle
        title1={t.result.weakness.title1}
        title2={t.result.weakness.title2}
      />
      <List mt={"xs"} px={"xs"}>
        {char.weakness.map((item, index) => (
          <List.Item key={index + 1} fz={{ base: "md", md: "xl" }}>
            {item}
          </List.Item>
        ))}
      </List>

      <Space h={"xl"} />
      <SectionTitle
        title1={t.result.funfacts.title1}
        title2={t.result.funfacts.title2}
      />
      <List mt={"xs"} px={"xs"} style={{ textWrap: "pretty" }}>
        {char.funfacts.map((item, index) => (
          <List.Item key={index + 1} fz={{ base: "md", md: "xl" }}>
            {item}
          </List.Item>
        ))}
      </List>
    </Card>
  );
}
