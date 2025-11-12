"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Brand Setup",
    description: "We design your site, pages, and ads — zero cost.",
    detail: "Full website, product pages, checkout flow, and ad creatives ready to launch.",
  },
  {
    number: "2",
    title: "Launch & Learn",
    description: "We test small campaigns to find what converts.",
    detail: "Smart testing across Meta and Google to identify your winning formula.",
  },
  {
    number: "3",
    title: "Scale & Earn",
    description: "You start getting sales. Then we get paid.",
    detail: "We scale what works. You keep growing. We win together.",
  },
];

export default function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" className="section-padding bg-foreground text-background overflow-hidden">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl md:text-5xl">Here's How We Do It</h2>
          <p className="text-xl text-background/70 max-w-2xl mx-auto">
            Simple. Clear. Results-focused.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[90%] md:w-[400px] snap-center"
              >
                <div className="h-full p-10 border-2 border-background/20 rounded-3xl hover:border-background/40 transition-all bg-foreground/50 backdrop-blur">
                  {/* Number */}
                  <div className="text-7xl font-bold text-background/20 mb-6">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-lg text-background/80 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detail */}
                  <p className="text-sm text-background/60 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-background/30"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
