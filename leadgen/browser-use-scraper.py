#!/usr/bin/env python3
"""
OffPattern Labs - Browser-Use Self-Hosted Scraper
Uses local browser + bailian/qwen3.5-plus (API key already configured)
"""

import asyncio
import os
from browser_use import Agent, Browser, ChatOpenAI
from pydantic import BaseModel, Field
from typing import List
import json

# Bailian API config (from openclaw.json)
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"

class NewsletterLead(BaseModel):
    newsletter_name: str
    author_name: str
    email: str
    url: str
    subscribers: int
    last_post_days_ago: int
    niche: str

class NewsletterLeads(BaseModel):
    leads: List[NewsletterLead]

async def scrape_substack():
    """Scrape Substack for dormant newsletters using local browser + bailian."""
    
    # Use qwen3.5-plus through bailian (OpenAI-compatible)
    llm = ChatOpenAI(
        model="qwen3.5-plus",
        base_url=BAILIAN_BASE_URL,
        api_key=BAILIAN_API_KEY
    )
    
    # Local browser (self-hosted, no cloud)
    browser = Browser(
        headless=True,
        args=["--no-sandbox", "--disable-setuid-sandbox"]
    )
    
    agent = Agent(
        task="""Go to substack.com/browse and find 15 dormant newsletters:
        - 5,000-20,000 subscribers
        - Haven't posted in 60-150 days  
        - Business, Tech, Finance, or Marketing niches
        
        For each extract:
        - Newsletter name
        - Author name  
        - Contact email
        - URL
        - Subscriber count
        - Days since last post
        - Niche
        
        Return JSON with all 15 leads. REAL data only - no fake leads.""",
        llm=llm,
        browser=browser
    )
    
    result = await agent.run()
    return result

if __name__ == "__main__":
    print("🔍 OffPattern Labs - Browser-Use (Self-Hosted)")
    print("=" * 50)
    print("Scraping Substack with local browser + bu-30b model...")
    
    leads = asyncio.run(scrape_substack())
    
    print(f"\n✅ Found {len(leads)} leads")
    print(json.dumps([l.model_dump() for l in leads], indent=2))
