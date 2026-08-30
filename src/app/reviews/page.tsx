import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what clients say about working with Elan Vey — premium creative strategy and brand partnership.",
  alternates: { canonical: `${siteConfig.url}/reviews` },
};

const summaryStats = [
  {
    value: "★ 4.9",
    label: "Average Rating",
    color: "bg-ev-neon-pink text-white",
  },
  {
    value: "50+",
    label: "Happy Clients",
    color: "bg-ev-neon-cyan",
  },
  {
    value: "100%",
    label: "Client Retention",
    color: "bg-ev-neon-yellow",
  },
];

const cardColorCycle = [
  "",
  "bg-ev-neon-cyan",
  "bg-ev-neon-yellow",
  "",
  "bg-ev-neon-yellow",
  "bg-ev-neon-cyan",
  "",
  "bg-ev-neon-pink text-white",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl transition-transform duration-300 ${
            i < rating ? "text-ev-neon-pink" : "opacity-20"
          } hover:scale-125`}
          style={{ transitionDelay: `${i * 50}ms` }}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="Reviews"
        title="Trusted by ambitious brands"
        subtitle="Real feedback from partners who chose Elan Vey for their creative and strategic journey."
        large
        accent="pink"
        badge="Real Stories · Real Results"
      />

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={70}>
        <div className="container-content">
          <div className="grid gap-5 sm:grid-cols-3 mb-16">
            {summaryStats.map((stat) => (
              <div
                key={stat.label}
                className={`stagger-child stat-pill hover-lift ${stat.color}`}
              >
                <span className="font-brutal text-2xl sm:text-3xl md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-brutal uppercase tracking-wider opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, i) => {
              const colorClass =
                i === 0
                  ? "md:col-span-2 bg-ev-neon-pink text-white md:p-12"
                  : cardColorCycle[i % cardColorCycle.length] || "";
              const isFeatured = i === 0;
              return (
                <blockquote
                  key={testimonial.id}
                  className={`stagger-child brutal-card p-8 md:p-10 ${colorClass} hover-lift relative`}
                >
                  {isFeatured && (
                    <span className="ribbon-badge bg-ev-neon-yellow text-ev-neon-red">
                      Featured
                    </span>
                  )}
                  <StarRating rating={testimonial.rating} />
                  <p
                    className={`mt-6 font-bold leading-relaxed ${
                      isFeatured ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <footer
                    className={`mt-8 flex items-center gap-4 border-t-[3px] pt-6 ${
                      isFeatured || colorClass.includes("text-white")
                        ? "border-white/20"
                        : "border-black/20"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center border-[3px] ${
                        colorClass.includes("text-white")
                          ? "border-white bg-ev-neon-yellow text-ev-black"
                          : "border-black bg-ev-neon-yellow"
                      } font-brutal text-sm`}
                    >
                      {testimonial.name.replace(/\[|\]/g, "").charAt(0)}
                    </div>
                    <cite className="not-italic flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-brutal uppercase">{testimonial.name}</p>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border-[2px] px-2 py-0.5 text-[10px] font-brutal uppercase ${
                            colorClass.includes("text-white")
                              ? "border-white/50 text-white/80"
                              : "border-ev-neon-cyan text-ev-black/70"
                          }`}
                          title="Verified Client"
                        >
                          <span className="text-ev-neon-cyan">✓</span>
                          Verified
                        </span>
                      </div>
                      <p
                        className={`text-sm font-bold ${
                          colorClass.includes("text-white")
                            ? "opacity-70"
                            : "opacity-70"
                        }`}
                      >
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </cite>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </Section>

      <CTABlock
        dark
        title="Join our growing community"
        description="Experience the Elan Vey difference for yourself."
      >
        <Button href="/contact" size="lg">
          Start Your Journey
        </Button>
        <Button href="/subscription" variant="secondary" size="lg">
          View Subscription
        </Button>
      </CTABlock>
    </>
  );
}
