import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function SubscriptionPreview() {
  return (
    <>
      <Section tone="paper" staggerChildren staggerDelay={60}>
        <div className="container-content">
          {/* HEADLINE block */}
          <div className="mx-auto max-w-5xl text-center">
            <p className="brutal-label">Subscription</p>
            <h2
              className="font-brutal mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-ev-black md:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                textShadow:
                  "3px 3px 0 #ffffff, 6px 6px 0 #00000022",
              }}
            >
              One Vey between
              <br className="sm:hidden" />
              <span className="sm:mx-3 text-ev-neon-red">
                &nbsp;You &amp; Being Seen.
              </span>
            </h2>
            <p className="mt-8 mx-auto max-w-3xl font-brutal text-xl font-bold leading-tight text-ev-black md:text-2xl lg:text-3xl">
              A subscription that keeps your content moving.
            </p>
            <p className="mt-6 mx-auto max-w-4xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl lg:text-2xl">
              proven strategies, scripting, editing, practical tips and creative insights.
            </p>
            <p className="mt-4 mx-auto max-w-3xl text-lg font-bold leading-relaxed text-ev-black/70 md:text-xl lg:text-2xl">
              All built around you and what you want to create.
            </p>
            <p className="mt-6 mx-auto max-w-3xl font-brutal text-xl font-black uppercase leading-snug text-ev-black md:text-2xl lg:text-3xl">
              You bring the vision.
              <br className="sm:hidden" />
              <span className="sm:mx-2">We bring it to life.</span>
            </p>
            <div className="mt-10 flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-6">
              <Button href="/subscription" variant="primary" size="lg">
                Subscribe Now
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>
          </div>



          {/* Pricing card block */}
          <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col items-center gap-8 text-center">
            <div className="brutal-card-yellow inline-block">
              <p className="font-brutal text-xs uppercase tracking-widest text-ev-black sm:text-sm">
                Starting from
              </p>
              <p className="font-brutal mt-1 text-2xl font-black text-ev-neon-red sm:text-3xl md:text-4xl">
                Contact for pricing
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <Button href="/subscription" variant="primary" size="lg">
                Subscribe Now
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
