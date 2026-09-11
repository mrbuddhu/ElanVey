"use client";

import { processSteps } from "@/data/process";
import { useEffect, useRef, useState } from "react";

export function ProcessSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leftRef.current && entry.isIntersecting) {
            setLeftVisible(true);
            // Stagger the right card 400ms after the left card
            setTimeout(() => setRightVisible(true), 400);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-ev-black overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container-content px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">

        {/* 2-COLUMN LANDSCAPE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">

          {/* LEFT CARD — "How We Work" red card with moon */}
          <div
            ref={leftRef}
            className={`bg-[#FF1744] rounded-[20px] md:rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] transition-all duration-700 ease-out ${
              leftVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            {/* Top: Title */}
            <div className="relative z-10">
              <h2
                className="font-brutal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#FFE600] leading-[0.85]"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
              >
                HOW WE
                <br />
                WORK.
              </h2>
              <p className="font-sans text-lg sm:text-xl md:text-2xl italic text-[#FFE600] mt-2 tracking-tight">
                the procedure.
              </p>
            </div>

            {/* Center: Moon Image */}
            <div className="relative z-0 flex items-center justify-center my-6 md:my-8">
              <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-b from-white/90 via-white/60 to-white/30 shadow-[0_0_80px_rgba(255,200,255,0.4)] relative">
                {/* Moon surface detail */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/80 via-[#f0d0e0] to-[#e8c0d8]" />
                {/* Small star on moon */}
                <div className="absolute top-[30%] left-[40%] w-3 h-3 text-[#FFE600]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom: Description */}
            <p className="relative z-10 font-sans text-sm sm:text-base md:text-lg text-[#FFE600] leading-relaxed max-w-sm">
              You bring the vision. We learn what you&apos;re building, build the strategy around it, work with you on every piece of content, and use the results to keep improving and growing.
            </p>
          </div>

          {/* RIGHT CARD — 5 Process Steps on dark card */}
          <div
            ref={rightRef}
            className={`bg-[#151515] rounded-[20px] md:rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px] lg:min-h-[600px] transition-all duration-700 ease-out ${
              rightVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            {/* Steps List */}
            <div className="flex flex-col gap-6 md:gap-8">
              {processSteps.map((step) => (
                <div key={step.index} className="flex items-start gap-4 md:gap-6">
                  {/* Step Number */}
                  <span className="font-brutal text-4xl sm:text-5xl md:text-6xl font-black text-[#FF1744] leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                    {step.index}
                  </span>
                  {/* Step Content */}
                  <div>
                    <h3 className="font-brutal text-base sm:text-lg md:text-xl font-black uppercase text-[#FFE600] leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm md:text-base font-bold text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom: CTA Link */}
            <div className="mt-8 pt-4 border-t border-[#FFE600]/30">
              <a
                href="/about"
                className="font-brutal text-sm sm:text-base font-black uppercase tracking-wider text-[#FFE600] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                LEARN MORE ABOUT OUR PROCESS
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
