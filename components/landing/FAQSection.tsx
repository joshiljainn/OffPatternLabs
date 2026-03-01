"use client";
import React, { useState } from "react";

const faqs = [
    { q: "Do I lose control of my editorial voice?", a: "No. You retain full creative control. We handle the 'business' side—sponsorships, growth, and operations. We only intervene in content if you explicitly ask for editorial strategy." },
    { q: "How does the revenue share work?", a: "We integrate our sponsorship network and affiliate deals. We take a % of the *new* revenue we generate. If we don't increase your earnings, we don't get paid." },
    { q: "What if I want to sell the newsletter later?", a: "We are your natural buyer. Since we already operate it, we can offer a fair valuation without a 3-month diligence process. Or, we can help you sell it to a third party for a higher multiple." },
    { q: "I have 2,000 subscribers. Is that enough?", a: "It depends on the niche. For B2B/Finance, yes. For general lifestyle, we usually look for 5k+. Submit your URL for a free audit, and we'll tell you honestly." },
    { q: "What platforms do you work with?", a: "We specialize in Substack, Beehiiv, and ConvertKit. We can also work with custom WordPress setups, but the integration takes a bit longer." },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold text-center mb-12" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="retro-card overflow-hidden cursor-pointer" onClick={() => setOpen(open === idx ? null : idx)}>
                            <div className="flex items-center justify-between px-6 py-5">
                                <h3 className="font-display font-semibold text-base pr-4" style={{ color: "#0B132B" }}>{faq.q}</h3>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-transform" style={{ borderColor: "#E07A5F", color: "#E07A5F", transform: open === idx ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                            </div>
                            {open === idx && (
                                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#0B132B", opacity: 0.72 }}>{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
