import "./globals.css";

import { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Montserrat } from "next/font/google";
import LogAppVersion from "@/components/LogAppVersion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Criação de Sites Profissionais - Seu Site Simples",
  description:
    "Criamos sites rápidos, bonitos e otimizados para o Google. Seu novo site começa aqui.",
  keywords: [
    "Criação de sites",
    "Sites profissionais",
    "Desenvolvimento web",
    "Landing page",
    "Seu Site Simples",
  ],
  openGraph: {
    title: "Criação de Sites Profissionais - Seu Site Simples",
    description:
      "Aumente sua presença online com sites rápidos e profissionais criados sob medida para você.",
    url: "https://seusitesimples.com.br",
    siteName: "Seu Site Simples",
    type: "website",
    locale: "pt_BR",
    verification: {
      google: "-aEdvna45HfuoQzvEtZiYF0J6Q6snzapEc1lmIuTmGU",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LogAppVersion />
      </body>
    </html>
  );
}
