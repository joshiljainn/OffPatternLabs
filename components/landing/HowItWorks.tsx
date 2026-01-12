import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Discovery & Sourcing",
            desc: "We canvas the market, leveraging our proprietary network and deal flow channels to find assets with clear P&L history.",
        },
        {
            title: "First-Pass Filtering",
            desc: "We kill 99% of deals immediately based on churn, tech debt, platform risk, or unsustainable unit economics.",
        },
        {
            title: "Deep Diligence",
            desc: "For the top 1%, we verify every transaction. Bank statements, payment processor logs, and code audits. Zero trust, full verification.",
        },
        {
            title: "Valuation & Offer",
            desc: "We model the returns based on reality, not optimistic projections. We clear at a price that makes sense for cash-on-cash returns.",
        },
        {
            title: "Closing & Transfer",
            desc: "We handle the legal migration, escrow, and asset transfer. A safe, regulated, and professional closing process.",
        },
        {
            title: "Optimization & Growth",
            desc: "Day 1 begins the real work. We install our operating system to stabilize revenue and initiate growth levers.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 px-6 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-medium mb-12 text-center">
                    The Process
                </h2>

                <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-600 border-2 border-gray-900"></span>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                <span className="text-gray-500 font-mono text-sm uppercase tracking-widest pt-1 min-w-[120px]">
                                    Phase {String(idx + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-serif text-xl mb-2 text-gray-100">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
