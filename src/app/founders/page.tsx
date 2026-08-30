import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { founders } from "@/data/founders";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet the friendly founders of Elan Vey — real people passionate about helping you succeed.",
  alternates: { canonical: `${siteConfig.url}/founders` },
};

const badgeColors = ["bg-ev-neon-yellow", "bg-ev-neon-cyan"];
const photoColors = [
  "bg-ev-neon-cyan",
  "bg-ev-neon-pink",
];

export default function FoundersPage() {
  return (
    <>
      <PageHero
        label="Founders"
        title="The people behind Elan Vey"
        subtitle="Real people, honest values, and a true passion for helping others bring their ideas to life."
        large
        accent="cyan"
        badge="Meet The Team"
      />

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={120}>
        <div className="container-content space-y-24">
          {founders.map((founder, i) => (
            <article
              key={founder.id}
              className={`stagger-child grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr] relative animate-on-scroll-slow">
                <div
                  className={`brutal-card flex aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] items-center justify-center hover-lift relative overflow-hidden ${photoColors[i % photoColors.length]}`}
                >
                  <div className="absolute inset-2 border-[3px] border-black/20 rounded-sm pointer-events-none" />
                  <span className="font-brutal text-5xl text-ev-black/30 md:text-6xl">
                    [PHOTO]
                  </span>
                  <div
                    className="absolute top-4 left-4 h-8 w-8 border-t-[3px] border-l-[3px] border-black/50"
                    aria-hidden
                  />
                  <div
                    className="absolute bottom-4 right-4 h-8 w-8 border-b-[3px] border-r-[3px] border-black/50"
                    aria-hidden
                  />
                </div>
                <span
                  className={`absolute -top-4 -right-4 rotate-[12deg] hidden border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal md:inline-block float-medium ${badgeColors[i % badgeColors.length]}`}
                >
                  {founder.role}
                </span>
              </div>

              <div className="lg:[direction:ltr] animate-on-scroll-slow">
                <div className="md:hidden mb-4">
                  <span
                    className={`inline-block rotate-[-5deg] border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal ${badgeColors[i % badgeColors.length]}`}
                  >
                    {founder.role}
                  </span>
                </div>
                <p className="hidden brutal-label md:block">{founder.role}</p>
                <h2 className="brutal-text mt-4 text-3xl text-ev-neon-yellow md:text-4xl lg:text-5xl">
                  {founder.name}
                </h2>
                <p className="mt-6 font-bold leading-relaxed text-ev-black/80 text-base md:text-lg">
                  {founder.bio}
                </p>
                {founder.quote && (
                  <blockquote className="brutal-card-yellow mt-8 hover-lift">
                    <p className="font-brutal text-lg uppercase leading-snug text-ev-black">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </blockquote>
                )}

                <div className="mt-8 flex gap-3 flex-wrap">
                  {["instagram", "facebook", "email"].map((social, si) => (
                    <a
                      key={social}
                      href={
                        social === "instagram"
                          ? siteConfig.social.instagram
                          : social === "facebook"
                            ? siteConfig.social.facebook
                            : `mailto:${siteConfig.contact.email}`
                      }
                      aria-label={`${founder.name} on ${social}`}
                      className="flex h-12 w-12 items-center justify-center border-[3px] border-black shadow-brutal transition-all hover:scale-110 hover:-translate-y-0.5 hover:shadow-brutal-lg bg-ev-neon-cream"
                      style={{ transitionDelay: `${si * 40}ms` }}
                      target={social === "email" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                    >
                      <span className="font-brutal text-sm">
                        {social === "instagram"
                          ? "IG"
                          : social === "facebook"
                            ? "FB"
                            : "@"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark">
        <div className="container-content max-w-4xl relative animate-on-scroll-slow">
          <span
            className="absolute -top-4 -left-2 font-brutal text-8xl md:text-9xl text-ev-neon-pink/20 leading-none select-none"
            aria-hidden
          >
            &ldquo;
          </span>
          <div className="relative">
            <h2 className="brutal-text brutal-text-light text-3xl text-ev-neon-pink md:text-4xl lg:text-5xl">
              Our promise to you
            </h2>
            <p className="mt-8 text-lg md:text-xl font-bold leading-relaxed text-white/80 pl-4 md:pl-8 border-l-[3px] border-ev-neon-yellow/60">
              Elan Vey exists for the dreamers, the doers, the small shop
              owners, the students, the parents with side hustles, and anyone
              who&apos;s ever felt like their ideas deserve to be seen. We
              promise to always be honest, always be friendly, and always give
              you our best work. Your success is our success, and we&apos;ll
              treat every project with the same care we&apos;d give our own.
            </p>
            <div className="mt-8 flex items-center gap-4 pl-4 md:pl-8">
              <div className="flex -space-x-2">
                {founders.map((f) => (
                  <div
                    key={f.id}
                    className="flex h-10 w-10 items-center justify-center border-[3px] border-ev-black bg-ev-neon-cyan font-brutal text-xs"
                  >
                    {f.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                ))}
              </div>
              <p className="font-brutal text-xs uppercase text-ev-neon-yellow tracking-widest">
                — Elan Vey Founders
              </p>
            </div>
          </div>
          <span
            className="absolute -bottom-16 right-0 font-brutal text-8xl md:text-9xl text-ev-neon-yellow/20 leading-none select-none rotate-180"
            aria-hidden
          >
            &ldquo;
          </span>
        </div>
      </Section>

      <CTABlock
        dark={false}
        title="Work with the team"
        description="Connect with Elan Vey and start building something you'll be proud of."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/about" variant="secondary" size="lg">
          About Elan Vey
        </Button>
      </CTABlock>
    </>
  );
}
