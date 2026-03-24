#!/usr/bin/env python3
"""
OffPattern Labs - Browser-Use Lead Scraper
Uses browser-use to scrape REAL dormant newsletters from Substack
"""

import asyncio
from browser_use import Agent, Controller
from pydantic import BaseModel, Field
from typing import List
import json

class NewsletterLead(BaseModel):
    newsletter_name: str = Field(description="Name of the newsletter")
    author_name: str = Field(description="Founder/author name")
    email: str = Field(description="Contact email or 'contact form'")
    url: str = Field(description="Substack URL")
    subscribers: int = Field(description="Approximate subscriber count")
    last_post_days_ago: int = Field(description="Days since last post")
    niche: str = Field(description="Newsletter niche/category")

class NewsletterLeads(BaseModel):
    leads: List[NewsletterLead] = Field(description="List of 15 dormant newsletter leads")

async def scrape_substack():
    """Scrape Substack for dormant newsletters."""
    
    from browser_use.llm.openai import ChatOpenAI
    
    agent = Agent(
        task="""Go to substack.com/browse and find 15 dormant newsletters with these criteria:
        - 5,000-20,000 subscribers (small-medium size)
        - Haven't posted in 60-150 days (2-5 months)
        - Business, Tech, Finance, or Marketing niches
        
        For each newsletter, extract:
        - Newsletter name
        - Author/founder name
        - Contact email (or note if only contact form)
        - Substack URL
        - Approximate subscriber count
        - When they last posted
        - Their niche/category
        
        Return ONLY valid JSON with the 15 leads.""",
        llm=ChatOpenAI(model="qwen3.5-plus")
    )
    
    result = await agent.run()
    return result

if __name__ == "__main__":
    print("🔍 OffPattern Labs - Browser-Use Scraper")
    print("=" * 50)
    print("Scraping Substack for real dormant newsletters...")
    
    leads = asyncio.run(scrape_substack())
    
    print(f"\n✅ Found {len(leads)} leads")
    print(json.dumps(leads, indent=2))
