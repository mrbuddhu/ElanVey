import { homeServices } from "@/data/homeServices";
import { LanternStamp, ServiceIcon } from "@/components/brand/ServiceIcons";

/** Section 3 — The Vey Forward + services list */
export function SectionThree() {
  return (
    <section className="paper-bg relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container-content px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <h2 className="brutal-text text-3xl text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            The Vey Forward
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-bold leading-snug text-ev-black md:max-w-xl md:text-lg lg:max-w-2xl lg:text-xl">
            Whether you create, build, perform, sell, or simply have a talent
            waiting to be discovered.
          </p>
        </div>

        <div className="checkerboard-divider my-10 md:my-14 lg:my-16" aria-hidden />

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20 xl:gap-24">
          <ul className="space-y-4 md:space-y-5 lg:space-y-6">
            {homeServices.map((service) => (
              <li key={service.id} className="flex items-center gap-4 lg:gap-5">
                <ServiceIcon icon={service.icon} />
                <span className="font-brutal text-sm uppercase tracking-wide text-ev-black md:text-base lg:text-lg">
                  {service.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center md:justify-end">
            <LanternStamp className="h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
