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

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk"
        subtitle="Ready to elevate your brand? Reach out and let's explore how Elan Vey can help you grow."
      />

      <Section className="!pt-0">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="heading-display text-2xl text-ev-white md:text-3xl">
                Get in touch
              </h2>
              <p className="mt-4 text-ev-muted leading-relaxed">
                Whether you&apos;re interested in our services, subscription, or
                just want to learn more — we&apos;d love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-ev-muted">
                    Email
                  </p>
                  <p className="mt-1 text-ev-offwhite">
                    {siteConfig.contact.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ev-muted">
                    Phone
                  </p>
                  <p className="mt-1 text-ev-offwhite">
                    {siteConfig.contact.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ev-muted">
                    Address
                  </p>
                  <p className="mt-1 text-ev-offwhite">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
