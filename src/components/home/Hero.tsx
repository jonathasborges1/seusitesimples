import Image from "next/image";

import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden 
                bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                from-primary/20 via-white to-primary-light
                bg-[length:200%_200%] bg-center md:animate-gradient-slow
                px-6 py-10 md:py-36 border-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Coluna 1 - Texto */}
        <div className="md:px-16 border-0 flex md:flex-[2] flex-col gap-6 text-center md:text-left animate-fade-in-up [animation-delay:0ms]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight md:bg-gradient-to-r from-primary to-primary-light md:bg-clip-text md:text-transparent">
            Transforme Sua Presença{" "}
            <strong className="text-green-600">Online</strong> com um Site
            Simples e Profissional
          </h1>

          <p className="text-md sm:text-lg md:text-xl text-gray-900 font-light max-w-xl mx-auto md:mx-0">
            Criamos sites rápidos, bonitos e{" "}
            <strong className="font-semibold text-primary-dark">
              {" "}
              otimizados para o Google
            </strong>
            . Tenha mais resultados sem complicação, com suporte dedicado e
            entrega em poucos dias.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button
              href="https://wa.me/5592985859479?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20de%20site!"
              target="_blank"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        {/* Coluna 2 - Imagem */}
        <div className="relative flex md:flex-1 justify-center animate-fade-in-up [animation-delay:300ms]">
          <div className="relative bg-gray-200 rounded-3xl shadow-2xl p-4 md:p-6 max-w-md w-full">
            {/* Simula a tela */}
            <Image
              src="/images/site-sample.png"
              alt="Mockup de site institucional profissional feito pela Seu Site Simples"
              width={500}
              height={300}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />

            {/* Linha da base do notebook */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-32 h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Bolhas decorativas */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-light opacity-30 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
    </section>
  );
};
