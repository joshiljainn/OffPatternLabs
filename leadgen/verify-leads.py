#!/usr/bin/env python3
"""
OffPattern Labs - Lead Verification Script
Checks post dates for the 100 newsletters we found
"""

import asyncio
from browser_use import Agent, Browser, ChatOpenAI
import json
from datetime import datetime, timedelta

# Bailian API config
BAILIAN_API_KEY = "sk-sp-db610ad4ada74a82bf95d6ee0153576c"
BAILIAN_BASE_URL = "https://coding-intl.dashscope.aliyuncs.com/v1"

# Newsletters to verify (ranks 50-100 from Tech leaderboard)
NEWSLETTERS = [
    {"rank": 54, "name": "Ahead of AI", "author": "Sebastian Raschka, PhD", "url": "https://substack.com/@rasbt"},
    {"rank": 55, "name": "The Memo by LifeArchitect.ai", "author": "Dr Alan D. Thompson", "url": "https://substack.com/@lifearchitect"},
    {"rank": 56, "name": "🌶️ Silicon Carne", "author": "Carlos Diaz", "url": "https://substack.com/@carlosdiaz"},
    {"rank": 57, "name": "Luiza's Newsletter", "author": "Luiza Jarovsky, PhD", "url": "https://substack.com/@luizajarovsky"},
    {"rank": 58, "name": "signull vs. noise", "author": "signull", "url": "https://substack.com/@signull"},
    {"rank": 59, "name": "AI by Hand ✍️", "author": "Prof. Tom Yeh", "url": "https://substack.com/@tomyeh"},
    {"rank": 60, "name": "Excellent AI Prompts", "author": "Excellent AI Prompts", "url": "https://substack.com/@excellentaiprompts"},
    {"rank": 61, "name": "Brutally Honest by Matej Lancaric", "author": "Matej Lancaric", "url": "https://substack.com/@lancaric"},
    {"rank": 62, "name": "Dwarkesh Podcast", "author": "Dwarkesh Patel", "url": "https://substack.com/@dwarkesh"},
    {"rank": 63, "name": "Le Pavé numérique", "author": "Presse Non Stop", "url": "https://substack.com/@pressenonstop"},
    {"rank": 64, "name": "AI Adopters Club", "author": "Kamil Banc", "url": "https://substack.com/@banc"},
    {"rank": 65, "name": "Artificial Intelligence Made Simple", "author": "Devansh", "url": "https://substack.com/@chocolatemilkcultleader"},
    {"rank": 66, "name": "Enterprise AI Trends", "author": "John Hwang", "url": "https://substack.com/@nextword"},
    {"rank": 67, "name": "Sources", "author": "Alex Heath", "url": "https://substack.com/@alexeheath"},
    {"rank": 68, "name": "ASeq Newsletter", "author": "Nava Whiteford", "url": "https://substack.com/@navawhiteford"},
    {"rank": 69, "name": "Wonder Tools", "author": "Jeremy Caplan", "url": "https://substack.com/@wondertools"},
    {"rank": 70, "name": "The AI Maker", "author": "Wyndo", "url": "https://substack.com/@wyndo", "subs": "14K+"},
    {"rank": 71, "name": "The Leverage", "author": "Evan Armstrong", "url": "https://substack.com/@evanarmstrong"},
    {"rank": 72, "name": "Tech Buzz China Insider", "author": "Tech Buzz China", "url": "https://substack.com/@techbuzzchina"},
    {"rank": 73, "name": "The Kaitchup – AI on a Budget", "author": "Benjamin Marie", "url": "https://substack.com/@bnjmnmarie"},
    {"rank": 74, "name": "Big Technology", "author": "Alex Kantrowitz", "url": "https://substack.com/@bigtechnology"},
    {"rank": 75, "name": "The Founders Corner®", "author": "Chris Tottman", "url": "https://substack.com/@christottman"},
    {"rank": 76, "name": "Decoding Discontinuity", "author": "Raphaëlle d'Ornano", "url": "https://substack.com/@dornanoco"},
    {"rank": 77, "name": "Andrew Lu on global semis and techs", "author": "Andrew Lu", "url": "https://substack.com/@andrewhclu"},
    {"rank": 78, "name": "Beyond The Hype", "author": "Beyond The Hype", "url": "https://substack.com/@enertuition"},
    {"rank": 79, "name": "Implications, by Scott Belsky", "author": "Scott Belsky", "url": "https://substack.com/@scottbelsky"},
    {"rank": 80, "name": "The Global Move", "author": "Andrew Stetsenko", "url": "https://substack.com/@relocateme"},
    {"rank": 81, "name": "The OSINT Newsletter", "author": "The OSINT Newsletter", "url": "https://substack.com/@osintnewsletter"},
    {"rank": 82, "name": "Links I Would Gchat You If We Were Friends", "author": "Caitlin Dewey", "url": "https://substack.com/@caitlindewey"},
    {"rank": 83, "name": "Contraptions", "author": "Venkatesh Rao", "url": "https://substack.com/@contraptions"},
    {"rank": 84, "name": "Liberty's Highlights", "author": "Liberty", "url": "https://substack.com/@libertyrpf"},
    {"rank": 85, "name": "Digital Grove", "author": "Ryan Fleury", "url": "https://substack.com/@rfleury"},
    {"rank": 86, "name": "The Neural Maze", "author": "Miguel Otero Pedrido", "url": "https://substack.com/@migueloteropedrido"},
    {"rank": 87, "name": "Rich on Tech", "author": "Rich DeMuro", "url": "https://substack.com/@richontech"},
    {"rank": 88, "name": "Don't Worry About the Vase", "author": "Zvi Mowshowitz", "url": "https://substack.com/@thezvi"},
    {"rank": 89, "name": "SeattleDataGuy's Newsletter", "author": "SeattleDataGuy", "url": "https://substack.com/@seattledataguy"},
    {"rank": 90, "name": "AI Health Uncut", "author": "Sergei Polevikov", "url": "https://substack.com/@sergeiai"},
    {"rank": 91, "name": "Jacob's Tech Tavern", "author": "Jacob Bartlett", "url": "https://substack.com/@jacobbartlett"},
    {"rank": 92, "name": "BEP Research", "author": "Ben Pouladian", "url": "https://substack.com/@bepresearch"},
    {"rank": 93, "name": "MOOVERS", "author": "Monica Magalhaes", "url": "https://substack.com/@shelovesfuture"},
    {"rank": 94, "name": "Data Analysis Journal", "author": "Olga Berezovsky", "url": "https://substack.com/@dataanalysis"},
    {"rank": 95, "name": "Artificial Corner", "author": "Frank Andrade", "url": "https://substack.com/@thepycoach"},
    {"rank": 96, "name": "DataExpert.io Newsletter", "author": "Zach Wilson", "url": "https://substack.com/@eczachly"},
    {"rank": 97, "name": "Hello China Tech", "author": "Hello China Tech", "url": "https://hellochinatech.com"},
    {"rank": 98, "name": "Infinite Scroll", "author": "Jeremiah Johnson", "url": "https://substack.com/@jeremiahjohnson"},
    {"rank": 99, "name": "The Convivial Society", "author": "L. M. Sacasas", "url": "https://substack.com/@theconvivialsociety"},
    {"rank": 100, "name": "Faster, Please!", "author": "James Pethokoukis", "url": "https://substack.com/@jamespethokoukis"},
]

