import { OrbitalRings } from "@/components/brand/SectionGraphics";
import { teamBehindContent } from "@/data/homeServices";

export function SectionTwo() {
  return (
    <>
      <section className="relative overflow-hidden bg-ev-black py-20 md:py-28 lg:py-36">
        <OrbitalRings />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <p className="outline-hero-text mx-auto max-w-5xl text-center text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            And everyone
            <br />
            in between.
          </p>
        </div>
      </section>

      <div className="stamp-edge-top" aria-hidden />

      <section className="paper-bg relative overflow-hidden pb-32 pt-16 md:pb-44 md:pt-24 lg:pb-52 lg:pt-28">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="flex justify-end lg:justify-start">
                <span className="team-badge">{teamBehindContent.badge}</span>
              </div>

              <h2 className="mt-10 font-brutal text-4xl uppercase leading-[0.95] text-ev-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {teamBehindContent.headline}
              </h2>

              <p className="mt-10 max-w-2xl text-lg font-bold leading-relaxed text-ev-black md:text-xl lg:text-2xl">
                {teamBehindContent.body}
              </p>
            </div>

            <div className="relative hidden min-h-[320px] lg:col-span-5 lg:block">
              <div className="caution-tape left-0 top-20 z-10 bg-ev-neon-yellow text-ev-neon-pink">
                {teamBehindContent.tapePrimary}
              </div>
              <div className="caution-tape-alt bottom-20 right-0 z-10 bg-ev-black text-ev-neon-yellow">
                {teamBehindContent.tapeSecondary}
              </div>
            </div>
          </div>

          {/* Mobile / tablet caution tape */}
          <div className="relative mt-20 h-40 lg:hidden">
            <div className="caution-tape left-0 top-4 z-10 max-w-[95vw] overflow-hidden bg-ev-neon-yellow text-sm text-ev-neon-pink sm:text-base">
              {teamBehindContent.tapePrimary}
            </div>
            <div className="caution-tape-alt bottom-0 right-0 z-10 max-w-[90vw] overflow-hidden bg-ev-black text-sm text-ev-neon-yellow sm:text-base">
              {teamBehindContent.tapeSecondary}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
