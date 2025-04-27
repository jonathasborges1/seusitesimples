import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logomarca.png"
            alt="Logomarca Seu Site Simples"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-blue-600">
            Seu Site Simples
          </span>
        </Link>
        <nav className="hidden md:hidden space-x-6">
          <Link href="/servicos/criacao-de-site-em-sao-paulo">Serviços</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
};
