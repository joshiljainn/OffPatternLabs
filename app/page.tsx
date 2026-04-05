import LandingHero from "@/components/landing/LandingHero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import VoiceDemo from "@/components/landing/VoiceDemo";
import SocialProof from "@/components/landing/SocialProof";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center min-h-screen bg-background">
      <LandingHero />
      <FeaturesSection />
      <VoiceDemo />
      <SocialProof />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
