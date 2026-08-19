import {
  BlueStarIcon,
  PacManIcon,
  SparkleIcon,
  WhiteTriangleIcon,
} from "@/components/brand/AudienceIcons";
import { audienceCategories, type AudienceItem } from "@/data/homeServices";

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
        className={`${colorClass} flex min-w-[120px] items-center justify-center px-4 sm:min-w-[140px] sm:px-6 md:min-w-[180px] md:px-10`}
      >
        <span className="font-brutal text-[11px] uppercase text-ev-black sm:text-xs md:text-sm">
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
    <div className="flex items-center justify-center px-2">
      {icons[item.icon]}
    </div>
  );
}

/** Section 1 — Architect Your Limelight + Who is Elan Vey for? */
export function SectionOne() {
  const rows: AudienceItem[][] = [];
  for (let i = 0; i < audienceCategories.length; i += 2) {
    rows.push(audienceCategories.slice(i, i + 2));
  }

  return (
    <>
      <section className="paper-bg relative overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14 lg:pb-16">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center lg:max-w-6xl">
            <h1 className="brutal-text brutal-text-lg text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-ev-neon-yellow">Architect</span>
              <span className="mt-1 block text-ev-neon-cyan md:mt-2">
                Y
                <span className="progress-o mx-1">
                  <span className="progress-o-fill" />
                </span>
                ur
              </span>
              <span className="mt-1 block text-ev-neon-pink md:mt-2">
                Limelight
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-md text-base font-bold leading-snug text-ev-black md:max-w-xl md:text-lg lg:max-w-2xl lg:text-xl">
              You create and we, Strategise, Optimise, Scale, Analyse, Build
              you digitally.
            </p>
          </div>
        </div>
      </section>

      <div className="stamp-edge-bottom" aria-hidden />

      <section className="relative bg-ev-black pb-10 pt-10 md:pb-14 md:pt-14 lg:pb-16 lg:pt-16">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <h2 className="text-center font-sans text-xl font-bold text-ev-white md:text-2xl lg:text-3xl">
            Who is Elan Vey for?
          </h2>

          {/* Mobile: staggered 2-col rows | Desktop: 4 paired rows in 2-col grid */}
          <div className="mx-auto mt-10 max-w-md space-y-6 md:mt-12 md:max-w-2xl md:space-y-8 lg:mt-16 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 lg:space-y-0">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 items-center gap-4 md:gap-8"
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
