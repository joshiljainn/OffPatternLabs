import React from "react";

export default function FAQSection() {
    const faqs = [
        {
            q: "How is this different from Flippa or Empire Flippers?",
            a: "They are marketplaces; they want volume. We are a private investment & operating firm; we want quality. We don't list thousands of deals. We curate or acquire a handful of high-conviction assets.",
        },
        {
            q: "What if I have never bought a business before?",
            a: "That is exactly why we exist. We handle the sourcing, diligence, and negotiation. You can partner with us as a capital partner, or we can guide you through your first acquisition as an advisor.",
        },
        {
            q: "How do you make money?",
            a: "We invest our own capital, we take equity in deals we facilitate, or we charge a flat success fee for advisory. We are incentivized by long-term asset performance, not just closing fees.",
        },
        {
            q: "What are the risks?",
            a: "The biggest risk is traffic volatility (algorithm updates) and platform dependency. We mitigate this by buying assets with minimal churn, diversified traffic, and long operating history (3+ years).",
        },
        {
            q: "How involved do I need to be?",
            a: "If you invest with us, it can be largely passive. If you buy an asset yourself with our help, you should expect to spend 5-10 hours a week on operations unless you hire a dedicated operator.",
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
