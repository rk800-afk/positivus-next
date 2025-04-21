import { IntroSection } from "@/components/intro-section/intro-section";
import { OurImpactNumber } from "./components/our-impact";
import { OurJourney } from "./components/our-journey";

export default function AboutPage() {
  return (
    <main>
      <IntroSection
        className="mt-[70px]"
        title="Together for Success"
        titleDescription="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
        image="/aboutUs.png"
      />
      <OurImpactNumber className="mt-[100px]"></OurImpactNumber>
      <OurJourney className="mt-[100px]"/>
    </main>
  );
}
