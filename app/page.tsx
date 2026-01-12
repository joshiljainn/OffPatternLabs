import LandingHero from "@/components/landing/LandingHero";
import CoreInsight from "@/components/landing/CoreInsight";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import HowItWorks from "@/components/landing/HowItWorks";
import Economics from "@/components/landing/Economics";
import WhyDifferent from "@/components/landing/WhyDifferent";
import Education from "@/components/landing/Education";
import TrustSignals from "@/components/landing/TrustSignals";
import PrimaryCTA from "@/components/landing/PrimaryCTA";
import FAQSection from "@/components/landing/FAQSection";
import Closing from "@/components/landing/Closing";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <LandingHero />
      <CoreInsight />
      <WhatWeDoSection />
      <WhoThisIsFor />
      <HowItWorks />
      <Economics />
      <WhyDifferent />
      <Education />
      <TrustSignals />
      <PrimaryCTA />
      <FAQSection />
      <Closing />
    </main>
  );
}
