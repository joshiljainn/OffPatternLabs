#!/usr/bin/env python3
"""
SCRAPE SMALL NEWSLETTERS (<10K subs)
Real scraping with browser-use
"""

import asyncio
from browser_use import Agent, Browser, ChatOpenAI
from pathlib import Path
from datetime import datetime

BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"

NEWSLETTERS = [
    ("AI Women Rising", "https://aiwomenrising.substack.com/"),
    ("Pithy Cyborg", "https://pithycyborg.substack.com/"),
    ("Beyond the AI Hype", "https://beyondtheaihype.substack.com/"),
    ("Rising Giants", "https://risinggiants.substack.com/"),
    ("Rising Tide", "https://helentoner.substack.com/"),
    ("Enterprise AI Trends", "https://substack.com/@nextword"),
    ("Jacob's Tech Tavern", "https://substack.com/@jacobbartlett"),
    ("The Global Move", "https://substack.com/@relocateme"),
]

OUTPUT_FILE = Path("small-newsletters-real.csv")

async def scrape_one(name, url):
    """Scrape single newsletter"""
    try:
        browser = Browser(headless=True, args=["--no-sandbox"])
        llm = ChatOpenAI(model="qwen3.5-plus", base_url=BAILIAN_BASE_URL, api_key=BAILIAN_API_KEY)
        
        agent = Agent(
            task=f"""Go to {url} and extract:
- Newsletter name
- Author name
- Subscriber count (exact number or "XK+")
- Contact email (check About page)
- Do they have sponsors? (look for "Sponsored by" or "Advertise")
- Recent post topics

Return as JSON.""",
            llm=llm,
            browser=browser
        )
        
        result = await agent.run()
        return {"name": name, "url": url, "data": result.text}
    except Exception as e:
        return {"name": name, "url": url, "data": f"Error: {e}"}

async def main():
    print(f"🚀 Scraping {len(NEWSLETTERS)} small newsletters...")
    
    results = []
    for name, url in NEWSLETTERS:
        print(f"\n📰 Scraping: {name}")
        result = await scrape_one(name, url)
        results.append(result)
        print(f"   ✅ Done")
    
    # Save
    with open(OUTPUT_FILE, 'w') as f:
        f.write(f"# Small Newsletters Scraped {datetime.now().isoformat()}\n\n")
        for r in results:
            f.write(f"\n## {r['name']}\n")
            f.write(f"URL: {r['url']}\n")
            f.write(f"{r['data']}\n")
    
    print(f"\n✅ Scraped {len(results)} newsletters")
    print(f"📁 Saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    asyncio.run(main())
