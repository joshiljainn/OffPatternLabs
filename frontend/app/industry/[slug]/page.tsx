
import { fetchFromStrapi } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Define the shape of our Industry Guide
interface IndustryGuide {
    id: number;
    documentId: string;
    industry: string;
    pain_point: string;
    solution_hook: any[]; // Rich text block
    recommended_tool: string;
    affiliate_link: string;
    slug: string;
}

// Generate static params for all industries
export async function generateStaticParams() {
    // Fetch all slugs, ensuring we get enough limit
    const data = await fetchFromStrapi('/industry-guides?fields[0]=slug&pagination[pageSize]=100');

    if (!data || !data.data) return [];

    return data.data.map((guide: any) => ({
        slug: guide.slug,
    }));
}

async function getIndustryGuide(slug: string): Promise<IndustryGuide | null> {
    const data = await fetchFromStrapi(`/industry-guides?filters[slug][$eq]=${slug}`);

    if (!data || !data.data || data.data.length === 0) {
        return null;
    }

    // Wraps the single result from the array
    const guide = data.data[0];
    return guide as IndustryGuide;
}

export default async function IndustryPage({ params }: { params: { slug: string } }) {
    const guide = await getIndustryGuide(params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* Navigation (Simple) */}
            <nav className="w-full py-6 px-8 flex justify-between items-center max-w-7xl mx-auto">
                <div className="font-bold text-xl tracking-tight text-indigo-600">OffPattern Voice</div>
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                    View All Industries
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="pt-20 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                    For {guide.industry} Businesses
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-gray-900">
                    Why Every <span className="text-indigo-600 underline decoration-4 decoration-indigo-200">{guide.industry}</span> Needs a<br className="hidden md:block" /> Voice AI Receptionist
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Stop missing calls. Stop losing leads. Start scaling your practice with 24/7 intelligent voice automation.
                </p>
            </header>

            {/* Problem Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-red-100 rounded-2xl rotate-2 opacity-50 blur-lg"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-red-50">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Hidden Cost</h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    "{guide.pain_point}"
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">You're Leaving Money on the Table</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                In the highly competitive {guide.industry} market, speed to lead is everything.
                                Every missed call is a potential client going to your competitor.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Missed calls = Missed revenue',
                                    'Front desk burnout',
                                    'Inconsistent customer experience',
                                    'Slow follow-up times'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 max-w-4xl mx-auto px-6 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Fix: {guide.recommended_tool}</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        {/* 
                  Simple rendering of block content. 
                  In a real app, use a blocks renderer. 
                  Here we just extract text from paragraphs for simplicity.
                */}
                        {guide.solution_hook.map((block: any, index: number) => {
                            if (block.type === 'paragraph') {
                                return (
                                    <p key={index} className="mb-4">
                                        {block.children.map((child: any) => child.text).join('')}
                                    </p>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-indigo-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden text-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ready to Automate Your {guide.industry} Practice?</h3>
                        <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
                            Set up your AI receptionist in minutes with {guide.recommended_tool}. Start capturing every lead today.
                        </p>
                        <a
                            href={guide.affiliate_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-900 bg-white rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200"
                        >
                            Try {guide.recommended_tool} Now
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </a>
                        <p className="mt-4 text-xs text-indigo-400 opacity-80">
                            *Affiliate link. We may earn a commission if you sign up.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-100 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} OffPattern Labs. All rights reserved.</p>
            </footer>
        </div>
    );
}
