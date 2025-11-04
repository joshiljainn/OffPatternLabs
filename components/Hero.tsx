"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="OffPattern Labs"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="container-custom w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Image
              src="/logo.svg"
              alt="OffPattern Labs"
              width={200}
              height={60}
              className="w-48 md:w-56 h-auto"
              priority
            />
          </motion.div>

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
