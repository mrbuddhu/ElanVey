import {
  BlueStarIcon,
  PacManIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import {
  audienceCategories,
  type AudienceItem,
} from "@/data/homeServices";
import { Button } from "@/components/ui/Button";

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
      <div className={`${colorClass} flex w-full max-w-[190px] items-center justify-center px-3 py-3 sm:max-w-[300px] sm:px-8 sm:py-4 lg:max-w-[400px] lg:px-12 lg:py-5`}>
        <span className="font-brutal text-sm font-bold uppercase tracking-wide text-ev-black sm:text-lg lg:text-2xl">
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

  return <div className="flex items-center justify-center px-2 sm:px-5">{icons[item.icon]}</div>;
}

export function SectionOne() {
  return (
    <>
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
                  className="block h-auto w-full object-cover"
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

      <section className="section-dark relative overflow-hidden px-4 pb-12 pt-6 max-sm:bg-transparent sm:px-8 sm:pb-20 sm:pt-8 lg:px-12 lg:pb-28" aria-labelledby="audience-title">
        <div className="mx-auto max-w-7xl text-center">
          <h2 id="audience-title" className="max-sm:hidden mt-10 font-brutal text-3xl font-bold uppercase tracking-tight text-ev-white sm:mt-14 sm:text-5xl lg:mt-16 lg:text-7xl">
            Your spotlight won&apos;t wait.
          </h2>
          <p className="max-sm:hidden mt-2 font-brutal text-xl font-bold text-ev-white sm:text-3xl lg:text-4xl">Who is Elan Vey for?</p>

          <div className="relative mx-[-1rem] mt-12 max-sm:hidden border-y border-ev-white/40 bg-[linear-gradient(90deg,transparent_0,transparent_49.5%,rgba(255,255,255,.28)_49.5%,rgba(255,255,255,.28)_50%,transparent_50%)] px-4 py-8 sm:mx-0 sm:mt-16 sm:px-10 sm:py-10 lg:px-20">
            <div className="grid grid-cols-2 items-center gap-x-3 gap-y-5 sm:gap-x-14 sm:gap-y-7 lg:grid-cols-4 lg:gap-x-10">
              {audienceCategories.map((item) => (
                <AudienceCell key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-5 overflow-hidden sm:mt-14 sm:gap-7">
            <div className="relative left-1/2 w-screen -translate-x-1/2 rotate-[-5deg] whitespace-nowrap border-[3px] border-black px-4 py-3 text-left font-brutal text-base uppercase shadow-brutal bg-ev-neon-yellow text-ev-neon-pink sm:py-4 sm:text-xl">
              <span className="tape-marquee inline-block">RESEARCH • IDEAS • SCRIPTING • HOOKS • RESEARCH • IDEAS • SCRIPTING • HOOKS • </span>
            </div>
            <div className="relative left-1/2 w-screen -translate-x-1/2 rotate-[4deg] whitespace-nowrap border-[3px] border-black px-4 py-3 text-left font-brutal text-base uppercase shadow-brutal bg-ev-black text-ev-neon-yellow sm:py-4 sm:text-xl">
              <span className="tape-marquee tape-marquee-reverse inline-block">EDITING • DESIGN • PUBLISHING • ANALYSIS • EDITING • DESIGN • PUBLISHING • ANALYSIS • </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
