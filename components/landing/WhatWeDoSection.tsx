import React from "react";

export default function WhatWeDoSection() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        What OffPattern Labs Actually Does
                    </h2>
                    <p className="text-gray-600">
                        We are not a brokerage. We are an active operating firm. We identify
                        value where others see noise, and we execute with precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">01</div>
                        <h3 className="font-serif text-xl mb-3">Deal Sourcing</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We track off-market opportunities and monitor marketplaces so you don't have to.
                            We filter through thousands of "opportunities" to find the 1% worth pursuing.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">02</div>
                        <h3 className="font-serif text-xl mb-3">Deep Diligence</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We verify traffic, audit codebases, and reconstruct P&Ls. We dig until we find
                            the truth behind the numbers. If it doesn't pass our stress test, we kill the deal.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">03</div>
                        <h3 className="font-serif text-xl mb-3">Valuation & Negotiation</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We buy at fair multiples, not hype prices. We structure deals to protect downside
                            and align incentives with the seller for a smooth transition.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">04</div>
                        <h3 className="font-serif text-xl mb-3">Growth Operations</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Post-acquisition, we deploy our playbook: CRO, SEO optimization, and systems automation.
                            We turn stagnant assets into compounding growth engines.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
