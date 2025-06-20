import { ChevronDown } from "lucide-react"; // ícone profissional

export function Faq() {
  const faqs = [
    {
      question: "Em quanto tempo meu site ficará pronto?",
      answer:
        "O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto e da velocidade no envio dos materiais (textos, imagens, etc.).",
    },
    {
      question: "Meu site será otimizado para o Google?",
      answer:
        "Sim! Desenvolvemos cada site com foco em SEO técnico, boa performance, carregamento rápido e estrutura amigável para buscadores.",
    },
    {
      question: "O site será responsivo para celulares?",
      answer:
        "Claro! Todos os nossos sites são criados para funcionar perfeitamente em celulares, tablets e computadores (responsividade total).",
    },
    {
      question: "Preciso me preocupar com manutenção?",
      answer:
        "Oferecemos suporte técnico e planos de manutenção para quem deseja manter o site sempre atualizado e seguro.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full px-4 py-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 scroll-mt-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
          >
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
            Tire suas dúvidas sobre nossos serviços de criação de sites.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md transition-all duration-300 animate-fade-in open:bg-gray-50"
            >
              <summary className="flex justify-between items-center cursor-pointer text-left text-lg font-semibold text-gray-800 select-none">
                <span>{faq.question}</span>
                <ChevronDown className="h-6 w-6 transition-transform duration-300 group-open:rotate-180 text-blue-600" />
              </summary>
              <div className="overflow-hidden transition-all duration-300">
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
