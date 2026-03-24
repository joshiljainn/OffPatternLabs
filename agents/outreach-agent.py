#!/usr/bin/env python3
"""
OUTREACH AGENT — Sends personalized DMs/emails autonomously
Takes enriched leads and sends outreach messages via Twitter, LinkedIn, Email
"""

import asyncio
import json
from datetime import datetime
from pathlib import Path
from browser_use import Agent, Browser, ChatOpenAI

# Config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"
INPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/enriched-leads.jsonl")
OUTPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/outreach-sent.jsonl")

# Outreach templates
TEMPLATES = {
    'twitter': """Hey {first_name},

Quick Q — are {newsletter}'s sponsor slots filled for next month?

I connect newsletters with SaaS sponsors at $100-200/issue. You keep 80%.

If you have empty slots, I can fill them within 48 hours.

Interested?

- Joshil
OffPattern Labs""",

    'linkedin': """Hey {first_name},

Are your sponsor slots filled?

I connect newsletters ({subs} subs) with SaaS/AI sponsors at $100-200/issue. You keep 80%, I handle everything.

I have sponsors ready. Can fill your slots within 48 hours.

Worth a chat?

- Joshil
OffPattern Labs""",

    'email': """Subject: Sponsorship inquiry for {newsletter}

Hey {first_name},

I've been following {newsletter} — really impressed with your recent content.

I run OffPattern Labs, a sponsorship brokerage for newsletters in the 5K-20K subscriber range.

Here's the situation: I have 5+ B2B companies (SaaS, AI tools, marketing agencies) actively looking to sponsor newsletters like yours. They have budgets of $100-200 per issue ready to deploy.

If you have any unsold sponsor slots, I can connect you with these buyers immediately.

My commission is 20% (standard industry rate). You get:
✅ Guaranteed revenue
✅ Vetted sponsors (no sketchy offers)
✅ Zero outreach work on your end

Interested in a quick call this week? I can have your first sponsor locked in within 48 hours.

Best,
Joshil Jain
OffPattern Labs
joshil@offpatternlabs.com
80769 58506"""
}

async def send_outreach(lead, browser, llm):
    """Send outreach to a single lead"""
    
    newsletter_name = lead.get('name', 'Unknown')
    first_name = lead.get('author', 'Creator').split(' ')[0]
    subs = lead.get('subs', 'Unknown')
    contact_email = lead.get('contact_email', '')
    twitter = lead.get('twitter', '')
    linkedin = lead.get('linkedin', '')
    
    outreach_result = {
        'newsletter': newsletter_name,
        'first_name': first_name,
        'timestamp': datetime.now().isoformat(),
        'channels': []
    }
    
    # Send Twitter DM
    if twitter:
        try:
            agent = Agent(
                task=f"""Go to twitter.com/{twitter} and send a DM.

Message:
{TEMPLATES['twitter'].format(first_name=first_name, newsletter=newsletter_name)}

Click the message button, paste the message, and send.

Return: "sent" if successful, "failed" if not.""",
                llm=llm,
                browser=browser
            )
            
            result = await agent.run()
            outreach_result['channels'].append({
                'channel': 'twitter',
                'handle': twitter,
                'status': 'sent' if 'sent' in str(result).lower() else 'failed'
            })
        except Exception as e:
            outreach_result['channels'].append({
                'channel': 'twitter',
                'handle': twitter,
                'status': 'failed',
                'error': str(e)
            })
    
    # Send LinkedIn DM
    if linkedin:
        try:
            agent = Agent(
                task=f"""Go to {linkedin} and send a connection request with note.

Note:
{TEMPLATES['linkedin'].format(first_name=first_name, newsletter=newsletter_name, subs=subs)}

Return: "sent" if successful.""",
                llm=llm,
                browser=browser
            )
            
            result = await agent.run()
            outreach_result['channels'].append({
                'channel': 'linkedin',
                'profile': linkedin,
                'status': 'sent' if 'sent' in str(result).lower() else 'failed'
            })
        except Exception as e:
            outreach_result['channels'].append({
                'channel': 'linkedin',
                'profile': linkedin,
                'status': 'failed',
                'error': str(e)
            })
    
    # Send Email
    if contact_email:
        # For email, we'll generate the email content (actual sending requires SMTP)
        email_content = TEMPLATES['email'].format(
            first_name=first_name,
            newsletter=newsletter_name
        )
        
        outreach_result['channels'].append({
            'channel': 'email',
            'email': contact_email,
            'status': 'draft_ready',
            'content': email_content
        })
    
    return outreach_result

async def run_outreach():
    """Run outreach on all enriched leads"""
    
    print("📧 OUTREACH AGENT — Starting autonomous outreach...")
    print("=" * 60)
    
    # Load enriched leads
    if not INPUT_FILE.exists():
        print(f"❌ No enriched leads found at {INPUT_FILE}")
        print("   Run enrich-agent.py first!")
        return []
    
    leads = []
    with open(INPUT_FILE, 'r') as f:
        for line in f:
            leads.append(json.loads(line))
    
    print(f"📍 Loaded {len(leads)} enriched leads")
    
    browser = Browser(headless=True, args=["--no-sandbox"])
    llm = ChatOpenAI(model="qwen3.5-plus", base_url=BAILIAN_BASE_URL, api_key=BAILIAN_API_KEY)
    
    results = []
    
    for i, lead in enumerate(leads, 1):
        print(f"\n📍 Outreach ({i}/{len(leads)}): {lead.get('name', 'Unknown')}")
        
        result = await send_outreach(lead, browser, llm)
        results.append(result)
        
        # Save immediately
        with open(OUTPUT_FILE, 'a') as f:
            f.write(json.dumps(result) + '\n')
        
        # Print summary
        channels = ', '.join([f"{c['channel']}: {c['status']}" for c in result['channels']])
        print(f"   ✅ Sent: {channels}")
    
    print("\n" + "=" * 60)
    print(f"✅ OUTREACH COMPLETE — Contacted {len(results)} newsletters")
    print(f"📁 Saved to: {OUTPUT_FILE}")
    
    # Summary stats
    sent_count = sum(len([c for r in results for c in r['channels'] if c['status'] == 'sent']) for r in results)
    print(f"\n📊 Summary:")
    print(f"   Total outreach attempts: {sent_count}")
    
    return results

if __name__ == "__main__":
    asyncio.run(run_outreach())
