import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RacetrackStrip } from "@/components/ui/RacetrackStrip";
import { SubscriptionFaq } from "@/components/subscription/SubscriptionFaq";
import { subscriptionBenefits } from "@/data/subscription";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Subscription",
  description:
    "The Elan Vey subscription — steady guidance, great designs, and growth help, month after month.",
  alternates: { canonical: `${siteConfig.url}/subscription` },
};

const paperBg = {
  backgroundImage: "url('/images/Bg_paper.jpg')",
  backgroundSize: "550px auto",
  backgroundRepeat: "repeat" as const,
};

const yellowShadow = { textShadow: "3px 3px 0 #FF1744, 6px 6px 0 #660022" };

const benefitAccents = [
  { icon: "◆", color: "bg-ev-neon-pink text-white" },
  { icon: "✦", color: "bg-ev-neon-cyan" },
  { icon: "▲", color: "bg-ev-neon-yellow" },
  { icon: "●", color: "bg-ev-neon-pink text-white" },
  { icon: "★", color: "bg-ev-neon-cyan" },
  { icon: "■", color: "bg-ev-neon-yellow" },
];

const howItWorks = [
  {
    step: "01",
    title: "Reach Out",
    desc: "Call us or send a message. Tell us about your ideas, your goals, and what you'd like help with.",
  },
  {
    step: "02",
    title: "Get Started",
    desc: "We plan everything together, set simple milestones, and start our partnership right away.",
  },
  {
    step: "03",
    title: "Grow With Us",
    desc: "Month after month — ongoing support, creative help, and steady growth together.",
  },
];



