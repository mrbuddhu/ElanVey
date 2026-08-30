import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Elan Vey privacy policy.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

const privacySections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "[INFORMATION WE COLLECT — Replace with details about the types of personal information collected, including contact details (name, email, phone), company information, project inquiry details, and any other data provided through forms, communications, or our website analytics.]",
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "[HOW WE USE INFORMATION — Replace with descriptions of how collected data is used: to respond to inquiries, deliver services (brand strategy, creative direction, subscription), communicate updates, improve our website and offerings, fulfill legal obligations, and with explicit consent for marketing purposes.]",
    ],
  },
  {
    id: "information-sharing",
    number: "03",
    title: "Information Sharing & Disclosure",
    paragraphs: [
      "[INFORMATION SHARING — Replace with details on third-party sharing: we do not sell personal data; data may be shared with trusted service providers (email, analytics, hosting) only as needed to operate our services; required legal disclosures; Lavent Marketing partnership data handling if applicable.]",
    ],
  },
  {
    id: "data-security",
    number: "04",
    title: "Data Security",
    paragraphs: [
      "[DATA SECURITY — Replace with details on technical and organizational security measures implemented to protect personal information against unauthorized access, alteration, disclosure, or destruction. Note that no method of transmission over the internet is 100% secure.]",
    ],
  },
  {
    id: "your-rights",
    number: "05",
    title: "Your Rights & Choices",
    paragraphs: [
      "[YOUR RIGHTS — Replace with description of individual rights under applicable law (GDPR, CCPA, etc.): access, correction, deletion, data portability, objection to processing, withdrawal of consent, right to lodge a complaint with supervisory authority, and contact method for exercising rights.]",
    ],
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    paragraphs: [
      "[COOKIES — Replace with cookie policy details: what cookies are used (essential, analytics, marketing), how to manage cookies via browser settings, third-party tools used (e.g., Google Analytics) and their opt-out links.]",
    ],
  },
  {
    id: "childrens-privacy",
    number: "07",
    title: "Children's Privacy",
    paragraphs: [
      "[CHILDREN'S PRIVACY — Replace with statement that services are not intended for children under 13 (or relevant age), we do not knowingly collect data from children, and contact procedure if you believe we have inadvertently collected such information.]",
    ],
  },
  {
    id: "policy-changes",
    number: "08",
    title: "Changes to This Policy",
    paragraphs: [
      "[POLICY CHANGES — Replace with statement that we may update this privacy policy periodically; the \"Last Updated\" date will be revised; material changes will be notified via prominent notice on our site or by email; continued use of services constitutes acceptance of revised policy.]",
    ],
  },
  {
    id: "contact-us",
    number: "09",
    title: "Contact Us",
    paragraphs: [
      `[CONTACT FOR PRIVACY — Replace with contact details for privacy-related questions or requests: Email ${siteConfig.contact.email}, Address ${siteConfig.contact.address}, Phone ${siteConfig.contact.phone}. Response timeframe (typically within 30 days) for rights requests.]`,
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
        badge="Your Privacy Matters"
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
                  [INTRO PARAGRAPH — Replace with introduction explaining that
                  this Privacy Policy describes how Elan Vey (&quot;we,&quot;
                  &quot;us,&quot; &quot;our&quot;) collects, uses, discloses, and
                  safeguards personal information when you use our services,
                  website, or communicate with us. By using our services, you
                  agree to the practices described in this policy.]
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
