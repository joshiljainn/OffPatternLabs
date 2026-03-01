"use client";
import React from "react";
import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-4 py-24">

            {/* ── Floating Pill Navigation ───────────────────────────────── */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-[#FDFBF7] rounded-full border-2 border-black shadow-[4px_4px_0px_#111] px-6 py-3 flex justify-between items-center">

                {/* Logo — uses img tag with text fallback via onError */}
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
                    aria-hidden="true"
                >
                    OFFPATTERN<br />LABS
                </span>

                {/* Nav links */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#how-it-works"
                        className="text-xs font-semibold uppercase tracking-widest text-[#0B132B] hover:text-[#E07A5F] transition-colors"
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#audit"
                        className="btn-retro-orange"
                        style={{ padding: "0.4rem 1.1rem", fontSize: "0.75rem" }}
                    >
                        Free Audit
                    </Link>
                </div>
            </nav>

            {/* ── Hero Card ─────────────────────────────────────────────── */}
            <div
                className="w-full bg-[#FDFBF7] border-2 border-black rounded-[24px] shadow-[8px_8px_0px_#111] p-12 flex flex-col items-center text-center relative z-10"
                style={{ maxWidth: "850px" }}
            >
                <p className="text-xs font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#E07A5F" }}>
                    Newsletter Acquisition &amp; Operations
                </p>

                <h1
                    className="font-display font-bold leading-[1.05] mb-6 text-balance"
                    style={{ color: "#0B132B", fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
                >
                    Your Dormant Newsletter
                    <br />Is&nbsp;Printing Money
                    <br /><span style={{ color: "#E07A5F" }}>for Someone Else.</span>
                </h1>

                <p
                    className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                    style={{ color: "#0B132B", opacity: 0.75 }}
                >
                    We operate, monetize, and grow your publication.
                    <br />
                    You keep ownership — and the upside.{" "}
                    <span className="font-semibold" style={{ opacity: 1 }}>No upfront cost.</span>
                </p>

                {/* Pill Input Row */}
                <div
                    className="w-full bg-white border-2 border-black rounded-full px-4 py-3 flex flex-col sm:flex-row items-center gap-3"
                    style={{ boxShadow: "4px 4px 0px #111", maxWidth: "700px" }}
                >
                    <input
                        type="text"
                        placeholder="Your newsletter niche…"
                        className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-[#0B132B]/40 text-[#0B132B] px-2 w-full sm:w-auto"
                    />
                    <div className="w-full sm:w-px sm:h-6 h-px bg-black/10" />
                    <select
                        defaultValue=""
                        className="flex-1 bg-transparent outline-none text-sm font-medium text-[#0B132B] cursor-pointer w-full sm:w-auto px-2"
                    >
                        <option value="" disabled>Subscribers…</option>
                        <option value="1k-5k">1,000 – 5,000</option>
                        <option value="5k-10k">5,000 – 10,000</option>
                        <option value="10k-50k">10,000 – 50,000</option>
                        <option value="50k+">50,000+</option>
                    </select>
                    <div className="w-full sm:w-px sm:h-6 h-px bg-black/10" />
                    <select
                        defaultValue=""
                        className="flex-1 bg-transparent outline-none text-sm font-medium text-[#0B132B] cursor-pointer w-full sm:w-auto px-2"
                    >
                        <option value="" disabled>Status…</option>
                        <option value="dormant">Dormant (3+ months)</option>
                        <option value="active">Active, not monetized</option>
                        <option value="monetized">Monetized, want to scale</option>
                    </select>
                    <Link href="#audit" className="btn-retro-orange whitespace-nowrap" style={{ padding: "0.65rem 1.4rem" }}>
                        Get My Audit →
                    </Link>
                </div>

                <p className="mt-5 text-xs" style={{ color: "#0B132B", opacity: 0.45 }}>
                    Works with Substack, Beehiiv, and WordPress blogs with 5k+ subscribers.
                    <br />Zero obligation. Completely confidential.
                </p>
            </div>
        </section>
    );
}
