import React from "react";

export default function Education() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12">
                A Primer on Micro-Acquisitions
            </h2>

            <div className="space-y-12">
                <div>
                    <h3 className="text-xl font-medium mb-3">What is "Digital ETA"?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        ETA stands for <strong>Entrepreneurship Through Acquisition</strong>.
                        Instead of trying to build an audience from zero (which is painful and slow),
                        we partner with or acquire <strong>existing audiences</strong>. We skip the "cold start" problem
                        and go straight to monetization and scale.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-3">Target Assets</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We focus on "boring" text-based businesses that have high trust:
                    </p>
                    <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Dormant Newsletters</span>
                            <span className="text-gray-600 text-sm">
                                5k+ subscribers, no emails in 3+ months. Value = Revival Potential.
                            </span>
                        </li>
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Active "Hobby" Lists</span>
                            <span className="block text-gray-600 text-sm">
                                Great content, zero monetization. Value = Sponsorships.
                            </span>
                        </li>
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Niche Communities</span>
                            <span className="text-gray-600 text-sm">
                                Slack/Discord groups with high engagement. Value = Products.
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-3">How Valuation Works</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Internet businesses are typically valued at a multiple of their
                        <strong> SDE (Seller Discretionary Earnings)</strong> or <strong>Net Profit</strong>.
                        <br className="mb-4" />
                        A typical range is 2.5x to 4.5x annual profit. This means if you buy right,
                        you are looking at a 25% - 40% initial yield on your capital—before growth optimization.
                    </p>
                </div>
            </div>
        </section>
    );
}
