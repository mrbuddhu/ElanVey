import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
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
        accent="mixed"
      />

      <Section tone="paper" className="!pt-0">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="brutal-text text-2xl text-ev-neon-pink md:text-4xl">
                Our story
              </h2>
              <div className="mt-8 space-y-6 font-bold leading-relaxed text-ev-black/80">
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
            <BrutalPanel variant="yellow" className="flex aspect-[4/5] flex-col justify-between">
              <p className="font-brutal text-8xl text-ev-neon-red opacity-40">
                EV
              </p>
              <p className="font-brutal text-sm uppercase tracking-widest text-ev-black">
                Premium · Creative · Strategic
              </p>
            </BrutalPanel>
          </div>
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark">
        <div className="container-content">
          <p className="brutal-label-dark">What drives us</p>
          <h2 className="brutal-text brutal-text-light mb-12 mt-4 text-3xl text-ev-neon-yellow md:text-5xl">
            Mission & values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item, i) => (
              <div key={item.title} className="border-[3px] border-white p-6">
                <span className="font-brutal text-ev-neon-pink">0{i + 1}</span>
                <h3 className="brutal-text brutal-text-light mt-2 text-xl text-ev-neon-cyan">
                  {item.title}
                </h3>
                <p className="mt-4 font-bold leading-relaxed text-white/70">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="stamp-edge-top" aria-hidden />

      <Section tone="paper">
        <div className="container-content max-w-3xl">
          <h2 className="brutal-text text-2xl text-ev-neon-yellow md:text-4xl">
            What sets us apart
          </h2>
          <p className="mt-6 text-lg font-bold leading-relaxed text-ev-black/80">
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
                className="flex items-center gap-3 font-brutal text-sm uppercase text-ev-black"
              >
                <span className="text-ev-neon-pink">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABlock
        dark={false}
        title="Want to work with us?"
        description="Let's discuss how Elan Vey can help elevate your brand."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/founders" variant="secondary" size="lg">
          Meet the Founders
        </Button>
      </CTABlock>
    </>
  );
}
