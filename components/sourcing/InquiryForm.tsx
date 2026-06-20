"use client"

import { useState, FormEvent } from "react"
import { MessageCircle } from "lucide-react"

const productOptions = [
  "Premium Tea & Drinks",
  "Smart Packaging & Paper",
  "Strong Parts & Metal",
  "Other / Multiple",
]

const WA_NUMBER = "918076958506"

interface FormData {
  name: string
  email: string
  product: string
  message: string
}

function buildWhatsAppUrl(data: FormData): string {
  const lines = [
    `*New Inquiry from OffPattern Sourcing*`,
    ``,
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Product Interest:* ${data.product}`,
    `*Message:* ${data.message || "—"}`,
  ]
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    product: "",
    message: "",
  })
  const [error, setError] = useState("")

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!form.name.trim() || !form.email.trim() || !form.product) {
      setError("Please fill in all required fields.")
      return
    }

    window.open(buildWhatsAppUrl(form), "_blank")
  }

  return (
    <section id="inquiry" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Start Sourcing with Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill in your details and we&apos;ll open WhatsApp with your inquiry pre-filled.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="wa-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="wa-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-shadow"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="wa-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="wa-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-shadow"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="wa-product" className="block text-sm font-medium text-gray-700 mb-1.5">
                Product Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="wa-product"
                required
                value={form.product}
                onChange={(e) => handleChange("product", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-shadow"
              >
                <option value="" disabled>
                  Select a division...
                </option>
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="wa-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Message / Requirements
              </label>
              <textarea
                id="wa-message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-shadow resize-none"
                placeholder="Describe what you're looking for, volumes, specs..."
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg"
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
