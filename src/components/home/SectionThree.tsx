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

      <section className="relative overflow-hidden pb-16 md:pb-24 lg:pb-32" style={{ backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container-content px-5 md:px-8 lg:px-12 pt-10">

          {/* Headline matching Mockup 2 */}
          <div className="mx-auto max-w-5xl text-center lg:max-w-6xl">
            <h2
              className="font-brutal text-5xl font-black uppercase tracking-tight text-ev-neon-yellow sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              style={{
                textShadow: "4px 4px 0 #000, 8px 8px 0 #000, 12px 12px 0 #000",
                WebkitTextStroke: "2px #000"
              }}
            >
              THE VEY
              <br />
              FORWARD
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-brutal text-lg font-bold leading-snug text-black md:text-xl lg:text-2xl">
              Whether you create, build, perform, sell,
              <br className="hidden sm:block" />
              or simply have a talent waiting to be discovered.
            </p>
          </div>
        </div>

        {/* Full-Width Vector-Sharp Racetrack Checkerboard Ribbon — 100% crisp at any resolution */}
        <div className="relative mt-4 mb-2 w-full overflow-hidden sm:mt-5 sm:mb-3 md:mt-6 md:mb-4" aria-hidden>
          <div
            className="w-full h-8 sm:h-11 md:h-14 border-y-2 border-black"
            style={{
              background: `repeating-conic-gradient(#000000 0% 25%, #FFFFFF 0% 50%) 0 0 / 28px 28px`,
            }}
          />
        </div>

        <div className="container-content px-5 md:px-8 lg:px-12">
          {/* Horizontal Capabilities Rows matching Mockup 2 & Mobile Requirement D */}
          <div className="relative mx-auto w-full max-w-6xl border-t-2 border-black/80 mt-1 mb-6 sm:mt-2 sm:mb-8 md:mt-3 md:mb-12 px-1 sm:px-2">
            {/* Red Lantern Graphic on the right side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden sm:block">
              <LanternStamp className="h-16 w-16 md:h-24 md:w-24 object-contain" />
            </div>

            {/* ROW 1: PERSONAL BRANDING | COMPETITOR ANALYSIS | AUDIENCE BUILDING */}
            <div className="flex items-center justify-between sm:justify-around gap-2 sm:gap-3 md:gap-6 py-3 sm:py-4 md:py-6 border-b-2 border-black/80 text-center w-full flex-nowrap whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-none">
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <img src="/images/Star.png" alt="" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain shrink-0" aria-hidden />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  PERSONAL BRANDING
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <img src="/images/Sun.png" alt="" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain shrink-0" aria-hidden />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  COMPETITOR ANALYSIS
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <img src="/images/Triangle.png" alt="" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain shrink-0" aria-hidden />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  AUDIENCE BUILDING
                </span>
              </div>
            </div>

            {/* ROW 2: CONTENT STRATEGY | GROWTH OPTIMISATION */}
            <div className="flex items-center justify-center gap-4 xs:gap-6 sm:gap-12 md:gap-16 lg:gap-20 py-3 sm:py-4 md:py-6 border-b-2 border-black/80 text-center w-full flex-nowrap whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-none">
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <img src="/images/Frost.png" alt="" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain shrink-0" aria-hidden />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  CONTENT STRATEGY
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <img src="/images/Diamond.png" alt="" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 object-contain shrink-0" aria-hidden />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  GROWTH OPTIMISATION
                </span>
              </div>
            </div>

            {/* ROW 3: CONTENT IDEATION | PAID GROWTH */}
            <div className="flex items-center justify-center gap-4 xs:gap-6 sm:gap-12 md:gap-16 lg:gap-20 py-3 sm:py-4 md:py-6 border-b-2 border-black/80 text-center w-full flex-nowrap whitespace-nowrap overflow-x-auto sm:overflow-visible scrollbar-none">
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <ServiceIcon icon="rocket" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11" />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  CONTENT IDEATION
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
                <ServiceIcon icon="flame" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11" />
                <span className="font-brutal text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                  PAID GROWTH
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
