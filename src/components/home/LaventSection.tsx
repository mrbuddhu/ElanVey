import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { Section } from "@/components/ui/Section";

export function LaventSection() {
  return (
    <>
      <div className="checkerboard-divider" aria-hidden />
      <Section tone="dark">
        <div className="container-content">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="brutal-label-dark text-sm md:text-base">Exclusive Benefit</p>
              <h2 className="brutal-text brutal-text-light mt-5 text-4xl text-ev-neon-yellow sm:text-5xl md:text-6xl lg:text-7xl">
                Connected with{" "}
                <span className="text-ev-neon-pink">Lavent Marketing</span>
              </h2>
              <p className="mt-10 text-lg font-bold leading-relaxed text-white/80 md:text-xl lg:text-2xl">
                When you onboard with Elan Vey, you gain access to real-world
                exposure and learning opportunities connected with Lavent
                Marketing — a marketing agency built on practical expertise and
                industry experience.
              </p>
              <p className="mt-5 text-base font-bold leading-relaxed text-white/70 md:text-lg">
                This isn&apos;t just strategy on paper. It&apos;s a pathway to
                understanding how premium marketing works in practice.
              </p>
              <div className="mt-12">
                <Button href="/subscription" size="lg">
                  Learn About Subscription
                </Button>
              </div>
            </div>

            <BrutalPanel variant="yellow" className="lg:ml-auto">
              <div className="space-y-8">
                <p className="brutal-label text-base md:text-lg">What you gain</p>
                <ul className="space-y-4 md:space-y-5">
                  {[
                    "Real-world marketing exposure",
                    "Agency-level insights & mentorship",
                    "Professional network access",
                    "Practical learning opportunities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 font-bold text-lg text-ev-black md:text-xl"
                    >
                      <span className="mt-1 font-brutal text-ev-neon-pink text-xl md:text-2xl">
                        ◆
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t-[3px] border-black pt-8">
                  <p className="font-brutal text-base uppercase tracking-widest text-ev-black md:text-lg">
                    Lavent Marketing
                  </p>
                  <p className="mt-3 text-base font-bold text-ev-black/70 md:text-lg">
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
