import React from "react";
import Link from "next/link";

export default function LandingHero() {
    return (
        <section className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center md:text-left">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">
                OffPattern Labs
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-gray-900 mb-6">
                We Turn Dormant Newsletters <br className="hidden md:block" />
                Into Cash Flow Assets.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Don't let your list decay. We operate, monetize, and scale your publication
                so you don't have to. You keep ownership (or sell to us).
                <br />
                <span className="text-sm mt-2 block opacity-80">No upfront cost. We only make money when you do.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                    href="#audit"
                    className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                    Get A Free List Audit
                </Link>
                <Link
                    href="#how-it-works"
                    className="border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                    See The Economics
                </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">
                Partnering with Substacks, Beehiivs, and WordPress blogs with 5k+ subscribers.
            </p>
        </section>
    );
}
