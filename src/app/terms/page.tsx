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
      "[ACCEPTANCE — Replace with text stating that by accessing or using Elan Vey's website, services, or engaging in any service agreement, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you may not use our services.]",
    ],
  },
  {
    id: "services-description",
    number: "02",
    title: "Services Description",
    paragraphs: [
      "[SERVICES — Replace with description of services offered: brand strategy, creative direction, digital growth, marketing partnership opportunities, and subscription-based ongoing creative partnership. Specific scope, deliverables, and timelines are defined in individual service agreements or statements of work (SOWs).]",
    ],
  },
  {
    id: "user-obligations",
    number: "03",
    title: "Client Obligations",
    paragraphs: [
      "[CLIENT OBLIGATIONS — Replace with descriptions of client responsibilities: provide accurate information, materials and feedback in a timely manner, ensure all materials and content provided do not infringe third-party rights, cooperate in good faith throughout the engagement, and make required payments on time.]",
    ],
  },
  {
    id: "payment-terms",
    number: "04",
    title: "Payment Terms",
    paragraphs: [
      "[PAYMENT — Replace with details on payment: pricing structure, payment schedule (e.g., 50% deposit for projects, monthly in advance for subscriptions), accepted payment methods, late payment fees or consequences of non-payment, currency, and invoicing procedures. Refund policy and dispute resolution for billing issues.]",
    ],
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property Rights",
    paragraphs: [
      "[IP — Replace with IP ownership terms: Client retains ownership of their pre-existing materials and brand assets. Upon full payment, client receives ownership of final deliverables created specifically for the client (work made for hire as applicable). Elan Vey retains rights to its process, tools, methodology, templates, and portfolio display rights unless otherwise agreed.]",
    ],
  },
  {
    id: "confidentiality",
    number: "06",
    title: "Confidentiality",
    paragraphs: [
      "[CONFIDENTIALITY — Replace with mutual non-disclosure obligations: both parties agree to hold in strict confidence all non-public business, technical, financial, client, and proprietary information disclosed during the engagement. Exceptions: publicly available information, required legal disclosure, prior written consent. Obligations survive termination.]",
    ],
  },
  {
    id: "warranties-disclaimers",
    number: "07",
    title: "Warranties & Disclaimers",
    paragraphs: [
      "[DISCLAIMERS — Replace with: Services provided on an \"as is, as available\" basis. Elan Vey warrants services will be performed in a professional and workmanlike manner. ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, ARE DISCLAIMED TO THE MAXIMUM EXTENT PERMITTED BY LAW, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.]",
    ],
  },
  {
    id: "limitation-liability",
    number: "08",
    title: "Limitation of Liability",
    paragraphs: [
      "[LIABILITY — Replace with: TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE. TOTAL AGGREGATE LIABILITY OF ELAN VEY UNDER THESE TERMS IS LIMITED TO THE TOTAL AMOUNTS PAID BY CLIENT TO ELAN VEY IN THE 12 MONTHS PRECEDING THE CLAIM.]",
    ],
  },
  {
    id: "termination",
    number: "09",
    title: "Termination",
    paragraphs: [
      "[TERMINATION — Replace with: Project engagements: termination for cause upon material breach uncured within 30 days written notice. Subscriptions: either party may terminate by providing [30/60] days written notice; refunds (if any) are prorated. Sections that logically survive (IP, confidentiality, liability, payment owed) will survive termination.]",
    ],
  },
  {
    id: "governing-law",
    number: "10",
    title: "Governing Law & Disputes",
    paragraphs: [
      "[GOVERNING LAW — Replace with: These Terms and any disputes arising therefrom shall be governed by and construed in accordance with the laws of [JURISDICTION], without regard to its conflict of law principles. Any dispute shall first be resolved through good-faith negotiation, then mediation, and if unresolved, through binding arbitration or courts of [JURISDICTION].]",
    ],
  },
  {
    id: "miscellaneous",
    number: "11",
    title: "Miscellaneous",
    paragraphs: [
      "[MISCELLANEOUS — Replace with: Severability (if a provision is unenforceable, the remaining provisions remain in effect); Entire Agreement (these terms, together with any executed SOW or service agreement, constitute the entire agreement between the parties); No Waiver; Assignment (Elan Vey may assign, client may not without prior written consent); Independent contractor relationship; Force Majeure; Notices in writing.]",
    ],
  },
  {
    id: "contact-terms",
    number: "12",
    title: "Contact",
    paragraphs: [
      `[CONTACT FOR TERMS — Replace with: For any questions about these Terms, please contact us at ${siteConfig.contact.email} or by mail at ${siteConfig.contact.address}. We will endeavor to respond to legitimate inquiries within a reasonable timeframe.]`,
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
        badge="Read Before Using Our Services"
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
                    For All Clients & Users
                  </span>
                </div>
                <p className="mt-6 font-bold leading-relaxed text-ev-black/80">
                  [INTRO PARAGRAPH — Replace with introduction: These Terms of
                  Service (&quot;Terms&quot;) govern your access to and use of
                  the Elan Vey website, products, and services (collectively,
                  the &quot;Services&quot;). Please read these Terms carefully
                  before using our Services. Your use of our Services is
                  conditioned on your acceptance of and compliance with these
                  Terms. These Terms apply to all visitors, users, and others
                  who access or use the Services.]
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
