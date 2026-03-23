'use client';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Submit Your Newsletter',
      desc: 'Fill out our simple form with basic info about your newsletter. Takes 2 minutes.',
      icon: '📝'
    },
    {
      num: '02',
      title: 'Get Free Valuation',
      desc: 'Within 48 hours, you'll receive a confidential valuation based on your list size, niche, and engagement.',
      icon: '💰'
    },
    {
      num: '03',
      title: 'Explore Options',
      desc: 'We chat about your goals. Revenue share? Full acquisition? Partnership? No pressure.',
      icon: '🤝'
    },
    {
      num: '04',
      title: 'We Handle Everything',
      desc: 'Sponsorship sales, affiliate deals, technical setup, growth. You keep ownership (or cash out).',
      icon: '⚙️'
    },
    {
      num: '05',
      title: 'You Get Paid',
      desc: 'Monthly revenue share (30-50%) or lump sum acquisition. Your choice.',
      icon: '💸'
    }
  ];

  const faqs = [
    {
      q: 'What newsletters do you work with?',
      a: 'We focus on newsletters with 5,000+ subscribers in business, tech, finance, or niche professional categories. Active or dormant — both work.'
    },
    {
      q: 'Do I lose ownership?',
      a: 'No. With our revenue share model, you keep 100% ownership. We just operate and monetize. With acquisition, you sell outright — your choice.'
    },
    {
      q: 'How much can I expect to make?',
      a: 'Depends on your list. A 10k sub business newsletter can generate $5k-15k/month. We take 30-50% of what we grow it to. You do the math.'
    },
    {
      q: 'What if my newsletter is dormant?',
      a: 'Perfect. Dormant lists are often the best opportunities. No recent content means no hurt feelings from subscribers when we restart.'
    },
    {
      q: 'Is there any upfront cost?',
      a: 'Zero. We only make money when you make money. If we can't grow your revenue, you don't pay anything.'
    },
    {
      q: 'How long does the process take?',
      a: 'Valuation: 48 hours. First call: within 1 week. Deal closed: 2-4 weeks (if we move forward).'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative z-10">
      <style dangerouslySetInnerHTML={{ __html: `
        .fixed, [class*="fixed"] { display: none !important; }
        video { display: none !important; }
        [style*="background:transparent"] { background: #0a0a0a !important; }
      ` }} />
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
            How OffPattern Labs Works
          </h1>
          <p className="text-xl text-gray-400">
            From submission to payday — transparent, fast, zero BS.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm text-[#00ff88] font-mono mb-2">Step {step.num}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
                {step.num !== '05' && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#222] text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-lg p-12 border border-[#222]">
            <h2 className="text-3xl font-bold mb-4">Ready to See What Your List Is Worth?</h2>
            <p className="text-gray-400 mb-8">
              Free valuation. Zero obligation. Completely confidential.
            </p>
            <a
              href="/submit-deal"
              className="inline-block bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Free Valuation →
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111] border border-[#222] rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-[#00ff88]">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 px-4 border-t border-[#222]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="mailto:joshil@offpatternlabs.com" 
            className="text-[#00d4ff] hover:underline text-lg"
          >
            joshil@offpatternlabs.com
          </a>
        </div>
      </div>
    </div>
  );
}
