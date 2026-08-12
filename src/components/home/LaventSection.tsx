import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Section } from "@/components/ui/Section";

export function LaventSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-brand opacity-[0.04]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-glow"
        aria-hidden
      />

      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
              Exclusive Benefit
            </p>
            <h2 className="heading-display text-4xl text-ev-white md:text-5xl lg:text-6xl">
              Connected with{" "}
              <span className="gradient-text">Lavent Marketing</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ev-muted">
              When you onboard with Elan Vey, you gain access to real-world
              exposure and learning opportunities connected with Lavent
              Marketing — a marketing agency built on practical expertise and
              industry experience.
            </p>
            <p className="mt-4 text-ev-muted leading-relaxed">
              This isn&apos;t just strategy on paper. It&apos;s a pathway to
              understanding how premium marketing works in practice — giving
              you insights, exposure, and connections that accelerate your
              growth.
            </p>
            <div className="mt-10">
              <Button href="/subscription" size="lg">
                Learn About Subscription
              </Button>
            </div>
          </div>

          <GlassPanel strong glow className="lg:ml-auto">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ev-muted">
                  What you gain
                </p>
                <ul className="mt-4 space-y-4">
                  {[
                    "Real-world marketing exposure",
                    "Agency-level insights & mentorship",
                    "Professional network access",
                    "Practical learning opportunities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ev-offwhite"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ev-crimson" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-display text-sm uppercase tracking-widest text-ev-muted">
                  Lavent Marketing
                </p>
                <p className="mt-2 text-sm text-ev-offwhite/70">
                  [Additional Lavent Marketing details to be confirmed]
                </p>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </Section>
  );
}
