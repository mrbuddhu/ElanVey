import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Elan Vey — our mission, vision, philosophy, and approach to premium creative strategy.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    title: "Mission",
    content:
      "To empower ambitious brands with the strategic clarity and creative excellence they need to stand out, grow, and lead in their space.",
  },
  {
    title: "Vision",
    content:
      "A world where every ambitious brand has access to premium creative strategy — not as a luxury, but as a foundation for meaningful growth.",
  },
  {
    title: "Philosophy",
    content:
      "We believe premium comes from restraint, not excess. Every decision — from typography to strategy — should have purpose, conviction, and clarity.",
  },
  {
    title: "Approach",
    content:
      "We combine editorial creative direction with rigorous strategic thinking. No templates. No generic solutions. Every engagement is tailored to the brand's unique ambition.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built for brands that lead"
        subtitle="Elan Vey exists at the intersection of creative ambition and strategic precision — helping brands define who they are and where they're going."
        large
      />

      <Section>
        <div className="container-content">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="heading-display text-3xl text-ev-white md:text-4xl">
                Our story
              </h2>
              <div className="mt-8 space-y-6 text-ev-muted leading-relaxed">
                <p>
                  Elan Vey was founded on a simple conviction: ambitious brands
                  deserve a partner that matches their standards. Not a vendor.
                  Not a template. A strategic creative ally invested in their
                  growth.
                </p>
                <p>
                  [BRAND STORY — Replace with the official Elan Vey founding
                  story and background when available.]
                </p>
                <p>
                  Today, we work with brands ready to invest in their presence
                  — combining brand strategy, creative direction, digital growth,
                  and exclusive access to real-world marketing opportunities
                  through our connection with Lavent Marketing.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-glow opacity-40"
                aria-hidden
              />
              <div className="glass-strong relative aspect-[4/5] p-8">
                <p className="font-display text-8xl font-bold gradient-text opacity-20">
                  EV
                </p>
                <p className="absolute bottom-8 left-8 right-8 text-sm uppercase tracking-widest text-ev-muted">
                  Premium · Creative · Strategic
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ev-charcoal/50">
        <div className="container-content">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
            What drives us
          </p>
          <h2 className="heading-display mb-16 text-4xl text-ev-white md:text-5xl">
            Mission & values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((item, i) => (
              <div
                key={item.title}
                className="border-l-2 border-ev-crimson/50 pl-8"
              >
                <span className="font-display text-sm text-ev-crimson">
                  0{i + 1}
                </span>
                <h3 className="heading-display mt-2 text-2xl text-ev-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-ev-muted leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="heading-display text-3xl text-ev-white md:text-4xl">
              What sets us apart
            </h2>
            <p className="mt-6 text-lg text-ev-muted leading-relaxed">
              Elan Vey isn&apos;t another agency promising results. We&apos;re a
              premium creative partner focused on strategic depth, editorial
              quality, and real-world opportunity — including exclusive access to
              Lavent Marketing&apos;s expertise and network.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Editorial-grade creative direction",
                "Strategy-first approach to every engagement",
                "Lavent Marketing exposure & learning access",
                "Subscription model for ongoing partnership",
                "Premium standards in every deliverable",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-ev-offwhite"
                >
                  <span className="h-px w-8 bg-ev-crimson" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTABlock
        title="Want to work with us?"
        description="Let's discuss how Elan Vey can help elevate your brand."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/founders" variant="outline" size="lg">
          Meet the Founders
        </Button>
      </CTABlock>
    </>
  );
}
