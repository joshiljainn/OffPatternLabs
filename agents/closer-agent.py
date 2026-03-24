#!/usr/bin/env python3
"""
CLOSER AGENT — Generates proposals and contracts autonomously
Takes interested leads and creates custom sponsorship proposals
"""

import asyncio
import json
from datetime import datetime
from pathlib import Path

# Config
INPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/outreach-sent.jsonl")
OUTPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/proposals-generated.jsonl")
PROPOSALS_DIR = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/proposals")

# Proposal template
PROPOSAL_TEMPLATE = """
# Newsletter Sponsorship Proposal

**Prepared for:** {newsletter_name}
**Prepared by:** OffPattern Labs
**Date:** {date}

---

## 📊 Your Newsletter Stats

- **Subscribers:** {subs}
- **Niche:** {niche}
- **Estimated CPM:** $50-150

---

## 💰 Sponsorship Opportunities

### Option 1: Single Issue Sponsorship
- **Price:** ${price_single}
- **What's included:** 
  - Dedicated sponsor section in newsletter
  - 150-200 words about sponsor
  - Click tracking + analytics
  - Your commission (80%): ${commission_single}

### Option 2: Monthly Package (4 Issues)
- **Price:** ${price_monthly} (save 15%)
- **What's included:**
  - 4 sponsored issues
  - Priority placement
  - A/B testing of copy
  - Your commission (80%): ${commission_monthly}

### Option 3: Quarterly Package (12 Issues)
- **Price:** ${price_quarterly} (save 25%)
- **What's included:**
  - 12 sponsored issues
  - Premium placement
  - Custom sponsor integration
  - Your commission (80%): ${commission_quarterly}

---

## 🎯 How It Works

1. **You approve sponsors** — We only send relevant, high-quality brands
2. **We handle everything** — Negotiation, creative, scheduling
3. **You publish** — Just paste the sponsor copy we send
4. **You get paid** — 80% commission via Stripe/PayPal within 7 days

---

## 📈 Expected Revenue

Based on your subscriber count ({subs}) and industry CPMs:

| Package | Your Revenue (80%) |
|---------|-------------------|
| Single Issue | ${commission_single} |
| Monthly (4 issues) | ${commission_monthly} |
| Quarterly (12 issues) | ${commission_quarterly} |

**Annual potential:** ${annual_revenue}+ (if you run sponsors year-round)

---

## ✅ Next Steps

1. **Reply to this proposal** with which package interests you
2. **We send sponsor matches** within 24 hours
3. **You approve sponsors** you want to work with
4. **We handle the rest** — contracts, creative, payment

---

## 📞 Questions?

Reply to this email or book a call: wa.me/918076958506

Looking forward to partnering with you!

**Joshil Jain**
Founder, OffPattern Labs
joshil@offpatternlabs.com
wa.me/918076958506
"""

def calculate_pricing(subs_str):
    """Calculate sponsorship pricing based on subscriber count"""
    
    # Parse subscriber count (e.g., "14K+" -> 14000)
    subs_str = subs_str.replace('K+', '000').replace('K', '000').replace('+', '')
    try:
        subs = int(subs_str)
    except:
        subs = 10000  # Default
    
    # CPM range: $50-150
    cpm_low = 50
    cpm_high = 150
    
    # Calculate pricing
    price_single = int((subs / 1000) * ((cpm_low + cpm_high) / 2))
    price_monthly = int(price_single * 4 * 0.85)  # 15% discount
    price_quarterly = int(price_single * 12 * 0.75)  # 25% discount
    
    # Commission (80% to newsletter owner)
    commission_single = int(price_single * 0.80)
    commission_monthly = int(price_monthly * 0.80)
    commission_quarterly = int(price_quarterly * 0.80)
    
    # Annual revenue
    annual_revenue = commission_monthly * 12
    
    return {
        'subs': subs,
        'price_single': price_single,
        'price_monthly': price_monthly,
        'price_quarterly': price_quarterly,
        'commission_single': commission_single,
        'commission_monthly': commission_monthly,
        'commission_quarterly': commission_quarterly,
        'annual_revenue': annual_revenue
    }

async def generate_proposal(lead):
    """Generate proposal for a single lead"""
    
    newsletter_name = lead.get('newsletter', 'Unknown')
    subs = lead.get('subs', '10K+')
    
    # Get pricing
    pricing = calculate_pricing(subs)
    
    # Generate proposal
    proposal = PROPOSAL_TEMPLATE.format(
        newsletter_name=newsletter_name,
        date=datetime.now().strftime('%Y-%m-%d'),
        subs=subs,
        niche=lead.get('niche', 'General'),
        price_single=pricing['price_single'],
        price_monthly=pricing['price_monthly'],
        price_quarterly=pricing['price_quarterly'],
        commission_single=pricing['commission_single'],
        commission_monthly=pricing['commission_monthly'],
        commission_quarterly=pricing['commission_quarterly'],
        annual_revenue=pricing['annual_revenue']
    )
    
    # Save proposal
    PROPOSALS_DIR.mkdir(exist_ok=True)
    filename = f"{newsletter_name.replace(' ', '_').lower()}_proposal.md"
    filepath = PROPOSALS_DIR / filename
    
    with open(filepath, 'w') as f:
        f.write(proposal)
    
    return {
        'newsletter': newsletter_name,
        'subs': subs,
        'pricing': pricing,
        'proposal_path': str(filepath),
        'generated_at': datetime.now().isoformat()
    }

async def run_closer():
    """Generate proposals for all interested leads"""
    
    print("📄 CLOSER AGENT — Generating proposals...")
    print("=" * 60)
    
    # Load outreach results (filter for positive responses)
    if not INPUT_FILE.exists():
        print(f"❌ No outreach results found at {INPUT_FILE}")
        print("   Run outreach-agent.py first!")
        return []
    
    leads = []
    with open(INPUT_FILE, 'r') as f:
        for line in f:
            leads.append(json.loads(line))
    
    print(f"📍 Loaded {len(leads)} outreach results")
    
    proposals = []
    
    for i, lead in enumerate(leads, 1):
        print(f"\n📄 Generating ({i}/{len(leads)}): {lead.get('newsletter', 'Unknown')}")
        
        proposal = await generate_proposal(lead)
        proposals.append(proposal)
        
        print(f"   ✅ Generated: {proposal['proposal_path']}")
        print(f"   💰 Commission: ${proposal['pricing']['commission_monthly']}/month")
    
    # Save summary
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(proposals, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"✅ PROPOSALS COMPLETE — Generated {len(proposals)} proposals")
    print(f"📁 Saved to: {PROPOSALS_DIR}")
    
    # Total potential revenue
    total_commission = sum(p['pricing']['commission_monthly'] for p in proposals)
    print(f"\n💰 Total potential monthly commission: ${total_commission}")
    
    return proposals

if __name__ == "__main__":
    asyncio.run(run_closer())
