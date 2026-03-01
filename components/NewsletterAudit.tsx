import React from "react";

export default function NewsletterAudit() {
    return (
        <section id="audit" className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#0B132B] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-display font-bold mb-6" style={{ color: "#FDFBF7", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
                        How Much is Your Dead List Worth?
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "#FDFBF7", opacity: 0.65 }}>
                        Stop guessing. Get a free, confidential audit of your newsletter.
                        We&apos;ll analyze your niche, metrics, and dormant subscriber count to give you
                        a concrete valuation and a plan to revive it.
                    </p>
                </div>

                <div className="max-w-xl mx-auto p-8 rounded-[16px] border-2" style={{ background: "#0B132B", borderColor: "#E07A5F", boxShadow: "8px 8px 0px #E07A5F" }}>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="url" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E07A5F" }}>
                                Newsletter URL (Substack, Beehiiv, Website)
                            </label>
                            <input type="url" id="url" className="w-full rounded-[10px] px-4 py-3 text-sm outline-none" style={{ background: "#FDFBF7", border: "2px solid #111", color: "#0B132B" }} placeholder="https://example.substack.com" required />
                        </div>
                        <div>
                            <label htmlFor="subscribers" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E07A5F" }}>
                                Approximate Subscriber Count
                            </label>
                            <select id="subscribers" className="w-full rounded-[10px] px-4 py-3 text-sm outline-none cursor-pointer" style={{ background: "#FDFBF7", border: "2px solid #111", color: "#0B132B" }} required>
                                <option value="">Select a range</option>
                                <option value="1k-5k">1,000 – 5,000</option>
                                <option value="5k-10k">5,000 – 10,000</option>
                                <option value="10k-50k">10,000 – 50,000</option>
                                <option value="50k+">50,000+</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E07A5F" }}>
                                Where should we send the audit?
                            </label>
                            <input type="email" id="email" className="w-full rounded-[10px] px-4 py-3 text-sm outline-none" style={{ background: "#FDFBF7", border: "2px solid #111", color: "#0B132B" }} placeholder="you@email.com" required />
                        </div>
                        <button type="submit" className="btn-retro-orange w-full text-center" style={{ borderRadius: "12px" }}>
                            Get My Free Audit →
                        </button>
                        <p className="text-xs text-center" style={{ color: "#FDFBF7", opacity: 0.4 }}>
                            Zero obligation. Your data is confidential. We do not spam.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
