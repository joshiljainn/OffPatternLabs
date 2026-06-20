"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "15+", label: "Years in Trade" },
  { value: "500+", label: "Shipments Delivered" },
  { value: "50+", label: "Global Partners" },
  { value: "12+", label: "Countries Served" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className="text-center md:border-r md:border-gray-700 last:border-r-0"
            >
              <span className="block text-4xl md:text-5xl font-bold text-white tracking-tight">
                {s.value}
              </span>
              <span className="block mt-2 text-sm text-gray-400 font-medium uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