async def verify_newsletter(agent, newsletter):
    """Check a single newsletter's subscriber count and last post date."""
    
    task = f"""Go to {newsletter['url']} and find:
    1. Subscriber count (look for "XK+" or subscriber number)
    2. Last post date (check the Posts tab)
    
    Return JSON with:
    - newsletter_name: "{newsletter['name']}"
    - author: "{newsletter['author']}"
    - url: "{newsletter['url']}"
    - subscribers: (number or "unknown")
    - last_post_date: (YYYY-MM-DD format or "unknown")
    - days_inactive: (number of days since last post, calculate from today March 23, 2026)
    - qualified: (true if 5K-20K subs AND 60-150 days inactive)"""
    
    agent.task = task
    result = await agent.run()
    return result

async def main():
    print("🔍 OffPattern Labs - Lead Verification")
    print("=" * 50)
    print(f"Verifying {len(NEWSLETTERS)} newsletters...")
    
    llm = ChatOpenAI(
        model="qwen3.5-plus",
        base_url=BAILIAN_BASE_URL,
        api_key=BAILIAN_API_KEY
    )
    
    browser = Browser(
        headless=True,
        args=["--no-sandbox", "--disable-setuid-sandbox"]
    )
    
    agent = Agent(
        task="Checking newsletter stats",
        llm=llm,
        browser=browser
    )
    
    qualified_leads = []
    
    for i, newsletter in enumerate(NEWSLETTERS[:10], 1):  # Start with first 10
        print(f"\n[{i}/{len(NEWSLETTERS)}] Checking {newsletter['name']}...")
        result = await verify_newsletter(agent, newsletter)
        
        if result and hasattr(result, 'qualified') and result.qualified:
            qualified_leads.append(result)
            print(f"  ✅ QUALIFIED: {result.subscribers} subs, {result.days_inactive} days inactive")
        else:
            print(f"  ❌ Not qualified")
    
    print(f"\n✅ Found {len(qualified_leads)} qualified leads")
    print(json.dumps([l.model_dump() if hasattr(l, 'model_dump') else l for l in qualified_leads], indent=2))
    
    return qualified_leads

if __name__ == "__main__":
    leads = asyncio.run(main())
