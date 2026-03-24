import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - OffPattern Labs",
  description: "AI-Powered Digital Asset Operations. We build, optimize, and flip newsletters and content sites.",
};

export default function ServicesPage() {
  const services = [
    {
      name: "Newsletter Revival",
      price: "$600",
      description: "Transform your dormant newsletter into a cash-flowing asset",
      features: [
        "Complete content audit & strategy",
        "30 AI-optimized email sequences",
        "Re-engagement campaign setup",
        "Monetization integration (ads/sponsors)",
        "Growth automation systems",
        "30-day delivery",
        "$500-1,500/month revenue potential"
      ],
      cta: "Revive My Newsletter",
      popular: false
    },
    {
      name: "Content Site Build",
      price: "$1,200",
      description: "We build a complete content site from scratch to revenue",
      features: [
        "Niche research & validation",
        "100 AI-optimized articles (2000+ words)",
        "SEO structure & internal linking",
        "AdSense integration & optimization",
        "3-month content calendar",
        "60-day delivery",
        "$1,000-2,500/month revenue potential"
      ],
      cta: "Build My Site",
      popular: true
    },
    {
      name: "Complete Asset Operation",
      price: "$2,400",
      description: "Full operation & growth of your digital asset for 6 months",
      features: [
        "Everything in Content Site Build",
        "6 months of content (300 articles)",
        "Weekly optimization & A/B testing",
        "Link building & authority building",
        "Monthly performance reports",
        "Revenue share: You keep 70%",
        "$3,000+/month revenue potential"
      ],
      cta: "Let's Partner",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We audit your asset or research your niche. Identify quick wins and growth opportunities."
    },
    {
      step: "02",
      title: "Strategy",
      description: "AI-powered content plan, SEO roadmap, and monetization strategy tailored to your asset."
    },
    {
      step: "03",
      title: "Execution",
      description: "We build, write, optimize, and automate. You watch the metrics climb."
    },
    {
      step: "04",
      title: "Scale",
      description: "Revenue starts flowing. We optimize for maximum returns. Flip or hold - your call."
    }
  ];

  return (
    <main className="relative z-10 w-full flex flex-col items-center min-h-screen bg-transparent">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-[#FDFBF7] rounded-full border-2 border-black shadow-[4px_4px_0px_#111] px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg tracking-tighter text-[#0B132B]" style={{ lineHeight: 1.1 }}>
          OFFPATTERN<br />LABS
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-[#0B132B] hover:text-[#E07A5F] transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-[#E07A5F]">
            Services
          </Link>
          <Link href="/#audit" className="btn-retro-orange" style={{ padding: "0.4rem 1.1rem", fontSize: "0.75rem" }}>
            Free Audit
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-32 pt-40">
        <div className="retro-card-lg w-full max-w-[850px] p-12 flex flex-col items-center text-center">
          <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5 text-[#E07A5F]">
            Digital Asset Operations
          </p>
          <h1 className="font-display font-bold leading-[1.05] mb-6 text-balance text-[#0B132B]" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}>
            AI-Powered Asset
            <span className="text-[#E07A5F]"> Operations</span>
          </h1>
          <p className="text-lg text-[#0B132B]/70 max-w-2xl mx-auto mb-8">
            We build, optimize, and flip newsletters and content sites.
            You get paid. We do the work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#0B132B]/60">
            <span className="flex items-center gap-2">⚡ 30-60 day delivery</span>
            <span className="flex items-center gap-2">🎯 Revenue-focused</span>
            <span className="flex items-center gap-2">🤖 AI-powered</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 py-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-[#0B132B]">Choose Your Growth Path</h2>
            <p className="text-[#0B132B]/60">Fixed pricing. No hidden fees. Revenue-focused.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`retro-card p-8 ${service.popular ? 'border-[#E07A5F] ring-2 ring-[#E07A5F]/20' : ''} hover:shadow-[8px_8px_0px_#111] transition-shadow`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E07A5F] text-white text-sm font-bold rounded-full border-2 border-black">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl mb-2 text-[#0B132B]">{service.name}</h3>
                <div className="text-4xl font-bold mb-4 text-[#0B132B]">{service.price}</div>
                <p className="text-[#0B132B]/60 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm text-[#0B132B]/80">
                      <span className="text-[#E07A5F] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/918076958506?text=${encodeURIComponent(`Hi! I'm interested in the ${service.name} package.`)}`}
                  className={`block w-full py-4 rounded-lg text-center font-bold transition border-2 border-black ${
                    service.popular
                      ? 'bg-[#E07A5F] text-white shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px]'
                      : 'bg-[#0B132B] text-white shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px]'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full px-4 py-20">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-[#0B132B]">How It Works</h2>
            <p className="text-[#0B132B]/60">From dormant to dollars in 4 steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-[#0B132B]/20 mb-4">{step.step}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-[#0B132B]">{step.title}</h3>
                <p className="text-[#0B132B]/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 py-20">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl mb-12 text-center text-[#0B132B]">Questions?</h2>
          <div className="space-y-6">
            {[
              {
                q: "How fast will I see revenue?",
                a: "Newsletters: 2-4 weeks. Content sites: 2-3 months. We focus on quick wins first."
              },
              {
                q: "What's your content quality like?",
                a: "AI-generated + human-edited. SEO-optimized, fact-checked, and tailored to your niche."
              },
              {
                q: "Can you guarantee results?",
                a: "No guarantees in business. But we have a track record of 3-5x ROI on assets."
              },
              {
                q: "What if I want to sell the asset?",
                a: "We can help position it for sale. Typical flips: 30-40x monthly revenue."
              },
              {
                q: "Do you take equity?",
                a: "Only in the 'Complete Asset Operation' tier (30% revenue share for 6 months)."
              }
            ].map((faq, idx) => (
              <div key={idx} className="retro-card p-6">
                <h3 className="font-display font-bold text-lg mb-2 text-[#0B132B]">{faq.q}</h3>
                <p className="text-[#0B132B]/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20">
        <div className="retro-card-lg w-full max-w-2xl mx-auto text-center p-12">
          <h2 className="font-display font-bold text-4xl mb-4 text-[#0B132B]">Ready to Monetize?</h2>
          <p className="text-[#0B132B]/60 mb-8">
            Spots are limited. Currently accepting 3 new clients this month.
          </p>
          <a
            href="https://wa.me/918076958506?text=Hi! I'm interested in your services."
            className="inline-block px-8 py-4 bg-[#E07A5F] text-white font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] transition"
          >
            Get Started →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 py-12 border-t-2 border-[#0B132B]/10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#0B132B]/40 text-sm">
            © 2025 OffPattern Labs. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-[#0B132B]/60 hover:text-[#0B132B] transition">Home</Link>
            <Link href="/services" className="text-[#E07A5F] font-semibold">Services</Link>
            <Link href="/#audit" className="text-[#0B132B]/60 hover:text-[#0B132B] transition">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
