import Link from "next/link";
import {
  BlueStarIcon,
  PacManIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { audienceCategories, type AudienceItem } from "@/data/homeServices";
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
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center lg:max-w-7xl">
            <h1 className="brutal-text brutal-text-lg text-[2.75rem] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block text-ev-neon-yellow">Architect</span>
              <span className="mt-2 block text-ev-neon-cyan md:mt-3">
                Y
                <span className="progress-o mx-1.5">
                  <span className="progress-o-fill" />
                </span>
                ur
              </span>
              <span className="mt-2 block text-ev-neon-pink md:mt-3">
                Limelight
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-lg text-lg font-bold leading-snug text-ev-black md:max-w-2xl md:text-xl lg:max-w-3xl lg:text-2xl">
              You create and we, Strategise, Optimise, Scale, Analyse, Build you
              digitally.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-14">
              <Button href="/services" size="lg">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
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
