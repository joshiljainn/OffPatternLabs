import React from "react";

const philosophy = [
    { icon: "🛡️", title: "Preservation First", desc: "Our first rule is: Don't break what works. We respect the legacy of the founder and the habits of existing customers. Optimization comes only after stability." },
    { icon: "🔍", title: "Radical Transparency", desc: "We share the good, the bad, and the ugly. Whether you are a buyer or a seller, you will never wonder where you stand or what the numbers really say." },
    { icon: "🧘", title: "Calm Execution", desc: "Urgency leads to mistakes. We don't sprint; we march. We prioritize sustainable systems over growth hacks that burn out in a month." },
    { icon: "🤝", title: "Long-Term Alignment", desc: "We are in this for the decade, not the quarter. We build relationships with sellers that last long after the wire transfer clears." },
];

export default function TrustSignals() {
    return (
        <section className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#0B132B] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10">
                <h2 className="font-display font-bold text-center mb-12" style={{ color: "#FDFBF7", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    Our Operating Philosophy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {philosophy.map((item) => (
                        <div key={item.title} className="p-6 rounded-[16px] border-2 flex gap-4" style={{ background: "#0B132B", borderColor: "#E07A5F", boxShadow: "6px 6px 0px #E07A5F" }}>
                            <div className="text-2xl pt-1 flex-shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="font-display text-lg mb-2" style={{ color: "#FDFBF7" }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "#FDFBF7", opacity: 0.6 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
