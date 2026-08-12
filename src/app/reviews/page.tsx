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
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-ev-crimson" : "text-white/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
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
      />

      <Section className="!pt-0">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.id}
                className={`glass p-8 md:p-10 ${
                  i === 0 ? "md:col-span-2 md:p-12" : ""
                }`}
              >
                <StarRating rating={testimonial.rating} />
                <p
                  className={`mt-6 text-ev-offwhite leading-relaxed ${
                    i === 0 ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center bg-ev-charcoal font-display text-sm font-bold text-ev-muted">
                    {testimonial.name.charAt(1)}
                  </div>
                  <cite className="not-italic">
                    <p className="font-display font-bold text-ev-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-ev-muted">
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
        variant="gradient"
        title="Join our growing community"
        description="Experience the Elan Vey difference for yourself."
      >
        <Button href="/contact" size="lg">
          Start Your Journey
        </Button>
        <Button href="/subscription" variant="outline" size="lg">
          View Subscription
        </Button>
      </CTABlock>
    </>
  );
}
