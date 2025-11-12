"use client";

import { motion } from "framer-motion";

export default function PainSection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="mb-10 text-4xl md:text-5xl">
            You make amazing products.<br />
            But selling online feels like guesswork.
          </h2>

          {/* Subtext */}
          <div className="text-xl md:text-2xl text-background/80 space-y-4 leading-relaxed">
            <p>You've tried posting on Instagram.</p>
            <p>Maybe ran an ad or two.</p>
            <p className="text-background/60 mt-8">
              But no clear plan. No consistent orders.<br />
              Just more confusion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
