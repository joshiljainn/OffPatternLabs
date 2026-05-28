"use client";
import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sun, Zap, Shield, Palette, Truck } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "100% Waterproof",
    description: "UV-cured ink bonds permanently to the material. Stick them on bottles, jars, or outdoor gear — they never peel or fade.",
  },
  {
    icon: Sun,
    title: "Fade-Resistant for 5+ Years",
    description: "Ultraviolet coating blocks sun damage. Your brand colors stay punchy and bright, even after years of exposure.",
  },
  {
    icon: Zap,
    title: "48-Hour Turnaround",
    description: "Upload your art today, get a free proof within hours, and receive your stickers in 2 days. No more waiting weeks.",
  },
  {
    icon: Shield,
    title: "Scratch & Tear Proof",
    description: "Our polypropylene and vinyl stocks stand up to scraping, rubbing, and daily abuse. Built for real-world products.",
  },
  {
    icon: Palette,
    title: "Vivid CMYK Colors",
    description: "True-to-design color matching with UV LED curing. Your gradients, logos, and fine details print razor-sharp.",
  },
  {
    icon: Truck,
    title: "No Minimum Order",
    description: "Order 50 stickers or 50,000. We scale with you. Bulk pricing kicks in at 500 units for serious savings.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding border-t border-[#E5E5E0]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E03E3E] mb-4">
            Why UV Printing
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Stickers that survive the real world
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            UV printing is the gold standard for product labels. Our stickers
            handle water, sun, scratches, and time — without losing their looks.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="minimal-card"
            >
              <div className="w-12 h-12 bg-[#F5F5F0] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#1A1A1A]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
