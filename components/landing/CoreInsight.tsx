import React from "react";
import { WavyLine } from "../RetroDecorations";

export default function CoreInsight() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <div className="mb-12">
                    <h2
                        className="font-display font-bold mb-4 leading-tight"
                        style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
                    >
                        The Uncomfortable Truth:&nbsp;
                        <br />
                        Building From Scratch is Often a Mistake.
                    </h2>
                    <div className="h-1 w-20 mb-8 rounded-full" style={{ background: "#E07A5F" }} />
                    <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "#0B132B", opacity: 0.8 }}>
                        We are raised to believe that entrepreneurship means starting with a
                        blank page. We celebrate the &quot;0 to 1&quot; journey. But for most experienced
                        operators and investors, 0 to 1 is simply unnecessary risk.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "#0B132B", opacity: 0.8 }}>
                        While you are struggling to find product-market fit, thousands of
                        profitable, cash-flowing digital businesses are sitting dormant. Their
                        founders are tired, distracted, or simply ready to move on.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-semibold" style={{ color: "#0B132B" }}>
                        The opportunity isn&apos;t in invention. It&apos;s in acquisition and optimization.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="retro-card p-6">
                        <h3 className="font-display text-xl mb-4" style={{ color: "#0B132B" }}>The Solopreneur Grind</h3>
                        <ul className="space-y-3 text-sm" style={{ color: "#0B132B", opacity: 0.75 }}>
                            <li className="flex items-start gap-2"><span style={{ color: "#E07A5F" }} className="font-bold mt-0.5">×</span>Endless content creation treadmill</li>
                            <li className="flex items-start gap-2"><span style={{ color: "#E07A5F" }} className="font-bold mt-0.5">×</span>90% of revenue relies on YOU</li>
                            <li className="flex items-start gap-2"><span style={{ color: "#E07A5F" }} className="font-bold mt-0.5">×</span>Burnout is a matter of &quot;when&quot;, not &quot;if&quot;</li>
                        </ul>
                    </div>
                    <div className="retro-card p-6 relative overflow-hidden" style={{ background: "#0B132B" }}>
                        <WavyLine className="absolute top-3 right-3 opacity-80" />
                        <h3 className="font-display text-xl mb-4 mt-6" style={{ color: "#FDFBF7" }}>The Operator Model</h3>
                        <ul className="space-y-3 text-sm" style={{ color: "#FDFBF7", opacity: 0.8 }}>
                            <li className="flex items-start gap-2"><span style={{ color: "#5E7B52" }} className="font-bold mt-0.5">✓</span>Revenue decoupled from writing time</li>
                            <li className="flex items-start gap-2"><span style={{ color: "#5E7B52" }} className="font-bold mt-0.5">✓</span>Automated sponsorship systems</li>
                            <li className="flex items-start gap-2"><span style={{ color: "#5E7B52" }} className="font-bold mt-0.5">✓</span>Asset value increases even if you sleep</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
