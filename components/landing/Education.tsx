import React from "react";

const targetAssets = [
    { title: "Dormant Newsletters", desc: "5k+ subscribers, no emails in 3+ months. Value = Revival Potential." },
    { title: 'Active "Hobby" Lists', desc: "Great content, zero monetization. Value = Sponsorships." },
    { title: "Niche Communities", desc: "Slack/Discord groups with high engagement. Value = Products." },
];

export default function Education() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold mb-12" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    A Primer on Micro-Acquisitions
                </h2>
                <div className="space-y-12">
                    <div>
                        <h3 className="font-display text-xl mb-3" style={{ color: "#0B132B" }}>What is &quot;Digital ETA&quot;?</h3>
                        <p className="leading-relaxed" style={{ color: "#0B132B", opacity: 0.75 }}>
                            ETA stands for <strong style={{ color: "#0B132B" }}>Entrepreneurship Through Acquisition</strong>. Instead of trying to build an audience from zero (which is painful and slow), we partner with or acquire <strong style={{ color: "#0B132B" }}>existing audiences</strong>. We skip the &quot;cold start&quot; problem and go straight to monetization and scale.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-display text-xl mb-4" style={{ color: "#0B132B" }}>Target Assets</h3>
                        <p className="mb-6" style={{ color: "#0B132B", opacity: 0.75 }}>We focus on &quot;boring&quot; text-based businesses that have high trust:</p>
                        <ul className="grid md:grid-cols-3 gap-5">
                            {targetAssets.map((a) => (
                                <li key={a.title} className="retro-card p-5">
                                    <span className="block font-display font-bold mb-2 text-sm" style={{ color: "#0B132B" }}>{a.title}</span>
                                    <span className="text-sm" style={{ color: "#0B132B", opacity: 0.65 }}>{a.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-display text-xl mb-3" style={{ color: "#0B132B" }}>How Valuation Works</h3>
                        <p className="leading-relaxed" style={{ color: "#0B132B", opacity: 0.75 }}>
                            Internet businesses are typically valued at a multiple of their <strong style={{ color: "#0B132B" }}>SDE (Seller Discretionary Earnings)</strong> or <strong style={{ color: "#0B132B" }}>Net Profit</strong>.
                            <br /><br />
                            A typical range is 2.5x to 4.5x annual profit. This means if you buy right, you are looking at a 25% – 40% initial yield on your capital — before growth optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
