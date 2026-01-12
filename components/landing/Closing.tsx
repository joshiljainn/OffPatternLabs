import React from "react";
import Link from "next/link";

export default function Closing() {
    return (
        <footer className="py-20 px-6 bg-white border-t border-gray-100 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="font-serif text-2xl text-gray-900 mb-6">
                    "The best time to plant a tree was 20 years ago. <br />
                    The second best time is now."
                </h2>
                <p className="text-gray-500 mb-12 italic">
                    — Chinese Proverb
                </p>

                <p className="text-gray-600 mb-8 leading-relaxed block">
                    Ownership is the only path to true sovereignty. Stop renting your time. Start owning assets.
                </p>

                <Link
                    href="/#contact"
                    className="text-black font-medium border-b-2 border-black hover:text-gray-600 hover:border-gray-600 transition-all pb-1"
                >
                    Start Your Journey &rarr;
                </Link>

                <div className="mt-20 text-xs text-gray-300">
                    &copy; {new Date().getFullYear()} OffPattern Labs. All Rights Reserved.
                    <div className="mt-2 space-x-4">
                        <Link href="/original" className="hover:text-gray-500">Legacy Site</Link>
                        <Link href="/privacy" className="hover:text-gray-500">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
