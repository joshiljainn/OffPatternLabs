"use client"

import { useState, FormEvent } from "react"
import { Send } from "lucide-react"

const productOptions = [
  "Premium Tea & Drinks",
  "Smart Packaging & Paper",
  "Strong Parts & Metal",
  "Other / Multiple",
]

interface FormData {
  name: string
  email: string
  product: string
  message: string
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    product: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
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

    console.log("Inquiry submitted:", form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="inquiry" className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-6">
              <Send size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Thank You
            </h2>
            <p className="text-lg text-slate-600">
              Your inquiry has been received. Our team will reach out within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inquiry" className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Start Sourcing with Us
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Tell us what you need and we&apos;ll get back to you with a quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                Product Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="product"
                required
                value={form.product}
                onChange={(e) => handleChange("product", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow appearance-none"
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
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message / Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow resize-none"
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
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 text-white text-sm font-semibold rounded-lg hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
