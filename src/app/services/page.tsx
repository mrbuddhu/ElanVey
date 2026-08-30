"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { siteConfig } from "@/data/site";
import { useEffect, useState } from "react";

const serviceAccents: Record<string, { icon: string; color: string }> = {
  "Brand Strategy": { icon: "◆", color: "text-ev-neon-pink" },
  "Creative Direction": { icon: "✦", color: "text-ev-neon-cyan" },
  "Digital Growth": { icon: "▲", color: "text-ev-neon-yellow" },
  "Marketing Partnership": { icon: "●", color: "text-ev-neon-red" },
};

export default function ServicesPage() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageHero
        label="Services"
        title="Strategic creative excellence"
        subtitle="Every service is designed to elevate your brand — from foundational strategy to ongoing digital growth."
        large
        accent="pink"
        badge="4 Core Services · 1 Integrated Partner"
      />

      <Section id="process" tone="paper" className="!pt-0" staggerChildren staggerDelay={80}>
        <div className="container-content">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end stagger-child">
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
            {processSteps.map((step, i) => (
              <div key={step.index} className="stagger-child relative flex">
                <div className="w-full rounded-[2rem] border-[3px] border-black bg-ev-black p-6 shadow-brutal-lg hover-lift md:p-8 flex flex-col">
                  <span className="process-step-number">{step.index}</span>
                  <h3 className="process-step-title mt-3">{step.title}</h3>
                  <p className="mt-4 flex-1 text-sm font-bold leading-relaxed text-ev-neon-yellow md:text-base">
                    {step.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <span
                    className="step-arrow absolute -right-6 top-1/2 -translate-y-1/2 z-10"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={100}>
        <div className="container-content space-y-24">
          {services.map((service, i) => {
            const accent = serviceAccents[service.name];
            return (
              <article
                key={service.id}
                className={`stagger-child grid items-start gap-10 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:col-span-5 lg:[direction:ltr] animate-on-scroll-slow">
                  <div className="flex items-baseline gap-4">
                    <span className="font-brutal text-7xl text-ev-black/10 md:text-8xl">
                      {service.index}
                    </span>
                    {accent && (
                      <span className={`font-brutal text-5xl ${accent.color} float-medium`}>
                        {accent.icon}
                      </span>
                    )}
                  </div>
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
                  <BrutalPanel
                    variant={i % 2 === 0 ? "cream" : "pink"}
                    className="relative hover-lift"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="brutal-label">Key Benefits</h3>
                      {accent && (
                        <span className={`font-brutal text-3xl ${accent.color}`}>
                          {accent.icon}
                        </span>
                      )}
                    </div>
                    <ul className="mt-2 space-y-4">
                      {service.benefits.map((benefit, bi) => (
                        <li
                          key={benefit}
                          className="stagger-child flex items-start gap-4 border-b-[3px] border-black/10 pb-4 font-bold last:border-0"
                          style={{ transitionDelay: `${bi * 80}ms` }}
                        >
                          <span className="font-brutal text-ev-neon-pink flex-shrink-0 mt-0.5">
                            ◆
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </BrutalPanel>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <div
        className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-8 pointer-events-none opacity-0"
        }`}
      >
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full border-[3px] border-black bg-ev-neon-pink px-5 py-3 font-brutal text-xs uppercase text-white shadow-brutal-lg hover:scale-105 transition-transform md:text-sm"
        >
          <span>Need help choosing?</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

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
