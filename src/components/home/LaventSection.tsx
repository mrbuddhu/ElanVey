import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { Section } from "@/components/ui/Section";

export function LaventSection() {
  return (
    <>
      <div className="checkerboard-divider" aria-hidden />
      <Section tone="dark">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="brutal-label-dark">Exclusive Benefit</p>
              <h2 className="brutal-text brutal-text-light mt-4 text-3xl text-ev-neon-yellow md:text-5xl lg:text-6xl">
                Connected with{" "}
                <span className="text-ev-neon-pink">Lavent Marketing</span>
              </h2>
              <p className="mt-8 text-base font-bold leading-relaxed text-white/80 md:text-lg">
                When you onboard with Elan Vey, you gain access to real-world
                exposure and learning opportunities connected with Lavent
                Marketing — a marketing agency built on practical expertise and
                industry experience.
              </p>
              <p className="mt-4 font-bold leading-relaxed text-white/70">
                This isn&apos;t just strategy on paper. It&apos;s a pathway to
                understanding how premium marketing works in practice.
              </p>
              <div className="mt-10">
                <Button href="/subscription" size="lg">
                  Learn About Subscription
                </Button>
              </div>
            </div>

            <BrutalPanel variant="yellow" className="lg:ml-auto">
              <div className="space-y-6">
                <p className="brutal-label">What you gain</p>
                <ul className="space-y-3">
                  {[
                    "Real-world marketing exposure",
                    "Agency-level insights & mentorship",
                    "Professional network access",
                    "Practical learning opportunities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-bold text-ev-black"
                    >
                      <span className="mt-1 font-brutal text-ev-neon-pink">
                        ◆
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t-[3px] border-black pt-6">
                  <p className="font-brutal text-sm uppercase tracking-widest text-ev-black">
                    Lavent Marketing
                  </p>
                  <p className="mt-2 text-sm font-bold text-ev-black/70">
                    [Additional Lavent Marketing details to be confirmed]
                  </p>
                </div>
              </div>
            </BrutalPanel>
          </div>
        </div>
      </Section>
      <div className="stamp-edge-top" aria-hidden />
    </>
  );
}
