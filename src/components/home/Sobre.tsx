import Image from "next/image";
import { Button } from "../Button";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="w-full px-4 py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 scroll-mt-16"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-6xl mx-auto grid items-center gap-12 md:grid-cols-2">
        <div>
          <header className="mb-6">
            <h2
              id="sobre-heading"
              className="flex justify-center lg:justify-start text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
            >
              Quem Somos
            </h2>
            <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
              No <strong className="text-[#00BFFF]">Seu Site Simples</strong>,
              somos especialistas na criação de sites rápidos, modernos e
              otimizados para SEO. Nosso objetivo é impulsionar a presença
              online de empresas de todos os tamanhos com soluções digitais de
              alta performance.
            </p>
          </header>

          <p className="text-gray-600 mt-4 animate-fade-in">
            Trabalhamos focados em design responsivo, experiência do usuário e
            otimização para buscadores, garantindo que cada projeto entregue
            resultados reais. Conectamos tecnologia e criatividade para
            transformar ideias em presença digital de sucesso.
          </p>

          <div className="mt-8 flex justify-center lg:justify-starborder-2">
            <Button
              href="https://wa.me/5592985859479?text=Olá%2C%20gostaria%20de%20ver%20mais%20projetos%20de%20web%20site!"
              target="_blank"
            >
              Falar com a Equipe
            </Button>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md mx-auto">
          <Image
            src="/images/sobre-equipe.png"
            alt="Equipe de desenvolvimento web"
            className="object-cover rounded-2xl shadow-lg animate-fade-in"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
