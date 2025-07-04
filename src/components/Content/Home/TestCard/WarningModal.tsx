import { useLanguage } from "@/context/LanguageContext";
import { Group, Modal, Text, Highlight, Button } from "@mantine/core";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface IWarningModalProps {
  opened: boolean;
  close: () => void;
}

export default function WarningModal({
  opened,
  close,
}: Readonly<IWarningModalProps>) {
  const { t } = useLanguage();
  const router = useRouter();
  
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Group gap={"xs"}>
          <IconAlertTriangleFilled color="var(--mantine-color-lime-4)" />
          <Text fw={600}>{t.tested.retest}?</Text>
        </Group>
      }
      centered
      overlayProps={{
        style: {
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <Highlight
        ta="justify"
        fz={{ base: "sm", md: "md" }}
        c={"var(--mantine-color-gray-6)"}
        mt={0}
        highlight={["menimpa", "replace"]}
        highlightStyles={{
          backgroundImage:
            "linear-gradient(to right, var(--mantine-color-lime-4), var(--mantine-color-lime-4))",
          fontWeight: 600,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t.tested.warning}
      </Highlight>
      <Group grow gap={"md"} my={"md"}>
          <Button
            variant="filled"
            color="var(--mantine-color-lime-4)"
            fullWidth
            radius={"xl"}
            size="xs"
            onClick={() => router.push("/test?type=quick")}
          >
            <Text c={"black"} fw={600}>
              {t.test.quick1}
            </Text>
          </Button>
          <Button
            variant="outline"
            color="var(--mantine-color-lime-4)"
            fullWidth
            radius={"xl"}
            size="xs"
            onClick={() => router.push("/test?type=full")}
          >
            <Text fw={600}>{t.test.full1}</Text>
          </Button>
      </Group>
      <Button variant="white" onClick={close} radius="xl" fullWidth size="xs">
        <Text fw={600} c="black">
          {t.tested.cancel}
        </Text>
      </Button>
    </Modal>
  );
}