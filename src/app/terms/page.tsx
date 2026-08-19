import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Elan Vey terms of service.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" accent="yellow" />
      <Section tone="paper" className="!pt-0">
        <div className="container-content max-w-3xl">
          <div className="brutal-card">
            <p className="font-bold leading-relaxed text-ev-black/80">
              [TERMS OF SERVICE — Replace with the final terms content when
              available.]
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
