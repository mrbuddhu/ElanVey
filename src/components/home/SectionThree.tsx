import { homeServices } from "@/data/homeServices";
import { ServiceIcon, LanternStamp } from "@/components/brand/ServiceIcons";

export function SectionThree() {
  return (
    <section className="paper-bg relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container-content px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center lg:max-w-6xl">
          <h2 className="brutal-text brutal-text-lg text-4xl text-ev-neon-yellow sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            THE VEY
            <br />
            FORWARD
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-bold leading-snug text-ev-black md:max-w-4xl md:text-xl lg:max-w-5xl lg:text-2xl xl:text-3xl">
            Whether you create, build, perform, sell, or simply have a talent
            waiting to be discovered.
          </p>
        </div>

        {/* Racetrack / Checkerboard PNG divider */}
        <div className="relative my-10 w-full overflow-hidden md:my-14 lg:my-16" aria-hidden>
          <img
            src="/images/Racetrack.png"
            alt=""
            aria-hidden
            className="h-16 w-full object-cover object-left md:h-20 lg:h-24"
          />
        </div>

        <div className="grid items-start gap-12 md:gap-16 lg:grid-cols-[1fr_auto] lg:gap-20 xl:gap-24">
          {/* 11 bullets w/ names + descriptions  (MOBILE: single stacked) */}
          <ul className="space-y-6 md:space-y-8 lg:space-y-10">
            {homeServices.map((service) => (
              <li
                key={service.id}
                className="flex items-start gap-4 sm:gap-6 lg:gap-8"
              >
                <div className="shrink-0 translate-y-1">
                  <ServiceIcon icon={service.icon} />
                </div>
                <div className="flex-1">
                  <h3 className="font-brutal text-xl font-black uppercase tracking-wide text-ev-black sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                    {service.name}
                  </h3>
                  <p
                    className="mt-2 text-base font-bold leading-relaxed text-ev-black/75 sm:text-lg md:text-xl lg:text-xl xl:text-2xl"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* Right side: Lantern stamped to right edge. Mobile: below list, centered. */}
          <div className="flex justify-center md:justify-end lg:self-start lg:sticky lg:top-24">
            <LanternStamp
              className={
                "h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[30rem] xl:w-[30rem] opacity-95 drop-shadow-[8px_8px_0_rgba(0,0,0,0.55)]"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
