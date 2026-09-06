import Link from "next/link";
import { howWeWorkIntro } from "@/data/homeServices";
import { processSteps } from "@/data/process";

export function SectionFour() {
  return (
    <section className="paper-bg px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
      <div className="container-content space-y-8 md:space-y-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        {/* Pink intro card */}
        <div className="gradient-pink-card p-3">
          <div className="gradient-pink-card-inner relative flex h-full min-h-[500px] flex-col overflow-visible p-8 md:p-10 lg:p-12">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90">
              <img
                src="/images/Moon.png"
                alt="Moon graphic"
                className="h-[80rem] w-[80rem] md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem] object-contain drop-shadow-2xl"
              />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="max-w-md">
                <h2 className="how-we-work-title">
                  {howWeWorkIntro.title}
                  <span className="ml-3 text-ev-neon-yellow" aria-hidden>
                    ✦
                  </span>
                </h2>
                <p className="mt-3 font-serif text-3xl italic text-ev-neon-yellow md:text-4xl lg:text-5xl">
                  {howWeWorkIntro.subtitle}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto ml-1/2 pl-8">
              <p className="max-w-md text-xl font-bold leading-relaxed text-ev-neon-yellow md:max-w-lg md:text-2xl lg:text-3xl">
                {howWeWorkIntro.body}
              </p>
            </div>
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
