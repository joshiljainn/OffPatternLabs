import React from "react";

export default function WhoThisIsFor() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center text-gray-900 mb-12">
                Who Should Work With OffPattern Labs
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Ideal Fit */}
                <div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-green-700 mb-6 border-b border-green-200 pb-2">
                        The Ideal Fit
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-green-600 font-bold">01/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Founders Seeking Exits</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You've built a solid product but are tired of operating it. You want a clean, cash exit to a team that will respect your work.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-green-600 font-bold">02/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Operators Wanting Ownership</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You know how to grow businesses but hate starting from zero. You want to buy cash flow, not build a job.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-green-600 font-bold">03/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Capital Allocators</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You have capital but no deal flow. You want exposure to high-yield digital assets without becoming a full-time operator.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Not a Fit */}
                <div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-red-700 mb-6 border-b border-red-200 pb-2">
                        Not A Fit
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">01/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Get-Rich-Quick Seekers</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    This is long-term asset ownership. If you're looking for overnight 10x returns or "passive income" without work, look elsewhere.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">02/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Hype Chasers</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    We don't buy crypto signals, dropshipping fads, or businesses built on loopholes. We buy foundational value.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">03/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Disengaged Owners</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    Even "passive" investors need to understand what they own. If you don't care about the asset, you aren't the right partner.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
