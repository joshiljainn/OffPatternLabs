import React from "react";
import { SmileyFace } from "../RetroDecorations";

export default function WhoThisIsFor() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold text-center mb-12" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    Who Should Work With OffPattern Labs
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Ideal Fit */}
                    <div className="retro-card p-8 relative overflow-hidden">
                        <SmileyFace className="absolute top-4 right-4 opacity-90" />
                        <h3 className="font-display text-base font-bold uppercase tracking-widest mb-6 pb-2 border-b-2 mt-2" style={{ color: "#5E7B52", borderColor: "#5E7B52" }}>The Ideal Fit</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#5E7B52" }}>01/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>The Burned-Out Editor</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>You built a 10k+ list but haven&apos;t sent an email in 6 months. You feel guilty, but you just don&apos;t have the energy to write anymore.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#5E7B52" }}>02/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>The &quot;Hobbyist&quot; Expert</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>You write incredible content but have $0 revenue. You hate sales, sponsorships, and &quot;business stuff.&quot; You just want to create.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#5E7B52" }}>03/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>The Academic / Researcher</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>You have a loyal following of smart readers, but you don&apos;t know how to monetize them without feeling &quot;salesy&quot; or cheap.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Not a Fit */}
                    <div className="retro-card p-8">
                        <h3 className="font-display text-base font-bold uppercase tracking-widest mb-6 pb-2 border-b-2" style={{ color: "#E07A5F", borderColor: "#E07A5F" }}>Not A Fit</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#E07A5F" }}>01/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>Spammers &amp; Scrapers</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>If you built your list by scraping emails or buying data, we can&apos;t help you. We only work with organic, opted-in audiences.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#E07A5F" }}>02/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>Tiny Lists (&lt;1k Subs)</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>We love you, but the economics don&apos;t work yet. Keep writing, keep growing, and come back when you hit 1,000 true fans.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-sm mt-0.5" style={{ color: "#E07A5F" }}>03/</span>
                                <div>
                                    <h4 className="font-semibold text-sm" style={{ color: "#0B132B" }}>Control Freaks</h4>
                                    <p className="text-sm mt-1" style={{ color: "#0B132B", opacity: 0.7 }}>If you want us to operate, you have to let us operate. We need creative freedom to test headlines, offers, and formats.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
