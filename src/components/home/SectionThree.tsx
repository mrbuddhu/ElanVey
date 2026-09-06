import { homeServices } from "@/data/homeServices";
import { LanternStamp, ServiceIcon } from "@/components/brand/ServiceIcons";

export function SectionThree() {
  return (
    <section className="paper-bg relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container-content px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center lg:max-w-6xl">
          <h2 className="brutal-text brutal-text-lg text-4xl text-ev-neon-yellow sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            The Vey Forward
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg font-bold leading-snug text-ev-black md:max-w-xl md:text-xl lg:max-w-3xl lg:text-2xl">
            Whether you create, build, perform, sell, or simply have a talent
            waiting to be discovered.
          </p>
        </div>

        {/* Full-width chessboard strip - square squares, same width as diagonal strips */}
        <div className="relative my-8 overflow-visible md:my-12 lg:my-16">
          <div className="absolute left-1/2 -translate-x-1/2 w-[150vw] grid grid-cols-32 gap-0">
            {Array.from({ length: 128 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square ${
                  (Math.floor(i / 32) + i) % 2 === 0 ? 'bg-ev-black' : 'bg-ev-neon-cream'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="checkerboard-divider my-12 md:my-16 lg:my-20" aria-hidden />

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 xl:gap-28">
          <ul className="space-y-6 md:space-y-8 lg:space-y-10">
            {homeServices.map((service) => (
              <li key={service.id} className="flex items-center gap-6 lg:gap-8">
                <ServiceIcon icon={service.icon} />
                <span className="font-brutal text-xl font-bold uppercase tracking-wide text-ev-black md:text-2xl lg:text-3xl">
                  {service.name}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center md:justify-end">
            <img
              src="/images/Lantern.png"
              alt="Lantern"
              className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
