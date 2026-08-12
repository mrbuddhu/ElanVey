import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-ev-crimson" : "text-white/10"}`}
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

export function ReviewsPreview() {
  const preview = testimonials.slice(0, 3);

  return (
    <Section>
      <div className="container-content">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-ev-crimson">
              Testimonials
            </p>
            <h2 className="heading-display text-4xl text-ev-white md:text-5xl">
              What clients say
            </h2>
          </div>
          <Link
            href="/reviews"
            className="link-underline text-sm font-medium text-ev-offwhite"
          >
            Read all reviews →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {preview.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="glass flex flex-col p-8 transition-colors hover:bg-white/[0.06]"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-6 flex-1 text-ev-offwhite/90 leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <footer className="mt-8 border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <p className="font-display font-bold text-ev-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-ev-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
