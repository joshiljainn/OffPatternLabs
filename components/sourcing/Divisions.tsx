"use client"

import { Leaf, Package, Settings, Palmtree } from "lucide-react"
import { motion } from "framer-motion"

const divisions = [
  {
    icon: Palmtree,
    title: "Handicrafts & Home Decor",
    description:
      "India's finest craftsmanship, shipped worldwide. We source authentic wooden decor, brass artifacts, textiles, pottery, and handmade treasures from artisan clusters across India.",
    highlights: ["Zero extra certifications", "Low MOQ available", "Premium margins"],
  },
  {
    icon: Leaf,
    title: "Premium Tea & Drinks",
    description:
      "Taste the best of India. We source high-quality, fresh tea leaves direct from top estates. Clean, pure, and ready for your brand.",
    highlights: ["Direct from estate", "Lab-tested quality", "Custom blends"],
  },
  {
    icon: Package,
    title: "Smart Packaging & Paper",
    description:
      "Better boxes for the planet. We supply strong paper products, eco-friendly mailers, and custom packaging to protect your goods.",
    highlights: ["100% recyclable", "Custom sizes", "Bulk discounts"],
  },
  {
    icon: Settings,
    title: "Strong Parts & Metal",
    description:
      "Built to last. We supply high-quality industrial fasteners, screws, and metal parts made to your exact sizes.",
    highlights: ["Precision-machined", "Grade A materials", "ISO certified"],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Divisions() {
  return (
    <section id="divisions" className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Four Specialties
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Four specialised sectors built for global supply chains.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {divisions.map((d) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                variants={cardItem}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-900/5"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-gray-900 mb-6 group-hover:bg-gray-200 transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {d.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {d.description}
                </p>
                <ul className="space-y-2">
                  {d.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
