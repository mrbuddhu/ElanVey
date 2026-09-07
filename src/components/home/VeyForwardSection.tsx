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
      <div className="container-content px-5 md:px-8 lg:px-12 xl:px-16">
        {/* HEADLINE + SUBTITLE (identical on mobile + web) */}
        <div className="mx-auto max-w-5xl text-center">
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
        <div className="mx-auto my-10 w-full overflow-hidden md:my-14 lg:my-16" aria-hidden>
          <img
            src="/images/Racetrack.png"
            alt=""
            aria-hidden
            className="h-16 w-full object-cover object-left md:h-20 lg:h-24"
          />
        </div>

        {/* MOBILE: Vertical list on LEFT + Red Lantern illustration on RIGHT */}
        <div className="lg:hidden">
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

            {/* RIGHT: Red Chinese Lantern illustration in a circle */}
            <div className="relative top-4 self-start sm:top-6 md:top-8">
              <LanternStamp className="h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 opacity-95 drop-shadow-[4px_4px_0_rgba(0,0,0,0.55)]" />
            </div>
          </div>
        </div>

        {/* DESKTOP (lg+): 3-row spread services with thin rule lines */}
        <div className="hidden w-full lg:block">
          <div className="space-y-0">
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

            {/* ROW 3 — 2 items with rule line below (align slightly more center, matching image) */}
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
