import React from "react";

export default function TrustSignals() {
    return (
        <section className="py-20 px-6 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-medium text-white mb-12 text-center">
                    Our Operating Philosophy
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex gap-4">
                        <div className="text-2xl pt-1">🛡️</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Preservation First</h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Our first rule is: Don't break what works. We respect the legacy of the founder and the habits of existing customers. Optimization comes only after stability.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-2xl pt-1">🔍</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Radical Transparency</h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                We share the good, the bad, and the ugly. Whether you are a buyer or a seller, you will never wonder where you stand or what the numbers really say.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-2xl pt-1">🧘</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Calm Execution</h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Urgency leads to mistakes. We don't sprint; we march. We prioritize sustainable systems over growth hacks that burn out in a month.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-2xl pt-1">🤝</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Long-Term Alignment</h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                We are in this for the decade, not the quarter. We build relationships with sellers that last long after the wire transfer clears.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
