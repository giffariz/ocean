"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import FillText from "./FillText/FillText";

export default function PageTransitionWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    const [showOverlay, setShowOverlay] = useState(true);

    const pageLoaderText: Record<string, string> = {
        "/test": "PREPARING",
        "/results": "ANALYZING",
        default: "LOADING",
    };

    const loaderText = pageLoaderText[pathname] ?? pageLoaderText.default;

    useEffect(() => {
        setShowOverlay(true);
        const timeout = setTimeout(() => {
            setShowOverlay(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            <AnimatePresence mode="wait">
                {showOverlay && (
                    <motion.div
                        key={`page-transition-${pathname}`}
                        initial={false}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "#111",
                            zIndex: 9999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                    >
                        <FillText key={`fill-text-${pathname}`} text={loaderText} />

                        <motion.div
                            key={`progress-${pathname}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                height: 2,
                                width: "100%",
                                backgroundColor: "#C2FF4D",
                                transformOrigin: "left",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOverlay ? 0 : 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
            >
                {children}
            </motion.div>
        </>
    );
}