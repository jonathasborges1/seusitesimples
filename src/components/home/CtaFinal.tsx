import { Button } from "@/components/Button";

export function CtaFinal() {
  return (
    <section
      id="cta-final"
      className="w-full px-4 py-20 bg-gradient-to-b from-blue-600 to-blue-200 text-white text-center scroll-mt-16"
      aria-labelledby="cta-final-heading"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2
            id="cta-final-heading"
            className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in"
          >
            Pronto para transformar sua presença online?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 animate-slide-in-up">
            Solicite agora um site profissional, rápido e otimizado para seu
            negócio crescer.
          </p>
        </header>

        <Button
          href="https://wa.me/5592985859479?text=Olá%2C%20gostaria%20de%20criar%20um%20site%20profissional!"
          target="_blank"
          className="px-8 py-4  text-black text-white-600 font-bold rounded-full shadow-lg hover:bg-blue-100 hover:text-white-700 transition-colors text-lg animate-fade-in"
        >
          Falar com um especialista
        </Button>
      </div>
    </section>
  );
}
