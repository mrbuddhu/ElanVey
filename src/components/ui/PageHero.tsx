import { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  large?: boolean;
  dark?: boolean;
  accent?: "yellow" | "pink" | "cyan" | "mixed";
}

export function PageHero({
  label,
  title,
  subtitle,
  children,
  large = false,
  dark = false,
  accent = "yellow",
}: PageHeroProps) {
  const accentClass =
    accent === "pink"
      ? "text-ev-neon-pink"
      : accent === "cyan"
        ? "text-ev-neon-cyan"
        : accent === "mixed"
          ? "text-ev-neon-yellow"
          : "text-ev-neon-yellow";

  return (
    <div
      className={`relative overflow-hidden section-padding pb-12 md:pb-16 ${
        dark ? "section-dark" : "paper-bg"
      }`}
    >
      <div className="container-content relative">
        {label && (
          <p
            className={`mb-6 font-brutal text-xs uppercase tracking-[0.3em] ${
              dark ? "text-ev-neon-yellow" : "text-ev-neon-pink"
            }`}
          >
            {label}
          </p>
        )}
        <h1
          className={`brutal-text text-balance ${accentClass} ${
            large
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          } ${dark ? "brutal-text-light" : ""}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-8 max-w-2xl text-base font-bold leading-snug md:text-lg ${
              dark ? "text-white/80" : "text-ev-black"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
      {!dark && <div className="stamp-edge-bottom mt-10 md:mt-14" aria-hidden />}
    </div>
  );
}
