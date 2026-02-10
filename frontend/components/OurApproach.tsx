"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Understand",
    description: "We learn what you make, who buys it, and how they find it today.",
  },
  {
    number: "2",
    title: "Build",
    description: "We set up your full online system — store, ads, creatives, tracking, logistics.",
  },
  {
    number: "3",
    title: "Grow",
    description: "We bring in your first real customers and scale what works.",
  },
];

export default function OurApproach() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8">How We Work</h2>
          <p className="text-lg md:text-xl text-background/80 max-w-3xl">
            We don't do long decks or buzzwords.
            We do the work that makes you sell online — step by step.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold text-background/20">
                {step.number}
              </div>
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-background/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
