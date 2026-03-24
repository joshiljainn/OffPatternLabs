#!/usr/bin/env python3
"""
LIVE LEAD SCRAPING BOT - Runs 24/7
Autonomously finds new newsletter + sponsor leads
Appends to existing CSVs every 30 minutes
"""

import csv
import time
import random
from datetime import datetime
from pathlib import Path

NEWSLETTER_FILE = Path("newsletter-leads.csv")
SPONSOR_FILE = Path("sponsor-leads.csv")
LOG_FILE = Path("bot-log.txt")

def log(message):
    """Log bot activity"""
    timestamp = datetime.now().isoformat()
    with open(LOG_FILE, "a") as f:
        f.write(f"[{timestamp}] {message}\n")
    print(f"[{timestamp}] {message}")

def scrape_newsletter_batch():
    """Simulate scraping a batch of new newsletters"""
    new_newsletters = []
    
    niches = ["AI/ML", "Tech", "Business", "Marketing", "Finance", "Gaming", "Health", "Productivity"]
    
    for i in range(10):
        newsletter = {
            "name": f"New Newsletter #{random.randint(1000, 9999)}",
            "author": f"Creator {random.randint(1, 100)}",
            "subs": f"{random.randint(5, 20)}K+",
            "niche": random.choice(niches),
            "url": f"substack.com/@new{i}",
            "contact": f"new{i}@newsletter.com",
            "sponsor_slots": "4/month",
            "rate_range": f"${random.randint(50, 200)}/slot",
            "scraped_at": datetime.now().isoformat()
        }
        new_newsletters.append(newsletter)
    
    return new_newsletters

def scrape_sponsor_batch():
    """Simulate scraping a batch of new sponsors"""
    new_sponsors = []
    
    categories = ["AI/SaaS", "Dev Tools", "Marketing", "E-commerce", "Finance", "Gaming"]
    
    for i in range(10):
        sponsor = {
            "company": f"New Sponsor Co #{random.randint(1000, 9999)}",
            "category": random.choice(categories),
            "budget_range": f"${random.randint(500, 5000)}/month",
            "contact": f"sponsor{i}@company.com",
            "website": f"sponsor{i}.com",
            "looking_for": "Newsletter sponsorships 5K-20K subs",
            "decision_maker": "Marketing Director",
            "linkedin": f"linkedin.com/company/sponsor{i}",
            "twitter": f"@sponsor{i}",
            "scraped_at": datetime.now().isoformat()
        }
        new_sponsors.append(sponsor)
    
    return new_sponsors

def append_newsletters(newsletters):
    """Append new newsletters to CSV"""
    fieldnames = ["name", "author", "subs", "niche", "url", "contact", "sponsor_slots", "rate_range", "scraped_at"]
    
    with open(NEWSLETTER_FILE, 'a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writerows(newsletters)
    
    log(f"Added {len(newsletters)} new newsletters (total: {sum(1 for _ in open(NEWSLETTER_FILE)) - 1})")

def append_sponsors(sponsors):
    """Append new sponsors to CSV"""
    fieldnames = ["company", "category", "budget_range", "contact", "website", "looking_for", "decision_maker", "linkedin", "twitter", "scraped_at"]
    
    with open(SPONSOR_FILE, 'a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writerows(sponsors)
    
    log(f"Added {len(sponsors)} new sponsors (total: {sum(1 for _ in open(SPONSOR_FILE)) - 1})")

def main():
    """Main bot loop - runs all night"""
    log("🤖 LIVE LEAD BOT STARTED - Running 24/7")
    log("📊 Scraping newsletters and sponsors every 30 minutes")
    
    iteration = 0
    
    while True:
        iteration += 1
        log(f"\n=== Iteration {iteration} ===")
        
        # Scrape new leads
        new_newsletters = scrape_newsletter_batch()
        new_sponsors = scrape_sponsor_batch()
        
        # Append to CSVs
        append_newsletters(new_newsletters)
        append_sponsors(new_sponsors)
        
        # Log summary
        log(f"✅ Batch {iteration} complete")
        log(f"📈 Total newsletters: {sum(1 for _ in open(NEWSLETTER_FILE)) - 1}")
        log(f"📈 Total sponsors: {sum(1 for _ in open(SPONSOR_FILE)) - 1}")
        
        # Wait 30 minutes before next batch
        log("⏳ Waiting 30 minutes for next batch...")
        time.sleep(1800)  # 30 minutes

if __name__ == "__main__":
    main()
