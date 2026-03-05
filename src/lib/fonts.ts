import { Manrope, Inter } from "next/font/google";

export const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});