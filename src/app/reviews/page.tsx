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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < rating ? "text-ev-neon-pink" : "opacity-20"}`}
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
      />

      <Section tone="paper" className="!pt-0">
        <div className="container-content">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.id}
                className={`brutal-card p-8 md:p-10 ${
                  i === 0 ? "md:col-span-2 bg-ev-neon-pink text-white md:p-12" : ""
                } ${i === 2 ? "bg-ev-neon-cyan" : ""}`}
              >
                <StarRating rating={testimonial.rating} />
                <p
                  className={`mt-6 font-bold leading-relaxed ${
                    i === 0 ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t-[3px] border-black/20 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-ev-neon-yellow font-brutal text-sm">
                    {testimonial.name.charAt(1)}
                  </div>
                  <cite className="not-italic">
                    <p className="font-brutal uppercase">{testimonial.name}</p>
                    <p className="text-sm font-bold opacity-70">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            ))}
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
