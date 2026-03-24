#!/usr/bin/env python3
"""
SCOUT AGENT — Finds newsletters with 5K-20K subscribers
Autonomously scrapes Substack, Beehiiv, LinkedIn for qualified leads
"""

import asyncio
import json
from datetime import datetime
from pathlib import Path
from browser_use import Agent, Browser, ChatOpenAI

# Config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"
OUTPUT_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/scout-output.jsonl")

# Sources to scrape
SOURCES = [
    "https://substack.com/top/technology",
    "https://substack.com/top/business",
    "https://substack.com/top/finance",
    "https://substack.com/top/marketing",
]

async def scout_newsletters():
    """Scout for qualified newsletters"""
    
    print("🔍 SCOUT AGENT — Starting newsletter discovery...")
    print("=" * 60)
    
    browser = Browser(headless=True, args=["--no-sandbox"])
    llm = ChatOpenAI(model="qwen3.5-plus", base_url=BAILIAN_BASE_URL, api_key=BAILIAN_API_KEY)
    
    qualified_leads = []
    
    for source_url in SOURCES:
        print(f"\n📍 Scraping: {source_url}")
        
        try:
            agent = Agent(
                task=f"""Go to {source_url} and find newsletters with 5K-20K subscribers.

For each newsletter, extract:
- Newsletter name
- Author name
- Subscriber count (look for "XK subscribers" or estimate from engagement)
- URL
- Niche/category
- Whether they have sponsors (look for "Sponsored by" or "Advertise")

Find at least 10 qualified newsletters per source.

Return as JSON array.""",
                llm=llm,
                browser=browser
            )
            
            result = await agent.run()
            
            # Parse results
            try:
                leads = json.loads(result.text) if hasattr(result, 'text') else []
                
                for lead in leads:
                    lead['source'] = source_url
                    lead['scraped_at'] = datetime.now().isoformat()
                    lead['status'] = 'new'
                    qualified_leads.append(lead)
                    
                    # Save immediately
                    with open(OUTPUT_FILE, 'a') as f:
                        f.write(json.dumps(lead) + '\n')
                    
                    print(f"   ✅ Found: {lead.get('name', 'Unknown')} ({lead.get('subs', 'Unknown')} subs)")
                    
            except Exception as e:
                print(f"   ⚠️  Parse error: {e}")
                
        except Exception as e:
            print(f"   ❌ Scraping error: {e}")
    
    print("\n" + "=" * 60)
    print(f"✅ SCOUT COMPLETE — Found {len(qualified_leads)} qualified newsletters")
    print(f"📁 Saved to: {OUTPUT_FILE}")
    
    return qualified_leads

if __name__ == "__main__":
    asyncio.run(scout_newsletters())
