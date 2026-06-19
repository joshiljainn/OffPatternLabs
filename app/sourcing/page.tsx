import type { Metadata } from "next"
import Navbar from "@/components/sourcing/Navbar"
import Hero from "@/components/sourcing/Hero"
import Divisions from "@/components/sourcing/Divisions"
import TrustSection from "@/components/sourcing/TrustSection"
import InquiryForm from "@/components/sourcing/InquiryForm"
import Footer from "@/components/sourcing/Footer"

export const metadata: Metadata = {
  title: "OffPattern Sourcing — India Sourcing & Global Trade",
  description:
    "We find the best products in India and ship them to your business. Premium tea, sustainable packaging, and industrial metal parts — with quality checks and seamless logistics.",
  keywords: [
    "India sourcing",
    "B2B sourcing",
    "tea export India",
    "packaging supplier India",
    "industrial fasteners India",
    "global trade",
    "procurement India",
  ],
  openGraph: {
    title: "OffPattern Sourcing — India Sourcing & Global Trade",
    description:
      "We find the best products in India and ship them to your business. Premium tea, sustainable packaging, and industrial metal parts.",
  },
}

export default function SourcingPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Divisions />
      <TrustSection />
      <InquiryForm />
      <Footer />
    </main>
  )
}
