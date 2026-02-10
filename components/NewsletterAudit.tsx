import React from "react";

export default function NewsletterAudit() {
    return (
        <section id="audit" className="py-24 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                    How Much is Your Dead List Worth?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Stop guessing. Get a free, confidential audit of your newsletter.
                    We'll analyze your niche, metrics, and dormant subscriber count to give you
                    a concrete valuation and a plan to revive it.
                </p>
            </div>

            <div className="max-w-xl mx-auto bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-2xl">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="url" className="block text-sm font-medium text-gray-400 mb-2">
                            Newsletter URL (Substack, Beehiiv, Website)
                        </label>
                        <input
                            type="url"
                            id="url"
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                            placeholder="https://example.substack.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subscribers" className="block text-sm font-medium text-gray-400 mb-2">
                            Approximate Subscriber Count
                        </label>
                        <select
                            id="subscribers"
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                            required
                        >
                            <option value="">Select a range</option>
                            <option value="1k-5k">1,000 - 5,000</option>
                            <option value="5k-10k">5,000 - 10,000</option>
                            <option value="10k-50k">10,000 - 50,000</option>
                            <option value="50k+">50,000+</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Where should we send the audit?
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                            placeholder="you@email.com"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-4 rounded hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm"
                    >
                        Get My Free Audit
                    </button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        Zero obligation. Your data is confidential. We do not spam.
                    </p>
                </form>
            </div>
        </section>
    );
}
