import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/ui/CTABlock";

export function FinalCTA() {
  return (
    <CTABlock
      dark={false}
      title="Ready to elevate your brand?"
      description="Join Elan Vey and build the presence, strategy, and growth your brand deserves."
    >
      <Button href="/contact" size="lg">
        Get Started Today
      </Button>
      <Button href="/subscription" variant="secondary" size="lg">
        View Subscription
      </Button>
    </CTABlock>
  );
}
