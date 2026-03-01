import React from "react";
import Link from "next/link";

export default function Closing() {
    return (
        <footer className="py-12 md:py-20 px-4 pb-16 bg-transparent">
            <div className="w-full max-w-5xl mx-auto bg-[#FDFBF7] border-2 border-[#111] shadow-[8px_8px_0px_#111] rounded-[24px] p-8 md:p-16 relative z-10 text-center">
                <h2 className="font-display font-bold mb-4" style={{ color: "#0B132B", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                    &ldquo;The best time to plant a tree was 20 years ago.
                    <br />The second best time is now.&rdquo;
                </h2>
                <p className="mb-12 italic text-sm" style={{ color: "#0B132B", opacity: 0.5 }}>— Chinese Proverb</p>
                <p className="mb-8 leading-relaxed max-w-xl mx-auto" style={{ color: "#0B132B", opacity: 0.75 }}>
                    Ownership is the only path to true sovereignty. Stop renting your time. Start owning assets.
                </p>
                <Link href="/#contact" className="btn-retro-orange">Start Your Journey →</Link>
                <div className="mt-16 text-xs space-y-2" style={{ color: "#0B132B", opacity: 0.3 }}>
                    <p>&copy; {new Date().getFullYear()} OffPattern Labs. All Rights Reserved.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/original" className="hover:opacity-70 transition-opacity">Legacy Site</Link>
                        <Link href="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
