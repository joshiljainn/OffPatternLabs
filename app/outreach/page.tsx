'use client';

export default function OutreachDashboard() {
  const leads = [
    { name: 'AI for Business', author: 'Priya Sharma', email: 'priya@aiforbusiness.co', subs: 16500, niche: 'AI/Tech', score: 95, platform: 'Substack' },
    { name: 'UX Design Daily', author: 'Nina Kowalski', email: 'nina@uxdesigndaily.com', subs: 14000, niche: 'Design', score: 90, platform: 'Substack' },
    { name: 'Creator Economy Insights', author: 'Sophie Chen', email: 'sophie@creatorinsights.io', subs: 15000, niche: 'Business', score: 90, platform: 'Substack' },
    { name: 'Startup Funding Weekly', author: 'David Park', email: 'david@startupfunding.co', subs: 12500, niche: 'Finance', score: 90, platform: 'Beehiiv' },
    { name: 'Bootstrapped Founder', author: 'Maria Santos', email: 'maria@bootstrappedfounder.com', subs: 12000, niche: 'Business', score: 90, platform: 'Substack' },
    { name: 'Python Developer', author: 'Arjun Kumar', email: 'arjun@pythondev.co', subs: 13500, niche: 'Tech', score: 85, platform: 'Substack' },
    { name: 'Marketing for Startups', author: 'Lisa Wong', email: 'lisa@marketingforstartups.io', subs: 10500, niche: 'Marketing', score: 85, platform: 'Beehiiv' },
    { name: 'E-commerce Tips', author: 'Ryan OConnor', email: 'ryan@ecommercetips.io', subs: 11000, niche: 'Business', score: 85, platform: 'Beehiiv' },
    { name: 'Content Creator Tips', author: 'Jordan Lee', email: 'jordan@contentcreatortips.com', subs: 9800, niche: 'Marketing', score: 85, platform: 'Substack' },
    { name: 'No-Code Builder', author: 'Alex Rivera', email: 'alex@nocodebuilder.co', subs: 9200, niche: 'Tech', score: 85, platform: 'Substack' },
    { name: 'Solopreneur Journey', author: 'Mark Thompson', email: 'mark@solopreneurjourney.co', subs: 8900, niche: 'Business', score: 80, platform: 'Substack' },
    { name: 'Indie SaaS Growth', author: 'Jake Morrison', email: 'jake@indiesaas.co', subs: 8500, niche: 'Business', score: 80, platform: 'Substack' },
    { name: 'Freelance Writer Hub', author: 'Emma Clarke', email: 'emma@freelancewriterhub.com', subs: 7500, niche: 'Business', score: 80, platform: 'Substack' },
    { name: 'API Weekly', author: 'Dev Patel', email: 'dev@apiweekly.co', subs: 6800, niche: 'Tech', score: 75, platform: 'Beehiiv' },
    { name: 'Remote Team Builder', author: 'Carlos Mendez', email: 'carlos@remoteteambuilder.io', subs: 6200, niche: 'Business', score: 75, platform: 'Beehiiv' }
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
    <div className="min-h-screen bg-black text-white p-8" style={{ background: '#000 !important' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        * { background: #000 !important; }
        .fixed, [class*="fixed"], [class*="inset"], [class*="z-0"] { display: none !important; }
        video, iframe { display: none !important; }
        body, html { background: #000 !important; }
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
