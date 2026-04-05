"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding border-t border-[#E5E5E0]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#6B6B6B] mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Get started</span>
          </div>

          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to transform your voice operations?
          </h2>

          <p className="text-lg text-[#6B6B6B] mb-8">
            Join 500+ companies using OffPattern Labs to deliver human-like voice AI at scale.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 bg-white border border-[#E5E5E0] rounded-lg outline-none focus:border-[#1A1A1A] transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap flex items-center justify-center gap-2">
              Start free trial
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9B9B9B]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
