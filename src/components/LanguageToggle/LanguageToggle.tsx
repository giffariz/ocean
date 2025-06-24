import { ActionIcon, Text  } from '@mantine/core';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
    const { lang, setLang } = useLanguage();

    return (
        <ActionIcon
            onClick={() =>
                setLang(lang === "en" ? "id" : "en")
            }
            variant="outline"
            color="var(--mantine-color-lime-4)"
            size="md"
            aria-label="Toggle Language"
            radius={"xl"}
        >
            <Text size='xs' fw={500} c={"white"}>
                {lang === "en" ? "ID" : "EN"}
            </Text>
        </ActionIcon>
    );
}
