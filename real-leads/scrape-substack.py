#!/usr/bin/env python3
"""
REAL SUBSTACK SCRAPER - Using Browser-Use
Scrapes actual newsletters from Substack with real contact info
"""

import asyncio
from browser_use import Agent, Browser, ChatOpenAI
import json
from pathlib import Path
from datetime import datetime

# Config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"

# Output file
OUTPUT_FILE = Path("real-newsletters.csv")

async def scrape_substack_newsletters():
    """Scrape real newsletters from Substack"""
    
    print("🚀 Starting real Substack scrape...")
    
    # Setup browser
    browser = Browser(
        headless=True,
        args=["--no-sandbox", "--disable-setuid-sandbox"]
    )
    
    # Setup LLM
    llm = ChatOpenAI(
        model="qwen3.5-plus",
        base_url=BAILIAN_BASE_URL,
        api_key=BAILIAN_API_KEY
    )
    
    # Create agent
    agent = Agent(
        task="""Go to substack.com and find AI/Tech/Business newsletters with 5K-20K subscribers.

For each newsletter, extract:
- Newsletter name
- Author name
- Subscriber count (look for "XK subscribers")
- Contact email (check About page)
- URL
- Whether they have sponsors (check for "Sponsored by" or "Advertise")

Scrape at least 20 real newsletters.

Output as JSON array.""",
        llm=llm,
        browser=browser
    )
    
    # Run agent
    result = await agent.run()
    
    # Save results
    newsletters = result.text if hasattr(result, 'text') else str(result)
    
    # Parse and save
    output_path = OUTPUT_FILE
    with open(output_path, 'w') as f:
        f.write(f"# Real Substack Newsletters - Scraped {datetime.now().isoformat()}\n")
        f.write(newsletters)
    
    print(f"✅ Scraped newsletters saved to: {output_path}")
    print(f"📄 Preview:\n{newsletters[:500]}")
    
    return newsletters

if __name__ == "__main__":
    asyncio.run(scrape_substack_newsletters())
