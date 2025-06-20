export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center p-4 text-sm">
      <span className="text-xs">
        © {new Date().getFullYear()} Seu Site Simples - Todos os direitos
        reservados.
      </span>{" "}
      <span className="text-xs">
        feito por{" "}
        <a
          className="text-xs text-purple-300"
          href="https://github.com/jonathasborges1"
        >
          Jonathas Borges
        </a>
      </span>
    </footer>
  );
};
