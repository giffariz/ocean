import { useLanguage } from "@/context/LanguageContext";
import { Badge, Text } from "@mantine/core";
import { IconBolt, IconBrain } from "@tabler/icons-react";

interface IHeaderProps {
  testType: string;
}
export default function Header({ testType }: Readonly<IHeaderProps>) {
  const { t, lang } = useLanguage();
  
  return (
    <>
      <Badge
        variant="outline"
        mt={"xl"}
        color="#a9e34b"
        size="md"
        leftSection={
          testType === "quick" ? (
            <IconBolt color="#a9e34b" size={16} />
          ) : (
            <IconBrain color="#a9e34b" size={16} />
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
    </>
  );
}
