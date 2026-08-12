import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Elan Vey privacy policy.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" />
      <Section className="!pt-0">
        <div className="container-content max-w-3xl">
          <p className="text-ev-muted leading-relaxed">
            [PRIVACY POLICY — Replace with the final privacy policy content
            when available.]
          </p>
        </div>
      </Section>
    </>
  );
}
