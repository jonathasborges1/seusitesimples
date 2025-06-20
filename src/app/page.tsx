import { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Sobre } from "@/components/home/Sobre";
import { Problema } from "@/components/home/Problema";
import { Solucao } from "@/components/home/Solucao";
import { Projetos } from "@/components/home/Projetos";
// import { ProvaSocial } from '@/components/home/ProvaSocial';
// import { OfertaDireta } from "@/components/home/OfertaDireta";
import { CtaFinal } from "@/components/home/CtaFinal";
import { Faq } from "@/components/home/Faq";
import { IdentificacaoEmpresa } from "@/components/home/IdentificacaoEmpresa";
// import { Contato } from "@/components/home/Contato";

export const metadata: Metadata = {
  title: "Seu Site Simples | Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites rápidos, profissionais e otimizados para o Google. Transforme sua presença online de forma simples e eficiente.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sobre />
      <Problema />
      <Solucao />
      <Projetos />
      {/* <ProvaSocial /> */}
      {/* <OfertaDireta /> */}
      <CtaFinal />
      <Faq />
      <IdentificacaoEmpresa />
    </>
  );
}
