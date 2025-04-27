import { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
// import { Problema } from '@/components/home/Problema';
// import { Solucao } from '@/components/home/Solucao';
// import { ProvaSocial } from '@/components/home/ProvaSocial';
// import { OfertaDireta } from '@/components/home/OfertaDireta';
// import { CtaFinal } from '@/components/home/CtaFinal';

export const metadata: Metadata = {
  title: "Seu Site Simples | Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites rápidos, profissionais e otimizados para o Google. Transforme sua presença online de forma simples e eficiente.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Problema /> */}
      {/* <Solucao /> */}
      {/* <ProvaSocial /> */}
      {/* <OfertaDireta /> */}
      {/* <CtaFinal /> */}
    </>
  );
}
