import { ReactNode } from "react";

interface CTABlockProps {
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "gradient";
}

export function CTABlock({
  title,
  description,
  children,
  variant = "default",
}: CTABlockProps) {
  return (
    <div
      className={`relative overflow-hidden section-padding ${
        variant === "gradient" ? "bg-ev-charcoal" : ""
      }`}
    >
      {variant === "gradient" && (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-brand opacity-[0.07]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-ev-crimson/20 blur-[120px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-ev-pink/15 blur-[120px]"
            aria-hidden
          />
        </>
      )}
      <div className="container-content relative text-center">
        <h2 className="heading-display mx-auto max-w-4xl text-3xl text-ev-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-6 max-w-xl text-ev-muted md:text-lg">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
