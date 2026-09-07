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
    "Elan Vey exists for people who have a vision but don&apos;t have a path to make the world see it.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const differentiators = [
  {
    title: "Built for every kind of dream — business, skill, art or idea.",
    icon: "◆",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Bold, eye-catching design — no boring templates.",
    icon: "▲",
    color: "bg-ev-neon-cyan",
  },
  {
    title: "Real marketing access via our Lavent Marketing connection.",
    icon: "●",
    color: "bg-ev-neon-yellow",
  },
  {
    title: "Simple, honest planning — no confusing jargon.",
    icon: "■",
    color: "bg-ev-neon-cream",
  },
  {
    title: "Full content journey: ideas → creation → posting → growth.",
    icon: "★",
    color: "bg-ev-neon-pink text-white",
  },
  {
    title: "Custom-made around you, not generic best-practice checklists.",
    icon: "✦",
    color: "bg-ev-neon-cyan",
  },
];

const sloganBadgeColors = [
  "bg-ev-neon-pink text-white",
  "bg-ev-neon-cyan",
  "bg-ev-neon-yellow",
  "bg-ev-neon-cream",
];

const slogans = [
  "We Make Good Look Unmissable.",
  "Your Vision. Our Visionary Chaos.",
  "Less &quot;Marketing.&quot; More &quot;Damn, Who Made This?&quot;",
  "Your Voice — Louder, Bolder, Seen.",
];

const values = [
  {
    title: "Our Mission",
    content:
      "Turn ideas into content. Turn content into a presence. We take care of the whole content game — from what to create to how to put it out there and make it better.",
    accent: "pink" as const,
  },
  {
    title: "Philosophy",
    content:
      "We believe everyone has something worth sharing. Content isn&apos;t about being the youngest, having the biggest following, or being perfect on camera. It&apos;s about having an idea, finding your own voice, and knowing how to bring it to life.",
    accent: "cyan" as const,
  },
  {
    title: "Vision",
    content:
      "To create a world where everyone has the confidence to create, share, and grow. No matter your age or experience, we want to make it easier for people to put their ideas out there, find their people, and build something of their own.",
    accent: "yellow" as const,
  },
  {
    title: "Approach",
    content:
      "You bring the personality. We build the presence. We understand what makes you different and turn it into content that feels like you. From ideas and creation to posting, branding, and growth, we take care of the content journey.",
    accent: "cream" as const,
  },
];

const founderBadgeColors = ["bg-ev-neon-yellow", "bg-ev-neon-cyan"];
const founderPhotoColors = ["bg-ev-neon-cyan", "bg-ev-neon-pink"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="The World Doesn&apos;t Discover What It Can&apos;t See."
        subtitle="Elan Vey exists for people who have a vision, but don&apos;t have a path to make the world see it."
        large
        accent="mixed"
        badge="Here For You Since Day One"
      />

      {/* --- "What sets us apart?" section --- */}
      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={70}>
        <div className="container-content">
          <div className="max-w-5xl mx-auto">
            <h2 className="brutal-text brutal-text-charcoal text-2xl text-ev-neon-pink md:text-4xl stagger-child">
              What sets us apart?
            </h2>
            <p className="mt-6 text-lg md:text-xl font-bold leading-relaxed text-ev-black/80 stagger-child max-w-4xl">
              Elan Vey is built for anyone with something worth putting into the world — a product, business, skill, idea, craft, or personal vision — but without the time, expertise, or path to present it the way it deserves.
            </p>

            {/* 6 differentiator cards */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 staggerChildren">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  className={`stagger-child flex items-start gap-4 border-[3px] border-black p-5 sm:p-6 shadow-brutal hover-lift ${item.color}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="font-brutal text-2xl md:text-3xl flex-shrink-0">
                    {item.icon}
                  </span>
                  <p className="font-brutal text-sm md:text-base uppercase leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Slogan banners (big, impactful) */}
            <div className="mt-16 md:mt-20 space-y-5 md:space-y-6 lg:space-y-8 staggerChildren">
              {slogans.map((slogan, i) => (
                <div
                  key={slogan}
                  className={`stagger-child border-[3px] border-black px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 lg:px-20 lg:py-14 shadow-brutal hover-lift ${sloganBadgeColors[i % sloganBadgeColors.length]}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p
                    className="font-brutal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase leading-[0.95] tracking-tight text-center"
                    dangerouslySetInnerHTML={{ __html: slogan }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* EV stamp block */}
          <div className="mt-20 md:mt-28 mx-auto grid gap-12 lg:grid-cols-2 items-center max-w-6xl animate-on-scroll-slow">
            <div className="space-y-6 md:space-y-8 font-bold leading-relaxed text-ev-black/80">
              <p>
                We started Elan Vey because the best content game in the world should
                not be reserved for people who already know how to play it.
              </p>
              <p>
                If you&apos;re holding an idea, a skill, a shop, a craft, or even just a
                feeling that the world should know who you are — you&apos;re exactly who
                we&apos;re here for.
              </p>
              <p>
                No confusing terms. No agency-sized promises. Just a real team
                that actually listens and a whole real-world marketing connection
                through Lavent Marketing that keeps the learning honest.
              </p>
            </div>
            <div className="relative animate-on-scroll-slow mx-auto">
              <BrutalPanel
                variant="yellow"
                className="flex aspect-[4/5] w-full max-w-sm flex-col justify-between hover-lift"
              >
                <p className="font-brutal text-8xl md:text-9xl text-ev-neon-red opacity-40">
                  EV
                </p>
                <p className="font-brutal text-sm md:text-base uppercase tracking-widest text-ev-black">
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

      {/* --- Mission / Philosophy / Vision / Approach --- */}
      <Section tone="dark" staggerChildren staggerDelay={90}>
        <div className="container-content">
          <p className="brutal-label-dark stagger-child">What drives us</p>
          <h2 className="brutal-text brutal-text-pink mb-12 mt-4 text-3xl text-ev-neon-yellow md:text-5xl stagger-child">
            Mission &amp; values
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
                  className={`font-brutal text-5xl md:text-6xl ${
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
                <h3 className="brutal-text brutal-text-grey mt-2 text-xl text-white md:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 font-bold leading-relaxed text-white/75 md:text-lg lg:text-xl">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="stamp-edge-top" aria-hidden />

      {/* --- Founders Section --- */}
      <Section id="founders" tone="paper" staggerChildren staggerDelay={120}>
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
