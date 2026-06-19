"use client"

import { ShieldCheck, FileCheck, Ship } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: ShieldCheck,
    title: "We Check Everything",
    description:
      "A team member looks at every single order before it leaves the factory.",
  },
  {
    icon: FileCheck,
    title: "We Handle the Setup",
    description:
      "Custom rules and paperwork are hard. We take care of all of it for you.",
  },
  {
    icon: Ship,
    title: "Safe Shipping",
    description:
      "We work with top ocean and air shipping lines to get your goods to your door on time.",
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
    <section id="process" className="py-28 md:py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Why Businesses Trust Us
          </h2>
          <p className="mt-4 text-lg text-slate-500">
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
                <div className="hidden md:block absolute top-0 left-1/2 w-full h-0.5 bg-slate-200 -z-10 translate-y-7">
                  {i < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-700 rounded-full" />
                  )}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700 text-white mb-6 shadow-lg shadow-emerald-700/20">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 max-w-xs mx-auto leading-relaxed">
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
