"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[3px] border-black bg-ev-neon-yellow font-brutal uppercase text-ev-neon-red shadow-brutal hover:scale-105",
  secondary:
    "border-[3px] border-black bg-ev-neon-cream font-brutal uppercase text-ev-black shadow-brutal hover:scale-105",
  ghost:
    "font-bold text-ev-black underline decoration-2 underline-offset-4 hover:text-ev-neon-pink",
  outline:
    "border-[3px] border-black bg-transparent font-brutal uppercase text-ev-black hover:bg-ev-neon-yellow",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center gap-2 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ev-neon-pink ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
