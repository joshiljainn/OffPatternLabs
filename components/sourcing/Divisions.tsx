"use client"

import { Leaf, Package, Settings } from "lucide-react"
import { motion } from "framer-motion"

const divisions = [
  {
    icon: Leaf,
    title: "Premium Tea & Drinks",
    description:
      "Taste the best of India. We source high-quality, fresh tea leaves direct from top estates. Clean, pure, and ready for your brand.",
  },
  {
    icon: Package,
    title: "Smart Packaging & Paper",
    description:
      "Better boxes for the planet. We supply strong paper products, eco-friendly mailers, and custom packaging to protect your goods.",
  },
  {
    icon: Settings,
    title: "Strong Parts & Metal",
    description:
      "Built to last. We supply high-quality industrial fasteners, screws, and metal parts made to your exact sizes.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Divisions() {
  return (
    <section id="divisions" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Divisions
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Three specialised sectors built for global supply.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {divisions.map((d) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                variants={item}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 text-emerald-700 mb-6 group-hover:bg-emerald-100 transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {d.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
