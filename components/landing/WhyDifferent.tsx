import React from "react";

export default function WhyDifferent() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12 text-center">
                Signal vs. Noise
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-100 rounded-lg bg-white shadow-sm">
                    <h3 className="font-serif text-xl mb-4 text-gray-400">The "Marketplace" Way</h3>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li className="flex gap-2">
                            <span className="text-gray-300">→</span>
                            Focus on listing volume and fees
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-300">→</span>
                            Seller-biased metrics (often inflated)
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-300">→</span>
                            "As-is" with limited support
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-300">→</span>
                            Encourages bidding wars
                        </li>
                    </ul>
                </div>

                <div className="p-8 border border-gray-900 rounded-lg bg-gray-50">
                    <h3 className="font-serif text-xl mb-4 text-gray-900">The OffPattern Way</h3>
                    <ul className="space-y-4 text-sm text-gray-800">
                        <li className="flex gap-2">
                            <span className="text-black font-bold">→</span>
                            Focus on deal quality and fit
                        </li>
                        <li className="flex gap-2">
                            <span className="text-black font-bold">→</span>
                            Reconstructed, verified P&Ls
                        </li>
                        <li className="flex gap-2">
                            <span className="text-black font-bold">→</span>
                            Full operational transition plan
                        </li>
                        <li className="flex gap-2">
                            <span className="text-black font-bold">→</span>
                            Fair value based on multiples
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
