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
        className={`${colorClass} flex min-w-[140px] items-center justify-center px-6 sm:min-w-[180px] sm:px-8 md:min-w-[220px] md:px-12 lg:min-w-[260px]`}
      >
        <span className="font-brutal text-sm uppercase text-ev-black sm:text-base md:text-lg lg:text-xl">
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
  const rows: AudienceItem[][] = [];
  for (let i = 0; i < audienceCategories.length; i += 2) {
    rows.push(audienceCategories.slice(i, i + 2));
  }

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
                We turn your "meh" ideas into "no way" moments. Bold designs, viral content, and digital growth that actually hits different.
              </p>
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button href="/contact" variant="primary" size="lg">
                  Let's Create Magic
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

      <section className="relative bg-ev-black pb-16 pt-14 md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <h2 className="text-center font-brutal text-2xl font-bold uppercase tracking-wide text-ev-white sm:text-3xl md:text-4xl lg:text-5xl">
            Who is Elan Vey for?
          </h2>

          <div className="mx-auto mt-12 max-w-md space-y-8 md:mt-16 md:max-w-3xl md:space-y-10 lg:mt-20 lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14 lg:space-y-0">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 items-center gap-6 md:gap-10"
              >
                {row.map((item) => (
                  <div
                    key={item.id}
                    className={`flex ${
                      item.side === "left" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <AudienceCell item={item} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
