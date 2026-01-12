import React from "react";
import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center md:text-left">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">
                OffPattern Labs
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-gray-900 mb-6">
                We Buy, Operate, and Scale <br className="hidden md:block" />
                Profitable Niche Internet Businesses.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Most internet businesses are either burnt out or undervalued. We provide
                a clean exit for founders and a rigorous operating platform for growth.
                No hype. No flip-n-ship. Just long-term cash flow engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                    href="/#contact"
                    className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                    Sell Your Business
                </Link>
                <Link
                    href="/#how-it-works"
                    className="border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                    See How We Operate
                </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">
                Acquiring SaaS, Content Sites, and Digital Tools doing $500k - $5M ARR.
            </p>
        </section>
    );
}
