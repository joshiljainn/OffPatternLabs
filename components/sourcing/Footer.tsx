import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              OffPattern <span className="text-emerald-400">Sourcing</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              India-based sourcing partner for premium tea, sustainable packaging, and industrial metal parts.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Divisions", "Our Process", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    href={label === "Home" ? "/sourcing" : `#${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Global Operations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Mumbai, India</li>
              <li>Singapore</li>
              <li>Dubai, UAE</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} OffPattern Sourcing. All rights reserved.</p>
          <p className="text-slate-500">Built for global trade. Powered by OffPattern Labs.</p>
        </div>
      </div>
    </footer>
  )
}
