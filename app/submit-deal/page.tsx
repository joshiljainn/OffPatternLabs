'use client';

import { useState } from 'react';

export default function SubmitDeal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    newsletter_name: '',
    author_name: '',
    email: '',
    platform: 'substack',
    url: '',
    subscriber_count: '',
    last_post_date: '',
    niche: '',
    current_revenue: '',
    reason_selling: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    // For now, we will just show success message
    setSubmitted(true);
    
    // Save to localStorage for demo
    localStorage.setItem('dealSubmission', JSON.stringify({
      ...formData,
      submitted_at: new Date().toISOString()
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 relative z-10">
      <style dangerouslySetInnerHTML={{ __html: `
        .fixed, [class*="fixed"] { display: none !important; }
        video { display: none !important; }
        [style*="background:transparent"] { background: #0a0a0a !important; }
      ` }} />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
          Submit Your Newsletter
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Get a free valuation. Zero obligation. Completely confidential.
        </p>

        {submitted ? (
          <div className="bg-[#111] border border-[#222] rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-4">Submission Received</h2>
            <p className="text-gray-400 mb-6">
              We'll review your newsletter and get back to you within 48 hours with a preliminary valuation.
            </p>
            <p className="text-sm text-gray-500">
              Questions? Email joshil@offpatternlabs.com
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-[#111] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#00ff88]">Basic Info</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Newsletter Name *</label>
                  <input
                    type="text"
                    name="newsletter_name"
                    value={formData.newsletter_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="e.g., Tech Insights Weekly"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Author Name *</label>
                  <input
                    type="text"
                    name="author_name"
                    value={formData.author_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Platform *</label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                  >
                    <option value="substack">Substack</option>
                    <option value="beehiiv">Beehiiv</option>
                    <option value="ghost">Ghost</option>
                    <option value="wordpress">WordPress</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Newsletter URL *</label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="https://yournewsletter.substack.com"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#00ff88]">Metrics</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subscriber Count *</label>
                  <input
                    type="number"
                    name="subscriber_count"
                    value={formData.subscriber_count}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="e.g., 15000"
                    min="1000"
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 1,000 subscribers</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Post Date *</label>
                  <input
                    type="date"
                    name="last_post_date"
                    value={formData.last_post_date}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Niche/Category *</label>
                  <input
                    type="text"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="e.g., Business, Tech, Finance, AI"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Current Monthly Revenue (if any)</label>
                  <select
                    name="current_revenue"
                    value={formData.current_revenue}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                  >
                    <option value="$0">$0 - Not monetized</option>
                    <option value="$500-1k">$500 - $1k/month</option>
                    <option value="$1k-5k">$1k - $5k/month</option>
                    <option value="$5k-10k">$5k - $10k/month</option>
                    <option value="$10k+">$10k+/month</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-[#00ff88]">Additional Info</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Why are you considering selling/partnering?</label>
                  <textarea
                    name="reason_selling"
                    value={formData.reason_selling}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="Be honest - burnout, lack of time, want to focus on other projects, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Any other notes?</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88]"
                    placeholder="Anything else we should know..."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Free Valuation →
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to our confidential evaluation process. 
              We'll never share your information without permission.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
