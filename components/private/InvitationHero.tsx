"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function InvitationHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center section-padding overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="OffPattern Labs"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      <div className="container-custom w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex justify-center"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
            We've built sales systems that work.<br />
            <span className="text-accent">Now we're doing it free</span> — until you profit.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 text-balance max-w-3xl mx-auto leading-relaxed">
            We build the full system for you — website, ads, and funnel — <strong>free</strong>.
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
            You only pay us after you start making sales.
            <br />
            <strong>Real results. No talk. Just execution.</strong>
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="#how-it-works" className="button-primary text-lg px-12 py-5">
              Show Me How →
            </Link>
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-sm text-foreground/60"
          >
            These brands now get daily sales online.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
