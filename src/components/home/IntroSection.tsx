import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section className="border-t border-white/5">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
              Introduction
            </p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="heading-display text-3xl text-ev-white sm:text-4xl md:text-5xl lg:text-6xl">
              We help ambitious brands{" "}
              <span className="text-ev-muted">build presence</span> that
              commands attention
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ev-muted">
              Elan Vey is a premium creative and strategic partner. We combine
              bold creative direction with clear strategic thinking — helping
              brands define their identity, grow their digital presence, and
              connect with the opportunities that accelerate their journey.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
