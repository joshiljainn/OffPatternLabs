import React from "react";

export default function FAQSection() {
    const faqs = [
        {
            q: "Do I lose control of my editorial voice?",
            a: "No. You retain full creative control. We handle the 'business' side—sponsorships, growth, and operations. We only intervene in content if you explicitly ask for editorial strategy.",
        },
        {
            q: "How does the revenue share work?",
            a: "We integrate our sponsorship network and affiliate deals. We take a % of the *new* revenue we generate. If we don't increase your earnings, we don't get paid.",
        },
        {
            q: "What if I want to sell the newsletter later?",
            a: "We are your natural buyer. Since we already operate it, we can offer a fair valuation without a 3-month diligence process. Or, we can help you sell it to a third party for a higher multiple.",
        },
        {
            q: "I have 2,000 subscribers. Is that enough?",
            a: "It depends on the niche. For B2B/Finance, yes. For general lifestyle, we usually look for 5k+. Submit your URL for a free audit, and we'll tell you honestly.",
        },
        {
            q: "What platforms do you work with?",
            a: "We specialize in Substack, Beehiiv, and ConvertKit. We can also work with custom WordPress setups, but the integration takes a bit longer.",
        },
    ];

    return (
        <section className="py-20 px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12 text-center">
                Frequently Asked Questions
            </h2>

            <div className="space-y-8">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                        <h3 className="font-medium text-gray-900 mb-3 text-lg">{faq.q}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
