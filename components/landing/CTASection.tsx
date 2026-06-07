"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="section-padding border-t border-[#E5E5E0]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#6B6B6B] mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Order now</span>
          </div>

          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to make your packaging unforgettable?
          </h2>

          <p className="text-lg text-[#6B6B6B] mb-8">
            Join 500+ DTC brands using OffPattern Labs for premium UV stickers that sell.
          </p>

          <div className="max-w-md mx-auto mb-6">
            <a
              href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white w-full px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1DA851] transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Order on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9B9B9B]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>Free proof with every order</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>Ships in 48 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
