"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What minimum order quantities do you require?",
    a: "We work with businesses of all sizes. Minimum order quantities vary by product category — tea and packaging generally start from smaller volumes, while metal parts may have higher minimums. Contact us with your requirements and we'll find a solution.",
  },
  {
    q: "How do you ensure product quality?",
    a: "Every order is physically inspected by our quality team before it leaves the factory. We photograph, measure, and test samples from each batch. If something doesn't meet your specs, we catch it before it ships.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We currently serve buyers in over 12 countries across Europe, North America, the Middle East, Southeast Asia, and Australia. Our logistics partners cover major ports and airports worldwide.",
  },
  {
    q: "How long does shipping usually take?",
    a: "Air freight typically takes 5–10 days door-to-door. Ocean freight takes 20–35 days depending on the destination port. We'll recommend the best option based on your timeline and budget.",
  },
  {
    q: "Do you handle customs and import duties?",
    a: "Yes. We manage all export documentation from India. For import duties and customs clearance at your end, we work with local partners in your country to make the process smooth.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
