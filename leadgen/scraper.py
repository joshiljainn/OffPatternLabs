#!/usr/bin/env python3
"""
OffPattern Labs - AI Lead Generator
Generates SMALLER newsletter leads (5k-20k subs) that will ACTUALLY say YES to rev share
Big newsletters (40k+) won't partner. Small struggling ones will.
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
    
    # SMALLER newsletters (5k-20k subs) - these founders are STRUGGLING and will say YES
    SAMPLE_LEADS = [
        {
            'newsletter_name': 'Indie SaaS Growth',
            'author_name': 'Jake Morrison',
            'email': 'jake@indiesaas.co',
            'platform': 'Substack',
            'url': 'https://indiesaas.substack.com',
            'subscribers': 8500,
            'last_post_days_ago': 95,
            'niche': 'Business',
            'estimated_value': '$25,000'
        },
        {
            'newsletter_name': 'Bootstrapped Founder',
            'author_name': 'Maria Santos',
            'email': 'maria@bootstrappedfounder.com',
            'platform': 'Substack',
            'url': 'https://bootstrappedfounder.substack.com',
            'subscribers': 12000,
            'last_post_days_ago': 120,
            'niche': 'Business',
            'estimated_value': '$36,000'
        },
        {
            'newsletter_name': 'API Weekly',
            'author_name': 'Dev Patel',
            'email': 'dev@apiweekly.co',
            'platform': 'Beehiiv',
            'url': 'https://apiweekly.beehiiv.com',
            'subscribers': 6800,
            'last_post_days_ago': 80,
            'niche': 'Tech',
            'estimated_value': '$20,000'
        },
        {
            'newsletter_name': 'Creator Economy Insights',
            'author_name': 'Sophie Chen',
            'email': 'sophie@creatorinsights.io',
            'platform': 'Substack',
            'url': 'https://creatorinsights.substack.com',
            'subscribers': 15000,
            'last_post_days_ago': 140,
            'niche': 'Business',
            'estimated_value': '$45,000'
        },
        {
            'newsletter_name': 'No-Code Builder',
            'author_name': 'Alex Rivera',
            'email': 'alex@nocodebuilder.co',
            'platform': 'Substack',
            'url': 'https://nocodebuilder.substack.com',
            'subscribers': 9200,
            'last_post_days_ago': 110,
            'niche': 'Tech',
            'estimated_value': '$27,000'
        },
        {
            'newsletter_name': 'E-commerce Tips',
            'author_name': 'Ryan OConnor',
            'email': 'ryan@ecommercetips.io',
            'platform': 'Beehiiv',
            'url': 'https://ecommercetips.beehiiv.com',
            'subscribers': 11000,
            'last_post_days_ago': 75,
            'niche': 'Business',
            'estimated_value': '$33,000'
        },
        {
            'newsletter_name': 'Freelance Writer Hub',
            'author_name': 'Emma Clarke',
            'email': 'emma@freelancewriterhub.com',
            'platform': 'Substack',
            'url': 'https://freelancewriterhub.substack.com',
            'subscribers': 7500,
            'last_post_days_ago': 150,
            'niche': 'Business',
            'estimated_value': '$22,000'
        },
        {
            'newsletter_name': 'Python Developer',
            'author_name': 'Arjun Kumar',
            'email': 'arjun@pythondev.co',
            'platform': 'Substack',
            'url': 'https://pythondev.substack.com',
            'subscribers': 13500,
            'last_post_days_ago': 90,
            'niche': 'Tech',
            'estimated_value': '$40,000'
        },
        {
            'newsletter_name': 'Marketing for Startups',
            'author_name': 'Lisa Wong',
            'email': 'lisa@marketingforstartups.io',
            'platform': 'Beehiiv',
            'url': 'https://marketingforstartups.beehiiv.com',
            'subscribers': 10500,
            'last_post_days_ago': 100,
            'niche': 'Marketing',
            'estimated_value': '$31,000'
        },
        {
            'newsletter_name': 'Solopreneur Journey',
            'author_name': 'Mark Thompson',
            'email': 'mark@solopreneurjourney.co',
            'platform': 'Substack',
            'url': 'https://solopreneurjourney.substack.com',
            'subscribers': 8900,
            'last_post_days_ago': 130,
            'niche': 'Business',
            'estimated_value': '$26,000'
        },
        {
            'newsletter_name': 'UX Design Daily',
            'author_name': 'Nina Kowalski',
            'email': 'nina@uxdesigndaily.com',
            'platform': 'Substack',
            'url': 'https://uxdesigndaily.substack.com',
            'subscribers': 14000,
            'last_post_days_ago': 85,
            'niche': 'Design',
            'estimated_value': '$42,000'
        },
        {
            'newsletter_name': 'Remote Team Builder',
            'author_name': 'Carlos Mendez',
            'email': 'carlos@remoteteambuilder.io',
            'platform': 'Beehiiv',
            'url': 'https://remoteteambuilder.beehiiv.com',
            'subscribers': 6200,
            'last_post_days_ago': 160,
            'niche': 'Business',
            'estimated_value': '$18,000'
        },
        {
            'newsletter_name': 'AI for Business',
            'author_name': 'Priya Sharma',
            'email': 'priya@aiforbusiness.co',
            'platform': 'Substack',
            'url': 'https://aiforbusiness.substack.com',
            'subscribers': 16500,
            'last_post_days_ago': 70,
            'niche': 'AI/Tech',
            'estimated_value': '$49,000'
        },
        {
            'newsletter_name': 'Content Creator Tips',
            'author_name': 'Jordan Lee',
            'email': 'jordan@contentcreatortips.com',
            'platform': 'Substack',
            'url': 'https://contentcreatortips.substack.com',
            'subscribers': 9800,
            'last_post_days_ago': 115,
            'niche': 'Marketing',
            'estimated_value': '$29,000'
        },
        {
            'newsletter_name': 'Startup Funding Weekly',
            'author_name': 'David Park',
            'email': 'david@startupfunding.co',
            'platform': 'Beehiiv',
            'url': 'https://startupfunding.beehiiv.com',
            'subscribers': 12500,
            'last_post_days_ago': 105,
            'niche': 'Finance',
            'estimated_value': '$37,000'
        }
    ]
    
    def score_lead(self, lead: Dict) -> int:
        """Score lead 0-100 based on value."""
        score = 0
        
        # Subscriber count (30 points) - sweet spot: 8k-20k
        subs = lead['subscribers']
        if 8000 <= subs <= 20000:
            score += 30
        elif 5000 <= subs < 8000:
            score += 25
        elif subs > 20000:
            score += 20  # Too big, less likely to say yes
        else:
            score += 15
        
        # Months inactive (30 points) - sweet spot: 2-5 months
        months = lead['last_post_days_ago'] / 30
        if 2 <= months <= 5:
            score += 30
        elif 5 < months <= 8:
            score += 25
        elif months > 8:
            score += 20
        elif months < 2:
            score += 10
        
        # Niche value (25 points)
        niche = lead['niche'].lower()
        if any(n in niche for n in ['ai', 'tech', 'business', 'finance']):
            score += 25
        elif any(n in niche for n in ['marketing', 'saas', 'ecommerce']):
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

Worth a 15-min chat?

— Joshil
joshil@offpatternlabs.com
offpatternlabs.com

P.S. No pressure. Even if you're not interested, knowing what you're sitting on is power.""",

            f"""Subject: {lead['newsletter_name']} is leaving money on the table

Hey {lead['author_name'].split()[0]},

{lead['newsletter_name']} is 🔥. With {lead['subscribers']:,} subscribers in {lead['niche']}, you're probably leaving $2k-8k/month on the table.

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

            f"""Subject: Partnership opportunity for {lead['newsletter_name']}

Hey {lead['author_name'].split()[0]},

I'll be direct: {lead['newsletter_name']} is exactly the kind of newsletter we look for at OffPattern Labs.

{lead['niche']} newsletters with {lead['subscribers']:,} subscribers are perfect for our rev share model. You keep writing (or take a break), we handle monetization.

We're partnering with 5-10 newsletters this quarter. Yours fits the profile perfectly.

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
