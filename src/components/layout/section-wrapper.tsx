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
      className={cn("section-padding", className)}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}