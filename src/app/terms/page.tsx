import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Elan Vey terms of service.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

const termsSections = [
  {
    id: "acceptance-terms",
    number: "01",
    title: "Acceptance of Terms",
    paragraphs: [
      "By using Elan Vey&apos;s website or services, or agreeing to work with us, you confirm that you&apos;ve read these terms, understood them, and agree to follow them along with all applicable laws and regulations. If you don&apos;t agree with any part, please don&apos;t use our services.",
    ],
  },
  {
    id: "services-description",
    number: "02",
    title: "What We Offer",
    paragraphs: [
      "Elan Vey provides creative design work, planning help, online growth support, marketing learning opportunities connected to Lavent Marketing, and our monthly subscription partnership. The exact details of each project, what you&apos;ll get, and when you&apos;ll get it are agreed between us in writing before we start work.",
    ],
  },
  {
    id: "user-obligations",
    number: "03",
    title: "Your Responsibilities",
    paragraphs: [
      "When working together, we ask that you provide accurate information, reply to our questions when promised, send us any materials we need on time, make sure everything you give us doesn&apos;t break any rules or laws, work with us openly and in good faith, and pay any payments on the dates we agree.",
    ],
  },
  {
    id: "payment-terms",
    number: "04",
    title: "Payment Terms",
    paragraphs: [
      "Pricing and payment dates are agreed before work starts. For one-off projects we typically ask a deposit to begin, with the final balance due on completion. For subscriptions, payment is due monthly in advance. We accept bank transfers and UPI payments. If payments are late, we may pause work until payment is received. If you have a billing question or issue, just let us know and we&apos;ll sort it out together.",
    ],
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Who Owns What",
    paragraphs: [
      "Anything you already own, you still own. Once we&apos;ve received full payment for a project, you own the final work created especially for you. We keep ownership of our ways of working, tools, templates, and the right to show completed work in our portfolio unless you specifically ask us not to.",
    ],
  },
  {
    id: "confidentiality",
    number: "06",
    title: "Keeping Things Private",
    paragraphs: [
      "Both sides agree to keep confidential any private details shared while working together — things like plans and ideas, pricing, client lists, work secrets, and contact information. We don&apos;t share these unless they&apos;re already public, the law requires us, or both sides agree in writing. This applies even after work finishes.",
    ],
  },
  {
    id: "warranties-disclaimers",
    number: "07",
    title: "What We Promise",
    paragraphs: [
      "We promise to perform our services in a professional, workmanlike manner and do our very best for you. Everything else is provided as-is to the fullest extent the law allows. We don&apos;t promise specific results as results depend on many factors outside our control.",
    ],
  },
  {
    id: "limitation-liability",
    number: "08",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent allowed by law, neither side will be liable for indirect or special damages things like lost profits, lost data, or work interruption. Elan Vey&apos;s total liability under these terms is limited to whatever you actually paid us in the 12 months before the issue arose.",
    ],
  },
  {
    id: "termination",
    number: "09",
    title: "Ending the Agreement",
    paragraphs: [
      "For one-off projects: either side can end things if the other side seriously breaks the agreement and doesn&apos;t fix it within 30 days of being told in writing. For subscriptions: either side can end by giving 30 days written notice. Any money already paid up to that point stays paid. Parts of this agreement that should logically continue like confidentiality, ownership, and liability survive termination.",
    ],
  },
  {
    id: "governing-law",
    number: "10",
    title: "Governing Law & Disputes",
    paragraphs: [
      "These Terms are governed by the laws of India, specifically the State of Odisha. If a disagreement comes up, we&apos;ll first try to sort it out friendly between ourselves. If that doesn&apos;t work, it will be resolved through the courts of Odisha, India.",
    ],
  },
  {
    id: "miscellaneous",
    number: "11",
    title: "Other Important Bits",
    paragraphs: [
      "If any part of these terms turns out to be unenforceable, the rest still stands. Together with any signed project agreements we sign, these terms make up the whole agreement between us. Elan Vey can transfer our responsibilities if needed, but you can&apos;t without our written permission. We&apos;re each independent contractors, not employees, partners, or employers of each other. Neither side will be delayed by things outside our reasonable control like natural disasters or government actions.",
    ],
  },
  {
    id: "contact-terms",
    number: "12",
    title: "Questions About These Terms",
    paragraphs: [
      `Got any questions about these terms? Don&apos;t be shy — contact us at ${siteConfig.contact.email}, call ${siteConfig.contact.phone}, or send a letter to ${siteConfig.contact.address}. We&apos;ll reply to genuine questions as quickly as we can.`,
    ],
  },
];

const lastUpdated = "August 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
        accent="yellow"
        badge="Fair Terms Before We Get Started"
      />
      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={70}>
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1 stagger-child">
              <div className="brutal-card p-6 hover-lift sticky top-28">
                <p className="font-brutal text-xs uppercase tracking-widest">
                  Table of Contents
                </p>
                <ul className="mt-6 space-y-3">
                  {termsSections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-center gap-2 font-bold text-sm transition-colors hover:text-ev-neon-pink"
                      >
                        <span className="font-brutal text-xs text-ev-neon-red group-hover:translate-x-1 transition-transform">
                          {s.number}
                        </span>
                        <span className="flex-1 leading-tight">
                          {s.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-8">
              <div className="stagger-child brutal-card-yellow">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex rotate-[-5deg] border-[3px] border-black bg-ev-neon-pink text-ev-neon-yellow px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                    Last Updated: {lastUpdated}
                  </span>
                  <span className="inline-flex border-[3px] border-black bg-white px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                    Binding Agreement
                  </span>
                  <span className="inline-flex border-[3px] border-black bg-ev-neon-cyan px-4 py-2 font-brutal text-xs uppercase tracking-wider shadow-brutal">
                    For Everyone Who Uses Us
                  </span>
                </div>
                <p className="mt-6 font-bold leading-relaxed text-ev-black/80">
                  These Terms of Service (&quot;Terms&quot;) govern your access to and
                  use of the Elan Vey website, products, and services. Please read them
                  carefully before using our Services. Using our services means you
                  accept these Terms. They apply to all visitors, clients, and
                  anyone who accesses or uses the Services.
                </p>
              </div>

              {termsSections.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={`stagger-child brutal-card hover-lift ${
                    i % 3 === 1 ? "!bg-ev-neon-yellow" : ""
                  } ${i % 3 === 2 ? "!bg-ev-neon-cream" : ""}`}
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
