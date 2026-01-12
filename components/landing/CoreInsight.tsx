import React from "react";

export default function CoreInsight() {
    return (
        <section className="py-20 px-6 max-w-3xl mx-auto border-t border-gray-200">
            <div className="mb-12">
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">
                    The Uncomfortable Truth: <br />
                    Building From Scratch is Often a Mistake.
                </h2>
                <div className="h-1 w-20 bg-gray-900 mb-8"></div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We are raised to believe that entrepreneurship means starting with a
                    blank page. We celebrate the "0 to 1" journey. But for most experienced
                    operators and investors, 0 to 1 is simply unnecessary risk.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    While you are struggling to find product-market fit, thousands of
                    profitable, cash-flowing digital businesses are sitting dormant. Their
                    founders are tired, distracted, or simply ready to move on.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    The opportunity isn't in invention. It's in acquisition and optimization.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-serif text-xl mb-3">The Builder's Trap</h3>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2 text-red-500">×</span> 90% failure rate in first 3 years
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-red-500">×</span> Years of zero revenue
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-red-500">×</span> Constant search for product-market fit
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg text-white">
                    <h3 className="font-serif text-xl mb-3">The Buyer's Advantage</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2 text-green-400">✓</span> Day 1 profitability
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-400">✓</span> Proven customer base
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-400">✓</span> Focus on growth, not survival
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
