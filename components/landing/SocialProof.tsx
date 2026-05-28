"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = ["Brew & Bloom", "Glow Skin Co", "Farm Fresh", "Sip Society", "Candle Craft", "Pure Home", "Fit Fuel", "Bloom Box"];

const testimonials = [
  {
    quote: "The UV stickers on our candle jars look absolutely stunning. Zero fading after 6 months on store shelves.",
    author: "Sarah Chen",
    role: "Founder, Brew & Bloom",
  },
  {
    quote: "We switched from paper labels to OffPattern's UV stickers. Customer complaints about peeling dropped to zero.",
    author: "Marcus Rodriguez",
    role: "CEO, Glow Skin Co",
  },
  {
    quote: "Turnaround is insane. Uploaded Monday morning, had 2,000 waterproof labels by Wednesday afternoon.",
    author: "Emily Watson",
    role: "Ops Lead, Farm Fresh",
  },
];

export default function SocialProof() {
  return (
    <section className="section-padding border-t border-[#E5E5E0]">
      <div className="container-custom">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs text-[#9B9B9B] uppercase tracking-widest mb-6 text-center">
            Trusted by DTC brands worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center text-[#1A1A1A] font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-white border border-[#E5E5E0] rounded-2xl"
        >
          {[
            { value: "50k+", label: "Stickers printed" },
            { value: "99.2%", label: "Color accuracy" },
            { value: "500+", label: "DTC brands" },
            { value: "48h", label: "Avg turnaround" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">{stat.value}</div>
              <div className="text-sm text-[#9B9B9B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="minimal-card"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#1A1A1A] text-[#1A1A1A]" />
                ))}
              </div>
              <p className="text-[#1A1A1A] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-sm">{testimonial.author}</div>
                <div className="text-xs text-[#9B9B9B]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