export default function SubscriptionPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-grid-lines-light pt-28 pb-14 md:pt-36 md:pb-20"
        style={paperBg}
      >
        <div
          className="pointer-events-none absolute right-8 top-24 hidden aspect-square w-16 rotate-[10deg] border-[3px] border-ev-neon-yellow bg-ev-neon-yellow/30 shadow-brutal md:block float-gentle"
          aria-hidden
        />
        <div className="container-content relative px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="hero-stagger-label mb-6 flex justify-center">
              <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-ev-neon-cyan px-5 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                Limited Spots · Chat With Us Today
              </span>
            </div>
            <p className="hero-stagger-label font-brutal text-xs uppercase tracking-[0.3em] text-ev-neon-pink">
              Subscription
            </p>
            <h1 className="hero-stagger-title mt-6 font-brutal uppercase leading-[0.95] text-ev-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your ongoing
              <br className="hidden md:block" /> creative{" "}
              <span className="text-ev-neon-pink">partner</span>
            </h1>
            <p className="hero-stagger-subtitle mx-auto mt-8 max-w-2xl text-lg font-bold leading-relaxed text-ev-black/80 md:text-xl">
              The Elan Vey subscription gives you steady guidance, great
              designs, and growth help — month after month, with no stress.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <div
            className="relative w-full rounded-[28px] border-[3px] border-black bg-black md:max-w-4xl md:mx-auto"
            style={{
              boxShadow:
                "3px 3px 0 #FFE600, 6px 6px 0 #FF1744, 10px 10px 0 #000000",
            }}
          >
            <div className="box-content w-full aspect-[16/9] overflow-hidden rounded-[25px] bg-black">
              <video
                className="block h-full w-full object-contain"
                src="/videos/Subscription.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Elan Vey subscription video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED + PRICING (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <h2 className="font-brutal text-2xl uppercase text-ev-neon-pink md:text-4xl">
                What&apos;s included
              </h2>
              <p className="mt-6 text-base font-bold leading-relaxed text-ev-black/80 md:text-lg">
                Your subscription gives you ongoing access to strategy, creative, editing, design, feedback, testing, analytics, collaborations & growth guidance all built around you, your goals, and your platform.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Personalised Strategy & Direction",
                  "Scripting & Content Development",
                  "Editing & Creative Support",
                  "Titles, Thumbnails & Captions",
                  "Analytics & Actionable Feedback",
                  "Ongoing Support & Optimisation",
                  "Flexible Subscription: Cancel anytime!"
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-bold"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="font-brutal text-xl text-ev-neon-cyan">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" className="relative">
              <div className="relative overflow-hidden rounded-[1.5rem] border-[3px] border-black bg-ev-neon-yellow p-7 shadow-brutal-xl hover-lift md:p-9 text-ev-black">
                <div className="pointer-events-none absolute inset-0 rounded-[1.35rem]" aria-hidden style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0) 60%)"
                }} />
                <div className="relative z-10">
                  <span className="ribbon-badge bg-ev-neon-pink text-ev-neon-yellow">
                    Best Value
                  </span>
                  <p className="font-brutal text-xs uppercase tracking-widest text-ev-black">
                    Investment
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="font-brutal text-3xl text-ev-neon-red md:text-4xl">
                      ₹1799/month
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-bold text-ev-black/80">
                    Monthly · No lock-in contracts
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-ev-neon-cream px-3 py-1">
                    <span className="font-brutal text-xs text-ev-neon-red">
                      SAVE 20%
                    </span>
                    <span className="text-xs font-bold text-ev-black">
                      vs. one-off projects
                    </span>
                  </div>
                  <div className="mt-8">
                    <Button href="/waitlist" className="w-full">
                      Join the Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT HAPPENS AFTER YOU JOIN (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mb-12 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
              style={yellowShadow}
            >
              WHAT HAPPENS AFTER YOU JOIN?
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={0 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-white"
                style={{
                  background: "linear-gradient(135deg, #FF1744 0%, #b91c3d 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 0 rgba(0,0,0,0.35)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.16) 22%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(255, 70, 110, 0.55) 0%, rgba(120, 0, 30, 0.35) 55%, rgba(40, 0, 12, 0.2) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-[#FFE600]">01</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      TELL US WHAT YOU WANT TO DO
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    Got an idea? A YouTube channel? A business? A product? Music? Art? A personal brand? Or haven&apos;t even started yet? Tell us everything through our Form — your goals, needs, expectations, niche, experience, platform, and what you want to achieve.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-ev-black"
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #0ea5c8 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.65), inset -1px -1px 0 rgba(0,0,0,0.28)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.26) 22%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(140, 240, 255, 0.55) 0%, rgba(0, 110, 145, 0.4) 55%, rgba(0, 60, 80, 0.22) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-ev-neon-pink">02</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      WE FIGURE OUT WHERE TO BEGIN
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    You don&apos;t need a strategy or a content plan. You don&apos;t even need to know exactly what you&apos;re doing yet. That&apos;s what you have us for. We understand where you are and figure out what needs to happen next.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-ev-black"
                style={{
                  background: "linear-gradient(135deg, #FFE600 0%, #e6c800 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.72), inset -1px -1px 0 rgba(0,0,0,0.25)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.32) 22%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(255, 250, 150, 0.55) 0%, rgba(200, 160, 0, 0.35) 55%, rgba(130, 100, 0, 0.18) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.48)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-ev-neon-pink">03</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      YOU BRING THE IDEAS
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    You bring the vision and ideas, your preferable area/niche/category of content. You create the thing, record the video, build the product, make the art, or start the business. You stay focused on what you&apos;re good at.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={3 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-white"
                style={{
                  background: "linear-gradient(135deg, #FF1744 0%, #b91c3d 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.55), inset -1px -1px 0 rgba(0,0,0,0.35)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0.16) 22%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(255, 70, 110, 0.55) 0%, rgba(120, 0, 30, 0.35) 55%, rgba(40, 0, 12, 0.2) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-[#FFE600]">04</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      WE BUILD YOUR PATH
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    We create a personalised strategy around your vision — how you should create, who you should reach, how you should present it, and what direction makes sense for you.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={4 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-ev-black"
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #0ea5c8 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.65), inset -1px -1px 0 rgba(0,0,0,0.28)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.26) 22%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(140, 240, 255, 0.55) 0%, rgba(0, 110, 145, 0.4) 55%, rgba(0, 60, 80, 0.22) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-ev-neon-pink">05</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      YOUR TEAM KICKS IN
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    This is where we take over. Scripting, editing, thumbnails, titles, captions, research, positioning, strategy, analytics, and optimisation — whatever your content needs, we work on it with you.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={5 * 70}>
              <div
                className="relative overflow-hidden rounded-[1rem] border-[3px] border-black p-6 shadow-brutal hover-lift md:p-8 text-ev-black"
                style={{
                  background: "linear-gradient(135deg, #FFE600 0%, #e6c800 100%)",
                  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.72), inset -1px -1px 0 rgba(0,0,0,0.25)",
                }}
              >
                <div className="pointer-events-none absolute inset-0" aria-hidden style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.32) 22%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 58%), linear-gradient(315deg, rgba(255, 250, 150, 0.55) 0%, rgba(200, 160, 0, 0.35) 55%, rgba(130, 100, 0, 0.18) 100%)",
                }} />
                <div className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)]" aria-hidden style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.48)"
                }} />
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="font-brutal text-5xl md:text-6xl text-ev-neon-pink">06</span>
                    <h3 className="pt-1 font-brutal text-base md:text-lg uppercase leading-[0.95]">
                      WE REVIEW &amp; OPTIMISE
                    </h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-relaxed opacity-95">
                    We look at what happens after you put your content out. We analyse the response, identify what&apos;s working, figure out what isn&apos;t, and adjust the strategy accordingly. Your vision gets a team behind it for as long as you&apos;re building it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* ============ HOW IT WORKS (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mb-12 font-brutal text-3xl uppercase text-ev-neon-pink md:text-5xl">
              How it works
            </h2>
          </Reveal>
          <div className="grid items-start gap-6 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 90}
              >
                <div className="relative overflow-hidden rounded-[1.25rem] border-[3px] border-black bg-ev-neon-cream p-6 shadow-brutal hover-lift md:p-8 text-ev-black">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.1rem]" aria-hidden style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 60%)"
                  }} />
                  <div className="relative z-10">
                    <span className="font-brutal text-5xl text-ev-neon-pink md:text-6xl">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-brutal text-xl uppercase text-ev-black md:text-2xl leading-[0.95]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-bold leading-relaxed text-ev-black/80 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <RacetrackStrip />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
        <div className="container-content max-w-3xl px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2
              className="mb-12 font-brutal text-3xl uppercase text-ev-neon-yellow md:text-5xl"
              style={yellowShadow}
            >
              Common questions
            </h2>
          </Reveal>
          <Reveal>
            <SubscriptionFaq />
          </Reveal>
        </div>
      </section>
      <RacetrackStrip />
      {/* ============ CTA (paper) ============ */}
      <section
        className="relative overflow-hidden py-16 text-center md:py-24"
        style={paperBg}
      >
        <div className="container-content px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-brutal text-3xl uppercase text-ev-neon-pink sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to subscribe?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-bold text-ev-black/80 md:text-lg">
              Take the first step toward steady, worry-free creative growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
