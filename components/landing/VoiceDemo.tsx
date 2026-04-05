"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<"outbound" | "inbound">("outbound");

  return (
    <section id="demo" className="section-padding bg-[#E03E3E] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">
                Try for yourself
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Experience the difference
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              Listen to real calls handled by our AI agents. Can you tell it's not human?
            </motion.p>

            {/* Tab Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex p-1 bg-white/20 rounded-lg mb-8"
            >
              <button
                onClick={() => setActiveTab("outbound")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "outbound"
                    ? "bg-white text-[#E03E3E]"
                    : "text-white hover:bg-white/20"
                }`}
              >
                Outbound Calls
              </button>
              <button
                onClick={() => setActiveTab("inbound")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "inbound"
                    ? "bg-white text-[#E03E3E]"
                    : "text-white hover:bg-white/20"
                }`}
              >
                Inbound Calls
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 bg-white text-[#E03E3E] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Play sample
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right: Player */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white text-[#1A1A1A] rounded-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-semibold text-lg">Lead Qualification Call</p>
                  <p className="text-sm text-[#6B6B6B]">Real estate inquiry</p>
                </div>
                <span className="text-sm text-[#9B9B9B]">1:24</span>
              </div>

              {/* Waveform */}
              <div className="flex items-center justify-center gap-0.5 h-16 mb-6">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#E03E3E] rounded-full transition-all duration-100"
                    style={{
                      height: isPlaying ? `${20 + Math.random() * 80}%` : "20%",
                    }}
                  />
                ))}
              </div>

              {/* Transcript Snippet */}
              <div className="bg-[#F5F5F0] rounded-xl p-4 mb-4">
                <p className="text-sm text-[#1A1A1A]">
                  "Hi! I'm calling from Sunrise Realty. I saw you're interested in selling your property at 123 Oak Street. Is that still something you're considering?"
                </p>
              </div>

              {/* Progress */}
              <div className="h-1 bg-[#F5F5F0] rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-[#E03E3E] transition-all duration-1000"
                  style={{ width: isPlaying ? "60%" : "0%" }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <button className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A]">
                  View transcript
                </button>
                <button className="text-sm font-medium text-[#E03E3E]">
                  Build this agent →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
