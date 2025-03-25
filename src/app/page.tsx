import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
