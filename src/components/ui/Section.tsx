"use client";

import { ReactNode, useEffect, useRef } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  animate = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    el.classList.add("animate-on-scroll");
    observer.observe(el);

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      ref={ref}
      id={id}
      className={`section-padding ${className}`}
    >
      {children}
    </section>
  );
}
