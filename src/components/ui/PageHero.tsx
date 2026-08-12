import { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  large?: boolean;
}

export function PageHero({
  label,
  title,
  subtitle,
  children,
  large = false,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden section-padding pb-16 md:pb-20">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-glow opacity-60"
        aria-hidden
      />
      <div className="container-content relative">
        {label && (
          <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-ev-muted">
            {label}
          </p>
        )}
        <h1
          className={`heading-display gradient-text text-balance ${
            large
              ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg text-ev-muted md:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </div>
  );
}
