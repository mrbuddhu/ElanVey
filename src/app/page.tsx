import { SectionOne } from "@/components/home/SectionOne";
import { SectionTwo } from "@/components/home/SectionTwo";
import { SectionThree } from "@/components/home/SectionThree";
import { SectionFour } from "@/components/home/SectionFour";
import { LaventSection } from "@/components/home/LaventSection";
import { SubscriptionPreview } from "@/components/home/SubscriptionPreview";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <LaventSection />
      <SubscriptionPreview />
      <ReviewsPreview />
      <FinalCTA />
    </>
  );
}
