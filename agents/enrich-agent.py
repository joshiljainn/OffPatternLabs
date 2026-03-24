#!/usr/bin/env python3
"""
ENRICH AGENT — Gets contact emails, rates, and detailed stats
Takes scout output and enriches each lead with actionable data
"""

import asyncio
import json
from datetime import datetime
from pathlib import Path
from browser_use import Agent, Browser, ChatOpenAI

# Config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"
INPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/scout-output.jsonl")
OUTPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/enriched-leads.jsonl")

async def enrich_lead(lead, browser, llm):
    """Enrich a single lead with contact info and stats"""
    
    newsletter_url = lead.get('url', '')
    if not newsletter_url:
        return lead
    
    try:
        agent = Agent(
            task=f"""Go to {newsletter_url} and extract:

1. Contact email (check About page, header, footer)
2. Sponsorship rates (look for "Advertise", "Sponsor", "Media kit")
3. Open rate (if available)
4. Recent post topics (last 3-5 posts)
5. Posting frequency (daily, weekly, etc.)
6. Social media links (Twitter, LinkedIn)

Return as JSON with these fields added to the original lead.""",
            llm=llm,
            browser=browser
        )
        
        result = await agent.run()
        
        # Merge enriched data
        try:
            enriched = json.loads(result.text) if hasattr(result, 'text') else {}
            lead.update(enriched)
            lead['enriched_at'] = datetime.now().isoformat()
            lead['enrichment_status'] = 'complete'
        except:
            lead['enrichment_status'] = 'partial'
            
    except Exception as e:
        print(f"   ⚠️  Enrichment error for {lead.get('name', 'Unknown')}: {e}")
        lead['enrichment_status'] = 'failed'
        lead['error'] = str(e)
    
    return lead

async def enrich_all_leads():
    """Enrich all leads from scout output"""
    
    print("📊 ENRICH AGENT — Starting enrichment...")
    print("=" * 60)
    
    # Load scout output
    if not INPUT_FILE.exists():
        print(f"❌ No scout output found at {INPUT_FILE}")
        print("   Run scout-agent.py first!")
        return []
    
    leads = []
    with open(INPUT_FILE, 'r') as f:
        for line in f:
            leads.append(json.loads(line))
    
    print(f"📍 Loaded {len(leads)} leads from scout")
    
    browser = Browser(headless=True, args=["--no-sandbox"])
    llm = ChatOpenAI(model="qwen3.5-plus", base_url=BAILIAN_BASE_URL, api_key=BAILIAN_API_KEY)
    
    enriched_leads = []
    
    for i, lead in enumerate(leads, 1):
        print(f"\n📍 Enriching ({i}/{len(leads)}): {lead.get('name', 'Unknown')}")
        
        enriched = await enrich_lead(lead, browser, llm)
        enriched_leads.append(enriched)
        
        # Save immediately
        with open(OUTPUT_FILE, 'a') as f:
            f.write(json.dumps(enriched) + '\n')
        
        status = enriched.get('enrichment_status', 'unknown')
        if status == 'complete':
            print(f"   ✅ Enriched: {enriched.get('contact_email', 'No email')} | Rate: {enriched.get('sponsorship_rate', 'Unknown')}")
        else:
            print(f"   ⚠️  Partial/Failed enrichment")
    
    print("\n" + "=" * 60)
    print(f"✅ ENRICH COMPLETE — Enriched {len(enriched_leads)} leads")
    print(f"📁 Saved to: {OUTPUT_FILE}")
    
    # Summary stats
    complete = sum(1 for l in enriched_leads if l.get('enrichment_status') == 'complete')
    with_email = sum(1 for l in enriched_leads if l.get('contact_email'))
    with_rates = sum(1 for l in enriched_leads if l.get('sponsorship_rate'))
    
    print(f"\n📊 Summary:")
    print(f"   Complete enrichments: {complete}/{len(enriched_leads)}")
    print(f"   With contact emails: {with_email}/{len(enriched_leads)}")
    print(f"   With sponsorship rates: {with_rates}/{len(enriched_leads)}")
    
    return enriched_leads

if __name__ == "__main__":
    asyncio.run(enrich_all_leads())
