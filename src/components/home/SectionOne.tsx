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
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button href="/contact" variant="primary" size="lg">
                  Start The Vey
                </Button>
                <Button href="/subscription" variant="secondary" size="lg">
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
        {/* Graph Paper Grid Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container-content relative px-5 md:px-8 lg:px-12">
          {/* DESKTOP + MOBILE Header matching Mockup 1 */}
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <h1 className="font-brutal text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              YOUR SPOTLIGHT WON&apos;T WAIT.
            </h1>
            <p className="mt-2 font-brutal text-xl font-bold text-white sm:text-3xl md:text-4xl">
              Who is Elan Vey for?
            </p>
          </div>

          {/* Audience Pills Grid matching Mockup 1 */}
          <div className="mx-auto w-full max-w-5xl relative flex flex-col gap-6 sm:gap-8 md:gap-12">
            {/* Top row: Triangle + CREATORS */}
            <div className="flex items-center justify-center sm:justify-end md:pr-12 gap-2.5 sm:gap-4">
              <WhiteTriangleIcon />
              <div className="audience-pill-cream flex items-center justify-center rounded-full px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-[3px] sm:border-[4px] border-black shadow-brutal flex-shrink-0">
                <span className="font-brutal text-lg font-black uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl">CREATORS</span>
              </div>
            </div>

            {/* Middle row: Yellow Star + DREAMERS */}
            <div className="flex items-center justify-center sm:justify-start md:pl-8 gap-2.5 sm:gap-4">
              <SparkleIcon />
              <div className="audience-pill-yellow flex items-center justify-center rounded-full px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-[3px] sm:border-[4px] border-black shadow-brutal flex-shrink-0">
                <span className="font-brutal text-lg font-black uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl">DREAMERS</span>
              </div>
            </div>

            {/* Bottom row: Blue Star + ARTISTS · Pac-Man + BUSINESSES */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 pt-2">
              {/* Blue Star + ARTISTS */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <BlueStarIcon />
                <div className="audience-pill-cyan flex items-center justify-center rounded-full px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-[3px] sm:border-[4px] border-black shadow-brutal flex-shrink-0">
                  <span className="font-brutal text-lg font-black uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl">ARTISTS</span>
                </div>
              </div>

              {/* Pac-Man + BUSINESSES */}
              <div className="flex items-center gap-2 sm:gap-3">
                <AnimatedPacManPillIcon />
                <div className="audience-pill-pink flex items-center justify-center rounded-full px-5 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-[3px] sm:border-[4px] border-black shadow-brutal flex-shrink-0">
                  <span className="font-brutal text-lg font-black uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl">BUSINESSES</span>
                </div>
              </div>
            </div>
          </div>

          {/* AND EVERYONE IN BETWEEN */}
          <div className="mt-14 text-center md:mt-20 lg:mt-24">
            <div className="relative inline-block">
              <img
                src="/images/Ringstars.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[160%] w-[140%] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <h2 className="relative z-10 font-brutal text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                AND EVERYONE
              </h2>
              <h2
                className="relative z-10 font-brutal text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-1"
                style={{
                  color: "#FF176B",
                  WebkitTextStroke: "2px #FFFFFF",
                  textShadow: "4px 4px 0 #000000"
                }}
              >
                IN BETWEEN.
              </h2>
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
      <section className="relative pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28" style={{ backgroundImage: "url('/images/Bg_paper.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
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

          {/* Diagonal Crossing Tape Strips — both anchored to SHARED center so they actually cross */}
          <div className="relative mt-12 md:mt-16 lg:mt-20 overflow-visible" aria-hidden>
            <div className="relative mx-auto h-72 w-full overflow-visible md:h-80 lg:h-96">
              {/* BLACK TAPE — anchored to true center, positive angle, layered BEHIND */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[260vw] rotate-[12deg] border-[4px] border-ev-neon-yellow bg-ev-black shadow-[8px_8px_0_#000]">
                <div className="flex overflow-hidden py-3 md:py-5 lg:py-6">
                  <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap md:gap-14 gap-10 lg:gap-20">
                    <span className="font-brutal px-6 text-lg font-black uppercase tracking-widest text-ev-neon-yellow md:text-2xl lg:text-4xl" style={{ WebkitTextStroke: '1px #000', textShadow: '3px 3px 0 #FF0066' }}>
                      •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                    </span>
                    <span className="font-brutal px-6 text-lg font-black uppercase tracking-widest text-ev-neon-yellow md:text-2xl lg:text-4xl" style={{ WebkitTextStroke: '1px #000', textShadow: '3px 3px 0 #FF0066' }}>
                      •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                    </span>
                  </div>
                </div>
              </div>

              {/* YELLOW TAPE — anchored to true center, negative angle, layered ON TOP so they cross perfectly */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[260vw] -rotate-[12deg] border-[4px] border-black bg-ev-neon-yellow shadow-[8px_8px_0_#000]">
                <div className="flex overflow-hidden py-4 md:py-6 lg:py-7">
                  <div className="flex shrink-0 animate-marquee-reverse items-center whitespace-nowrap md:gap-14 gap-10 lg:gap-20">
                    <span className="font-brutal px-6 text-xl font-black uppercase tracking-widest text-[#FF1744] md:text-3xl lg:text-5xl" style={{ WebkitTextStroke: '1.5px #FFE600', textShadow: '3px 3px 0 #000000, 1.5px 1.5px 0 #000000' }}>
                      •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                    </span>
                    <span className="font-brutal px-6 text-xl font-black uppercase tracking-widest text-[#FF1744] md:text-3xl lg:text-5xl" style={{ WebkitTextStroke: '1.5px #FFE600', textShadow: '3px 3px 0 #000000, 1.5px 1.5px 0 #000000' }}>
                      •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
