import React from "react";
import Link from "next/link";

export default function PrimaryCTA() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">
                    Ready to Revive Your Newsletter?
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    If you have a dormant list of 5k+ subscribers, we should talk.
                    We operate, you get paid. No upfront cost, just shared upside.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#audit"
                        className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                    >
                        Get Your Free Valuation
                    </Link>
                    <a
                        href="mailto:joshil@offpatternlabs.com"
                        className="border border-gray-300 bg-white px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                        Email Us
                    </a>
                </div>
                <p className="mt-6 text-xs text-gray-400">
                    We respect your inbox. No spam, just a direct conversation.
                </p>
            </div>
        </section>
    );
}
