import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Elan Vey — start your premium creative strategy journey today.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactCards = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    icon: "✉",
    color: "bg-ev-neon-cyan",
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    icon: "☎",
    color: "bg-ev-neon-pink text-white",
    href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`,
  },
  {
    label: "Address",
    value: siteConfig.contact.address,
    icon: "◎",
    color: "bg-ev-neon-yellow",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk"
        subtitle="Ready to elevate your brand? Reach out and let's explore how Elan Vey can help you grow."
        accent="yellow"
        badge="We Reply Within 24 Hours"
      />

      <Section tone="paper" className="!pt-0" staggerChildren staggerDelay={90}>
        <div className="container-content">
          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {contactCards.map((card) => {
              const Tag: any = card.href ? "a" : "div";
              return (
                <Tag
                  key={card.label}
                  {...(card.href ? { href: card.href, className: "stagger-child" } : { className: "stagger-child" })}
                  className={`stagger-child flex items-start gap-4 border-[3px] border-black p-5 shadow-brutal hover-lift ${card.color}`}
                >
                  <span className="font-brutal text-3xl flex-shrink-0">
                    {card.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-brutal text-xs uppercase tracking-widest opacity-80">
                      {card.label}
                    </p>
                    <p className="mt-1 font-bold break-words">{card.value}</p>
                  </div>
                </Tag>
              );
            })}
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2 animate-on-scroll-slow">
              <h2 className="brutal-text text-2xl text-ev-neon-pink md:text-3xl md:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 font-bold leading-relaxed text-ev-black/80 text-base md:text-lg">
                Whether you&apos;re interested in our services, subscription, or
                just want to learn more — we&apos;d love to hear from you.
              </p>

              <div className="mt-10 space-y-6 hidden lg:block">
                <div className="brutal-card-yellow hover-lift">
                  <p className="font-brutal text-sm uppercase">Office Hours</p>
                  <p className="mt-2 font-bold">Mon – Fri: 9am – 6pm</p>
                  <p className="font-bold opacity-70">Sat: By Appointment</p>
                </div>
                <div className="brutal-card hover-lift !bg-ev-neon-cream">
                  <p className="font-brutal text-sm uppercase">Follow Along</p>
                  <div className="mt-3 flex gap-3">
                    {[
                      { label: "IG", url: siteConfig.social.instagram },
                      { label: "IN", url: siteConfig.social.linkedin },
                      { label: "TW", url: siteConfig.social.twitter },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        className="flex h-11 w-11 items-center justify-center border-[3px] border-black bg-white font-brutal text-sm shadow-brutal transition-all hover:scale-110 hover:-translate-y-0.5 hover:shadow-brutal-lg"
                        aria-label={s.label}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 animate-on-scroll-slow stagger-child">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
