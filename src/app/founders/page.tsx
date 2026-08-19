import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { founders } from "@/data/founders";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the founders of Elan Vey — the visionaries behind premium creative strategy for ambitious brands.",
  alternates: { canonical: `${siteConfig.url}/founders` },
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        label="Founders"
        title="The people behind Elan Vey"
        subtitle="Vision, conviction, and a commitment to helping ambitious brands reach their full potential."
        large
        accent="cyan"
      />

      <Section tone="paper" className="!pt-0">
        <div className="container-content space-y-20">
          {founders.map((founder, i) => (
            <article
              key={founder.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr]">
                <div className="brutal-card flex aspect-[3/4] items-center justify-center bg-ev-neon-cyan">
                  <span className="font-brutal text-5xl text-ev-black/30">
                    [PHOTO]
                  </span>
                </div>
              </div>

              <div className="lg:[direction:ltr]">
                <p className="brutal-label">{founder.role}</p>
                <h2 className="brutal-text mt-4 text-3xl text-ev-neon-yellow md:text-4xl">
                  {founder.name}
                </h2>
                <p className="mt-6 font-bold leading-relaxed text-ev-black/80">
                  {founder.bio}
                </p>
                {founder.quote && (
                  <blockquote className="brutal-card-yellow mt-8">
                    <p className="font-brutal text-lg uppercase leading-snug text-ev-black">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark">
        <div className="container-content max-w-3xl text-center">
          <h2 className="brutal-text brutal-text-light text-3xl text-ev-neon-pink md:text-4xl">
            Founder philosophy
          </h2>
          <p className="mt-8 text-lg font-bold leading-relaxed text-white/70">
            [FOUNDER PHILOSOPHY — Replace with the collective founder vision
            and philosophy when available.]
          </p>
        </div>
      </Section>

      <CTABlock
        dark={false}
        title="Work with the team"
        description="Connect with Elan Vey and start building your brand's future."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/about" variant="secondary" size="lg">
          About Elan Vey
        </Button>
      </CTABlock>
    </>
  );
}
