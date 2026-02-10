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
                                <h4 className="font-medium text-gray-900">The Burned-Out Editor</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You built a 10k+ list but haven't sent an email in 6 months. You feel guilty, but you just don't have the energy to write anymore.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-green-600 font-bold">02/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">The "Hobbyist" Expert</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You write incredible content but have $0 revenue. You hate sales, sponsorships, and "business stuff." You just want to create.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-green-600 font-bold">03/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">The Academic / Researcher</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    You have a loyal following of smart readers, but you don't know how to monetize them without feeling "salesy" or cheap.
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
                                <h4 className="font-medium text-gray-900">Spammers & Scrapers</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    If you built your list by scraping emails or buying data, we can't help you. We only work with organic, opted-in audiences.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">02/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Tiny Lists (&lt;1k Subs)</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    We love you, but the economics don't work yet. Keep writing, keep growing, and come back when you hit 1,000 true fans.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">03/</span>
                            <div>
                                <h4 className="font-medium text-gray-900">Control Freaks</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    If you want us to operate, you have to let us operate. We need creative freedom to test headlines, offers, and formats.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
