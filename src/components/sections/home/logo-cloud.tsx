import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export default function LogoCloud() {
  // Define the logos from the Professional Experience folder in public directory
  const logos = [
    { src: "Professional Experience/BITS_Pilani-Logo.svg.png", alt: "BITS Pilani Logo" },
    { src: "Professional Experience/cashfloio_logo.jpeg", alt: "Cashfloio Logo" },
    { src: "Professional Experience/Havells_Logo.svg.png", alt: "Havells Logo" },
    { src: "Professional Experience/IIMR.jpeg", alt: "IIMR Logo" },
    { src: "Professional Experience/images.png", alt: "Images Logo" },
    { src: "Professional Experience/Mezink.png", alt: "Mezink Logo" },
    { src: "Professional Experience/Refold.svg", alt: "Refold Logo", size: "size-16" }, // Larger size for Refold
    { src: "Professional Experience/the-university-of-sydney-vector-logo.png", alt: "University of Sydney Logo", size: "size-16" }, // Larger size for University of Sydney
    { src: "Professional Experience/1.svg", alt: "1 Logo" },
  ];

  return (
    <section className=" overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">
            My Professional Experience
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              {logos.map((logo, index) => (
                <div key={index} className="flex">
                  <div className={`${logo.size || "size-12"} flex items-center justify-center`}>
                    <Image 
                      src={logo.src} 
                      alt={logo.alt}
                      width={logo.size === "size-16" ? 64 : 48}
                      height={logo.size === "size-16" ? 64 : 48}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            {/* <div className="bg-linear-to-r from-none absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-none absolute inset-y-0 right-0 w-20"></div> */}
            {/* <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-80"
              direction="left"
              blurIntensity={0.9}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
