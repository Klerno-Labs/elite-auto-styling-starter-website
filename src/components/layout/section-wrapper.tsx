import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}