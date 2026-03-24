#!/usr/bin/env python3
"""
OffPattern Labs - Crawl4ai Lead Scraper
Self-hosted, no API keys needed
Scrapes Substack for dormant newsletters
"""

import asyncio
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
import json

async def scrape_substack_newsletters():
    """Scrape Substack browse page for newsletter info."""
    
    browser_config = BrowserConfig(
        headless=True,
        extra_args=["--no-sandbox", "--disable-setuid-sandbox"]
    )
    
    crawl_config = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        wait_for="css:.card",  # Wait for newsletter cards to load
    )
    
    async with AsyncWebCrawler(config=browser_config) as crawler:
        result = await crawler.arun(
            url="https://substack.com/browse",
            config=crawl_config
        )
        
        if result.success:
            print("✅ Successfully scraped Substack")
            print(f"HTML length: {len(result.html)}")
            # Save HTML for parsing
            with open('/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leadgen/substack_raw.html', 'w') as f:
                f.write(result.html)
            return result.html
        else:
            print(f"❌ Failed: {result.error_message}")
            return None

if __name__ == "__main__":
    print("🔍 OffPattern Labs - Crawl4ai Scraper")
    print("=" * 50)
    print("Scraping Substack for real dormant newsletters...")
    
    html = asyncio.run(scrape_substack_newsletters())
    
    if html:
        print("\n✅ HTML saved to: substack_raw.html")
        print("Parse this to extract newsletter info.")
