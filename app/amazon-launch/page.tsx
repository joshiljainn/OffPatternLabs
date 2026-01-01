import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Launch Your Amazon Store End-to-End | Needs No Tech Skills',
    description: 'We build and launch your Amazon store for you. Perfect for manufacturers, wholesalers, and offline businesses. No learning curve.',
};

export default function AmazonLaunchPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* SECTION 1 — HERO */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6 text-balance">
                            We Build Your Amazon Store for You — Start to Finish.
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                            From product photos to a live Amazon listing.
                            <br className="hidden md:block" />
                            No learning. No effort. No confusion.
                        </p>
                        <p className="text-sm md:text-base text-neutral-500 mb-10 font-medium tracking-wide uppercase">
                            Built for manufacturers, wholesalers, and offline businesses expanding online
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://wa.me/918076958506?text=Hi,%20I'm%20interested%20in%20your%20Amazon%20launch%20service."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary"
                            >
                                Get My Amazon Store Built
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="text-neutral-900 hover:text-neutral-600 font-medium underline underline-offset-4"
                            >
                                See how it works ↓
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHO THIS IS FOR */}
            <section className="py-20 bg-neutral-50">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Is This Right for You?</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Left Column - FOR YOU */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-green-700">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">✓</span>
                                This Is For You If:
                            </h3>
                            <ul className="space-y-4">
                                {['You already sell products offline', 'You want to start selling on Amazon', 'You don’t want to learn Seller Central', 'You want a professional listing done properly', 'You want speed + clarity'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column - NOT FOR YOU */}
                        <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 opacity-75">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-red-700">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700">✕</span>
                                This Is NOT For You If:
                            </h3>
                            <ul className="space-y-4">
                                {['You want to experiment on your own', 'You want the cheapest option', 'You enjoy learning Amazon yourself', 'You’re just “exploring ideas”'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-600">
                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — THE CORE PROBLEM */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Selling on Amazon Is Not Hard — <span className="text-red-600">Doing It Wrong Is.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                            <p>Amazon rejects bad images. Poor listings don’t convert.</p>
                            <p>DIY attempts waste weeks trying to figure out categories and keywords. Most sellers get stuck before they ever go live.</p>
                            <p className="font-medium text-neutral-900 pt-4">We remove all of this by doing it for you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — SOLUTION */}
            <section id="how-it-works" className="py-24 bg-neutral-900 text-white">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What We Do (So You Don’t Have To)</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Product Intake",
                                desc: "You share your product details once (photos, price, basics)."
                            },
                            {
                                step: "02",
                                title: "We Build Everything",
                                desc: "We create professional Amazon-ready images, listing copy, and A+ content."
                            },
                            {
                                step: "03",
                                title: "We Upload & Configure",
                                desc: "We handle Seller Central uploads, category setup, and compliance."
                            },
                            {
                                step: "04",
                                title: "Go Live",
                                desc: "Your product goes live on Amazon. We support until approval."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 border border-neutral-700 rounded-xl bg-neutral-800/50">
                                <div className="text-5xl font-bold text-neutral-700 mb-6">{item.step}</div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-neutral-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — WHAT YOU GET */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What You Get</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        {[
                            "Amazon main image (white background)",
                            "5–7 listing images (lifestyle, benefits, size)",
                            "SEO-optimized title & bullet points",
                            "Backend search terms",
                            "A+ content (where eligible)",
                            "Seller Central upload",
                            "Go-live support",
                            "Clear handover"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                                <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                                <span className="font-medium text-neutral-900">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-neutral-500">No templates. No shortcuts. Built specifically for your product.</p>
                </div>
            </section>

            {/* SECTION 6 — WHY THIS WORKS */}
            <section className="py-24 bg-neutral-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why This Works</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Amazon has strict standards</h3>
                                    <p className="text-neutral-600">Most sellers fail because their visuals and structure don't meet what Amazon (and customers) expect. We ensure compliance from day one.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Standardized systems outperform guesswork</h3>
                                    <p className="text-neutral-600">We don't guess. We follow proven Amazon frameworks that we know work for ranking and conversion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* SECTION 8 — FAQ */}
            <section className="py-24 bg-neutral-50">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Common Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "Do I need an Amazon seller account already?",
                                a: "No. We guide you and help you through setup."
                            },
                            {
                                q: "How much work is required from my side?",
                                a: "Minimal. One intake + document sharing."
                            },
                            {
                                q: "Is this suitable for Indian businesses?",
                                a: "Yes. This is built specifically for Indian sellers."
                            },
                            {
                                q: "Do you run ads for me?",
                                a: "This service focuses on setup and launch. Ads are optional add-ons if you need them later."
                            },
                            {
                                q: "What if Amazon rejects something?",
                                a: "We revise and resubmit as needed until it's approved."
                            }
                        ].map((item, i) => (
                            <details key={i} className="group bg-white p-6 rounded-xl border border-neutral-200 cursor-pointer">
                                <summary className="font-bold text-lg flex justify-between items-center list-none">
                                    {item.q}
                                    <span className="transition-transform group-open:rotate-180">↓</span>
                                </summary>
                                <div className="mt-4 text-neutral-600 leading-relaxed pl-1">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9 — FINAL CTA + FORM */}
            <section id="contact" className="py-24 bg-white text-center">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let Us Handle Amazon For You.</h2>
                        <p className="text-xl text-neutral-600 mb-12">
                            If you already have a product, we’ll take care of the rest.
                        </p>

                        <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 mb-12 text-left">
                            <form className="space-y-4">
                                <Link
                                    href="https://wa.me/918076958506?text=Hi,%20I'm%20interested%20in%20your%20Amazon%20launch%20service."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full button-primary flex items-center justify-center gap-2"
                                >
                                    Chat on WhatsApp
                                </Link>
                            </form>
                            <p className="text-center text-xs text-neutral-400 mt-6">
                                No obligation. We’ll tell you honestly if this is right for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 — FOOTER */}
            <Footer />
        </main>
    );
}
