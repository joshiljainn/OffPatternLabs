import Link from "next/link"

const WA_LINK = "https://wa.me/918076958506"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-white tracking-tight">
              OffPattern <span className="font-light">Sourcing</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              India-based sourcing partner for premium tea, sustainable packaging, and industrial metal parts.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#divisions" className="text-sm hover:text-white transition-colors">Divisions</Link>
              </li>
              <li>
                <Link href="#process" className="text-sm hover:text-white transition-colors">Our Process</Link>
              </li>
              <li>
                <Link href="#inquiry" className="text-sm hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Global Operations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-gray-400">Mumbai, India</li>
              <li className="text-gray-400">Singapore</li>
              <li className="text-gray-400">Dubai, UAE</li>
              <li className="text-gray-400">London, UK</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Get in Touch
            </h4>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-300 text-sm rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} OffPattern Sourcing. All rights reserved.</p>
          <p>Powered by OffPattern Labs</p>
        </div>
      </div>
    </footer>
  )
}
