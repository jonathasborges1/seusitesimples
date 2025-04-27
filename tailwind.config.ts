import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        background: {
          light: "#f9fafb",
          dark: "#111827",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pingSlow: {
          "0%": { transform: "scale(0.6)", opacity: "1" },
          "75%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-slow": {
          "0%, 100%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient-slow 10s ease infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        pingSlow: "pingSlow 1.2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
