import { Button } from "@/components/ui/Button";
import { subscriptionBenefits } from "@/data/subscription";
import { Section } from "@/components/ui/Section";

export function SubscriptionPreview() {
  return (
    <Section tone="paper">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="brutal-label">Subscription</p>
            <h2 className="brutal-text mt-4 text-3xl text-ev-neon-yellow md:text-5xl">
              Ongoing partnership for{" "}
              <span className="text-ev-neon-pink">consistent growth</span>
            </h2>
            <p className="mt-6 text-base font-bold text-ev-black/80 md:text-lg">
              The Elan Vey subscription is a premium ongoing partnership —
              strategic guidance, creative direction, and digital presence
              support designed for brands committed to long-term growth.
            </p>
            <div className="brutal-card-yellow mt-8 inline-block">
              <p className="font-brutal text-xs uppercase tracking-widest text-ev-black">
                Starting from
              </p>
              <p className="font-brutal mt-1 text-3xl text-ev-neon-red">
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
            {subscriptionBenefits.slice(0, 4).map((benefit, i) => (
              <div
                key={benefit.title}
                className={`brutal-card ${i % 2 === 1 ? "bg-ev-neon-cyan" : ""}`}
              >
                <h3 className="font-brutal text-base uppercase text-ev-black">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-ev-black/70">
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
