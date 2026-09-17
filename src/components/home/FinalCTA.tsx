import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";

export function FinalCTA() {
  return (
    <CTABlock
      dark={false}
      className="!py-10 md:!py-16 lg:!py-20"
      title="Ready to get started?"
      description="Join Elan Vey and build the presence, strategy, and growth your ideas deserve. When you onboard with Elan Vey, you gain real-world marketing exposure and learning opportunities connected with Lavent Marketing."
    >
      <Button href="/contact" size="lg">
        Get Started Today
      </Button>
      <Button href="https://www.laventmarketing.com/" external variant="secondary" size="lg">
        What is Lavent?
      </Button>
    </CTABlock>
  );
}
