import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  glow?: boolean;
}

export function GlassPanel({
  children,
  className = "",
  strong = false,
  glow = false,
}: GlassPanelProps) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="pointer-events-none absolute -inset-px rounded-none bg-gradient-brand opacity-20 blur-xl"
          aria-hidden
        />
      )}
      <div className={`relative ${strong ? "glass-strong" : "glass"} p-6 md:p-8`}>
        {children}
      </div>
    </div>
  );
}
