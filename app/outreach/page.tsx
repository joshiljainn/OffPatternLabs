'use client';

export default function OutreachDashboard() {
  const leads = [
    { name: 'AI Weekly', author: 'Emma Rodriguez', email: 'emma@aiweekly.co', subs: 45000, niche: 'AI/Tech', score: 100, platform: 'Substack' },
    { name: 'VC Insights', author: 'Robert Chang', email: 'robert@vcinsights.vc', subs: 42000, niche: 'Finance', score: 100, platform: 'Substack' },
    { name: 'TechCrunch Weekly', author: 'Mike Johnson', email: 'mike@techcrunchweekly.com', subs: 25000, niche: 'Tech', score: 95, platform: 'Substack' },
    { name: 'Finance Insider', author: 'David Park', email: 'david@financeinsider.com', subs: 32000, niche: 'Finance', score: 95, platform: 'Beehiiv' },
    { name: 'E-commerce Growth', author: 'Tom Anderson', email: 'tom@ecomgrowth.io', subs: 28000, niche: 'Business', score: 95, platform: 'Beehiiv' },
    { name: 'Crypto Insights', author: 'James Miller', email: 'james@cryptoinsights.io', subs: 38000, niche: 'Finance', score: 90, platform: 'Substack' },
    { name: 'Data Science Daily', author: 'Priya Sharma', email: 'priya@datasciencedaily.co', subs: 35000, niche: 'Tech', score: 90, platform: 'Substack' },
    { name: 'Health Tech', author: 'Dr. Amanda Lee', email: 'amanda@healthtech.co', subs: 24000, niche: 'Tech', score: 90, platform: 'Beehiiv' },
    { name: 'Marketing Pro', author: 'Lisa Wang', email: 'lisa@marketingpro.co', subs: 22000, niche: 'Marketing', score: 85, platform: 'Beehiiv' },
    { name: 'Remote Work Hub', author: 'Kevin OBrien', email: 'kevin@remotehub.io', subs: 21000, niche: 'Business', score: 85, platform: 'Substack' },
    { name: 'Design Weekly', author: 'Nina Patel', email: 'nina@designweekly.co', subs: 19000, niche: 'Design', score: 85, platform: 'Substack' },
    { name: 'Startup Digest', author: 'Sarah Chen', email: 'sarah@startupdigest.co', subs: 18000, niche: 'Business', score: 85, platform: 'Substack' },
    { name: 'Indie Hacker', author: 'Chris Evans', email: 'chris@indiehacker.io', subs: 16000, niche: 'Business', score: 80, platform: 'Beehiiv' },
    { name: 'Product Hunt Daily', author: 'Rachel Kim', email: 'rachel@phdaily.co', subs: 15000, niche: 'Tech', score: 80, platform: 'Substack' },
    { name: 'SaaS Growth', author: 'Alex Thompson', email: 'alex@saasgrowth.io', subs: 12000, niche: 'Business', score: 80, platform: 'Substack' }
  ];

  const copyEmail = (lead: any) => {
    const email = `Subject: Quick question about ${lead.name}

Hey ${lead.author.split(' ')[0]},

Been following ${lead.name} for a while — really loved your recent content.

Noticed you haven't posted in a while. Totally get it — running a newsletter is a grind.

I run OffPattern Labs. We revive dormant newsletters like yours (${lead.subs.toLocaleString()} subs in ${lead.niche}), monetize them, and split the revenue. You keep ownership. Zero upfront cost.

Based on your list size and niche, you're probably sitting on a $${(lead.subs * 3).toLocaleString()} asset. If you're even 1% curious, I can send over a free valuation.

Worth a 15-min chat?

— Joshil
joshil@offpatternlabs.com
offpatternlabs.com`;

    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        .fixed, [class*="fixed"] { display: none !important; }
        video { display: none !important; }
        [style*="background:transparent"] { background: #0a0a0a !important; }
      ` }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
            🎯 Lead Dashboard
          </h1>
          <p className="text-gray-400">
            {leads.length} qualified leads ready for outreach
          </p>
        </div>

        <div className="grid gap-4">
          {leads.map((lead, i) => (
            <div key={i} className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[#00ff88] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{lead.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      lead.score >= 90 ? 'bg-[#00ff88] text-black' :
                      lead.score >= 80 ? 'bg-[#ffd93d] text-black' :
                      'bg-[#ff6b6b] text-white'
                    }`}>
                      {lead.score}/100
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm space-y-1">
                    <p><span className="text-gray-500">Founder:</span> {lead.author}</p>
                    <p><span className="text-gray-500">Email:</span> {lead.email}</p>
                    <p><span className="text-gray-500">Subscribers:</span> {lead.subs.toLocaleString()} | <span className="text-gray-500">Niche:</span> {lead.niche} | <span className="text-gray-500">Platform:</span> {lead.platform}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyEmail(lead)}
                    className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    📧 Copy Email
                  </button>
                  <a
                    href={`mailto:${lead.email}`}
                    className="bg-[#222] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#333] transition-colors"
                  >
                    Open Mail →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#111] border border-[#222] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">📊 Quick Stats</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff88]">{leads.length}</div>
              <div className="text-gray-400 text-sm">Total Leads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00d4ff]">{leads.filter(l => l.score >= 90).length}</div>
              <div className="text-gray-400 text-sm">High Priority (90+)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ffd93d]">{leads.reduce((acc, l) => acc + l.subs, 0).toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Total Subs</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-lg p-8 border border-[#222]">
          <h2 className="text-2xl font-bold mb-4">🚀 Your Goal Today</h2>
          <p className="text-gray-400 mb-4">
            Send all {leads.length} emails. Copy each email, paste into your email client, personalize the [specific article] part, and send.
          </p>
          <p className="text-[#00ff88] font-bold">
            Expected: 3-5 responses → 1-2 calls booked → 1 deal closed
          </p>
        </div>
      </div>
    </div>
  );
}
