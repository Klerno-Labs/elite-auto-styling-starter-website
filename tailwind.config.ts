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
          DEFAULT: "#0F172A", // Slate 900
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#334155", // Slate 700
          foreground: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#2563EB", // Royal Blue
          foreground: "#FFFFFF",
          hover: "#1D4ED8",
        },
        highlight: {
          DEFAULT: "#F59E0B", // Amber 500
        },
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#020617", // Slate 950
          muted: "#64748B", // Slate 500
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        section: "120px",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        hover: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;