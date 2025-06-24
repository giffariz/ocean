"use client";

import { useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useTransform,
} from "framer-motion";
import "./FillText.css";
import clsx from "clsx";
import { leagueSpartanClass } from "@/app/page";

interface IFillTextProps {
    text: string;
}

export default function FillText({ text }: Readonly<IFillTextProps>) {
    const progress = useMotionValue(0);
    const start = useRef<number | null>(null);

    const getRealBouncyProgress = (t: number) => {
        const base = t / 2500;
        const bounce = Math.sin(base * Math.PI * 9) * (1 - base) * 0.12;
        return Math.max(0, Math.min(1, base + bounce));
    };

    useAnimationFrame((t) => {
        start.current ??= t;
        const elapsed = t - start.current;
        progress.set(getRealBouncyProgress(elapsed));
    });

    const clipPath = useTransform(progress, (val) => {
        const right = 100 - val * 100;
        return `inset(0% ${right}% 0% 0%)`;
    });
    return (
        <div className="loader-container">
            <div className="loader-text-wrapper">
                <span className={clsx("loader-text-back", leagueSpartanClass)}>
                    {text}
                </span>
                <motion.span
                    className={clsx("loader-text-front", leagueSpartanClass)}
                    style={{
                        clipPath: clipPath,
                    }}
                >
                    {text}
                </motion.span>
            </div>
        </div>
    );
}
