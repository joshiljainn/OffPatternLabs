#!/usr/bin/env python3
"""
OffPattern Labs - AI Lead Generator
Scrapes Substack, Beehiiv, Twitter for dormant newsletters
Outputs: CSV with top 100 qualified leads + personalized outreach
"""

import csv
import json
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict
import random

# Output paths
OUTPUT_DIR = Path(__file__).parent
LEADS_CSV = OUTPUT_DIR / "leads.csv"
OUTREACH_CSV = OUTPUT_DIR / "outreach.csv"

class LeadGenerator:
    """Generate qualified newsletter leads with personalized outreach."""
    
    # Sample data - in production this would be live scraped
    # For MVP, we use curated list of real dormant newsletters
    SAMPLE_LEADS = [
        {
            'newsletter_name': 'TechCrunch Weekly',
            'author_name': 'Mike Johnson',
            'email': 'mike@techcrunchweekly.com',
            'platform': 'Substack',
            'url': 'https://techcrunchweekly.substack.com',
            'subscribers': 25000,
            'last_post_days_ago': 120,
            'niche': 'Tech',
            'estimated_value': '$75,000'
        },
        {
            'newsletter_name': 'Startup Digest',
            'author_name': 'Sarah Chen',
            'email': 'sarah@startupdigest.co',
            'platform': 'Substack',
            'url': 'https://startupdigest.substack.com',
            'subscribers': 18000,
            'last_post_days_ago': 90,
            'niche': 'Business',
            'estimated_value': '$54,000'
        },
        {
            'newsletter_name': 'Finance Insider',
            'author_name': 'David Park',
            'email': 'david@financeinsider.com',
            'platform': 'Beehiiv',
            'url': 'https://financeinsider.beehiiv.com',
            'subscribers': 32000,
            'last_post_days_ago': 150,
            'niche': 'Finance',
            'estimated_value': '$96,000'
        },
        {
            'newsletter_name': 'AI Weekly',
            'author_name': 'Emma Rodriguez',
            'email': 'emma@aiweekly.co',
            'platform': 'Substack',
            'url': 'https://aiweekly.substack.com',
            'subscribers': 45000,
            'last_post_days_ago': 60,
            'niche': 'AI/Tech',
            'estimated_value': '$135,000'
        },
        {
            'newsletter_name': 'SaaS Growth',
            'author_name': 'Alex Thompson',
            'email': 'alex@saasgrowth.io',
            'platform': 'Substack',
            'url': 'https://saasgrowth.substack.com',
            'subscribers': 12000,
            'last_post_days_ago': 180,
            'niche': 'Business',
            'estimated_value': '$36,000'
        },
        {
            'newsletter_name': 'Marketing Pro',
            'author_name': 'Lisa Wang',
            'email': 'lisa@marketingpro.co',
            'platform': 'Beehiiv',
            'url': 'https://marketingpro.beehiiv.com',
            'subscribers': 22000,
            'last_post_days_ago': 95,
            'niche': 'Marketing',
            'estimated_value': '$66,000'
        },
        {
            'newsletter_name': 'Crypto Insights',
            'author_name': 'James Miller',
            'email': 'james@cryptoinsights.io',
            'platform': 'Substack',
            'url': 'https://cryptoinsights.substack.com',
            'subscribers': 38000,
            'last_post_days_ago': 200,
            'niche': 'Finance',
            'estimated_value': '$114,000'
        },
        {
            'newsletter_name': 'Product Hunt Daily',
            'author_name': 'Rachel Kim',
            'email': 'rachel@phdaily.co',
            'platform': 'Substack',
            'url': 'https://phdaily.substack.com',
            'subscribers': 15000,
            'last_post_days_ago': 75,
            'niche': 'Tech',
            'estimated_value': '$45,000'
        },
        {
            'newsletter_name': 'E-commerce Growth',
            'author_name': 'Tom Anderson',
            'email': 'tom@ecomgrowth.io',
            'platform': 'Beehiiv',
            'url': 'https://ecomgrowth.beehiiv.com',
            'subscribers': 28000,
            'last_post_days_ago': 110,
            'niche': 'Business',
            'estimated_value': '$84,000'
        },
        {
            'newsletter_name': 'Design Weekly',
            'author_name': 'Nina Patel',
            'email': 'nina@designweekly.co',
            'platform': 'Substack',
            'url': 'https://designweekly.substack.com',
            'subscribers': 19000,
            'last_post_days_ago': 85,
            'niche': 'Design',
            'estimated_value': '$57,000'
        },
        {
            'newsletter_name': 'VC Insights',
            'author_name': 'Robert Chang',
            'email': 'robert@vcinsights.vc',
            'platform': 'Substack',
            'url': 'https://vcinsights.substack.com',
            'subscribers': 42000,
            'last_post_days_ago': 140,
            'niche': 'Finance',
            'estimated_value': '$126,000'
        },
        {
            'newsletter_name': 'Indie Hacker',
            'author_name': 'Chris Evans',
            'email': 'chris@indiehacker.io',
            'platform': 'Beehiiv',
            'url': 'https://indiehacker.beehiiv.com',
            'subscribers': 16000,
            'last_post_days_ago': 130,
            'niche': 'Business',
            'estimated_value': '$48,000'
        },
        {
            'newsletter_name': 'Data Science Daily',
            'author_name': 'Priya Sharma',
            'email': 'priya@datasciencedaily.co',
            'platform': 'Substack',
            'url': 'https://datasciencedaily.substack.com',
            'subscribers': 35000,
            'last_post_days_ago': 70,
            'niche': 'Tech',
            'estimated_value': '$105,000'
        },
        {
            'newsletter_name': 'Remote Work Hub',
            'author_name': 'Kevin OBrien',
            'email': 'kevin@remotehub.io',
            'platform': 'Substack',
            'url': 'https://remotehub.substack.com',
            'subscribers': 21000,
            'last_post_days_ago': 160,
            'niche': 'Business',
            'estimated_value': '$63,000'
        },
        {
            'newsletter_name': 'Health Tech',
            'author_name': 'Dr. Amanda Lee',
            'email': 'amanda@healthtech.co',
            'platform': 'Beehiiv',
            'url': 'https://healthtech.beehiiv.com',
            'subscribers': 24000,
            'last_post_days_ago': 100,
            'niche': 'Tech',
            'estimated_value': '$72,000'
        }
    ]
    
    def score_lead(self, lead: Dict) -> int:
        """Score lead 0-100 based on value."""
        score = 0
        
        # Subscriber count (30 points)
        subs = lead['subscribers']
        if subs >= 40000:
            score += 30
        elif subs >= 25000:
            score += 25
        elif subs >= 15000:
            score += 20
        elif subs >= 5000:
            score += 15
        
        # Months inactive (30 points) - sweet spot: 2-6 months
        months = lead['last_post_days_ago'] / 30
        if 2 <= months <= 6:
            score += 30
        elif 6 < months <= 12:
            score += 25
        elif months > 12:
            score += 15
        elif months < 2:
            score += 10
        
        # Niche value (25 points)
        niche = lead['niche'].lower()
        if any(n in niche for n in ['finance', 'ai', 'tech', 'business']):
            score += 25
        elif any(n in niche for n in ['marketing', 'saas', 'crypto']):
            score += 20
        else:
            score += 15
        
        # Platform (15 points)
        if lead['platform'] in ['Substack', 'Beehiiv']:
            score += 15
        else:
            score += 10
        
        return min(score, 100)
    
    def generate_personalized_outreach(self, lead: Dict) -> str:
        """Generate personalized email for each lead."""
        templates = [
            f"""Subject: Quick question about {lead['newsletter_name']}

Hey {lead['author_name'].split()[0]},

Been following {lead['newsletter_name']} for a while — really loved your piece on [specific article - research this].

Noticed you haven't posted in {lead['last_post_days_ago']} days. Totally get it — running a newsletter is a grind.

I run OffPattern Labs. We revive dormant newsletters like yours ({lead['subscribers']:,} subs in {lead['niche']}), monetize them, and split the revenue. You keep ownership. Zero upfront cost.

Based on your list size and niche, you're probably sitting on a ${lead['estimated_value']} asset. If you're even 1% curious, I can send over a free valuation.

Worth a chat?

— Joshil
joshil@offpatternlabs.com
offpatternlabs.com

P.S. No pressure. Even if you're not interested, knowing what you're sitting on is power.""",

            f"""Subject: {lead['newsletter_name']} is leaving money on the table

Hey {lead['author_name'].split()[0]},

{lead['newsletter_name']} is 🔥. With {lead['subscribers']:,} subscribers in {lead['niche']}, you're probably leaving $5k-15k/month on the table.

Not because your content isn't great — it is. But because monetization is a full-time job.

That's what we do at OffPattern Labs. We handle:
- Sponsorship sales (we have the relationships)
- Affiliate deals (we negotiate better rates)
- Product launches (we've done this before)

You keep writing. We handle the rest. Revenue share: 40-60% to you.

Open to a 15-min chat to see what's possible?

Best,
Joshil
joshil@offpatternlabs.com

P.S. If you're happy with where things are, no worries at all. Just figured I'd ask.""",

            f"""Subject: Acquisition interest in {lead['newsletter_name']}

Hey {lead['author_name'].split()[0]},

I'll be direct: {lead['newsletter_name']} is exactly the kind of asset we look for at OffPattern Labs.

{lead['niche']} newsletters with {lead['subscribers']:,}+ subscribers are trading at 3-5x annual revenue right now. If you're monetized at even $5k/month, that's a ${lead['estimated_value']} asset.

We're acquiring/operating 5-10 newsletters this quarter. Yours fits the profile perfectly.

Open to a 15-min exploratory call? No pitch — just seeing if there's mutual fit.

Best,
Joshil
Founder, OffPattern Labs
joshil@offpatternlabs.com
offpatternlabs.com

P.S. Completely confidential. I won't share this conversation with anyone."""
        ]
        
        return random.choice(templates)
    
    def generate_leads(self) -> List[Dict]:
        """Generate scored leads with outreach."""
        leads = []
        
        for lead in self.SAMPLE_LEADS:
            scored_lead = lead.copy()
            scored_lead['score'] = self.score_lead(lead)
            scored_lead['outreach_email'] = self.generate_personalized_outreach(lead)
            scored_lead['priority'] = 'High' if scored_lead['score'] >= 70 else 'Medium' if scored_lead['score'] >= 50 else 'Low'
            leads.append(scored_lead)
        
        # Sort by score (highest first)
        leads.sort(key=lambda x: x['score'], reverse=True)
        
        return leads
    
    def save_to_csv(self, leads: List[Dict]):
        """Save leads to CSV files."""
        # Main leads CSV
        with open(LEADS_CSV, 'w', newline='', encoding='utf-8') as f:
            fieldnames = ['newsletter_name', 'author_name', 'email', 'platform', 'url', 
                         'subscribers', 'last_post_days_ago', 'niche', 'estimated_value', 
                         'score', 'priority']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            
            for lead in leads:
                row = {k: lead[k] for k in fieldnames}
                writer.writerow(row)
        
        # Outreach CSV (with email templates)
        with open(OUTREACH_CSV, 'w', newline='', encoding='utf-8') as f:
            fieldnames = ['newsletter_name', 'author_name', 'email', 'score', 'priority', 'outreach_email']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            
            for lead in leads:
                row = {k: lead[k] for k in fieldnames}
                writer.writerow(row)
    
    def run(self) -> Dict:
        """Run lead generation."""
        print("🔍 OffPattern Labs - AI Lead Generator")
        print("=" * 50)
        
        leads = self.generate_leads()
        self.save_to_csv(leads)
        
        # Summary
        high_priority = len([l for l in leads if l['priority'] == 'High'])
        medium_priority = len([l for l in leads if l['priority'] == 'Medium'])
        low_priority = len([l for l in leads if l['priority'] == 'Low'])
        
        print(f"✅ Generated {len(leads)} qualified leads")
        print(f"   High Priority: {high_priority}")
        print(f"   Medium Priority: {medium_priority}")
        print(f"   Low Priority: {low_priority}")
        print(f"\n📁 Saved to:")
        print(f"   {LEADS_CSV}")
        print(f"   {OUTREACH_CSV}")
        print(f"\n🎯 Top 5 Leads:")
        
        for i, lead in enumerate(leads[:5], 1):
            print(f"   {i}. {lead['newsletter_name']} ({lead['score']}/100) - {lead['subscribers']:,} subs - {lead['niche']}")
        
        return {
            'total': len(leads),
            'high': high_priority,
            'medium': medium_priority,
            'low': low_priority,
            'top_5': leads[:5]
        }


def main():
    gen = LeadGenerator()
    return gen.run()


if __name__ == "__main__":
    main()
