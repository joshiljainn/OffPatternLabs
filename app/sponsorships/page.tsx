"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SponsorshipsPage() {
    const [companyName, setCompanyName] = useState("");
    const [budget, setBudget] = useState("");
    const [audience, setAudience] = useState("");

    const handleSponsorClick = (e: React.MouseEvent) => {
        if (companyName || budget || audience) {
            e.preventDefault();
            const message = `Hi! I am interested in sponsoring newsletters through OffPattern Labs. Here is some info:

Company: ${companyName || "Not specified"}
Budget: ${budget || "Not specified"}
Target Audience: ${audience || "Not specified"}`;

            const whatsappUrl = `https://wa.me/918076958506?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        }
    };

    return (
        <main className="relative z-10 w-full flex flex-col items-center min-h-screen bg-transparent">
            {/* ── Floating Pill Navigation ───────────────────────────────── */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-[#FDFBF7] rounded-full border-2 border-black shadow-[4px_4px_0px_#111] px-6 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/logo.svg"
                        alt="OffPattern Labs"
                        className="h-10 md:h-14 w-auto object-contain drop-shadow-sm"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = "block";
                        }}
                    />
                    <span
                        className="font-bold text-lg tracking-tighter text-[#0B132B] hidden"
                        style={{ lineHeight: 1.1 }}
                    >
                        OFFPATTERN<br />LABS
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-xs font-semibold uppercase tracking-widest text-[#0B132B] hover:text-[#E07A5F] transition-colors"
                    >
                        For Newsletter Owners
                    </Link>
                    <Link
                        href="#sponsor-form"
                        className="btn-retro-orange"
                        style={{ padding: "0.4rem 1.1rem", fontSize: "0.75rem" }}
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* ── Hero Section ─────────────────────────────────────────────── */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-24">
                <div
                    className="w-full bg-[#FDFBF7] border-2 border-black rounded-[24px] shadow-[8px_8px_0px_#111] p-12 flex flex-col items-center text-center relative z-10"
                    style={{ maxWidth: "850px" }}
                >
                    <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#E07A5F" }}>
                        Newsletter Sponsorship Brokerage
                    </p>

                    <h1
                        className="font-display font-bold leading-[1.05] mb-6 text-balance"
                        style={{ color: "#0B132B", fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
                    >
                        Reach 100K+ Engaged Readers Through Curated Newsletters
                    </h1>

                    <p
                        className="text-lg md:text-xl mb-10 max-w-2xl"
                        style={{ color: "#3C4858", lineHeight: 1.6 }}
                    >
                        We connect your brand with high-quality newsletters in your niche. 
                        No guesswork. No wasted ad spend. Just real readers who actually open and read.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Your Company Name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="px-6 py-4 border-2 border-black rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent"
                            style={{ maxWidth: "300px" }}
                        />
                        <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="px-6 py-4 border-2 border-black rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent bg-white"
                        >
                            <option value="">Monthly Budget</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-2500">$1,000 - $2,500</option>
                            <option value="2500-5000">$2,500 - $5,000</option>
                            <option value="5000+">$5,000+</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Target Audience"
                            value={audience}
                            onChange={(e) => setAudience(e.target.value)}
                            className="px-6 py-4 border-2 border-black rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent"
                            style={{ maxWidth: "250px" }}
                        />
                    </div>

                    <button
                        onClick={handleSponsorClick}
                        className="btn-retro-orange text-lg px-10 py-5 font-bold uppercase tracking-wider"
                    >
                        Get Your Newsletter Portfolio →
                    </button>

                    <p className="text-xs mt-6" style={{ color: "#8898AA" }}>
                        Free consultation. No commitment. Get a custom portfolio within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── How It Works ─────────────────────────────────────────────── */}
            <section id="how-it-works" className="w-full py-24 px-4 bg-[#FDFBF7]">
                <div className="max-w-5xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        style={{ color: "#0B132B" }}
                    >
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white border-2 border-black rounded-[16px] shadow-[4px_4px_0px_#111] p-8">
                            <div className="text-6xl font-bold mb-4" style={{ color: "#E07A5F" }}>01</div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: "#0B132B" }}>Tell Us Your Goals</h3>
                            <p style={{ color: "#3C4858", lineHeight: 1.6 }}>
                                Share your target audience, budget, and campaign goals. We'll match you with newsletters that actually fit.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black rounded-[16px] shadow-[4px_4px_0px_#111] p-8">
                            <div className="text-6xl font-bold mb-4" style={{ color: "#E07A5F" }}>02</div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: "#0B132B" }}>Get Curated Portfolio</h3>
                            <p style={{ color: "#3C4858", lineHeight: 1.6 }}>
                                We handpick 5-10 newsletters in your niche with engaged readers. You get full stats, pricing, and audience demographics.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black rounded-[16px] shadow-[4px_4px_0px_#111] p-8">
                            <div className="text-6xl font-bold mb-4" style={{ color: "#E07A5F" }}>03</div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: "#0B132B" }}>Launch & Track</h3>
                            <p style={{ color: "#3C4858", lineHeight: 1.6 }}>
                                We handle all negotiations, creative, and scheduling. You get performance reports and can scale what works.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Newsletters ─────────────────────────────────────────────── */}
            <section className="w-full py-24 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-8"
                        style={{ color: "#0B132B" }}
                    >
                        Why Newsletter Sponsorships?
                    </h2>
                    <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: "#3C4858" }}>
                        Newsletter readers are the most engaged audience online. Here's why brands are shifting budget here:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 items-start">
                            <div className="text-4xl">📧</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B132B" }}>80%+ Open Rates</h3>
                                <p style={{ color: "#3C4858" }}>Newsletter readers actually open and read. Compare that to 2% email marketing averages.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-4xl">🎯</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B132B" }}>Hyper-Targeted Audiences</h3>
                                <p style={{ color: "#3C4858" }}>Reach readers by niche, interest, and behavior. No wasted impressions.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-4xl">💰</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B132B" }}>Lower CPM Than Ads</h3>
                                <p style={{ color: "#3C4858" }}>Newsletter CPMs are 30-50% lower than social ads, with 5x better engagement.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="text-4xl">🤝</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B132B" }}>Trust By Association</h3>
                                <p style={{ color: "#3C4858" }}>Readers trust their newsletter creators. Your brand gets that trust by association.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Sample Portfolio ─────────────────────────────────────────────── */}
            <section className="w-full py-24 px-4 bg-[#FDFBF7]">
                <div className="max-w-5xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-center mb-8"
                        style={{ color: "#0B132B" }}
                    >
                        Sample Newsletter Portfolio
                    </h2>
                    <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: "#3C4858" }}>
                        Here's what a typical $2,500/month portfolio looks like:
                    </p>

                    <div className="bg-white border-2 border-black rounded-[16px] shadow-[4px_4px_0px_#111] overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-[#E07A5F] text-white">
                                <tr>
                                    <th className="text-left p-4 font-bold">Newsletter</th>
                                    <th className="text-left p-4 font-bold">Subscribers</th>
                                    <th className="text-left p-4 font-bold">Open Rate</th>
                                    <th className="text-left p-4 font-bold">Cost/Issue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t-2 border-black">
                                    <td className="p-4 font-bold" style={{ color: "#0B132B" }}>The AI Maker</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>14K+</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>65%</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>$400</td>
                                </tr>
                                <tr className="border-t-2 border-black bg-[#F8F9FA]">
                                    <td className="p-4 font-bold" style={{ color: "#0B132B" }}>Enterprise AI Trends</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>9.5K+</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>72%</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>$300</td>
                                </tr>
                                <tr className="border-t-2 border-black">
                                    <td className="p-4 font-bold" style={{ color: "#0B132B" }}>Jacob's Tech Tavern</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>9.1K+</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>68%</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>$280</td>
                                </tr>
                                <tr className="border-t-2 border-black bg-[#F8F9FA]">
                                    <td className="p-4 font-bold" style={{ color: "#0B132B" }}>The Global Move</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>9.5K+</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>70%</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>$300</td>
                                </tr>
                                <tr className="border-t-2 border-black">
                                    <td className="p-4 font-bold" style={{ color: "#0B132B" }}>AI Adopters Club</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>13K+</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>67%</td>
                                    <td className="p-4" style={{ color: "#3C4858" }}>$380</td>
                                </tr>
                                <tr className="border-t-2 border-black bg-[#E07A5F] text-white font-bold">
                                    <td className="p-4">TOTAL REACH</td>
                                    <td className="p-4">55K+ readers</td>
                                    <td className="p-4">68% avg</td>
                                    <td className="p-4">$1,660/month</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center mt-8" style={{ color: "#8898AA" }}>
                        *Sample portfolio for AI/SaaS brands. Your custom portfolio will match your exact audience.
                    </p>
                </div>
            </section>

            {/* ── CTA Section ─────────────────────────────────────────────── */}
            <section id="sponsor-form" className="w-full py-24 px-4 bg-white">
                <div
                    className="max-w-3xl mx-auto bg-[#FDFBF7] border-2 border-black rounded-[24px] shadow-[8px_8px_0px_#111] p-12 text-center"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ color: "#0B132B" }}
                    >
                        Ready to Reach Engaged Readers?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "#3C4858" }}>
                        Get a custom newsletter portfolio within 24 hours. No commitment required.
                    </p>

                    <button
                        onClick={handleSponsorClick}
                        className="btn-retro-orange text-lg px-10 py-5 font-bold uppercase tracking-wider"
                    >
                        Get Your Free Portfolio →
                    </button>

                    <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center text-sm" style={{ color: "#8898AA" }}>
                        <div className="flex items-center gap-2">
                            <span>✅</span>
                            <span>Free consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✅</span>
                            <span>Custom portfolio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✅</span>
                            <span>No commitment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <footer className="w-full py-12 px-4 bg-[#0B132B] text-white text-center">
                <div className="max-w-5xl mx-auto">
                    <p className="text-sm" style={{ color: "#8898AA" }}>
                        © 2026 OffPattern Labs. All rights reserved.
                    </p>
                    <div className="flex gap-6 justify-center mt-4 text-sm">
                        <Link href="/" className="hover:text-[#E07A5F] transition-colors">For Newsletter Owners</Link>
                        <Link href="/sponsorships" className="hover:text-[#E07A5F] transition-colors">For Sponsors</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
