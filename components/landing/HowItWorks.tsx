import React from "react";

const steps = [
    { title: "Discovery & Sourcing", desc: "We canvas the market, leveraging our proprietary network and deal flow channels to find assets with clear P&L history." },
    { title: "First-Pass Filtering", desc: "We kill 99% of deals immediately based on churn, tech debt, platform risk, or unsustainable unit economics." },
    { title: "Deep Diligence", desc: "For the top 1%, we verify every transaction. Bank statements, payment processor logs, and code audits. Zero trust, full verification." },
    { title: "Valuation & Offer", desc: "We model the returns based on reality, not optimistic projections. We clear at a price that makes sense for cash-on-cash returns." },
    { title: "Closing & Transfer", desc: "We handle the legal migration, escrow, and asset transfer. A safe, regulated, and professional closing process." },
    { title: "Optimization & Growth", desc: "Day 1 begins the real work. We install our operating system to stabilize revenue and initiate growth levers." },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#0B132B] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold mb-12 text-center" style={{ color: "#FDFBF7", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    The Process
                </h2>
                <div className="relative ml-4 md:ml-10 space-y-12" style={{ borderLeft: "3px solid #E07A5F" }}>
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            <span
                                className="absolute top-1 rounded-full border-2"
                                style={{ left: "-9px", width: "16px", height: "16px", background: "#E07A5F", borderColor: "#0B132B" }}
                            />
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                                <span className="font-mono text-xs uppercase tracking-widest pt-1 min-w-[120px]" style={{ color: "#E07A5F" }}>
                                    Phase {String(idx + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-display text-lg mb-2" style={{ color: "#FDFBF7" }}>{step.title}</h3>
                                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#FDFBF7", opacity: 0.6 }}>{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
