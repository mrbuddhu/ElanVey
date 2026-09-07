import { homeServices } from "@/data/homeServices";
import { ServiceIcon, LanternStamp } from "@/components/brand/ServiceIcons";

export function SectionThree() {
  return (
    <>
      {/* SVG SCALLOPED / PUNCH-CARD strip at the very top — black background, semicircle notches punched DOWN. 100% visible on mobile because it's SVG, no CSS mask tricks. */}
      <div className="relative w-full overflow-hidden bg-ev-black">
        <svg
          className="block h-12 w-full md:h-16 lg:h-20"
          viewBox="0 0 1200 64"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="
              M0 0 L1200 0
              L1200 32
              L1176 32 C1176 45.2 1165.2 56 1152 56 C1138.8 56 1128 45.2 1128 32
              L1104 32 C1104 45.2 1093.2 56 1080 56 C1066.8 56 1056 45.2 1056 32
              L1032 32 C1032 45.2 1021.2 56 1008 56 C994.8 56 984 45.2 984 32
              L960 32 C960 45.2 949.2 56 936 56 C922.8 56 912 45.2 912 32
              L888 32 C888 45.2 877.2 56 864 56 C850.8 56 840 45.2 840 32
              L816 32 C816 45.2 805.2 56 792 56 C778.8 56 768 45.2 768 32
              L744 32 C744 45.2 733.2 56 720 56 C706.8 56 696 45.2 696 32
              L672 32 C672 45.2 661.2 56 648 56 C634.8 56 624 45.2 624 32
              L600 32 C600 45.2 589.2 56 576 56 C562.8 56 552 45.2 552 32
              L528 32 C528 45.2 517.2 56 504 56 C490.8 56 480 45.2 480 32
              L456 32 C456 45.2 445.2 56 432 56 C418.8 56 408 45.2 408 32
              L384 32 C384 45.2 373.2 56 360 56 C346.8 56 336 45.2 336 32
              L312 32 C312 45.2 301.2 56 288 56 C274.8 56 264 45.2 264 32
              L240 32 C240 45.2 229.2 56 216 56 C202.8 56 192 45.2 192 32
              L168 32 C168 45.2 157.2 56 144 56 C130.8 56 120 45.2 120 32
              L96 32 C96 45.2 85.2 56 72 56 C58.8 56 48 45.2 48 32
              L24 32 C24 45.2 13.2 56 0 56 L0 32 Z
            "
            fill="#000000"
          />
        </svg>
      </div>

      <section className="paper-bg relative overflow-hidden pb-16 md:pb-24 lg:pb-32">
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
    </>
  );
}
