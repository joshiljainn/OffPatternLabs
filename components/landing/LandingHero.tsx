"use client";
import React from "react";
import Image from "next/image";
import { ChevronDown, Upload, Sparkles, Layers, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col px-6 md:px-12 pt-6">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="OffPattern Labs"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <span className="font-semibold text-xl tracking-tight">OffPattern Labs</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Features
            </a>
            <a href="#showcase" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Showcase
            </a>
            <a href="#pricing" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-[#1A1A1A]"
            >
              Upload Art
            </a>
            <a
              href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center pt-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E03E3E] mb-6">
                DTC UV Sticker Printing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            >
              Premium UV stickers that make your brand unforgettable
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#6B6B6B] mb-8 max-w-xl"
            >
              OffPattern Labs prints waterproof, fade-proof UV stickers for product
              packaging, bottles, and boxes. Vibrant colors. Zero setup fees. Ships in 48 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <a
                href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#E03E3E] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#C43535] transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Order on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {["Candle jars", "Cosmetic bottles", "Food packaging", "Water bottles"].map((suggestion) => (
                <button
                  key={suggestion}
                  className="text-xs px-4 py-2 bg-white border border-[#E5E5E0] rounded-full hover:border-[#1A1A1A] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-[#E5E5E0]"
            >
              <p className="text-xs text-[#9B9B9B] uppercase tracking-widest mb-4">
                Trusted by DTC brands
              </p>
              <div className="flex flex-wrap gap-6 opacity-60">
                {["Brew & Bloom", "Glow Skin Co", "Farm Fresh", "Sip Society", "Pure Home", "Craft Box"].map((company) => (
                  <span key={company} className="text-sm font-semibold text-[#1A1A1A]">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Demo Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="sticky top-24">
              {/* Main Demo Card */}
              <div className="bg-white border border-[#E5E5E0] rounded-2xl p-6 shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#E5E5E0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F5F5F0] rounded-full flex items-center justify-center">
                      <Layers className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Your UV Sticker Preview</p>
                      <p className="text-xs text-[#9B9B9B]">High-quality 3D render</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 bg-[#F5F5F0] rounded-full">
                    UV-Cured
                  </span>
                </div>

                {/* Sticker Preview */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-[#E03E3E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">UV Coating</p>
                      <div className="bg-[#F5F5F0] rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Glossy, waterproof finish that pops on any surface. Colors stay vivid for years.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">Upload Process</p>
                      <div className="bg-[#1A1A1A] text-white rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Upload your PNG or PDF. We check quality, optimize colors, and send a free proof within hours.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-[#E03E3E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">Delivery</p>
                      <div className="bg-[#F5F5F0] rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Ships in 48 hours. Track every order. Bulk discounts available for 500+ units.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual sticker strip */}
                <div className="flex items-center justify-center gap-2 h-16 mb-4 bg-[#F5F5F0] rounded-xl px-4">
                  {["Brand","Logo","Tag","Seal","Mark"].map((label, i) => (
                    <div
                      key={label}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                      style={{
                        background: i % 2 === 0 ? '#E03E3E' : '#1A1A1A',
                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E0]">
                  <button className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A]">
                    View material options
                  </button>
                  <a
                    href="https://wa.me/918076958506?text=Hey%2C%20I%20want%20to%20buy%20UV%20DTF%20Stickers."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#E03E3E] hover:text-[#C43535]"
                  >
                    Upload your art →
                  </a>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">48h</p>
                  <p className="text-xs text-[#9B9B9B]">Turnaround</p>
                </div>
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">5yr+</p>
                  <p className="text-xs text-[#9B9B9B]">UV life</p>
                </div>
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">50k+</p>
                  <p className="text-xs text-[#9B9B9B]">Stickers printed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
