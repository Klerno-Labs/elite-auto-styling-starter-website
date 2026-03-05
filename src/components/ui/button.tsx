import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90 hover:shadow-lg focus:ring-accent",
      secondary: "bg-white border-2 border-slate-200 text-slate-700 hover:border-accent hover:text-accent",
      ghost: "text-slate-600 hover:text-accent hover:bg-slate-50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes} {...(props as any)}>
          {props.children}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;