import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { GlassPanel } from "@/components/ui/GlassPanel";
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
      />

      <Section className="!pt-0">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-display text-3xl text-ev-white md:text-4xl">
                What&apos;s included
              </h2>
              <p className="mt-6 text-ev-muted leading-relaxed">
                A comprehensive partnership designed for brands committed to
                long-term growth. Every subscription includes strategic,
                creative, and operational support tailored to your needs.
              </p>
            </div>
            <GlassPanel strong glow>
              <p className="text-xs uppercase tracking-widest text-ev-muted">
                Investment
              </p>
              <p className="font-display mt-2 text-5xl font-bold gradient-text">
                [SUBSCRIPTION PRICE]
              </p>
              <p className="mt-2 text-sm text-ev-muted">
                [BILLING PERIOD — e.g., per month]
              </p>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Subscribe Now
                </Button>
              </div>
            </GlassPanel>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass p-6 transition-colors hover:bg-white/[0.06]"
              >
                <h3 className="font-display text-lg font-bold text-ev-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-ev-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ev-charcoal/50">
        <div className="container-content">
          <h2 className="heading-display mb-12 text-3xl text-ev-white md:text-4xl">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
              <div key={item.step} className="border-t-2 border-ev-crimson pt-6">
                <span className="font-display text-4xl font-bold text-white/10">
                  {item.step}
                </span>
                <h3 className="heading-display mt-4 text-xl text-ev-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ev-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-content max-w-3xl">
          <h2 className="heading-display mb-12 text-3xl text-ev-white">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {subscriptionFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group glass border-b-0"
              >
                <summary className="cursor-pointer list-none p-6 font-display text-lg font-bold text-ev-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-ev-crimson transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-white/5 px-6 pb-6">
                  <p className="text-ev-muted leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        variant="gradient"
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
