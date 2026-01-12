import React from "react";

export default function Education() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12">
                A Primer on Micro-Acquisitions
            </h2>

            <div className="space-y-12">
                <div>
                    <h3 className="text-xl font-medium mb-3">What is "ETA"?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        ETA stands for <strong>Entrepreneurship Through Acquisition</strong>.
                        It is the path of buying an existing, profitable business rather than
                        starting one from scratch. It is the path taken by private equity
                        firms, family offices, and smart operators. We bring this model to
                        the micro-cap space ($50k - $5M deal sizes).
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-3">Target Assets</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        We focus on "boring" bits of the internet that print cash:
                    </p>
                    <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Micro-SaaS</span>
                            B2B tools solving specific problems for niche industries.
                        </li>
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Content/Affiliate</span>
                            High-authority authority sites with organic traffic moats.
                        </li>
                        <li className="bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="block font-bold mb-1">Digital Products</span>
                            Courseware, templates, and asset libraries with high margins.
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
