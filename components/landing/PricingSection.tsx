"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter Roll",
    description: "Perfect for product samples and small batches",
    price: "$0.18",
    unit: "per sticker",
    features: [
      "50–249 stickers",
      "Vinyl or BOPP stock",
      "Free digital proof",
      "Die-cut any shape",
      "Email support",
      "48-hour turnaround",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth Pack",
    description: "For DTC brands scaling their packaging",
    price: "$0.12",
    unit: "per sticker",
    features: [
      "250–2,499 stickers",
      "Vinyl, BOPP, or holographic",
      "Free digital + physical proof",
      "Die-cut or kiss-cut",
      "Priority support",
      "Color matching included",
      "Bulk roll or sheet format",
    ],
    cta: "Most popular",
    featured: true,
  },
  {
    name: "Wholesale",
    description: "For large-scale operations and agencies",
    price: "Custom",
    unit: "volume pricing",
    features: [
      "2,500+ stickers",
      "All materials + custom finishes",
      "Dedicated account manager",
      "White-label shipping",
      "API + webhook integrations",
      "Net-30 billing available",
      "Free storage & fulfillment",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding border-t border-[#E5E5E0]">
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
            Pricing
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            No setup fees. No hidden charges. Just high-quality UV stickers at fair prices.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`minimal-card ${plan.featured ? "border-2 border-[#E03E3E]" : ""}`}
            >
              {plan.featured && (
                <span className="inline-block text-xs font-semibold bg-[#E03E3E] text-white px-3 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-sm text-[#6B6B6B] mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-[#9B9B9B]">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E03E3E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A1A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  plan.featured
                    ? "bg-[#E03E3E] text-white hover:bg-[#C43535]"
                    : "bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
