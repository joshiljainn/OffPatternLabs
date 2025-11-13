"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
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
          <h2 className="mb-8 text-4xl md:text-5xl">
            We Only Win When You Win
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-background/80 mb-6 leading-relaxed">
            Only <strong>5 spots</strong> for our Founders' Growth Program —<br />
            we go deep with every brand.
          </p>

          <p className="text-xl text-background/70 mb-12 leading-relaxed">
            If we don't bring you profitable sales, you don't pay.
          </p>

          {/* CTA Button */}
          <Link
            href="https://wa.me/918076958506?text=Hi,%20I'm%20interested%20in%20the%20Founders'%20Growth%20Program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-background text-foreground rounded-full font-semibold text-lg hover:bg-background/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Apply for Free Setup →
          </Link>

          {/* Small print */}
          <p className="mt-12 text-sm text-background/50">
            Limited to brands doing ₹5L+ revenue/year or ready to launch their first product online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
