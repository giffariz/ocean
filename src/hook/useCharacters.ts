import { useLanguage } from "@/context/LanguageContext";

export const useCharacters = () => {
    const { t } = useLanguage();

    const color: Record<string, string> = {
        openness: "rgba(66, 71, 140, 0.3)", // #42478C
        conscientiousness: "rgba(150, 98, 50, 0.3)", // #966232
        extraversion: "rgba(255, 222, 89, 0.3)", // #FFDE59
        agreeableness: "rgba(0, 191, 99, 0.3)", // #00BF63
        neuroticism: "rgba(115, 115, 115, 0.3)", // #737373
    };

    const imgSrc: Record<string, string> = {
        openness: "/char/char_openness.webp",
        conscientiousness: "/char/char_conscientiousness.webp",
        extraversion: "/char/char_extraversion.webp",
        agreeableness: "/char/char_agreeableness.webp",
        neuroticism: "/char/char_neuroticism.webp",
    };

    const logoSrc: Record<string, string> = {
        openness: "/char/logo_openness.webp",
        conscientiousness: "/char/logo_conscientiousness.webp",
        extraversion: "/char/logo_extraversion.webp",
        agreeableness: "/char/logo_agreeableness.webp",
        neuroticism: "/char/logo_neuroticism.webp",
    };

    const titleColor: Record<string, string> = {
        openness: "#2b8da5",
        conscientiousness: "#966232",
        extraversion: "#f5ae14",
        agreeableness: "#707f3a",
        neuroticism: "#545454",
    };

    const chars = [
        t.characacters.openness,
        t.characacters.conscientiousness,
        t.characacters.extraversion,
        t.characacters.agreeableness,
        t.characacters.neuroticism,
    ];

    const charIndex: Record<string, number> = {
        openness: 0,
        conscientiousness: 1,
        extraversion: 2,
        agreeableness: 3,
        neuroticism: 4,
    };

    return {
        color,
        imgSrc,
        logoSrc,
        titleColor,
        chars,
        charIndex,
    }
}
