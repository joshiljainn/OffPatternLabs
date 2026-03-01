import React from "react";

export default function Economics() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold mb-12" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    The Reality of The Model
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Deal Economics */}
                    <div className="retro-card p-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#E07A5F" }}>Deal Economics</h3>
                        <div className="space-y-4">
                            {[
                                ["Our Revenue Share", "30% – 50%"],
                                ["Your Upfront Cost", "$0.00"],
                                ["Target List Size", "5k – 100k Subs"],
                                ["Exclusivity Period", "6 – 12 Months"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex justify-between pb-3" style={{ borderBottom: "1px solid #0B132B20" }}>
                                    <span className="text-sm" style={{ color: "#0B132B", opacity: 0.7 }}>{label}</span>
                                    <span className="font-semibold text-sm" style={{ color: "#0B132B" }}>{value}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-xs italic" style={{ color: "#0B132B", opacity: 0.55 }}>
                            *We operate on a &quot;Sweat Equity&quot; model. We put in the work to grow revenue, and we split the upside. If we don&apos;t grow it, you don&apos;t pay.
                        </p>
                    </div>
                    {/* Risk & Involvement */}
                    <div className="retro-card p-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#E07A5F" }}>Risk &amp; Involvement</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2 text-sm" style={{ color: "#0B132B" }}>What We Handle (The Hard Stuff)</h4>
                                <p className="text-sm leading-relaxed" style={{ color: "#0B132B", opacity: 0.7 }}>
                                    Sponsorship sales, affiliate deal negotiation, cross-promotion, technical email deliverability, and automated sequences.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-sm" style={{ color: "#0B132B" }}>What You Maintain</h4>
                                <p className="text-sm leading-relaxed" style={{ color: "#0B132B", opacity: 0.7 }}>
                                    Full ownership of the asset. Creative control (optional). The relationship with your audience. We are the engine; you are the driver.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
