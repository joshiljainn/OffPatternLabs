"use client"

import { ClipboardList, Search, Ship, Handshake } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us What You Need",
    description:
      "Share your requirements, volumes, and specs. We'll find the best Indian suppliers for your business.",
  },
  {
    icon: Search,
    title: "We Inspect Every Order",
    description:
      "Our team visits the factory, checks the quality, and makes sure everything matches your standards.",
  },
  {
    icon: Ship,
    title: "We Handle Logistics",
    description:
      "From customs paperwork to shipping, we manage the entire export process so you don't have to.",
  },
  {
    icon: Handshake,
    title: "Delivered to Your Door",
    description:
      "Your goods arrive safely and on time. We stay with you until you're satisfied with every item.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function HowItWorks() {
  return (
    <section id="process" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            From your requirement to delivery — we handle everything in between.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-[31px] top-0 bottom-0 w-px bg-gray-200" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12 md:space-y-0"
          >
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  variants={item}
                  className="relative md:flex items-start gap-8 md:pb-16 last:pb-0"
                >
                  <div className="hidden md:flex shrink-0 relative z-10 items-center justify-center w-[62px] h-[62px] rounded-full bg-gray-900 text-white shadow-lg">
                    <Icon size={26} />
                  </div>

                  {/* Mobile icon */}
                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                  </div>

                  <div className="md:pt-3 md:pl-0">
                    <span className="hidden md:inline-block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-base text-gray-600 max-w-lg leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
