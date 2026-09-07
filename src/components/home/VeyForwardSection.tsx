import {
  homeServices,
  desktopRow1,
  desktopRow2,
  desktopRow3,
} from "@/data/homeServices";
import { LanternStamp, ServiceIcon } from "@/components/brand/ServiceIcons";

export function VeyForwardSection() {
  return (
    <section className="paper-bg relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* --- BACKGROUND / CORNER DECORATIONS --- */}
      {/* TOP-LEFT: Pac-Man + dots */}
      <img
        src="/images/PacMan.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-2 top-6 h-20 w-auto opacity-90 sm:left-4 sm:top-8 sm:h-28 md:left-6 md:top-10 md:h-32 lg:left-10 lg:top-12 lg:h-40 xl:h-48 z-0 drop-shadow-[3px_3px_0_rgba(0,0,0,0.4)]"
      />
      {/* TOP-RIGHT: Pink Saturn Moon with ring + stars */}
      <img
        src={"/images/Moon.png"}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-2 top-6 h-28 w-auto opacity-95 sm:right-4 sm:top-8 sm:h-36 md:right-6 md:top-10 md:h-44 lg:right-10 lg:top-12 lg:h-52 xl:h-64 z-0 drop-shadow-[4px_4px_0_rgba(0,0,0,0.35)]"
      />
      {/* BOTTOM-LEFT: Yellow/Black caution tape X */}
      <img
        src="/images/CautionStrips.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-6 h-24 w-auto opacity-95 sm:left-2 sm:bottom-8 sm:h-32 md:left-4 md:bottom-10 md:h-40 lg:left-6 lg:bottom-12 lg:h-48 xl:h-56 z-0 -rotate-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
      />

      <div className="container-content relative px-5 md:px-8 lg:px-12 xl:px-16 z-10">
        {/* HEADLINE + SUBTITLE (identical on mobile + web) */}
        <div className="mx-auto max-w-5xl text-center relative">
          <h2
            className="font-brutal leading-[0.9] font-black uppercase text-ev-neon-yellow tracking-tight"
            style={{
              fontSize: "clamp(3rem, 12vw, 9rem)",
              textShadow:
                "4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000000aa",
              WebkitTextStroke: "1.5px #000",
            }}
          >
            THE VEY
            <br />
            FORWARD
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-brutal leading-tight text-ev-black md:mt-8">
            <span className="text-2xl font-black md:text-3xl lg:text-4xl xl:text-5xl">
              Whether you create, build, perform, sell,
              <br className="hidden sm:block" />
              or simply have a talent waiting to be
              <br className="hidden sm:block" />
              discovered.
            </span>
          </p>
        </div>

        {/* CHECKERED FINISH TAPE DIVIDER — PNG racetrack strip */}
        <div className="mx-auto my-10 w-full overflow-hidden md:my-14 lg:my-16 relative" aria-hidden>
          <img
            src="/images/Racetrack.png"
            alt=""
            aria-hidden
            className="h-16 w-full object-cover object-left md:h-20 lg:h-24"
          />

          {/* MOBILE HANGING LANTERN: anchored to the divider's right-bottom corner, hangs DOWN into the right column */}
          <div className="pointer-events-none absolute right-0 top-full hidden lg:block" aria-hidden />
        </div>

        {/* MOBILE (<lg): Vertical list on LEFT + Red Lantern illustration HANGING on RIGHT (under checkerboard) */}
        <div className="lg:hidden relative">
          {/* Full-area grid that spans from the DIVIDER level down, so lantern HANGS from the divider's right side */}
          <div className="relative grid grid-cols-[1fr_auto] items-start gap-4 sm:gap-6">
            {/* LEFT: 7 service items stacked */}
            <ul className="space-y-4 sm:space-y-5 md:space-y-6">
              {homeServices.map((svc) => (
                <li
                  key={svc.id}
                  className="flex items-center gap-3 sm:gap-4 md:gap-5"
                >
                  <ServiceIcon icon={svc.icon} />
                  <span
                    className="font-brutal text-xl font-black uppercase tracking-wide text-ev-black sm:text-2xl md:text-3xl"
                    style={{
                      textShadow:
                        "2px 2px 0 #ffffff, 4px 4px 0 #00000022",
                    }}
                  >
                    {svc.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* RIGHT: Red Chinese Lantern — HANGING from the top of this grid (i.e. from the checkerboard above it) */}
            <div className="relative top-0 self-start">
              <LanternStamp
                className={
                  "h-44 w-44 sm:h-56 sm:w-56 md:h-72 md:w-72 opacity-95 drop-shadow-[5px_5px_0_rgba(0,0,0,0.55)] -translate-y-2 sm:-translate-y-4"
                }
              />
            </div>
          </div>
        </div>

        {/* DESKTOP (lg+): 3-row spread services with thin rule lines + BIG LANTERN floating right */}
        <div className="hidden w-full lg:block relative">
          {/* BIG LANTERN stamped to the right side, overlapping rows */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <LanternStamp
              className={
                "h-80 w-80 xl:h-96 xl:w-96 2xl:h-[30rem] 2xl:w-[30rem] opacity-95 drop-shadow-[8px_8px_0_rgba(0,0,0,0.55)]"
              }
            />
          </div>

          <div className="space-y-0 relative z-10 pr-56 xl:pr-72 2xl:pr-96">
            {/* ROW 1 — 3 items evenly spaced with border above and below */}
            <div className="flex items-center justify-between gap-8 border-y-[3px] border-black py-8 xl:py-10">
              {desktopRow1.map((svc) => (
                <div
                  key={svc.id}
                  className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6"
                >
                  <ServiceIcon icon={svc.icon} />
                  <span
                    className="font-brutal text-2xl font-black uppercase tracking-wide text-ev-black md:text-3xl lg:text-3xl xl:text-4xl"
                    style={{
                      textShadow:
                        "2px 2px 0 #ffffff, 4px 4px 0 #00000022",
                    }}
                  >
                    {svc.name}
                  </span>
                </div>
              ))}
            </div>

            {/* ROW 2 — 2 items with rule line below */}
            <div className="flex items-center justify-between gap-8 border-b-[3px] border-black py-8 xl:py-10">
              {desktopRow2.map((svc) => (
                <div
                  key={svc.id}
                  className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6"
                >
                  <ServiceIcon icon={svc.icon} />
                  <span
                    className="font-brutal text-2xl font-black uppercase tracking-wide text-ev-black md:text-3xl lg:text-3xl xl:text-4xl"
                    style={{
                      textShadow:
                        "2px 2px 0 #ffffff, 4px 4px 0 #00000022",
                    }}
                  >
                    {svc.name}
                  </span>
                </div>
              ))}
            </div>

            {/* ROW 3 — 2 items with rule line below */}
            <div className="flex items-start justify-around gap-8 border-b-[3px] border-black py-8 pl-16 pr-16 xl:py-10 xl:pl-32 xl:pr-32">
              {desktopRow3.map((svc) => (
                <div
                  key={svc.id}
                  className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6"
                >
                  <ServiceIcon icon={svc.icon} />
                  <span
                    className="font-brutal text-2xl font-black uppercase tracking-wide text-ev-black md:text-3xl lg:text-3xl xl:text-4xl"
                    style={{
                      textShadow:
                        "2px 2px 0 #ffffff, 4px 4px 0 #00000022",
                    }}
                  >
                    {svc.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
