import Link from "next/link";
import { HalftoneMoon } from "@/components/brand/SectionGraphics";
import { howWeWorkIntro } from "@/data/homeServices";
import { homepageProcessSteps } from "@/data/process";

export function SectionFour() {
  return (
    <section className="paper-bg px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
      <div className="container-content space-y-8 md:space-y-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        {/* Pink intro card */}
        <div className="gradient-pink-card p-3 lg:min-h-[600px]">
          <div className="gradient-pink-card-inner relative flex h-full min-h-[500px] flex-col overflow-hidden p-8 md:p-10 lg:p-12">
            <div className="absolute right-6 top-10 opacity-90 md:right-12 md:top-12">
              <HalftoneMoon />
            </div>

            <div className="relative z-10 max-w-md">
              <h2 className="how-we-work-title">
                {howWeWorkIntro.title}
                <span className="ml-3 text-ev-neon-yellow" aria-hidden>
                  ✦
                </span>
              </h2>
              <p className="mt-5 font-serif text-3xl italic text-ev-neon-yellow md:text-4xl lg:text-5xl">
                {howWeWorkIntro.subtitle}
              </p>
            </div>

            <p className="relative z-10 mt-auto max-w-md pt-12 text-base font-bold leading-relaxed text-ev-neon-yellow md:max-w-lg md:text-lg lg:text-xl">
              {howWeWorkIntro.body}
            </p>
          </div>
        </div>

        {/* Black process steps card */}
        <div className="rounded-[2.5rem] border-[3px] border-black bg-ev-black p-8 shadow-brutal-xl md:p-10 lg:min-h-[600px] lg:p-12">
          <div className="space-y-12 md:space-y-16">
            {homepageProcessSteps.map((step) => (
              <article key={step.index}>
                <span className="process-step-number">{step.index}</span>
                <h3 className="process-step-title mt-4">{step.title}</h3>
                <p className="mt-5 max-w-md text-base font-bold leading-relaxed text-ev-neon-yellow md:text-lg lg:text-xl">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/services#process"
            className="mt-14 inline-block font-brutal text-base uppercase tracking-wider text-white transition-colors hover:text-ev-neon-yellow md:mt-16 md:text-lg"
          >
            Continue 03 to 05 →
          </Link>
        </div>
      </div>
    </section>
  );
}
