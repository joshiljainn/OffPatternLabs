import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/60 via-slate-50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center py-28 md:py-36">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tight text-balance max-w-5xl mx-auto">
          We find the best products in India and ship them to your business.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Safe, fast, and simple. We check the quality and handle the shipping so you don&apos;t have to worry.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#divisions"
            className="inline-flex items-center px-7 py-3.5 border-2 border-slate-300 text-slate-800 text-sm font-semibold rounded-lg hover:border-emerald-700 hover:text-emerald-700 transition-all"
          >
            View Our Divisions
          </Link>
          <Link
            href="#inquiry"
            className="inline-flex items-center px-7 py-3.5 bg-emerald-700 text-white text-sm font-semibold rounded-lg hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
