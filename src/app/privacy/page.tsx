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
      <PageHero label="Legal" title="Privacy Policy" accent="pink" />
      <Section tone="paper" className="!pt-0">
        <div className="container-content max-w-3xl">
          <div className="brutal-card">
            <p className="font-bold leading-relaxed text-ev-black/80">
              [PRIVACY POLICY — Replace with the final privacy policy content
              when available.]
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
