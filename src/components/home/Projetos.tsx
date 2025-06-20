import Image from "next/image";

interface ProjetoProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projetos: ProjetoProps[] = [
  {
    title: "Landing Page para Advogados",
    description:
      "Página de alta conversão para lançamento de uma startup de tecnologia.",
    imageUrl: "/images/landingpage-advogada-juliana-rodrigues.png",
    link: "https://julianarodriguesadv.pages.dev",
  },
  {
    title: "Site Institucional para Psicologos",
    description: "Site institucional moderno para uma empresa de consultoria.",
    imageUrl: "/images/landingpage-psicologa-jucile-costa.png",
    link: "https://jucilenecosta.pages.dev",
  },
];

function ProjetoCard({ projeto }: { projeto: ProjetoProps }) {
  return (
    <a
      href={projeto.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
    >
      <div className="relative h-48 w-full">
        <Image
          src={projeto.imageUrl}
          alt={projeto.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {projeto.title}
        </h3>
        <p className="text-gray-600 text-sm">{projeto.description}</p>
      </div>
    </a>
  );
}

export function Projetos() {
  return (
    <section
      id="projetos"
      className="w-full px-4 py-16 bg-gradient-to-b from-gray-100 via-white to-gray-50 scroll-mt-16"
      aria-labelledby="projetos-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <header className="mb-12">
          <h2
            id="projetos-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
          >
            Projetos Realizados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
            Conheça alguns dos projetos que entregamos com excelência,
            performance e design moderno.
          </p>
        </header>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center">
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
