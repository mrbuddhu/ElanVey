import {
  BlueStarIcon,
  PacManIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { audienceCategories, type AudienceItem } from "@/data/homeServices";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

function AudienceCell({ item }: { item: AudienceItem }) {
  if (item.type === "pill") {
    const colorClass =
      item.color === "cream"
        ? "audience-pill-cream"
        : item.color === "pink"
          ? "audience-pill-pink"
          : item.color === "yellow"
            ? "audience-pill-yellow"
            : "audience-pill-cyan";

    return (
      <div
        className={`${colorClass} flex min-w-[200px] items-center justify-center px-8 py-4 sm:min-w-[280px] sm:px-12 sm:py-5 md:min-w-[320px] md:px-16 md:py-6 lg:min-w-[400px] lg:px-20 lg:py-8 border-[4px] border-black shadow-brutal-xl hover-lift transition-all`}
      >
        <span className="font-brutal text-base uppercase text-ev-black sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
          {item.label}
        </span>
      </div>
    );
  }

  const icons = {
    pacman: <PacManIcon />,
    star: <BlueStarIcon />,
    triangle: <WhiteTriangleIcon />,
    sparkle: <SparkleIcon />,
  };

  return (
    <div className="flex items-center justify-center px-3 sm:px-4">
      {icons[item.icon]}
    </div>
  );
}

export function SectionOne() {
  return (
    <>
      {/* Original Hero Section */}
      <section className="paper-bg relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-32">
        <div className="container-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Text - Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="hero-stagger-title font-brutal text-4xl font-bold uppercase tracking-tight text-ev-black sm:text-5xl md:text-6xl lg:text-7xl">
                Your Brand, But Make It Slap ✨
              </h1>
              <p className="hero-stagger-subtitle mt-6 max-w-xl text-lg font-bold leading-relaxed text-ev-black/80 sm:text-xl md:text-2xl">
                We turn your &quot;meh&quot; ideas into &quot;no way&quot; moments. Bold designs, viral content, and digital growth that actually hits different.
              </p>
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button href="/contact" variant="primary" size="lg">
                  Let&apos;s Create Magic
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  See The Vibe
                </Button>
              </div>
            </div>

            {/* Hero Video - Right */}
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
        </div>
      </section>

      <div className="stamp-edge-bottom" aria-hidden />

      {/* Dark Section with Graph Paper Grid */}
      <section className="relative bg-ev-black overflow-hidden pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28">
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
          {/* Mobile: AND EVERYONE IN BETWEEN as dominant headline */}
          <div className="mb-8 text-center md:mb-12 lg:mb-16 lg:hidden">
            <div className="relative inline-block">
              {/* Orbital Swoosh */}
              <svg className="absolute -left-12 -top-8 h-32 w-32" viewBox="0 0 200 200" aria-hidden>
                <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" transform="rotate(-15 100 100)" />
              </svg>
              
              <h1 className="font-brutal text-4xl font-bold uppercase tracking-tight text-white/95 sm:text-5xl md:text-6xl">
                AND EVERYONE
              </h1>
              <h1 className="font-brutal text-5xl font-bold uppercase tracking-tight text-white/95 sm:text-6xl md:text-7xl" style={{ textShadow: '4px 4px 0 #FF0066' }}>
                IN BETWEEN.
              </h1>
              
              {/* Sparkle decorations */}
              <div className="absolute -right-6 top-0 text-white/50">✦</div>
              <div className="absolute -left-6 bottom-0 text-white/50">✦</div>
            </div>
          </div>

          {/* Desktop: Main Headline */}
          <div className="hidden mb-8 text-center md:mb-12 lg:mb-16 lg:block">
            <h1 className="font-brutal text-5xl font-bold uppercase tracking-tight text-white/95 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              YOUR SPOTLIGHT WON&apos;T WAIT.
            </h1>
            <h2 className="mt-4 font-brutal text-xl font-bold uppercase tracking-wide text-white/80 sm:text-2xl md:text-3xl lg:text-4xl">
              Who is Elan Vey for?
            </h2>
          </div>

          {/* Audience Pills Grid - 4 pills stacked vertically */}
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
            {/* DREAMERS */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <SparkleIcon />
              <div className="audience-pill-yellow flex items-center justify-center rounded-full px-10 py-5 md:px-14 md:py-6 lg:px-16 lg:py-7 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black md:text-2xl lg:text-3xl">DREAMERS</span>
              </div>
            </div>

            {/* CREATORS */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <WhiteTriangleIcon />
              <div className="audience-pill-cream flex items-center justify-center rounded-full px-10 py-5 md:px-14 md:py-6 lg:px-16 lg:py-7 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black md:text-2xl lg:text-3xl">CREATORS</span>
              </div>
            </div>

            {/* ARTISTS */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <BlueStarIcon />
              <div className="audience-pill-cyan flex items-center justify-center rounded-full px-10 py-5 md:px-14 md:py-6 lg:px-16 lg:py-7 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black md:text-2xl lg:text-3xl">ARTISTS</span>
              </div>
            </div>

            {/* BUSINESSES */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <PacManIcon />
              <div className="audience-pill-pink flex items-center justify-center rounded-full px-10 py-5 md:px-14 md:py-6 lg:px-16 lg:py-7 border-[4px] border-black shadow-brutal-xl hover:-translate-y-1 transition-transform">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-black md:text-2xl lg:text-3xl">BUSINESSES</span>
              </div>
            </div>
          </div>

          {/* Desktop: AND EVERYONE IN BETWEEN Statement */}
          <div className="relative mt-12 text-center md:mt-16 lg:mt-20 hidden lg:block">
            <div className="relative inline-block">
              {/* Orbital Swoosh */}
              <svg className="absolute -left-20 -top-10 h-40 w-40 md:-left-32 md:-top-16 md:h-56 md:w-56 lg:-left-40 lg:-top-20 lg:h-72 lg:w-72" viewBox="0 0 200 200" aria-hidden>
                <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" transform="rotate(-15 100 100)" />
              </svg>
              
              <h2 className="font-brutal text-4xl font-bold uppercase tracking-tight text-white/95 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                AND EVERYONE
              </h2>
              <h2 className="font-brutal text-5xl font-bold uppercase tracking-tight text-white/95 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" style={{ textShadow: '4px 4px 0 #FF0066' }}>
                IN BETWEEN.
              </h2>
              
              {/* Sparkle decorations */}
              <div className="absolute -right-8 top-0 text-white/50 md:-right-12 lg:-right-16">✦</div>
              <div className="absolute -left-8 bottom-0 text-white/50 md:-left-12 lg:-left-16">✦</div>
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

      {/* White Paper Section */}
      <section className="relative bg-white overflow-hidden pb-20 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28">
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

          {/* Diagonal Crossing Tape Strips */}
          <div className="relative mt-12 overflow-visible md:mt-16 lg:mt-20" style={{ height: '300px' }}>
            {/* Yellow Strip - Centered X extending beyond both sides with animated text */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[150vw] -rotate-8 bg-ev-neon-yellow border-[3px] border-black shadow-brutal-lg">
              <div className="flex items-center gap-8 py-6 animate-marquee whitespace-nowrap md:gap-12 md:py-8 lg:gap-16 lg:py-10">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-ev-neon-pink md:text-2xl lg:text-3xl" style={{ textShadow: '2px 2px 0 #000' }}>
                  RESEARCH IDEAS • SCRIPTING • RESEARCH IDEAS • SCRIPTING • RESEARCH IDEAS • SCRIPTING • RESEARCH IDEAS • SCRIPTING • RESEARCH IDEAS • SCRIPTING
                </span>
              </div>
            </div>

            {/* Black Strip - Centered X extending beyond both sides crossing yellow strip with animated text */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-[150vw] rotate-8 bg-ev-black border-[3px] border-ev-neon-yellow shadow-brutal-lg">
              <div className="flex items-center gap-8 py-6 animate-marquee-reverse whitespace-nowrap md:gap-12 md:py-8 lg:gap-16 lg:py-10">
                <span className="font-brutal text-xl font-bold uppercase tracking-wider text-ev-neon-yellow md:text-2xl lg:text-3xl">
                  HOOKS • STRATEGY • HOOKS • STRATEGY • HOOKS • STRATEGY • HOOKS • STRATEGY • HOOKS • STRATEGY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
