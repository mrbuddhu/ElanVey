import Link from "next/link";
import { howWeWorkIntro } from "@/data/homeServices";
import { processSteps } from "@/data/process";

export function SectionFour() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container-content space-y-8 md:space-y-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        {/* Pink intro card */}
        <div className="relative flex h-full min-h-[400px] md:min-h-[500px] flex-col overflow-hidden rounded-[3rem] bg-[#FF176B] shadow-[12px_12px_0_0_#FFE600] border-none p-8 md:p-10 lg:p-12">
          
          {/* Centered Moon Graphic */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="/images/Moon.png"
              alt="Moon graphic"
              className="h-[120%] max-w-[120%] object-contain opacity-80"
              style={{ mixBlendMode: 'luminosity', filter: 'contrast(1.2) brightness(1.1)' }}
            />
            <span className="absolute text-ev-neon-yellow text-4xl md:text-5xl" style={{ top: '38%', left: '42%' }}>
              ✦
            </span>
          </div>

          {/* Top Left: Title & Subtitle */}
          <div className="relative z-10 flex-1 flex flex-col justify-start">
            <h2 className="flex flex-col font-brutal text-[4rem] font-black uppercase leading-[0.85] text-ev-neon-yellow md:text-[5.5rem] lg:text-[6.5rem]">
              <span style={{ textShadow: '4px 4px 0 #CC0044' }}>HOW WE</span>
              <span style={{ textShadow: '4px 4px 0 #CC0044' }}>WORK.</span>
            </h2>
            <p className="mt-2 font-serif text-[2rem] italic leading-none text-ev-neon-yellow md:text-[2.75rem] lg:text-[3.25rem]" style={{ fontFamily: 'Georgia, serif' }}>
              The procedure.
            </p>
          </div>

          {/* Bottom Right: Body Copy */}
          <div className="relative z-10 mt-16 flex justify-end">
            <p className="w-full max-w-[65%] text-[0.95rem] font-bold leading-snug text-ev-neon-yellow sm:text-base md:text-xl lg:text-[1.35rem] lg:max-w-[58%]">
              You bring the vision. We learn what you&apos;re building, build the strategy around it, work with you on every piece of content, and use the results to keep improving and growing.
            </p>
          </div>
        </div>

        {/* Black process steps card */}
        <div className="rounded-[2.5rem] border-[3px] border-black bg-ev-black p-6 shadow-brutal-xl md:p-8 lg:p-10">
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            {processSteps.map((step) => (
              <article key={step.index} className="flex items-start gap-4 md:gap-6 lg:gap-8">
                <span className="process-step-number shrink-0 text-5xl md:text-6xl lg:text-7xl">{step.index}</span>
                <div className="flex-1">
                  <h3 className="process-step-title mt-0 md:mt-0 lg:mt-0 text-lg md:text-xl lg:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-ev-neon-yellow md:text-base lg:text-lg">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/services#process"
            className="mt-6 inline-block font-brutal text-sm uppercase tracking-wider text-white transition-colors hover:text-ev-neon-yellow md:mt-8 md:text-base"
          >
            Learn more about our process →
          </Link>
        </div>
      </div>
    </section>
  );
}
