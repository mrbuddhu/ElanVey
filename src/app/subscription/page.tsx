import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Subscription",
  description:
    "Join the Elan Vey subscription — premium ongoing creative strategy, digital presence, and Lavent Marketing access.",
  alternates: { canonical: `${siteConfig.url}/subscription` },
};

export default function SubscriptionPage() {
  return (
    <>
      <PageHero
        label="Subscription"
        title="Your ongoing creative partner"
        subtitle="The Elan Vey subscription delivers consistent strategic guidance, creative direction, and growth support — month after month."
        large
        accent="yellow"
      />

      <Section tone="paper" className="!pt-0">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="brutal-text text-2xl text-ev-neon-pink md:text-4xl">
                What&apos;s included
              </h2>
              <p className="mt-6 font-bold leading-relaxed text-ev-black/80">
                A comprehensive partnership designed for brands committed to
                long-term growth. Every subscription includes strategic,
                creative, and operational support tailored to your needs.
              </p>
            </div>
            <BrutalPanel variant="yellow">
              <p className="font-brutal text-xs uppercase tracking-widest text-ev-black">
                Investment
              </p>
              <p className="font-brutal mt-2 text-5xl text-ev-neon-red">
                [SUBSCRIPTION PRICE]
              </p>
              <p className="mt-2 text-sm font-bold text-ev-black/70">
                [BILLING PERIOD — e.g., per month]
              </p>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </BrutalPanel>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionBenefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`brutal-card ${i % 3 === 1 ? "bg-ev-neon-cyan" : i % 3 === 2 ? "bg-ev-neon-pink text-white" : ""}`}
              >
                <h3 className="font-brutal text-base uppercase">{benefit.title}</h3>
                <p className="mt-3 text-sm font-bold opacity-80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark">
        <div className="container-content">
          <h2 className="brutal-text brutal-text-light mb-12 text-3xl text-ev-neon-yellow md:text-4xl">
            How it works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Reach out and tell us about your brand, goals, and ambitions.",
              },
              {
                step: "02",
                title: "Onboard",
                desc: "We align on strategy, set milestones, and begin the partnership.",
              },
              {
                step: "03",
                title: "Grow",
                desc: "Ongoing support, creative direction, and continuous optimization.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border-[3px] border-ev-neon-pink p-6"
              >
                <span className="font-brutal text-4xl text-ev-neon-yellow">
                  {item.step}
                </span>
                <h3 className="brutal-text brutal-text-light mt-4 text-xl text-ev-neon-cyan">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-bold text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="stamp-edge-top" aria-hidden />

      <Section tone="paper">
        <div className="container-content max-w-3xl">
          <h2 className="brutal-text mb-12 text-3xl text-ev-neon-pink">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {subscriptionFaqs.map((faq) => (
              <details key={faq.question} className="group brutal-card">
                <summary className="cursor-pointer list-none font-brutal uppercase [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-ev-neon-pink transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="mt-4 border-t-[3px] border-black pt-4">
                  <p className="font-bold text-ev-black/80">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        dark={false}
        title="Ready to subscribe?"
        description="Take the first step toward consistent, premium brand growth."
      >
        <Button href="/contact" size="lg">
          Get Started
        </Button>
      </CTABlock>
    </>
  );
}
