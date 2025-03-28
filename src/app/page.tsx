import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection from "@/components/sections/home/services";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <PortfolioSection />
      <StatsSection />
      <Testimonials />
    </main>
  );
}
