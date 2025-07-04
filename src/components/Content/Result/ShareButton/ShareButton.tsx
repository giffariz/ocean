"use client";
import { Button, Card, Flex, Stack, Text } from "@mantine/core";
import { IconDownload, IconSend } from "@tabler/icons-react";
import "./ShareButton.css";
import { useLanguage } from "@/context/LanguageContext";
import { useCharacters } from "@/hook/useCharacters";
import { useState } from "react";
import html2canvas from "html2canvas";
import CharactersCard from "../ComponentExport/CharactersCard";
import CharactersScore from "../ComponentExport/CharactersScore";
import Footer from "../ComponentExport/Footer";
import Header from "../ComponentExport/Header";

interface IShareButtonProps {
  testType: string;
  scores: Record<string, number> | null;
  dominantTrait: string;
  scoreAbsolute: number;
  scoreRelative: number;
}

export default function ShareButton(props: Readonly<IShareButtonProps>) {
  const [showExportImage, setShowExportImage] = useState(false);

  const { t } = useLanguage();
  const { imgSrc, logoSrc, color, titleColor, chars, charIndex } =
    useCharacters();
  const char = chars?.[charIndex[props.dominantTrait]];

  const radarData = props.scores
    ? Object.entries(props.scores).map(([trait, score]) => ({
        Trait: trait.charAt(0).toUpperCase(),
        Score: score.toFixed(0),
      }))
    : [];

  const handleExport = (type: "download" | "share") => {
    setShowExportImage(true);

    setTimeout(async () => {
      const el = document.getElementById("share-result");
      if (!el) return;

      const canvas = await html2canvas(el, {
        scale: 2,
        backgroundColor: null,
      });

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve)
      );
      if (!blob) return;

      const file = new File([blob], "ocean-result.png", { type: "image/png" });

      if (type === "share" && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Tes Kepribadian Saya",
          text: "Coba juga di https://ocean.giffariz.com 💫",
        });
      } else {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = "ocean-result.png";
        link.click();
      }

      setShowExportImage(false);
    }, 100);
  };

  return (
    <>
      <Stack w={{ base: "90%", md: "50%" }}>
        <Flex
          gap={"xs"}
          w={"100%"}
          mt={"md"}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            variant="filled"
            color="#a9e34b"
            fullWidth
            radius={"xl"}
            size="lg"
            leftSection={<IconDownload color="black" />}
            onClick={() => handleExport("download")}
          >
            <Text c={"black"} fw={600}>
              {t.download}
            </Text>
          </Button>

          <Button
            variant="outline"
            color="#a9e34b"
            fullWidth
            radius={"xl"}
            size="lg"
            leftSection={<IconSend />}
            onClick={() => handleExport("share")}
          >
            <Text fw={600}>{t.share}</Text>
          </Button>
        </Flex>
      </Stack>

      {showExportImage && (
        <Card id="share-result">
          <Stack w={"100%"} align="center" p={0}>
            <Header testType={props.testType} />
            <CharactersCard
              cardColor={color[props.dominantTrait]}
              charImg={imgSrc[props.dominantTrait]}
              logoImg={logoSrc[props.dominantTrait]}
              dominantTrait={props.dominantTrait}
              radarData={radarData}
            />
            <CharactersScore
              titleColor={titleColor[props.dominantTrait]}
              charTitle={char?.title}
              scoreAbsolute={props.scoreAbsolute}
              scoreRelative={props.scoreRelative}
              charCore={char?.core}
            />
          </Stack>
          <Footer />
        </Card>
      )}
    </>
  );
}
