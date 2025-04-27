import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

export const Button = ({ href, children, target = "_self" }: ButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300"
    >
      {children}
    </Link>
  );
};
