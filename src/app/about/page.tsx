import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { founders } from "@/data/founders";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Elan Vey — who we are, what drives us, and how we help people just like you bring their ideas to life.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const values = [
  {
    title: "Mission",
    content:
      "To give every person and small idea the creative tools and honest guidance they need to stand out, grow, and feel proud of what they share with the world.",
    accent: "pink" as const,
  },
  {
    title: "Vision",
    content:
      "A world where great design and smart planning aren&apos;t luxuries for a select few — but something anyone with a dream can access.",
    accent: "cyan" as const,
  },
  {
    title: "Philosophy",
    content:
      "We believe good work comes from care, not complexity. Every choice — from the colors we pick to the words we write — should have a clear, honest purpose.",
    accent: "yellow" as const,
  },
  {
    title: "Approach",
    content:
      "We combine bold, eye-catching design with down-to-earth planning. No confusing jargon. No copy-paste templates. Every project is custom-made just for you.",
    accent: "cream" as const,
  },
];

const stats = [
  { number: "50+", label: "Happy Clients", color: "bg-ev-neon-pink text-white" },
  { number: "7+", label: "Years Active", color: "bg-ev-neon-cyan" },
  { number: "100%", label: "Client Retention", color: "bg-ev-neon-yellow" },
  { number: "2×", label: "Avg. Growth", color: "bg-ev-neon-cream" },
];

const differentiators = [
  {
    title: "Bold, eye-catching designs",
    icon: "◆",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Simple, honest planning first",
    icon: "▲",
    color: "bg-ev-neon-cyan",
  },
  {
    title: "Lavent Marketing learning access",
    icon: "●",
    color: "bg-ev-neon-yellow",
  },
  {
    title: "Month-to-month subscription plan",
    icon: "■",
    color: "bg-ev-neon-cream",
  },
  {
    title: "Top quality in every single thing we make",
    icon: "★",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Custom made — never generic templates",
    icon: "✦",
    color: "bg-ev-neon-cyan",
  },
];

