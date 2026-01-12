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
                                <span className="text-gray-600">Target Deal Size</span>
                                <span className="font-medium text-gray-900">$50k - $500k</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Revenue Range (ARR)</span>
                                <span className="font-medium text-gray-900">$20k - $200k</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Target Margins</span>
                                <span className="font-medium text-gray-900">40% - 90%</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                <span className="text-gray-600">Time to Close</span>
                                <span className="font-medium text-gray-900">30 - 60 Days</span>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 italic">
                            *These are typical ranges for our primary acquisitions. Larger deals are considered on a case-by-case basis.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                            Risk & Involvement
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Risks Are Real</h4>
                                <p className="text-sm text-gray-600">
                                    Platform dependency (Google/Amazon updates), key-person risk, and market shifts are real threats. We diligence heavily to mitigate these, but they never disappear.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Your Involvement</h4>
                                <p className="text-sm text-gray-600">
                                    This is not a "set it and forget it" passive income stream like a dividend stock. It requires oversight, strategic input, or a dedicated operator (which we provide or source).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
