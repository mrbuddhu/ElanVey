import Link from "next/link";
import { HalftoneMoon } from "@/components/brand/SectionGraphics";
import { howWeWorkIntro } from "@/data/homeServices";
import { homepageProcessSteps } from "@/data/process";

/** Section 4 — How we work + process steps 01–02 */
export function SectionFour() {
  return (
    <section className="paper-bg px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="container-content space-y-6 md:space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {/* Pink intro card */}
        <div className="gradient-pink-card p-2 lg:min-h-[520px]">
          <div className="gradient-pink-card-inner relative flex h-full min-h-[420px] flex-col overflow-hidden p-6 md:p-8 lg:p-10">
            <div className="absolute right-4 top-8 opacity-90 md:right-8 md:top-10">
              <HalftoneMoon />
            </div>

            <div className="relative z-10 max-w-md">
              <h2 className="how-we-work-title">
                {howWeWorkIntro.title}
                <span className="ml-2 text-ev-neon-yellow" aria-hidden>
                  ✦
                </span>
              </h2>
              <p className="mt-3 font-serif text-2xl italic text-ev-neon-yellow md:text-3xl">
                {howWeWorkIntro.subtitle}
              </p>
            </div>

            <p className="relative z-10 mt-auto max-w-sm pt-10 text-sm font-bold leading-relaxed text-ev-neon-yellow md:max-w-md md:text-base lg:text-lg">
              {howWeWorkIntro.body}
            </p>
          </div>
        </div>

        {/* Black process steps card */}
        <div className="rounded-[2rem] border-[3px] border-black bg-ev-black p-6 shadow-brutal-lg md:p-8 lg:min-h-[520px] lg:p-10">
          <div className="space-y-10 md:space-y-12">
            {homepageProcessSteps.map((step) => (
              <article key={step.index}>
                <span className="process-step-number">{step.index}</span>
                <h3 className="process-step-title mt-3">{step.title}</h3>
                <p className="mt-4 max-w-md text-sm font-bold leading-relaxed text-ev-neon-yellow md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/services#process"
            className="mt-10 inline-block font-brutal text-sm uppercase tracking-wider text-white transition-colors hover:text-ev-neon-yellow md:mt-12 md:text-base"
          >
            Continue 03 to 05 →
          </Link>
        </div>
      </div>
    </section>
  );
}
