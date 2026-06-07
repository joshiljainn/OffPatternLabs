"use client";
import React from "react";
import { motion } from "framer-motion";
import { Upload, Image, Ruler, FileCheck, ArrowRight, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Art",
    description: "Drop a high-res PNG, PDF, or AI file. We accept transparent backgrounds and vector files.",
  },
  {
    icon: FileCheck,
    title: "Free Quality Check",
    description: "Our team reviews resolution, bleed, and color profiles. We send you a digital proof within 4 hours.",
  },
  {
    icon: Ruler,
    title: "Pick Size & Material",
    description: "Choose from vinyl, clear BOPP, or holographic stock. Any shape — die-cut, circle, square, or custom.",
  },
  {
    icon: Image,
    title: "UV Print & Ship",
    description: "We print with UV LED curing for instant drying and durability. Ships in 48 hours with tracking.",
  },
];

export default function StickerShowcase() {
  return (
    <section id="showcase" className="section-padding border-t border-[#E5E5E0]">
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
            How It Works
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Upload your art. We handle the rest.
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            No design skills needed. Send us your logo or label art and we will optimize,
            proof, and print it — perfectly.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="minimal-card h-full">
                <div className="w-10 h-10 bg-[#E03E3E] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="w-12 h-12 bg-[#F5F5F0] rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[#E5E5E0]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <a
            href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
            target="_blank"
            rel="noopener noreferrer"
            className="relative border-2 border-dashed rounded-2xl p-10 md:p-16 text-center transition-all duration-300 border-[#E5E5E0] bg-white hover:border-[#E03E3E] flex flex-col items-center gap-5 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F5F5F0] flex items-center justify-center">
              <Upload className="w-7 h-7 text-[#1A1A1A]" />
            </div>
            <div>
              <p className="text-[#1A1A1A] font-medium text-lg mb-1">
                Drop your clear PNG or PDF file here
              </p>
              <p className="text-[#9B9B9B] text-sm">
                Must be high quality (300 DPI or vector)
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#E03E3E] hover:bg-[#C43535] px-5 py-2.5 rounded-lg transition-all">
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
