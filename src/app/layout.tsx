import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PROFILE } from "@/data/career";

export const metadata: Metadata = {
  title: `${PROFILE.shortName} Abhishek — Portfolio`,
  description: `${PROFILE.tagline} SWE × LLMs, RAG, agentic workflows.`,
  applicationName: "Overworld Portfolio",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  authors: [{ name: PROFILE.name }],
  keywords: [
    "Chandan Abhishek",
    "Software Engineer",
    "LLMs",
    "RAG",
    "Distributed Systems",
    "FastAPI",
    "Next.js",
  ],
  openGraph: {
    title: `${PROFILE.name} — Portfolio`,
    description: PROFILE.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
