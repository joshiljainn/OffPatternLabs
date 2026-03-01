import React from "react";
import Link from "next/link";
import { RetroStar } from "../RetroDecorations";

export default function PrimaryCTA() {
    return (
        <section id="contact" className="py-12 md:py-20 px-4 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10 text-center overflow-hidden">
                <RetroStar className="absolute bottom-6 right-6 opacity-90" />
                <h2 className="font-display font-bold mb-6" style={{ color: "#0B132B", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
                    Ready to Revive Your Newsletter?
                </h2>
                <p className="mb-10 leading-relaxed max-w-xl mx-auto" style={{ color: "#0B132B", opacity: 0.72 }}>
                    If you have a dormant list of 5k+ subscribers, we should talk.
                    <br />We operate, you get paid. No upfront cost, just shared upside.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="#audit" className="btn-retro-orange">Get Your Free Valuation</Link>
                    <a href="mailto:joshil@offpatternlabs.com" className="btn-retro-navy">Email Us Directly</a>
                </div>
                <p className="mt-6 text-xs" style={{ color: "#0B132B", opacity: 0.4 }}>
                    We respect your inbox. No spam, just a direct conversation.
                </p>
            </div>
        </section>
    );
}
