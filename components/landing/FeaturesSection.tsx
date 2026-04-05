"use client";
import React from "react";
import { motion } from "framer-motion";
import { Headphones, Globe, Zap, Shield, BarChart3, Plug } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Human-like voices",
    description: "Ultra-realistic AI voices with natural intonation, pauses, and emotional range that's indistinguishable from humans.",
  },
  {
    icon: Globe,
    title: "100+ languages",
    description: "Deploy voice agents in any language with native accents and cultural context built-in.",
  },
  {
    icon: Zap,
    title: "<500ms latency",
    description: "Sub-500ms response time for natural conversation flow. No awkward pauses or delays.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "SOC 2 compliant, end-to-end encryption, and on-premise deployment options for sensitive use cases.",
  },
  {
    icon: BarChart3,
    title: "Deep analytics",
    description: "Track call outcomes, sentiment, and conversion metrics. Get insights that drive business decisions.",
  },
  {
    icon: Plug,
    title: "Easy integration",
    description: "Connect with your CRM, calendar, and tools in minutes. REST API and webhooks included.",
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
            Capabilities
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Automate calls without sacrificing quality
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Our AI voice agents handle complex conversations with precision,
            empathy, and professionalism—every single time.
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
