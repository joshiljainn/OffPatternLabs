#!/usr/bin/env python3
"""
FAST SUBSTACK SCRAPER - Parallel scraping
Scrapes multiple newsletters simultaneously
"""

import asyncio
from browser_use import Agent, Browser, ChatOpenAI
import json
from pathlib import Path
from datetime import datetime

# Config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"
OUTPUT_FILE = Path("real-newsletters.csv")

async def scrape_newsletter(url):
    """Scrape a single newsletter page"""
    try:
        browser = Browser(headless=True, args=["--no-sandbox"])
        llm = ChatOpenAI(model="qwen3.5-plus", base_url=BAILIAN_BASE_URL, api_key=BAILIAN_API_KEY)
        
        agent = Agent(
            task=f"""Go to {url} and extract:
- Newsletter name
- Author name  
- Subscriber count (look for "XK subscribers")
- Contact email (check About page or header)
- Whether they have sponsors

Return as JSON.""",
            llm=llm,
            browser=browser
        )
        
        result = await agent.run()
        return result.text
    except Exception as e:
        return f"Error: {e}"

async def main():
    # Known AI/Tech newsletters to check
    NEWSLETTERS_TO_CHECK = [
        "https://substack.com/@wyndo",  # The AI Maker - 14K+
        "https://substack.com/@lancaric",  # Brutally Honest - 14K+
        "https://substack.com/@lifearchitect",  # The Memo - 12K+
        "https://substack.com/@banc",  # AI Adopters Club - 13K+
        "https://substack.com/@nextword",  # Enterprise AI Trends - 9.5K+
        "https://substack.com/@bnjmnmarie",  # The Kaitchup - 13K+
        "https://substack.com/@jacobbartlett",  # Jacob's Tech Tavern - 9.1K+
        "https://substack.com/@relocateme",  # The Global Move - 9.5K+
        "https://substack.com/@rfleury",  # Digital Grove - 10K+
        "https://substack.com/@migueloteropedrido",  # The Neural Maze - 13K+
        "https://substack.com/@thezvi",  # Don't Worry About the Vase - 32K+
        "https://substack.com/@seattledataguy",  # SeattleDataGuy - 114K+
    ]
    
    print(f"🚀 Scraping {len(NEWSLETTERS_TO_CHECK)} newsletters...")
    
    # Scrape in parallel
    tasks = [scrape_newsletter(url) for url in NEWSLETTERS_TO_CHECK]
    results = await asyncio.gather(*tasks)
    
    # Save results
    with open(OUTPUT_FILE, 'w') as f:
        f.write(f"# Real Newsletters Scraped {datetime.now().isoformat()}\n\n")
        for i, result in enumerate(results):
            f.write(f"\n## Newsletter {i+1}\n")
            f.write(f"{NEWSLETTERS_TO_CHECK[i]}\n")
            f.write(f"{result}\n")
    
    print(f"✅ Scraped {len(results)} newsletters")
    print(f"📁 Saved to: {OUTPUT_FILE}")
    
    # Show preview
    print("\n📄 PREVIEW:")
    for result in results[:3]:
        print(result[:200])

if __name__ == "__main__":
    asyncio.run(main())
