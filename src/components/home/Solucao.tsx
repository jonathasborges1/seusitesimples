import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";
import type { ReactElement } from "react";
import { Button } from "../Button";

interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const solucoes: CardProps[] = [
  {
    icon: <Rocket className="h-8 w-8 text-green-600 mb-4" />,
    title: "Performance Superior",
    description:
      "Criamos sites rápidos e leves, garantindo carregamento ágil e melhor rankeamento no Google.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600 mb-4" />,
    title: "Design Moderno e Responsivo",
    description:
      "Projetamos layouts profissionais e adaptáveis, otimizados para dispositivos móveis, tablets e desktops.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-600 mb-4" />,
    title: "SEO Avançado",
    description:
      "Utilizamos as melhores práticas de SEO técnico para posicionar seu site na frente dos concorrentes.",
  },
];

function Cards({ cards }: { cards: CardProps[] }) {
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
        >
          <div className="flex flex-col items-center text-center">
            {card.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export function Solucao() {
  return (
    <section
      id="solucoes"
      className="w-full px-4 py-16 bg-gradient-to-b from-white via-gray-100 to-gray-50 scroll-mt-16"
      aria-labelledby="solucoes-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-12">
          <h2
            id="solucoes-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
          >
            Como podemos te ajudar?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
            Oferecemos soluções que transformam problemas em resultados, com
            alta performance, design moderno e SEO eficiente.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Cards cards={solucoes} />
        </div>

        <div className="mt-12">
          <Button
            href="https://wa.me/5592985859479?text=Olá%2C%20gostaria%20de%20entender%20como%20solucionar%20problemas%20com%20meu%20site!"
            target="_blank"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition-colors"
          >
            Veja como solucionamos
          </Button>
        </div>
      </div>
    </section>
  );
}
