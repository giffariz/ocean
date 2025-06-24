import { useLanguage } from "@/context/LanguageContext";
import { leagueSpartanClass } from "@/lib/font";
import { Flex, Group, Stack, Text } from "@mantine/core";
import { IconBrain, IconTarget, IconUserCircle } from "@tabler/icons-react";

export default function Footer() {
  const { t } = useLanguage();

  const iconsFooter = [
    <IconBrain key={0} size={40} color="var(--mantine-color-lime-4)" />,
    <IconUserCircle key={1} size={40} color="var(--mantine-color-lime-4)" />,
    <IconTarget key={2} size={40} color="var(--mantine-color-lime-4)" />,
  ];
  return (
    <>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "20px", md: "40px", lg: "80px" }}
      >
        {t.footer.highlight.map((item, index) => (
          <Group key={index + 1}>
            {iconsFooter[index]}
            <Stack gap={0}>
              <Text
                className={leagueSpartanClass}
                fw={700}
                size="xl"
                style={{ lineHeight: "0.9" }}
              >
                {item.title}
              </Text>
              {index === 0 ? (
                <Text
                  component="a"
                  href="https://ipip.ori.org/"
                  target="_blank"
                  size="sm"
                  fw={300}
                >
                  {item.description}
                </Text>
              ) : (
                <Text size="sm" fw={300}>
                  {item.description}
                </Text>
              )}
            </Stack>
          </Group>
        ))}
      </Flex>
      <Group gap={3} mt={"xl"}>
        <Text>{t.footer.copyright}</Text>
        <Text
          component="a"
          href="https://www.giffariz.com"
          target="_blank"    
          c={"var(--mantine-color-lime-4)"}
          fw={600}
        >
          {t.footer.textLink}
        </Text>
      </Group>
    </>
  );
}
