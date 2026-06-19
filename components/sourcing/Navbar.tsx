"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/sourcing" },
  { label: "Divisions", href: "#divisions" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#inquiry" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/sourcing" className="text-xl font-bold text-slate-900 tracking-tight">
          OffPattern <span className="text-emerald-700">Sourcing</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#inquiry"
            className="inline-flex items-center px-5 py-2.5 bg-emerald-700 text-white text-sm font-semibold rounded-lg hover:bg-emerald-800 transition-all"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#inquiry"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2.5 bg-emerald-700 text-white text-sm font-semibold rounded-lg hover:bg-emerald-800 transition-all"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
