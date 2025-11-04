"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center section-padding">
      <div className="container-custom w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <h1 className="text-balance mb-6">
            We turn good products into brands that sell online.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 text-balance max-w-3xl">
            OffPattern Labs builds digital systems that help real-world businesses reach real customers — from website to ads to growth.
          </p>

          {/* Supporting line */}
          <p className="text-sm md:text-base text-foreground/60 mb-10 max-w-2xl">
            We're not an agency.
            <br />
            We're your behind-the-scenes team that builds, tests, and fixes things until they work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="button-primary text-center">
              Talk to Us
            </Link>
            <Link href="#work" className="button-secondary text-center">
              See Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
