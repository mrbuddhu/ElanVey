import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
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
        accent="pink"
      />

      <Section id="process" tone="paper" className="!pt-0">
        <div className="container-content">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="brutal-label">How it works</p>
              <h2 className="brutal-text mt-4 text-3xl text-ev-neon-yellow md:text-5xl">
                The Elan Vey Process
              </h2>
            </div>
            <p className="max-w-md text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
              Five steps — from vision to growth — designed to make your brand
              stand out and your audience grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.index}
                className="rounded-[2rem] border-[3px] border-black bg-ev-black p-6 shadow-brutal-lg md:p-8"
              >
                <span className="process-step-number">{step.index}</span>
                <h3 className="process-step-title mt-3">{step.title}</h3>
                <p className="mt-4 text-sm font-bold leading-relaxed text-ev-neon-yellow md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper" className="!pt-0">
        <div className="container-content space-y-20">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`grid items-start gap-10 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <span className="font-brutal text-7xl text-ev-black/10 md:text-8xl">
                  {service.index}
                </span>
                <span className="mt-4 block brutal-label">{service.tag}</span>
                <h2 className="brutal-text mt-4 text-3xl text-ev-neon-yellow md:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-6 text-base font-bold leading-relaxed text-ev-black/80">
                  {service.description}
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Discuss This Service
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:[direction:ltr]">
                <BrutalPanel variant={i % 2 === 0 ? "cream" : "pink"}>
                  <h3 className="brutal-label">Key Benefits</h3>
                  <ul className="mt-6 space-y-4">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-4 border-b-[3px] border-black/10 pb-4 font-bold last:border-0"
                      >
                        <span className="font-brutal text-ev-neon-pink">◆</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </BrutalPanel>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABlock
        dark
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
