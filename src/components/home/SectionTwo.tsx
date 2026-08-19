import { OrbitalRings } from "@/components/brand/SectionGraphics";
import { teamBehindContent } from "@/data/homeServices";

/** Section 2 — And everyone in between + The team behind your content */
export function SectionTwo() {
  return (
    <>
      <section className="relative overflow-hidden bg-ev-black py-16 md:py-20 lg:py-28">
        <OrbitalRings />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <p className="outline-hero-text mx-auto max-w-4xl text-center text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            And everyone
            <br />
            in between.
          </p>
        </div>
      </section>

      <div className="stamp-edge-top" aria-hidden />

      <section className="paper-bg relative overflow-hidden pb-24 pt-12 md:pb-32 md:pt-16 lg:pb-40 lg:pt-20">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex justify-end lg:justify-start">
                <span className="team-badge">{teamBehindContent.badge}</span>
              </div>

              <h2 className="mt-8 font-brutal text-3xl uppercase leading-[0.95] text-ev-black sm:text-4xl md:text-5xl lg:text-6xl">
                {teamBehindContent.headline}
              </h2>

              <p className="mt-8 max-w-2xl text-base font-bold leading-relaxed text-ev-black md:text-lg lg:text-xl">
                {teamBehindContent.body}
              </p>
            </div>

            <div className="relative hidden min-h-[280px] lg:col-span-5 lg:block">
              <div className="caution-tape left-0 top-16 z-10 bg-ev-neon-yellow text-ev-neon-pink">
                {teamBehindContent.tapePrimary}
              </div>
              <div className="caution-tape-alt bottom-16 right-0 z-10 bg-ev-black text-ev-neon-yellow">
                {teamBehindContent.tapeSecondary}
              </div>
            </div>
          </div>

          {/* Mobile / tablet caution tape */}
          <div className="relative mt-16 h-32 lg:hidden">
            <div className="caution-tape left-0 top-4 z-10 max-w-[95vw] overflow-hidden bg-ev-neon-yellow text-xs text-ev-neon-pink sm:text-sm">
              {teamBehindContent.tapePrimary}
            </div>
            <div className="caution-tape-alt bottom-0 right-0 z-10 max-w-[90vw] overflow-hidden bg-ev-black text-xs text-ev-neon-yellow sm:text-sm">
              {teamBehindContent.tapeSecondary}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
