import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Royal Blue
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#0F172A", // Slate 900 (Navy)
          light: "#334155", // Slate 700
        },
        accent: "#F59E0B", // Amber 500
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#020617", // Slate 950
          muted: "#64748B", // Slate 500
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;