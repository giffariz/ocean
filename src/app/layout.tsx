import { Geist, Geist_Mono } from "next/font/google";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/Loader/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import { sharedMetadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme="dark"
          forceColorScheme="dark"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <MantineProvider
          withGlobalClasses
          withCssVariables
          defaultColorScheme="dark"
          forceColorScheme="dark"
        >
          <PageTransition>
            <LanguageProvider>
              {children}
              <Analytics />
            </LanguageProvider>
          </PageTransition>
        </MantineProvider>
      </body>
    </html>
  );
}
