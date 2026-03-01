import React from "react";
import { Starburst } from "../RetroDecorations";

const services = [
    { num: "01", title: "Newsletter Revival", desc: "Haven't sent an email in months? We take over operations. We clean your list, warm up your domain, and start publishing high-quality, curated content that your audience actually wants." },
    { num: "02", title: "Instant Monetization", desc: "Most newsletters leave 80% of revenue on the table. We instantly plug your list into our sponsorship network and affiliate deals. We monetize from Day 1." },
    { num: "03", title: "Growth Engines", desc: "We don't just maintain; we grow. Used cross-promotion with our portfolio of newsletters and paid acquisition strategies to double your list size.", hasSticker: true },
    { num: "04", title: "Exit Optionality", desc: "Want to cash out completely? Because we already operate the asset, we are the natural buyer. We offer fair multiples for a clean exit when you're ready." },
];

export default function WhatWeDoSection() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <div className="max-w-2xl mb-12">
                    <h2 className="font-display font-bold mb-4" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                        We Operate Your Newsletter. You Get Paid.
                    </h2>
                    <p style={{ color: "#0B132B", opacity: 0.7 }}>
                        Writing is hard. Monetization is harder. We are an active operating firm that turns &quot;hobby&quot; newsletters into serious businesses.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((s) => (
                        <div key={s.num} className="retro-card p-8 relative overflow-hidden">
                            {s.hasSticker && <Starburst className="absolute bottom-3 left-4 opacity-90" />}
                            <div className="text-sm font-bold tracking-widest mb-4" style={{ color: "#E07A5F" }}>{s.num}</div>
                            <h3 className="font-display text-xl mb-3" style={{ color: "#0B132B" }}>{s.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#0B132B", opacity: 0.72 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
