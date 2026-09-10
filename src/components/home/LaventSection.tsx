import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function LaventSection() {
  return (
    <>
      <Section tone="dark">
        <div className="container-content max-w-5xl text-center">
          <p className="brutal-label-dark">Exclusive Benefit</p>
          <h2 className="brutal-text brutal-text-pink mt-5 text-3xl text-ev-neon-yellow sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Connected with{" "}
            <span className="brutal-text-yellow-bg text-ev-neon-pink">
              Lavent Marketing
            </span>
          </h2>
          <div className="flex justify-center mt-8">
            <img src="/images/Project Name 188.png" alt="Lavent Marketing" className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain drop-shadow-[8px_8px_0_rgba(0,0,0,1)]" />
          </div>
          <p className="mt-10 text-lg font-bold leading-relaxed text-white/80 md:text-xl lg:text-2xl">
            When you onboard with Elan Vey, you gain real-world marketing exposure and learning opportunities connected with Lavent Marketing.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button href="/subscription" variant="primary" size="lg">
              Learn About Subscription
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
