import React from "react";

export default function WhatWeDoSection() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        We Operate Your Newsletter. You Get Paid.
                    </h2>
                    <p className="text-gray-600">
                        Writing is hard. Monetization is harder. We are an active operating firm that
                        turns "hobby" newsletters into serious businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">01</div>
                        <h3 className="font-serif text-xl mb-3">Newsletter Revival</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Haven't sent an email in months? We take over operations. We clean your list,
                            warm up your domain, and start publishing high-quality, curated content that
                            your audience actually wants.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">02</div>
                        <h3 className="font-serif text-xl mb-3">Instant Monetization</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Most newsletters leave 80% of revenue on the table. We instantly plug your list
                            into our sponsorship network and affiliate deals. We monetize from Day 1.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">03</div>
                        <h3 className="font-serif text-xl mb-3">Growth Engines</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We don't just maintain; we grow. Used cross-promotion with our portfolio of
                            newsletters and paid acquisition strategies to double your list size.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold tracking-widest text-gray-400 mb-4">04</div>
                        <h3 className="font-serif text-xl mb-3">Exit Optionality</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Want to cash out completely? Because we already operate the asset, we are
                            the natural buyer. We offer fair multiples for a clean exit when you're ready.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
