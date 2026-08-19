import { processSteps } from "@/data/process";
import { Section } from "@/components/ui/Section";

export function ProcessSection() {
  return (
    <Section tone="paper">
      <div className="container-content">
        <div className="mb-12 max-w-2xl">
          <p className="brutal-label">Our Process</p>
          <h2 className="brutal-text mt-4 text-3xl text-ev-neon-pink md:text-5xl lg:text-6xl">
            How we work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.index} className="brutal-card">
              <span className="font-brutal text-5xl text-ev-neon-yellow md:text-6xl">
                {step.index}
              </span>
              <h3 className="brutal-text mt-4 text-xl text-ev-black md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-bold leading-relaxed text-ev-black/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
