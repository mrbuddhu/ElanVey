"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  subscriptionBenefits,
  subscriptionFaqs,
} from "@/data/subscription";
import { siteConfig } from "@/data/site";

const benefitAccents = [
  { icon: "◆", color: "bg-ev-neon-pink text-white" },
  { icon: "✦", color: "bg-ev-neon-cyan" },
  { icon: "▲", color: "bg-ev-neon-yellow" },
  { icon: "●", color: "bg-ev-neon-pink text-white" },
  { icon: "★", color: "bg-ev-neon-cyan" },
  { icon: "■", color: "bg-ev-neon-yellow" },
];

const howItWorks = [
  {
    step: "01",
    title: "Reach Out",
    desc: "Call us or send a message. Tell us about your ideas, your goals, and what you'd like help with.",
  },
  {
    step: "02",
    title: "Get Started",
    desc: "We plan everything together, set simple milestones, and start our partnership right away.",
  },
  {
    step: "03",
    title: "Grow With Us",
    desc: "Month after month — ongoing support, creative help, and steady growth together.",
  },
];

const subPerks = [
  "Cancel anytime, no hidden fees",
  "Monthly friendly check-ins",
  "Direct WhatsApp / email support",
  "Quarterly progress update",
];

export default function SubscriptionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        label="Subscription"
        title="Your ongoing creative partner"
        subtitle="The Elan Vey subscription gives you steady guidance, great designs, and growth help — month after month, with no stress."
        large
        accent="yellow"
        badge="Limited Spots · Chat With Us Today"
      />

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={80}>
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="animate-on-scroll-slow">
              <h2 className="brutal-text text-2xl text-ev-neon-pink md:text-4xl">
                What&apos;s included
              </h2>
              <p className="mt-6 font-bold leading-relaxed text-ev-black/80 text-base md:text-lg">
                A friendly all-in-one partnership for anyone who wants steady,
                long-term progress. Every subscription includes planning help,
                design work, and online support tailored to what you need.
              </p>
              <ul className="mt-8 space-y-3">
                {subPerks.map((item, i) => (
                  <li
                    key={item}
                    className="stagger-child flex items-center gap-3 font-bold"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="font-brutal text-ev-neon-cyan text-xl">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-on-scroll-slow">
              <BrutalPanel variant="yellow" className="hover-lift relative">
                <span className="ribbon-badge bg-ev-neon-pink text-ev-neon-yellow">
                  Best Value
                </span>
                <p className="font-brutal text-xs uppercase tracking-widest text-ev-black">
                  Investment
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <p className="font-brutal text-3xl md:text-4xl text-ev-neon-red">
                    Call for Pricing
                  </p>
                </div>
                <p className="mt-2 text-sm font-bold text-ev-black/70">
                  Monthly · No lock-in contracts
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-ev-neon-cream px-3 py-1">
                  <span className="font-brutal text-xs text-ev-neon-red">
                    SAVE 20%
                  </span>
                  <span className="text-xs font-bold">vs. one-off projects</span>
                </div>
                <div className="mt-8">
                  <Button href="/contact" className="w-full">
                    Call Us Now
                  </Button>
                </div>
              </BrutalPanel>
            </div>
          </div>

          <div className="mt-20">
            <p className="brutal-label stagger-child">All Benefits Included</p>
            <h3 className="brutal-text mt-4 mb-12 text-3xl md:text-5xl stagger-child">
              Everything you need to{" "}
              <span className="text-ev-neon-yellow">thrive</span>
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subscriptionBenefits.map((benefit, i) => {
                const accent = benefitAccents[i % benefitAccents.length];
                return (
                  <div
                    key={benefit.title}
                    className={`stagger-child brutal-card hover-lift ${accent.color}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-brutal text-3xl">
                        {accent.icon}
                      </span>
                      <h3 className="font-brutal text-base uppercase pt-1">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm font-bold opacity-80">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark" staggerChildren staggerDelay={90}>
        <div className="container-content">
          <h2 className="brutal-text brutal-text-light mb-12 stagger-child text-3xl text-ev-neon-yellow md:text-5xl">
            How it works
          </h2>
          <div className="grid gap-6 items-start md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <div
                key={item.step}
                className="stagger-child relative"
              >
                <div className="w-full border-[3px] border-ev-neon-pink p-6 md:p-8 hover-lift">
                  <span className="font-brutal text-5xl md:text-6xl text-ev-neon-yellow">
                    {item.step}
                  </span>
                  <h3 className="brutal-text brutal-text-light mt-4 text-xl md:text-2xl text-ev-neon-cyan">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-bold text-white/70">
                    {item.desc}
                  </p>
                </div>
                {i < howItWorks.length - 1 && (
                  <span
                    className="step-arrow absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden md:block"
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

      <div className="stamp-edge-top" aria-hidden />

      <Section tone="paper" staggerChildren staggerDelay={70}>
        <div className="container-content max-w-3xl">
          <h2 className="brutal-text mb-12 stagger-child text-3xl text-ev-neon-pink md:text-5xl">
            Common questions
          </h2>
          <div className="space-y-4">
            {subscriptionFaqs.map((faq, i) => (
              <div
                key={faq.question}
                className="stagger-child brutal-card hover-lift"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full cursor-pointer list-none font-brutal uppercase [&::-webkit-details-marker]:hidden text-left flex items-center justify-between gap-4"
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`font-brutal text-2xl text-ev-neon-pink transition-transform duration-300 flex-shrink-0 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`accordion-content ${
                    openFaq === i ? "open" : ""
                  }`}
                >
                  <div className="accordion-inner">
                    <div className="mt-4 border-t-[3px] border-black pt-4">
                      <p className="font-bold text-ev-black/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        dark={false}
        title="Ready to subscribe?"
        description="Take the first step toward steady, worry-free creative growth."
      >
        <Button href="/contact" size="lg">
          Get Started
        </Button>
      </CTABlock>
    </>
  );
}
