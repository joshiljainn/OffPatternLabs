import { Metadata } from "next";
import InvitationHero from "@/components/private/InvitationHero";
import PainSection from "@/components/private/PainSection";
import DreamOutcome from "@/components/private/DreamOutcome";
import HowItWorks from "@/components/private/HowItWorks";
import ProofSection from "@/components/private/ProofSection";
import FinalCTA from "@/components/private/FinalCTA";

export const metadata: Metadata = {
  title: "Private Invitation - Founders' Growth Program | OffPattern Labs",
  description: "Turn your products into daily online sales. Get 50+ orders a month without touching ads or tech. We build your full D2C system free — you pay only after sales.",
  robots: {
    index: false, // Hidden from search engines
    follow: false,
  },
};

export default function PrivateInvitation() {
  return (
    <main className="overflow-x-hidden">
      <InvitationHero />
      <PainSection />
      <DreamOutcome />
      <HowItWorks />
      <ProofSection />
      <FinalCTA />
    </main>
  );
}
