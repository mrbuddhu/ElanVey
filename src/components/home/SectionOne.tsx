import {
  AnimatedPacManPillIcon,
  BlueStarIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { Button } from "@/components/ui/Button";

export function SectionOne() {
  return (
    <>
      {/* Original Hero Section — NEW HOOK: Architect Your Limelight. */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-28" style={{ backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
            {/* Hero Text - Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="hero-stagger-title font-brutal text-4xl font-black uppercase leading-[0.95] tracking-tight text-ev-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Architect Your
                <br />
                <span className="inline-block text-ev-neon-red mt-2">Limelight.</span>
              </h1>
              <p className="hero-stagger-subtitle mt-6 max-w-xl text-lg font-bold leading-relaxed text-ev-black/85 sm:text-xl md:text-2xl">
                The hook for people with a vision and something worth sharing.
              </p>
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4 md:gap-6">
                <Button href="/contact" variant="primary" size="lg" className="whitespace-nowrap">
                  Start The Vey
                </Button>
                <Button href="/subscription" variant="secondary" size="lg" className="whitespace-nowrap">
                  See Subscription
                </Button>
              </div>
            </div>

            {/* Hero Video/Image - Right */}
            <div className="order-1 lg:order-2">
              <div className="hero-stagger-children overflow-hidden border-[3px] border-black shadow-brutal-xl md:shadow-brutal-xl">
                <video
                  className="block h-auto w-full object-contain"
                  src="/videos/Website_homepage.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  poster="/images/sections/Section1.jpeg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Bottom 3 paragraphs under hero (web + mobile same text, responsive sizing) */}
          <div className="mt-16 md:mt-20 lg:mt-24 mx-auto max-w-4xl text-center space-y-6 md:space-y-8 lg:space-y-10">
            <p className="font-brutal text-xl font-black uppercase leading-tight text-ev-black sm:text-2xl md:text-3xl lg:text-4xl">
              We turn &ldquo;I have no idea what to post&rdquo; into &ldquo;watch this.&rdquo;
            </p>
            <p className="font-brutal text-base font-bold leading-relaxed text-ev-black/85 sm:text-lg md:text-xl lg:text-2xl">
              From ideas to creation, posting, branding, and growth we handle it all.
            </p>
            <p className="font-brutal text-base font-bold leading-relaxed text-ev-black/85 sm:text-lg md:text-xl lg:text-2xl">
              You bring the vision, we take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* DARK SECTION: Who is Elan Vey For? + One Vey between You & Being Seen. */}
      <section className="relative bg-ev-black overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24 lg:pb-36 lg:pt-28">
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          {/* Header text inside container */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-brutal text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR SPOTLIGHT WON&apos;T WAIT.
            </h1>
            <p className="mt-2 font-brutal text-xl font-bold text-white sm:text-3xl md:text-4xl">
              Who is Elan Vey for?
            </p>
          </div>
        </div>

        {/* 3-Row Grid Box Container — Full Width Touching Side Borders */}
        <div className="relative w-full border-y-2 border-white/30 my-4 sm:my-6 overflow-hidden py-2 sm:py-3 md:py-4">
          {/* 2D Grid Background — EXACTLY 3 HORIZONTAL ROWS OF BOXES vertically from border to border */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.3) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '56px calc(100% / 3)'
            }}
          />

          {/* Button Rows Container matching Mockup layout: 3 distinct rows across all screens */}
          <div className="max-w-6xl mx-auto relative z-10 px-2 sm:px-8 flex flex-col gap-3 sm:gap-6 md:gap-8">
            {/* ROW 1: CREATORS (Right) */}
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-1.5 sm:gap-4 pr-0 sm:pr-4 md:pr-8">
                <WhiteTriangleIcon />
                <div className="audience-pill-cream flex items-center justify-center rounded-full px-3 py-1.5 xs:px-4 xs:py-2 sm:px-7 sm:py-3 md:px-9 md:py-3.5 border-[2px] sm:border-[4px] border-black shadow-brutal flex-shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:shadow-brutal-lg cursor-pointer select-none">
                  <span className="font-brutal text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-black">CREATORS</span>
                </div>
              </div>
            </div>

            {/* ROW 2: DREAMERS (Left) */}
            <div className="flex items-center justify-start">
              <div className="flex items-center gap-1.5 sm:gap-4 pl-0 sm:pl-4 md:pl-8">
                <SparkleIcon />
                <div className="audience-pill-yellow flex items-center justify-center rounded-full px-3 py-1.5 xs:px-4 xs:py-2 sm:px-7 sm:py-3 md:px-9 md:py-3.5 border-[2px] sm:border-[4px] border-black shadow-brutal flex-shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:shadow-brutal-lg cursor-pointer select-none">
                  <span className="font-brutal text-xs xs:text-sm sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-black">DREAMERS</span>
                </div>
              </div>
            </div>

            {/* ROW 3: ARTISTS (Left) & BUSINESSES (Right) — Single Row on Mobile */}
            <div className="flex flex-row items-center justify-between gap-1 xs:gap-2 sm:gap-6">
              {/* Left: Blue Star + ARTISTS */}
              <div className="flex items-center gap-1 sm:gap-4 pl-0 sm:pl-12 md:pl-20">
                <BlueStarIcon />
                <div className="audience-pill-cyan flex items-center justify-center rounded-full px-2.5 py-1.5 xs:px-4 xs:py-2 sm:px-7 sm:py-3 md:px-9 md:py-3.5 border-[2px] sm:border-[4px] border-black shadow-brutal flex-shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:shadow-brutal-lg cursor-pointer select-none">
                  <span className="font-brutal text-[10px] xs:text-xs sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-black">ARTISTS</span>
                </div>
              </div>

              {/* Right: Pac-Man + BUSINESSES */}
              <div className="flex items-center gap-1 sm:gap-4 pr-0 sm:pr-2 md:pr-4">
                <AnimatedPacManPillIcon />
                <div className="audience-pill-pink flex items-center justify-center rounded-full px-2.5 py-1.5 xs:px-4 xs:py-2 sm:px-7 sm:py-3 md:px-9 md:py-3.5 border-[2px] sm:border-[4px] border-black shadow-brutal flex-shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-105 hover:shadow-brutal-lg cursor-pointer select-none">
                  <span className="font-brutal text-[10px] xs:text-xs sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wider text-black">BUSINESSES</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-content relative px-5 md:px-8 lg:px-12">

          {/* AND EVERYONE IN BETWEEN — 3D Revolving Star Orbit */}
          <div className="mt-14 text-center md:mt-20 lg:mt-24">
            <div className="relative inline-block px-6 py-4 [perspective:1000px] [transform-style:preserve-3d]">
              {/* 3D Ring Orbit Path Layer (BACK - z-0) */}
              <img
                src="/images/Ringstars.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240%] w-[180%] sm:h-[280%] sm:w-[220%] max-w-none object-contain z-0 opacity-75 drop-shadow-[0_0_16px_rgba(255,230,0,0.5)]"
                style={{ clipPath: "inset(0 0 48% 0)" }}
              />

              {/* REVOLVING 3D ORBITING STARS — physically revolving around text */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center [transform-style:preserve-3d] [transform:rotateX(20deg)_rotateZ(-5deg)]">
                {/* Star 1 - Yellow Star */}
                <div
                  className="absolute animate-orbit-star drop-shadow-[0_0_12px_#FFE600]"
                  style={{ animationDelay: "0s", ["--orbit-r" as string]: "clamp(120px, 35vw, 240px)" }}
                >
                  <img src="/images/Star.png" alt="" className="h-6 w-6 sm:h-10 sm:w-10 object-contain" aria-hidden />
                </div>
                {/* Star 2 - Cyan Diamond */}
                <div
                  className="absolute animate-orbit-star drop-shadow-[0_0_12px_#00E5FF]"
                  style={{ animationDelay: "-2s", ["--orbit-r" as string]: "clamp(120px, 35vw, 240px)" }}
                >
                  <img src="/images/Diamond.png" alt="" className="h-6 w-6 sm:h-10 sm:w-10 object-contain" aria-hidden />
                </div>
                {/* Star 3 - Yellow Star */}
                <div
                  className="absolute animate-orbit-star drop-shadow-[0_0_12px_#FFE600]"
                  style={{ animationDelay: "-4s", ["--orbit-r" as string]: "clamp(120px, 35vw, 240px)" }}
                >
                  <img src="/images/Star.png" alt="" className="h-6 w-6 sm:h-10 sm:w-10 object-contain" aria-hidden />
                </div>
                {/* Star 4 - Pink Diamond */}
                <div
                  className="absolute animate-orbit-star drop-shadow-[0_0_12px_#FF176B]"
                  style={{ animationDelay: "-6s", ["--orbit-r" as string]: "clamp(120px, 35vw, 240px)" }}
                >
                  <img src="/images/Diamond.png" alt="" className="h-6 w-6 sm:h-10 sm:w-10 object-contain" aria-hidden />
                </div>
              </div>

              {/* 3D Warped Text Layer (MIDDLE - z-10) */}
              <h2 className="relative z-10 font-brutal text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                AND EVERYONE
              </h2>
              <h2
                className="relative z-10 font-brutal text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-1"
                style={{
                  color: "#FF176B",
                  WebkitTextStroke: "2px #FFFFFF",
                  textShadow: "4px 4px 0 #000000, 8px 8px 0 rgba(0,0,0,0.6)"
                }}
              >
                IN BETWEEN.
              </h2>

              {/* 3D Ring Orbit Path Layer (FRONT - z-20) */}
              <img
                src="/images/Ringstars.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240%] w-[180%] sm:h-[280%] sm:w-[220%] max-w-none object-contain z-20 opacity-75 drop-shadow-[0_0_16px_rgba(255,230,0,0.5)]"
                style={{ clipPath: "inset(48% 0 0 0)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scalloped Paper Edge Transition */}
      <div className="relative h-8 bg-ev-black">
        <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 1200 32" preserveAspectRatio="none" aria-hidden>
          <path d="M0,32 L0,16 C20,8 40,8 60,16 C80,24 100,24 120,16 C140,8 160,8 180,16 C200,24 220,24 240,16 C260,8 280,8 300,16 C320,24 340,24 360,16 C380,8 400,8 420,16 C440,24 460,24 480,16 C500,8 520,8 540,16 C560,24 580,24 600,16 C620,8 640,8 660,16 C680,24 700,24 720,16 C740,8 760,8 780,16 C800,24 820,24 840,16 C860,8 880,8 900,16 C920,24 940,24 960,16 C980,8 1000,8 1020,16 C1040,24 1060,24 1080,16 C1100,8 1120,8 1140,16 C1160,24 1180,24 1200,16 L1200,32 Z" fill="white" />
        </svg>
      </div>

      {/* White Paper Section — Team Behind Your Content */}
      <section className="relative overflow-hidden pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28" style={{ backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-30" />

        <div className="container-content relative px-5 md:px-8 lg:px-12">
          {/* Heading with Pink Sticker */}
          <div className="relative mb-8 text-center md:mb-12 lg:mb-16">
            <div className="absolute -right-4 -top-2 rotate-12 md:-right-8 md:-top-4 lg:-right-12 lg:-top-6">
              <span className="inline-block rounded-full bg-ev-neon-pink px-4 py-2 text-xs font-bold uppercase tracking-wider text-ev-neon-yellow md:px-6 md:py-3 md:text-sm lg:px-8 lg:py-4 lg:text-base border-[2px] border-black shadow-brutal-sm">
                GET YOUR TEAM
              </span>
            </div>
            <h2 className="font-brutal text-4xl font-bold uppercase tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              THE TEAM BEHIND
              <br />
              YOUR CONTENT.
            </h2>
          </div>

          {/* Body Copy */}
          <div className="mx-auto max-w-3xl text-center md:max-w-4xl lg:max-w-5xl">
            <p className="font-brutal text-base font-bold leading-relaxed text-black md:text-lg lg:text-xl">
              We empower creators, entrepreneurs, and individuals of every age from ambitious teenagers to vibrant seniors. We research what works, build your strategy, find ideas, refine your scripts, edit &amp; design your content, help you publish, analyse the results, and use what we learn to grow the next one.
            </p>
          </div>
        </div>

        {/* Diagonal Crossing Tape Strips — full width edge-to-edge touching left & right screen borders */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full overflow-hidden" aria-hidden>
          <div className="relative mx-auto h-56 sm:h-72 md:h-80 lg:h-96 w-full flex items-center justify-center">
            {/* BLACK TAPE — anchored to true center, positive angle, layered BEHIND */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[280vw] rotate-[8deg] sm:rotate-[10deg] md:rotate-[12deg] border-[3px] sm:border-[4px] border-ev-neon-yellow bg-ev-black shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000]">
              <div className="flex overflow-hidden py-2.5 sm:py-4 md:py-5 lg:py-6">
                <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap gap-6 sm:gap-10 md:gap-14 lg:gap-20">
                  <span className="font-brutal px-4 sm:px-6 text-sm sm:text-lg md:text-2xl lg:text-4xl font-black uppercase tracking-widest text-ev-neon-yellow" style={{ WebkitTextStroke: '1px #000', textShadow: '2px 2px 0 #FF0066' }}>
                    •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                  </span>
                  <span className="font-brutal px-4 sm:px-6 text-sm sm:text-lg md:text-2xl lg:text-4xl font-black uppercase tracking-widest text-ev-neon-yellow" style={{ WebkitTextStroke: '1px #000', textShadow: '2px 2px 0 #FF0066' }}>
                    •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>

            {/* YELLOW TAPE — anchored to true center, negative angle, layered ON TOP so they cross perfectly */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280vw] -rotate-[8deg] sm:-rotate-[10deg] md:-rotate-[12deg] border-[3px] sm:border-[4px] border-black bg-ev-neon-yellow shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000]">
              <div className="flex overflow-hidden py-3 sm:py-4 md:py-6 lg:py-7">
                <div className="flex shrink-0 animate-marquee-reverse items-center whitespace-nowrap gap-6 sm:gap-10 md:gap-14 lg:gap-20">
                  <span className="font-brutal px-4 sm:px-6 text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-widest text-[#FF1744]" style={{ WebkitTextStroke: '1px #FFE600', textShadow: '2px 2px 0 #000000' }}>
                    •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                  </span>
                  <span className="font-brutal px-4 sm:px-6 text-base sm:text-xl md:text-3xl lg:text-5xl font-black uppercase tracking-widest text-[#FF1744]" style={{ WebkitTextStroke: '1px #FFE600', textShadow: '2px 2px 0 #000000' }}>
                    •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
