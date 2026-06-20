"use client"

import { ShieldCheck, FileCheck, Ship } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: ShieldCheck,
    title: "We Check Everything",
    description:
      "A team member inspects every single order before it leaves the factory. No shortcuts, no compromises.",
  },
  {
    icon: FileCheck,
    title: "We Handle the Setup",
    description:
      "Custom rules, tariffs, and paperwork are hard. We take care of all of it for you — completely hassle-free.",
  },
  {
    icon: Ship,
    title: "Safe Shipping",
    description:
      "We work with top ocean and air freight lines to get your goods to your door on time, every time.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function TrustSection() {
  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Why Businesses Trust Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            End-to-end reliability from factory floor to your door.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={item}
                className="relative text-center"
              >
                <div className="hidden md:block absolute top-0 left-1/2 w-full h-0.5 bg-gray-200 -z-10 translate-y-8">
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full" />
                  )}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white mb-6 shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
