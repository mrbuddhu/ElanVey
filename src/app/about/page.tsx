import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";
import { CTABlock } from "@/components/ui/CTABlock";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
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
      "A world where great design and smart planning aren't luxuries for a select few — but something anyone with a dream can access.",
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built for people like you"
        subtitle="Elan Vey lives where creative spark meets clear thinking — helping you show the world who you are and where you're going."
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
              <h2 className="brutal-text text-2xl text-ev-neon-pink md:text-4xl">
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
          <h2 className="brutal-text brutal-text-light mb-12 mt-4 text-3xl text-ev-neon-yellow md:text-5xl stagger-child">
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
                <h3 className="brutal-text brutal-text-light mt-2 text-xl text-white md:text-2xl">
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
          <h2 className="brutal-text text-2xl text-ev-neon-yellow md:text-4xl stagger-child">
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

      <CTABlock
        dark={false}
        title="Want to work with us?"
        description="Let's chat about how Elan Vey can help you take the next step."
      >
        <Button href="/contact" size="lg">
          Get in Touch
        </Button>
        <Button href="/founders" variant="secondary" size="lg">
          Meet the Founders
        </Button>
      </CTABlock>
    </>
  );
}
