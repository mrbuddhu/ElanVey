import { Button } from "@/components/ui/Button";
import { subscriptionBenefits } from "@/data/subscription";
import { Section } from "@/components/ui/Section";

export function SubscriptionPreview() {
  return (
    <Section className="border-y border-white/5 bg-ev-charcoal/30">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
              Subscription
            </p>
            <h2 className="heading-display text-4xl text-ev-white md:text-5xl">
              Ongoing partnership for{" "}
              <span className="gradient-text">consistent growth</span>
            </h2>
            <p className="mt-6 text-lg text-ev-muted">
              The Elan Vey subscription is a premium ongoing partnership —
              strategic guidance, creative direction, and digital presence
              support designed for brands committed to long-term growth.
            </p>
            <div className="mt-8 glass inline-block px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-ev-muted">
                Starting from
              </p>
              <p className="font-display mt-1 text-3xl font-bold text-ev-white">
                [SUBSCRIPTION PRICE]
              </p>
            </div>
            <div className="mt-8">
              <Button href="/subscription" size="lg">
                View Subscription Details
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {subscriptionBenefits.slice(0, 4).map((benefit) => (
              <div
                key={benefit.title}
                className="glass p-6 transition-colors hover:bg-white/[0.06]"
              >
                <h3 className="font-display text-lg font-bold text-ev-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-ev-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
