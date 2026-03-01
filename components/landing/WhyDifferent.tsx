import React from "react";

export default function WhyDifferent() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold text-center mb-12" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    Signal vs. Noise
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Marketplace Way */}
                    <div className="retro-card p-8" style={{ opacity: 0.7 }}>
                        <h3 className="font-display text-xl mb-4" style={{ color: "#0B132B" }}>The &quot;Marketplace&quot; Way</h3>
                        <ul className="space-y-4 text-sm" style={{ color: "#0B132B", opacity: 0.6 }}>
                            {["Focus on listing volume and fees", "Seller-biased metrics (often inflated)", '"As-is" with limited support', "Encourages bidding wars"].map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span style={{ color: "#0B132B", opacity: 0.4 }}>→</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* OffPattern Way */}
                    <div className="retro-card p-8" style={{ background: "#0B132B" }}>
                        <h3 className="font-display text-xl mb-4" style={{ color: "#FDFBF7" }}>The OffPattern Way</h3>
                        <ul className="space-y-4 text-sm" style={{ color: "#FDFBF7", opacity: 0.85 }}>
                            {["Focus on deal quality and fit", "Reconstructed, verified P&Ls", "Full operational transition plan", "Fair value based on multiples"].map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span className="font-bold" style={{ color: "#E07A5F" }}>→</span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
