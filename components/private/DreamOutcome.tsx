"use client";

import { motion } from "framer-motion";

export default function DreamOutcome() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="mb-8 text-4xl md:text-5xl">
            Imagine a system that brings you sales daily —<br />
            <span className="text-accent">while you focus on your craft.</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 leading-relaxed">
            That's what we build for manufacturers and homegrown brands.
          </p>

          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed">
            A full D2C setup: website, funnel, ads, and tracking.
          </p>

          {/* Key benefit */}
          <div className="inline-block px-8 py-4 border-2 border-accent rounded-full">
            <p className="text-lg font-semibold">
              Free to start. You pay only when you profit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
