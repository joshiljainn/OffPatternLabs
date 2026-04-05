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
import NewsletterAudit from "@/components/NewsletterAudit";
import FAQSection from "@/components/landing/FAQSection";
import Closing from "@/components/landing/Closing";

export const metadata = {
  title: "OffPattern Labs - Newsletter Growth",
  description: "We turn good products into brands that sell online — from website to ads to growth.",
};

export default function Home() {
  return (
    <main className="relative z-10 w-full flex flex-col items-center min-h-screen bg-transparent">
      <LandingHero />
      <CoreInsight />
      <WhatWeDoSection />
      <WhoThisIsFor />
      <HowItWorks />
      <Economics />
      <WhyDifferent />
      <Education />
      <TrustSignals />
      <NewsletterAudit />
      <PrimaryCTA />
      <FAQSection />
      <Closing />
    </main>
  );
}
