import type { Metadata } from "next"
import Navbar from "@/components/sourcing/Navbar"
import Hero from "@/components/sourcing/Hero"
import StatsBar from "@/components/sourcing/StatsBar"
import Divisions from "@/components/sourcing/Divisions"
import HowItWorks from "@/components/sourcing/HowItWorks"
import TrustSection from "@/components/sourcing/TrustSection"
import Testimonials from "@/components/sourcing/Testimonials"
import FAQ from "@/components/sourcing/FAQ"
import InquiryForm from "@/components/sourcing/InquiryForm"
import Footer from "@/components/sourcing/Footer"

export const metadata: Metadata = {
  title: "OffPattern Sourcing — India Sourcing & Global Trade Partner",
  description:
    "We find the best products in India and ship them to your business. Premium tea, sustainable packaging, and industrial metal parts — with quality checks and seamless logistics.",
  keywords: [
    "India sourcing",
    "B2B sourcing India",
    "tea export India",
    "packaging supplier India",
    "industrial fasteners India",
    "global trade",
    "procurement India",
    "India export partner",
  ],
  openGraph: {
    title: "OffPattern Sourcing — India Sourcing & Global Trade Partner",
    description:
      "We find the best products in India and ship them to your business. Premium tea, sustainable packaging, and industrial metal parts.",
    url: "https://offpatternlabs.com",
    siteName: "OffPattern Sourcing",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Divisions />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  )
}
