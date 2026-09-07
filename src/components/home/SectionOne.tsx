import {
  AnimatedPacManRow,
  BlueStarIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { Button } from "@/components/ui/Button";

export function SectionOne() {
  return (
    <>
      {/* Original Hero Section — NEW HOOK: Architect Your Limelight. */}
      <section className="paper-bg relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-28">
        <div className="container-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Text - Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="hero-stagger-title font-brutal text-4xl font-black uppercase tracking-tight text-ev-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Architect Your
                <br />
                <span className="inline-block text-ev-neon-red">Limelight.</span>
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
                  src="/videos/ElanVeyHeroVideo.mp4"
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

      <div className="stamp-edge-bottom" aria-hidden />

      {/* DARK SECTION: Who is Elan Vey For? + One Vey between You & Being Seen. */}
      <section className="relative bg-ev-black overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24 lg:pb-36 lg:pt-28">
        {/* Graph Paper Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-content relative px-5 md:px-8 lg:px-12">
          {/* DESKTOP: Full headline block (Who Is label + One Vey headline + sub-paragraphs + Subscribe Now CTA) */}
          <div className="text-center mb-10 md:mb-14 lg:mb-20">
            <p className="brutal-label-dark stagger-child">Who is Elan Vey for</p>
            <h1 className="mt-4 font-brutal text-4xl font-black uppercase tracking-tight text-white/95 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ textShadow: '4px 4px 0 #FF0066' }}>
              One Vey between
              <br className="sm:hidden" />
              <span className="sm:ml-4 sm:mr-4">&nbsp;You &amp; Being Seen.&nbsp;</span>
            </h1>
            <p className="mt-8 mx-auto max-w-3xl font-brutal text-lg font-bold leading-tight text-ev-neon-yellow sm:text-xl md:text-2xl lg:text-3xl">
              A subscription that keeps your content moving.
            </p>
            <p className="mt-6 mx-auto max-w-3xl text-base font-bold leading-relaxed text-white/80 sm:text-lg md:text-xl lg:text-2xl">
              proven strategies, scripting, editing, practical tips and creative insights.
            </p>
            <p className="mt-4 mx-auto max-w-3xl text-base font-bold leading-relaxed text-white/70 sm:text-lg md:text-xl lg:text-2xl">
              All built around you and what you want to create.
            </p>
            <p className="mt-4 mx-auto max-w-3xl font-brutal text-lg font-black uppercase leading-snug text-white/95 sm:text-xl md:text-2xl lg:text-3xl">
              You bring the vision. We bring it to life.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/subscription" variant="primary" size="lg">
                Subscribe Now
              </Button>
            </div>
          </div>

          {/* Audience Pills — Alternating LEFT/RIGHT rows (mobile + desktop shared) */}
          <div className="mx-auto w-full max-w-4xl space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* ROW 1: CREATORS pill LEFT · ANIMATED PAC-MAN + dots RIGHT */}
            <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
              <div className="audience-pill-cream flex min-w-0 flex-[0_0_58%] sm:flex-[0_0_55%] items-center justify-start rounded-full px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-14 lg:py-7 xl:px-16 xl:py-8 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl truncate">CREATORS</span>
              </div>
              <div className="flex-[0_0_38%] sm:flex-[0_0_40%] max-w-[45%]">
                <AnimatedPacManRow />
              </div>
            </div>

            {/* ROW 2: BLUE STAR icon LEFT-ish · BUSINESSES pill RIGHT */}
            <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
              <div className="flex-[0_0_25%] sm:flex-[0_0_22%] flex justify-start pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                <BlueStarIcon />
              </div>
              <div className="audience-pill-pink flex min-w-0 flex-[0_0_70%] sm:flex-[0_0_73%] items-center justify-center rounded-full px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-14 lg:py-7 xl:px-16 xl:py-8 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl truncate">BUSINESSES</span>
              </div>
            </div>

            {/* ROW 3: DREAMERS pill LEFT · WHITE TRIANGLE icon RIGHT */}
            <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
              <div className="audience-pill-yellow flex min-w-0 flex-[0_0_62%] sm:flex-[0_0_60%] items-center justify-start rounded-full px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-14 lg:py-7 xl:px-16 xl:py-8 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl truncate">DREAMERS</span>
              </div>
              <div className="flex-[0_0_30%] sm:flex-[0_0_32%] flex justify-end pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                <WhiteTriangleIcon />
              </div>
            </div>

            {/* ROW 4: SPARKLE icon LEFT-ish · ARTISTS pill RIGHT */}
            <div className="flex w-full items-center justify-between gap-3 sm:gap-4">
              <div className="flex-[0_0_30%] sm:flex-[0_0_28%] flex justify-start pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                <SparkleIcon />
              </div>
              <div className="audience-pill-cyan flex min-w-0 flex-[0_0_65%] sm:flex-[0_0_66%] items-center justify-center rounded-full px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-14 lg:py-7 xl:px-16 xl:py-8 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl truncate">ARTISTS</span>
              </div>
            </div>
          </div>

          {/* AND EVERYONE IN BETWEEN — appears on BOTH mobile & desktop, ALWAYS AFTER the pills */}
          <div className="mt-12 text-center md:mt-16 lg:mt-20">
            <div className="relative inline-block">
              <img
                src="/images/Ringstars.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[135%] -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[160%] sm:w-[140%] md:h-[165%] md:w-[140%] xl:h-[170%] xl:w-[140%]"
              />
              <h2 className="relative z-10 font-brutal text-4xl font-bold uppercase tracking-tight text-white/95 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                AND EVERYONE
              </h2>
              <h2
                className="relative z-10 font-brutal text-5xl font-bold uppercase tracking-tight text-white/95 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                style={{ textShadow: '4px 4px 0 #FF0066' }}
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
      <section className="relative bg-white pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28">
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.5%22/%3E%3C/svg%3E")'
        }} />

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
          <div className="relative mt-12 md:mt-16 lg:mt-20 overflow-hidden" aria-hidden>
            <div className="relative mx-auto h-72 w-full overflow-visible md:h-80 lg:h-96">
              {/* BLACK TAPE — anchored to true center, positive angle, layered BEHIND */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[260vw] rotate-[12deg] border-[4px] border-ev-neon-yellow bg-ev-black shadow-[8px_8px_0_#000]">
                <div className="flex overflow-hidden py-5 md:py-8 lg:py-10">
                  <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap md:gap-14 gap-10 lg:gap-20">
                    <span className="font-brutal px-6 text-xl font-black uppercase tracking-widest text-ev-neon-yellow md:text-3xl lg:text-5xl" style={{ WebkitTextStroke: '1.5px #000', textShadow: '3px 3px 0 #FF0066' }}>
                      •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                    </span>
                    <span className="font-brutal px-6 text-xl font-black uppercase tracking-widest text-ev-neon-yellow md:text-3xl lg:text-5xl" style={{ WebkitTextStroke: '1.5px #000', textShadow: '3px 3px 0 #FF0066' }}>
                      •&nbsp;HOOKS&nbsp;•&nbsp;STRATEGY&nbsp;•&nbsp;BRANDING&nbsp;•&nbsp;VIRAL IDEAS&nbsp;•&nbsp;PRODUCTION&nbsp;•&nbsp;POSTING&nbsp;•&nbsp;COLLABS&nbsp;•&nbsp;TRENDS&nbsp;•&nbsp;TARGETING&nbsp;•&nbsp;CONVERSIONS&nbsp;•&nbsp;&nbsp;
                    </span>
                  </div>
                </div>
              </div>

              {/* YELLOW TAPE — anchored to true center, negative angle, layered ON TOP so they cross perfectly */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[260vw] -rotate-[12deg] border-[4px] border-black bg-ev-neon-yellow shadow-[8px_8px_0_#000]">
                <div className="flex overflow-hidden py-6 md:py-9 lg:py-12">
                  <div className="flex shrink-0 animate-marquee-reverse items-center whitespace-nowrap md:gap-14 gap-10 lg:gap-20">
                    <span className="font-brutal px-6 text-2xl font-black uppercase tracking-widest text-[#FF1744] md:text-4xl lg:text-6xl" style={{ WebkitTextStroke: '2px #FFE600', textShadow: '4px 4px 0 #000000, 2px 2px 0 #000000' }}>
                      •&nbsp;RESEARCH&nbsp;•&nbsp;IDEAS&nbsp;•&nbsp;SCRIPTING&nbsp;•&nbsp;EDITING&nbsp;•&nbsp;DESIGN&nbsp;•&nbsp;PUBLISH&nbsp;•&nbsp;ANALYSE&nbsp;•&nbsp;GROW&nbsp;•&nbsp;AUDIENCES&nbsp;•&nbsp;&nbsp;
                    </span>
                    <span className="font-brutal px-6 text-2xl font-black uppercase tracking-widest text-[#FF1744] md:text-4xl lg:text-6xl" style={{ WebkitTextStroke: '2px #FFE600', textShadow: '4px 4px 0 #000000, 2px 2px 0 #000000' }}>
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
