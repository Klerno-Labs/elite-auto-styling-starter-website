import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "slate" | "dark";
}

export default function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    slate: "bg-slate-50",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-32 w-full", bgStyles[background], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}