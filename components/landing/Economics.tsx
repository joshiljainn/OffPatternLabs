import React from "react";

export default function Economics() {
    return (
        <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12">
                    The Reality of The Model
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                            Deal Economics
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Our Revenue Share</span>
                                <span className="font-medium text-gray-900">30% - 50%</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Your Upfront Cost</span>
                                <span className="font-medium text-gray-900">$0.00</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Target List Size</span>
                                <span className="font-medium text-gray-900">5k - 100k Subs</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Exclusivity Period</span>
                                <span className="font-medium text-gray-900">6 - 12 Months</span>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 italic">
                            *We operate on a "Sweat Equity" model. We put in the work to grow revenue, and we split the upside. If we don't grow it, you don't pay.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                            Risk & Involvement
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">What We Handle (The Hard Stuff)</h4>
                                <p className="text-sm text-gray-600">
                                    Sponsorship sales, affiliate deal negotiation, cross-promotion, technical email deliverability, and automated sequences.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">What You Maintain</h4>
                                <p className="text-sm text-gray-600">
                                    Full ownership of the asset. Creative control (optional). The relationship with your audience. We are the engine; you are the driver.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
