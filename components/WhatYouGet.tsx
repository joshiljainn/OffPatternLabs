"use client";

import { motion } from "framer-motion";

const benefits = [
  "A modern online store that's ready to sell",
  "Ads that actually convert",
  "Automated messages for follow-ups and repeats",
  "A clear view of sales, data, and customers",
  "Full control — no dependence on us after setup",
];

export default function WhatYouGet() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="mb-8">What You'll Have at the End</h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl">
            By the time we're done, you'll have a complete digital setup that brings real orders and real customers.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-lg text-foreground/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
