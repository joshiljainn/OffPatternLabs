import React from "react";
import Link from "next/link";

export default function PrimaryCTA() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-50 border-y border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">
                    Ready to Discuss Your Acquisition Strategy?
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    We are currently deploying capital for Q1-Q2. If you are a founder looking to exit,
                    or an investor looking for deal flow, let's have a conversation. No pitch decks, just a call.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="https://calendly.com/offpattern/30min"
                        className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                    >
                        Book a Call
                    </Link>
                    <a
                        href="mailto:joshil@offpatternlabs.com"
                        className="border border-gray-300 bg-white px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                        Email Us
                    </a>
                </div>
                <p className="mt-6 text-xs text-gray-400">
                    We respect your time. Calls are with a Principal, not a sales rep.
                </p>
            </div>
        </section>
    );
}
