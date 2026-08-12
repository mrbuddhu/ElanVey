import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Elan Vey's premium services — brand strategy, creative direction, digital growth, and marketing partnership.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Strategic creative excellence"
        subtitle="Every service is designed to elevate your brand — from foundational strategy to ongoing digital growth."
        large
      />

      <Section className="!pt-0">
        <div className="container-content space-y-24">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`grid items-start gap-12 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <span className="font-display text-8xl font-bold text-white/5 md:text-9xl">
                  {service.index}
                </span>
                <span className="mt-4 block text-xs uppercase tracking-[0.3em] text-ev-crimson">
                  {service.tag}
                </span>
                <h2 className="heading-display mt-4 text-4xl text-ev-white md:text-5xl">
                  {service.name}
                </h2>
                <p className="mt-6 text-lg text-ev-muted leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Discuss This Service
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:[direction:ltr]">
                <GlassPanel strong glow={i === 0}>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ev-muted">
                    Key Benefits
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-ev-crimson" />
                        <span className="text-ev-offwhite">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        variant="gradient"
        title="Not sure where to start?"
        description="We'll help you identify the right services for your brand's goals."
      >
        <Button href="/contact" size="lg">
          Book a Consultation
        </Button>
      </CTABlock>
    </>
  );
}
