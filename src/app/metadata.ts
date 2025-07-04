import { Metadata } from "next";

export const sharedMetadata: Metadata = {
    title: "OCEAN - Personality Test",
    description: "Reveal your dominant traits with the OCEAN Big 5 test.",
    keywords: [
        "Giffari Zakawaly",
        "OCEAN",
        "Personality",
        "Personality Test",
        "Openness",
        "Conscientiousness",
        "Extraversion",
        "Agreeableness",
        "Neuroticism",
    ],
    authors: [{ name: "Giffari Zakawaly", url: "https://ocean.giffariz.com" }],
    creator: "Giffari Zakawaly",
    metadataBase: new URL("https://ocean.giffariz.com"),
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.ico" },
    openGraph: {
        title: "OCEAN - Personality Test",
        description:
            "Reveal your dominant traits with the OCEAN Big 5 test.",
        url: "https://ocean.giffariz.com",
        siteName: "OCEAN - Personality Test",
        images: [
            {
                url: "/og.webp",
                width: 1200,
                height: 630,
                alt: "OCEAN - Personality Test",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "OCEAN - Personality Test",
        description:
            "Reveal your dominant traits with the OCEAN Big 5 test.",
        images: ["/og.webp"],
    },
};
