import { homeServices } from "@/data/homeServices";
import { LanternStamp, ServiceIcon } from "@/components/brand/ServiceIcons";

export function VeyForwardSection() {
  return (
    <section className="paper-bg relative overflow-hidden py-12 md:py-16">
      <div className="container-content px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="brutal-text text-3xl text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl">
            The Vey Forward
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-bold leading-snug text-ev-black md:text-lg">
            Whether you create, build, perform, sell, or simply have a talent
            waiting to be discovered.
          </p>
        </div>

        <div className="checkerboard-divider my-10 md:my-14" aria-hidden />

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <ul className="space-y-4 md:space-y-5">
            {homeServices.map((service) => (
              <li
                key={service.id}
                className="flex items-center gap-4"
              >
                <ServiceIcon icon={service.icon} />
                <span className="font-brutal text-sm uppercase tracking-wide text-ev-black md:text-base">
                  {service.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center md:justify-end">
            <LanternStamp className="h-48 w-48 opacity-90 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          </div>
        </div>
      </div>
    </section>
  );
}
