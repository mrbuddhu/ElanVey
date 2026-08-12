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
      />

      <Section className="!pt-0">
        <div className="container-content space-y-24">
          {founders.map((founder, i) => (
            <article
              key={founder.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr]">
                <div className="relative aspect-[3/4] overflow-hidden bg-ev-charcoal">
                  <div
                    className="absolute inset-0 bg-gradient-glow opacity-30"
                    aria-hidden
                  />
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/10">
                      [PHOTO]
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ev-black/80 to-transparent" />
                </div>
              </div>

              <div className="lg:[direction:ltr]">
                <p className="text-xs uppercase tracking-[0.3em] text-ev-crimson">
                  {founder.role}
                </p>
                <h2 className="heading-display mt-4 text-4xl text-ev-white md:text-5xl">
                  {founder.name}
                </h2>
                <p className="mt-6 text-ev-muted leading-relaxed">
                  {founder.bio}
                </p>
                {founder.quote && (
                  <blockquote className="mt-8 border-l-2 border-ev-crimson pl-6">
                    <p className="font-display text-lg italic text-ev-offwhite">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-ev-charcoal/50">
        <div className="container-content max-w-3xl text-center">
          <h2 className="heading-display text-3xl text-ev-white md:text-4xl">
            Founder philosophy
          </h2>
          <p className="mt-8 text-lg text-ev-muted leading-relaxed">
            [FOUNDER PHILOSOPHY — Replace with the collective founder vision
            and philosophy when available. This section should communicate the
            core beliefs that drive Elan Vey&apos;s approach to creative
            strategy and brand partnership.]
          </p>
        </div>
      </Section>

      <CTABlock
        title="Work with the team"
        description="Connect with Elan Vey and start building your brand's future."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/about" variant="outline" size="lg">
          About Elan Vey
        </Button>
      </CTABlock>
    </>
  );
}
