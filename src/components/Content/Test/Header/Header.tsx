import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Stack, Group, Badge, Progress, Text } from "@mantine/core";
import { IconBolt, IconBrain } from "@tabler/icons-react";

interface IHeaderProps {
  testType: string;
  progress: number;
}
export const Header = ({ testType, progress }: IHeaderProps) => {
    const { t } = useLanguage();
  
  return (
    <Stack w={{ base: "100%", md: "30%" }} justify="center">
      <Group w={"100%"} align="center" justify="space-between">
        <Badge
          variant="outline"
          color="var(--mantine-color-lime-4)"
          size="xl"
          leftSection={
            testType === "quick" ? (
              <IconBolt color="var(--mantine-color-lime-4)" size={18} />
            ) : (
              <IconBrain color="var(--mantine-color-lime-4)" size={18} />
            )
          }
        >
          <Text c={"white"} fw={700} size="sm">
            {testType === "quick" ? t.test.quick1 : t.test.full1}
          </Text>
        </Badge>
        <LanguageToggle />
      </Group>
      <Progress
        value={progress}
        color="var(--mantine-color-lime-4)"
        size="md"
        radius="xl"
        transitionDuration={200}
      />
      <Group w={"100%"} align="center" justify="space-between">
        <Text c={"white"} size="sm">
          {progress.toFixed(0)}%
        </Text>
        <Text c={"white"} size="sm">
          {testType === "quick" ? t.test.quick2 : t.test.full2}
        </Text>
      </Group>
    </Stack>
  );
};