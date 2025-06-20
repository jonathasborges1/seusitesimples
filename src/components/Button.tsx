import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  className?: string;
}

export const Button = ({
  href,
  children,
  target = "_self",
  className = "",
}: ButtonProps) => {
  const hasBackgroundClass = className.includes("bg-");

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "inline-block px-6 py-3 font-semibold rounded-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300 bg-blue-500 text-white hover:bg-blue-600",
        hasBackgroundClass ? null : "bg-blue-500 text-white hover:bg-blue-600",
        className
      )}
    >
      {children}
    </Link>
  );
};
