import { HeroSection } from "@/components/home/HeroSection";
import { WhoIsElanVeySection } from "@/components/home/WhoIsElanVeySection";
import { VeyForwardSection } from "@/components/home/VeyForwardSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { LaventSection } from "@/components/home/LaventSection";
import { SubscriptionPreview } from "@/components/home/SubscriptionPreview";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoIsElanVeySection />
      <VeyForwardSection />
      <ProcessSection />
      <LaventSection />
      <SubscriptionPreview />
      <ReviewsPreview />
      <FinalCTA />
    </>
  );
}
