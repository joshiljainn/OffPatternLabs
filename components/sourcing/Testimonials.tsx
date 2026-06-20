"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "OffPattern Sourcing made importing from India effortless. They handled everything — quality checks, paperwork, shipping. Our tea arrived fresh and on schedule.",
    author: "Rahul Mehta",
    role: "Procurement Director, BrewHouse UK",
  },
  {
    quote:
      "We needed custom-sized eco-friendly packaging for our European retail chain. They delivered exactly what we asked for, at half the price we were paying.",
    author: "Sarah Jenkins",
    role: "Operations Lead, GreenBox GmbH",
  },
  {
    quote:
      "The metal fasteners we ordered were machined to perfection. Their quality inspection process gave us complete confidence. Will be a long-term partner.",
    author: "David Park",
    role: "Supply Chain Manager, Apex Industries",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Trusted by Buyers Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real partners, real results.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              className="relative bg-white border border-gray-200 rounded-2xl p-8"
            >
              <Quote
                size={28}
                className="text-gray-200 mb-4"
                strokeWidth={1.5}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <span className="block text-sm font-semibold text-gray-900">
                  {t.author}
                </span>
                <span className="block text-xs text-gray-400 mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
