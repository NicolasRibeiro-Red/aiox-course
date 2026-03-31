import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SearchDialog } from "@/components/layout/SearchDialog";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AIOX Course — AI-Orchestrated Development",
    template: "%s | AIOX Course",
  },
  description:
    "Aprenda o framework AIOX para desenvolvimento full-stack orquestrado por agentes IA. 9 modulos, 45 licoes, do basico ao avancado.",
  keywords: [
    "AIOX",
    "AI agents",
    "development framework",
    "Claude Code",
    "AI orchestration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <SearchDialog />
      </body>
    </html>
  );
}
