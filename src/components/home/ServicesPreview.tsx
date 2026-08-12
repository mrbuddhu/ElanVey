import Link from "next/link";
import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";

export function ServicesPreview() {
  return (
    <Section id="services-preview" className="bg-ev-charcoal/50">
      <div className="container-content">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
              What We Do
            </p>
            <h2 className="heading-display text-4xl text-ev-white md:text-5xl lg:text-6xl">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="link-underline text-sm font-medium text-ev-offwhite"
          >
            View all services →
          </Link>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {services.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group grid gap-6 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="md:col-span-2">
                <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-ev-crimson/30 md:text-6xl">
                  {service.index}
                </span>
              </div>
              <div className="md:col-span-4">
                <span className="mb-2 inline-block text-xs uppercase tracking-widest text-ev-crimson">
                  {service.tag}
                </span>
                <h3 className="heading-display text-2xl text-ev-white transition-colors group-hover:text-ev-crimson md:text-3xl">
                  {service.name}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-ev-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-ev-offwhite opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
