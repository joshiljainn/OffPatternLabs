import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import OurApproach from "@/components/OurApproach";
import WhatYouGet from "@/components/WhatYouGet";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "OffPattern Labs - Newsletter Growth",
  description: "We turn good products into brands that sell online — from website to ads to growth.",
};

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Hero />
            <WhatWeDo />
            <OurApproach />
            <WhatYouGet />
            <WhyUs />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
}
