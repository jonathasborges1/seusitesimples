import { Mail, Phone, MapPin, Globe, Building, Linkedin } from "lucide-react";

export function IdentificacaoEmpresa() {
  return (
    <section
      id="identificacao-empresa"
      className="w-full px-4 py-20 bg-gradient-to-b from-gray-200 via-white to-gray-100 scroll-mt-16"
      aria-labelledby="identificacao-heading"
    >
      <div className="max-w-6xl mx-auto text-center border-2">
        <header className="mb-8">
          <h2
            id="identificacao-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in"
          >
            Informações Sobre o Projeto
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-slide-in-up">
            Conheça um pouco mais sobre quem está por trás da criação do seu
            site profissional.
          </p>
        </header>

        <address className="text-sm md:text-base border-2 p-4 not-italic flex flex-col md:flex-row gap-3 md:gap-6 text-gray-700 text-left animate-fade-in max-w-4xl mx-auto">
          <div className="flex flex-col w-full md:basis-2/4 gap-3">
            <div className="flex items-center gap-4">
              <Building className="h-6 w-6 text-blue-600" />
              <span>
                <strong>Projeto:</strong> Seu Site Simples
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="flex items-center gap-2">
                <strong>Responsável:</strong> Jonathas Borges
                <a
                  href="https://www.linkedin.com/in/jonathascavalcante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 border-4 border-red-100 rounded-md"
                >
                  <Linkedin className="h-4 w-4 text-purple-500" />
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span>
                <strong>Localização:</strong> Manaus, Amazonas - Brasil
              </span>
            </div>
          </div>

          <div className="flex flex-col basis-2/4 gap-3 ">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <span>
                <strong>Email:</strong> seusitesimples1@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <span>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5592985859479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  (92) 9 8585-9479
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="h-6 w-6 text-blue-600" />
              <span>
                <strong>Site:</strong> https://seusitesimples.com.br
              </span>
            </div>
          </div>
        </address>
      </div>
    </section>
  );
}
