import { SectionOne } from "@/components/home/SectionOne";
import { SectionThree } from "@/components/home/SectionThree";
import { SectionFour } from "@/components/home/SectionFour";
import { SubscriptionPreview } from "@/components/home/SubscriptionPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <SubscriptionPreview />
      <FinalCTA />
    </>
  );
}
