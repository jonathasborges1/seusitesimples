export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center p-4 text-sm">
      <span className="text-xs">
        © {new Date().getFullYear()} Seu Site Simples - Todos os direitos
        reservados.
      </span>
    </footer>
  );
};
