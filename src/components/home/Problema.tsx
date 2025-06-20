import type { ReactElement } from "react";
import { Briefcase, AlertTriangle, Search } from "lucide-react";

import { Button } from "../Button";

interface CardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const problemas: CardProps[] = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-blue-600 mb-4" />,
    title: "Site Lento",
    description:
      "Um site que demora para carregar prejudica a experiência do usuário e sua posição no Google.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600 mb-4" />,
    title: "Design Desatualizado",
    description:
      "Um visual antigo passa falta de credibilidade e pode afastar potenciais clientes.",
  },
  {
    icon: <Search className="h-8 w-8 text-blue-600 mb-4" />,
    title: "Falta de Otimização SEO",
    description:
      "Sem boas práticas de SEO, seu site não aparece nas buscas e perde oportunidades de negócio.",
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

export function Problema() {
  return (
    <section
      id="problemas"
      className="w-full px-4 py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 scroll-mt-16"
      aria-labelledby="problemas-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-12">
          <h2
            id="problemas-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
          >
            Você enfrenta esses problemas?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
            Identifique se sua empresa também sofre com algum desses desafios e
            veja como podemos ajudar.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Cards cards={problemas} />
        </div>

        <div className="mt-12">
          <Button
            href="https://wa.me/5592985859479?text=Olá%2C%20gostaria%20de%20entender%20como%20solucionar%20problemas%20com%20meu%20site!"
            target="_blank"
          >
            Veja como solucionamos
          </Button>
        </div>
      </div>
    </section>
  );
}
