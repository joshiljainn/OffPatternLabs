import Link from "next/link"

const WA_LINK = "https://wa.me/918076958506?text=Hi%20OffPattern%20Sourcing%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20products."

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center py-28 md:py-36">
        <span className="inline-block text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
          India&apos;s Trusted Sourcing Partner
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight text-balance max-w-5xl mx-auto">
          We find the best products in India and ship them to your business.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Safe, fast, and simple. We check the quality and handle the shipping so you don&apos;t have to worry.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#divisions"
            className="inline-flex items-center px-7 py-3.5 border-2 border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all"
          >
            View Our Divisions
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
