"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingHero() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="relative w-full min-h-screen flex flex-col px-6 md:px-12 pt-6">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="OffPattern Labs"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
            <span className="font-semibold text-xl tracking-tight">OffPattern Labs</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Features
            </Link>
            <Link href="#demo" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Demo
            </Link>
            <Link href="#pricing" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Pricing
            </Link>
            <Link href="#enterprise" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
              Enterprise
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="#" className="text-sm font-medium hover:text-[#1A1A1A]">
              Sign in
            </Link>
            <button className="btn-primary">
              Start Building
            </button>
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
                Voice AI Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            >
              Build AI voice agents that sound human
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#6B6B6B] mb-8 max-w-xl"
            >
              OffPattern Labs helps you build, deploy, and scale AI voice agents
              that handle real phone calls with unprecedented realism and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              {/* Input box */}
              <div className="flex-1 flex items-center gap-2 bg-white border border-[#E5E5E0] rounded-lg p-2">
                <input
                  type="text"
                  placeholder="Describe your use case..."
                  className="flex-1 outline-none text-sm px-3"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-[#E03E3E] text-white p-2 rounded-md hover:bg-[#C43535] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {["Customer support agent", "Lead qualification bot", "Appointment setter", "Sales caller"].map((suggestion) => (
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
                Trusted by teams at
              </p>
              <div className="flex flex-wrap gap-6 opacity-60">
                {["Vercel", "Perplexity", "Cofactor", "Pico", "Cline", "Typeface"].map((company) => (
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
                      <Play className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Dental Appointment Booking</p>
                      <p className="text-xs text-[#9B9B9B]">Sample call transcript</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 bg-[#F5F5F0] rounded-full">
                    2:34
                  </span>
                </div>

                {/* Transcript */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#E03E3E] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">AI Agent</p>
                      <div className="bg-[#F5F5F0] rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Hi! This is Sarah from Bright Smile Dental. I'm calling to confirm your teeth whitening appointment scheduled for tomorrow at 3 PM. Will you be able to make it?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">User</p>
                      <div className="bg-[#1A1A1A] text-white rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Yes, I'll be there. Do I need to arrive early for any paperwork?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#E03E3E] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#9B9B9B] mb-1">AI Agent</p>
                      <div className="bg-[#F5F5F0] rounded-lg rounded-tl-none p-3">
                        <p className="text-sm">Great! Please arrive 10 minutes early to complete any remaining forms. Also, avoid drinking coffee or tea right before your appointment for best results. See you tomorrow!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-0.5 h-12 mb-4">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#E03E3E] rounded-full"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: 0.3 + Math.random() * 0.7,
                      }}
                    />
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E0]">
                  <button className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A]">
                    View full transcript
                  </button>
                  <button className="text-sm font-medium text-[#E03E3E] hover:text-[#C43535]">
                    Try it yourself →
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">94%</p>
                  <p className="text-xs text-[#9B9B9B]">Resolution rate</p>
                </div>
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">&lt;500ms</p>
                  <p className="text-xs text-[#9B9B9B]">Latency</p>
                </div>
                <div className="bg-white border border-[#E5E5E0] rounded-xl p-4">
                  <p className="text-2xl font-semibold mb-1">10M+</p>
                  <p className="text-xs text-[#9B9B9B]">Calls handled</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
