import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Elan Vey privacy policy — how we look after your information.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

const privacySections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "When you get in touch with us, we collect only what we need to help you. This includes your name, email address, phone number, and any details you share about your project or questions. We also collect basic website visitor data like which pages people look at, so we can make our site better for everyone.",
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "We use your information to reply to your messages, do the work you've asked us to do, send you friendly updates about your project, and make our website and services work better for you. We only use your details for things you'd reasonably expect or if the law says we must.",
    ],
  },
  {
    id: "information-sharing",
    number: "03",
    title: "Information Sharing & Disclosure",
    paragraphs: [
      "We never sell your personal information to anyone — ever. Sometimes we work with trusted service providers who help us run our email, hosting, or analytics tools and they only see what they need to do their job. We'll also share information if the law requires us to by court order or similar legal requirement. If you're part of our marketing learning through Lavent Marketing, we may share your details with them only as needed for those opportunities.",
    ],
  },
  {
    id: "data-security",
    number: "04",
    title: "Keeping Your Data Safe",
    paragraphs: [
      "We take reasonable steps to protect your personal information from being seen, used, or changed without permission. That said, no method of sending things over the internet is 100% safe, so we can't guarantee absolute security — but we do our very best.",
    ],
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights & Choices",
    paragraphs: [
      "You have the right to see what information we hold about you, ask us to correct anything that's wrong, or ask us to delete your details if you no longer want us to have them. You can also opt out of marketing messages at any time. Just send us an email or give us a call and we'll sort it out straight away.",
    ],
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    paragraphs: [
      "Cookies are small text files stored on your device to help our website remember your preferences and understand how visitors use our site. You can turn cookies off in your browser settings any time — this might make some parts of the site not work as smoothly, though.",
    ],
  },
  {
    id: "childrens-privacy",
    number: "07",
    title: "Children's Privacy",
    paragraphs: [
      "Our services aren't aimed at children under the age of 13 and we don't knowingly collect personal information from anyone under 13. If you're a parent or guardian and believe your child has shared details with us, please get in touch and we will remove that information right away.",
    ],
  },
  {
    id: "policy-changes",
    number: "08",
    title: "Changes to This Policy",
    paragraphs: [
      "From time to time we may update this privacy policy. If we make important changes, we'll put a clear note on our website. By continuing to use our services after those changes, you accept the updated policy. The date at the top shows when it was last updated.",
    ],
  },
  {
    id: "contact-us",
    number: "09",
    title: "Contact Us About Privacy",
    paragraphs: [
      `Got questions about privacy, want to access, or just want a friendly chat about how we look after your data? Reach out anytime. Email us at ${siteConfig.contact.email}, call us on ${siteConfig.contact.phone}, or write to us at ${siteConfig.contact.address}. We try to reply to privacy questions within 30 days.`,
    ],
  },
];

const lastUpdated = "August 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        accent="pink"
        badge="Your Privacy Matters To Us"
      />
      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={70}>
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1 stagger-child">
              <div className="brutal-card-yellow p-6 hover-lift sticky top-28">
                <p className="font-brutal text-xs uppercase tracking-widest">
                  Table of Contents
                </p>
                <ul className="mt-6 space-y-3">
                  {privacySections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-center gap-2 font-bold text-sm transition-colors hover:text-ev-neon-pink"
                      >
                        <span className="font-brutal text-xs text-ev-neon-red group-hover:translate-x-1 transition-transform">
                          {s.number}
                        </span>
                        <span className="flex-1 leading-tight">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-8">
              <div className="stagger-child brutal-card">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rotate-[-5deg] border-[3px] border-black bg-ev-neon-yellow px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                    Last Updated: {lastUpdated}
                  </span>
                  <span className="inline-flex border-[3px] border-black bg-ev-neon-cyan px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                    Effective Immediately
                  </span>
                </div>
                <p className="mt-6 font-bold leading-relaxed text-ev-black/80">
                  This Privacy Policy explains how Elan Vey (&quot;we&quot;,
                  &quot;us&quot;, &quot;our&quot;) collects, uses, and looks after
                  personal information when you use our services, website, or get
                  in touch with us. By using our services, you agree to what
                  we describe in this policy. We always treat your information with
                  the same care we'd want for our own.
                </p>
              </div>

              {privacySections.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={`stagger-child brutal-card hover-lift ${
                    i % 3 === 1 ? "!bg-ev-neon-cream" : ""
                  } ${i % 3 === 2 ? "!bg-ev-neon-yellow" : ""}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-brutal text-5xl md:text-6xl text-ev-neon-pink/30">
                      {section.number}
                    </span>
                    <h2 className="brutal-text text-xl md:text-2xl text-ev-black flex-1">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-6 pl-0 md:pl-8 space-y-4">
                    {section.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="font-bold leading-relaxed text-ev-black/80"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