const founderBadgeColors = ["bg-ev-neon-yellow", "bg-ev-neon-cyan"];
const founderPhotoColors = ["bg-ev-neon-cyan", "bg-ev-neon-pink"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built for people like you"
        subtitle="Elan Vey lives where creative spark meets clear thinking — helping you show the world who you are and where you&apos;re going."
        large
        accent="mixed"
        badge="Here For You Since Day One"
      />

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={70}>
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-12 md:pb-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`stagger-child stat-pill ${stat.color} hover-lift`}
              >
                <span className="font-brutal text-3xl md:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-2 text-xs font-brutal uppercase tracking-wider opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-on-scroll-slow">
              <h2 className="brutal-text brutal-text-charcoal text-2xl text-ev-neon-pink md:text-4xl">
                Our story
              </h2>
              <div className="mt-8 space-y-6 font-bold leading-relaxed text-ev-black/80">
                <p>
                  Elan Vey started with a simple belief: everyone deserves a
                  creative partner who actually listens. Not someone who talks
                  in confusing terms. Not one-size-fits-all templates. A real
                  team invested in your success, whatever that means to you.
                </p>
                <p>
                  We saw too many hardworking people struggle because they
                  didn&apos;t know how to present themselves online. So we set
                  out to change that — making great design and smart strategy
                  friendly, affordable, and accessible to everyone.
                </p>
                <p>
                  Today, we work with individuals, families, small shop owners,
                  students, and dreamers from all walks of life — giving them
                  the design help, planning, and exclusive real-world marketing
                  opportunities through our connection with Lavent Marketing.
                </p>
              </div>
            </div>
            <div className="relative animate-on-scroll-slow">
              <BrutalPanel
                variant="yellow"
                className="flex aspect-[4/5] flex-col justify-between hover-lift"
              >
                <p className="font-brutal text-8xl text-ev-neon-red opacity-40">
                  EV
                </p>
                <p className="font-brutal text-sm uppercase tracking-widest text-ev-black">
                  Creative · Honest · For Everyone
                </p>
              </BrutalPanel>
              <div
                className="absolute -bottom-5 -right-5 hidden aspect-square w-24 rotate-[-10deg] border-[3px] border-black bg-ev-neon-pink shadow-brutal md:block float-gentle"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section tone="dark" staggerChildren staggerDelay={90}>
        <div className="container-content">
          <p className="brutal-label-dark stagger-child">What drives us</p>
          <h2 className="brutal-text brutal-text-pink mb-12 mt-4 text-3xl text-ev-neon-yellow md:text-5xl stagger-child">
            Mission & values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`stagger-child border-[3px] p-6 md:p-8 hover-lift ${
                  item.accent === "pink"
                    ? "border-ev-neon-pink"
                    : item.accent === "cyan"
                      ? "border-ev-neon-cyan"
                      : item.accent === "yellow"
                        ? "border-ev-neon-yellow"
                        : "border-white"
                }`}
              >
                <span
                  className={`font-brutal text-5xl ${
                    item.accent === "pink"
                      ? "text-ev-neon-pink"
                      : item.accent === "cyan"
                        ? "text-ev-neon-cyan"
                        : item.accent === "yellow"
                          ? "text-ev-neon-yellow"
                          : "text-white"
                  }`}
                >
                  0{i + 1}
                </span>
                <h3 className="brutal-text brutal-text-grey mt-2 text-xl text-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 font-bold leading-relaxed text-white/70">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="stamp-edge-top" aria-hidden />

      <Section tone="paper" staggerChildren staggerDelay={70}>
        <div className="container-content max-w-5xl">
          <h2 className="brutal-text brutal-text-orange text-2xl text-ev-neon-yellow md:text-4xl stagger-child">
            What sets us apart
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 stagger-child">
            Elan Vey isn&apos;t another big agency making promises we can&apos;t
            keep. We&apos;re a friendly creative team focused on real quality,
            honest conversations, and giving you real opportunities through
            Lavent Marketing.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className={`stagger-child flex items-start gap-4 border-[3px] border-black p-5 shadow-brutal hover-lift ${item.color}`}
              >
                <span className="font-brutal text-2xl flex-shrink-0">
                  {item.icon}
                </span>
                <p className="font-brutal text-sm uppercase leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="checkerboard-divider" aria-hidden />

      <Section id="founders" tone="paper" className="!pt-0" staggerChildren staggerDelay={120}>
        <div className="container-content">
          <div className="mb-12 md:mb-16 stagger-child">
            <p className="brutal-label">The Team</p>
            <h2 className="brutal-text brutal-text-pink mt-4 text-3xl text-ev-neon-yellow md:text-4xl lg:text-5xl">
              Meet the people behind Elan Vey
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80">
              Real people, honest values, and a true passion for helping others
              bring their ideas to life.
            </p>
          </div>
          <div className="space-y-20 md:space-y-24">
            {founders.map((founder, i) => (
              <article
                key={founder.id}
                className={`stagger-child grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr] relative animate-on-scroll-slow">
                  <div
                    className={`brutal-card flex aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] items-center justify-center hover-lift relative overflow-hidden ${founderPhotoColors[i % founderPhotoColors.length]}`}
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
                    className={`absolute -top-4 -right-4 rotate-[12deg] hidden border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal md:inline-block float-medium ${founderBadgeColors[i % founderBadgeColors.length]}`}
                  >
                    {founder.role}
                  </span>
                </div>

                <div className="lg:[direction:ltr] animate-on-scroll-slow">
                  <div className="md:hidden mb-4">
                    <span
                      className={`inline-block rotate-[-5deg] border-[3px] border-black px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal ${founderBadgeColors[i % founderBadgeColors.length]}`}
                    >
                      {founder.role}
                    </span>
                  </div>
                  <p className="hidden brutal-label md:block">{founder.role}</p>
                  <h2 className="brutal-text brutal-text-pink mt-4 text-3xl text-ev-neon-yellow md:text-4xl lg:text-5xl">
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
            <h2 className="brutal-text brutal-text-charcoal text-3xl text-ev-neon-pink md:text-4xl lg:text-5xl">
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
        title="Want to work with us?"
        description="Let&apos;s chat about how Elan Vey can help you take the next step."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/about#founders" variant="secondary" size="lg">
          Meet the Founders
        </Button>
      </CTABlock>
    </>
  );
}
