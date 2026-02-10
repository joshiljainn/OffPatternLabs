"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "We move fast.",
    description: "We don't spend months planning. We build in days and fix as we go.",
  },
  {
    title: "We keep things simple.",
    description: "No jargon, no confusion. You'll always know what's happening.",
  },
  {
    title: "We care about results.",
    description: "Every pixel, every ad, every rupee — we treat it like our own.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8">Why Work With Us</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
            Because we only do what matters — what helps you sell.
            We build, test, and fix everything ourselves.
            Fast, transparent, and performance-first.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4 p-8 border border-foreground/10 rounded-2xl hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
