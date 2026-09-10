import { ReactNode } from "react";

interface CTABlockProps {
  title: string;
  description?: string;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}

export function CTABlock({
  title,
  description,
  children,
  dark = true,
  className = "",
}: CTABlockProps) {
  return (
    <div className={`section-padding ${dark ? "section-dark" : ""} ${className}`} style={!dark ? { backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" } : {}}>
      <div className="container-content text-center">
        <h2
          className={`brutal-text mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
            dark ? "brutal-text-pink text-ev-neon-yellow" : "brutal-text-orange text-ev-neon-pink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mx-auto mt-6 max-w-xl font-bold md:text-lg ${
              dark ? "text-white/80" : "text-ev-black"
            }`}
          >
            {description}
          </p>
        )}
        {children && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
      {dark && <div className="stamp-edge-top mt-10 md:mt-14" aria-hidden />}
    </div>
  );
}
