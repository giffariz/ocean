"use client";
import CircularText from "@/components/ReactBits/CircularText/CircularText";
import { AspectRatio, Image } from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";
import "./BrainRing.css";
import { leagueSpartanClass } from "@/app/page";

export default function BrainRing() {
    return (
        <AspectRatio
            ratio={1}
            w={{ base: "70vw", md: "30vw" }}
            h={{ base: "70vw", md: "30vw" }}
            className="wrapper"
        >
            <div className="ring" />

            <Image src="/char/chars.webp" alt="Characters" className="chars-image" />

            <IconBrain className="icon-brain" />

            <CircularText
                text="OPENNESS . CONSCIENTIOUSNESS . EXTRAVERSION . AGREEABLENESS . NEUROTICISM . "
                spinDuration={50}
                size={"95%"}
                className={leagueSpartanClass}
            />
        </AspectRatio>
    );
}