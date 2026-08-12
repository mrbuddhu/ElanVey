import { processSteps } from "@/data/process";
import { Section } from "@/components/ui/Section";

export function ProcessSection() {
  return (
    <Section>
      <div className="container-content">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
            Our Process
          </p>
          <h2 className="heading-display text-4xl text-ev-white md:text-5xl lg:text-6xl">
            How we work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.index}
              className="group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="glass p-8 transition-all duration-500 group-hover:border-ev-crimson/20 group-hover:bg-white/[0.06]">
                <span className="font-display text-6xl font-bold gradient-text">
                  {step.index}
                </span>
                <h3 className="heading-display mt-6 text-2xl text-ev-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ev-muted">
                  {step.description}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 bg-white/10 lg:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
