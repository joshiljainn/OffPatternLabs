#!/usr/bin/env python3
"""
OffPattern Labs - AI Deal Scout
Finds dormant newsletters (5k+ subs, 3+ months inactive)
Scores them automatically and adds to deal database
"""

import os
import json
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Optional
import sqlite3

# Database setup
DB_PATH = Path(__file__).parent / "deals.db"

class DealScout:
    """AI-powered newsletter deal scout."""
    
    def __init__(self):
        self.db_path = DB_PATH
        self.setup_database()
    
    def setup_database(self):
        """Initialize SQLite database for deal tracking."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS deals (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                newsletter_name TEXT,
                author_name TEXT,
                platform TEXT,
                url TEXT UNIQUE,
                subscriber_count INTEGER,
                last_post_date TEXT,
                months_inactive INTEGER,
                niche TEXT,
                estimated_revenue TEXT,
                score INTEGER,
                status TEXT DEFAULT 'new',
                contacted BOOLEAN DEFAULT FALSE,
                notes TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS scout_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source TEXT,
                newsletters_found INTEGER,
                qualified INTEGER,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def score_newsletter(self, data: Dict) -> int:
        """
        Score a newsletter deal (0-100).
        
        Factors:
        - Subscriber count (25 points)
        - Months inactive (25 points) - sweet spot: 3-12 months
        - Niche value (25 points)
        - Platform (10 points)
        - Estimated revenue potential (15 points)
        """
        score = 0
        
        # Subscriber count (25 points)
        subs = data.get('subscriber_count', 0)
        if subs >= 50000:
            score += 25
        elif subs >= 20000:
            score += 20
        elif subs >= 10000:
            score += 15
        elif subs >= 5000:
            score += 10
        
        # Months inactive (25 points) - sweet spot: 3-12 months
        months = data.get('months_inactive', 0)
        if 3 <= months <= 12:
            score += 25
        elif 12 < months <= 24:
            score += 20
        elif months > 24:
            score += 10
        elif months < 3:
            score += 5
        
        # Niche value (25 points)
        niche = data.get('niche', '').lower()
        high_value_niches = ['business', 'finance', 'tech', 'saas', 'investing', 'crypto', 'ai']
        medium_value_niches = ['marketing', 'design', 'productivity', 'career', 'health']
        
        if any(n in niche for n in high_value_niches):
            score += 25
        elif any(n in niche for n in medium_value_niches):
            score += 15
        else:
            score += 10
        
        # Platform (10 points)
        platform = data.get('platform', '').lower()
        if platform in ['substack', 'beehiiv']:
            score += 10
        elif platform in ['ghost', 'wordpress']:
            score += 7
        else:
            score += 5
        
        # Revenue potential (15 points)
        rev = data.get('estimated_revenue', '$0')
        if '$5k' in rev or '$10k' in rev or '$50k' in rev:
            score += 15
        elif '$1k' in rev or '$2k' in rev:
            score += 10
        else:
            score += 5
        
        return min(score, 100)
    
    def add_deal(self, data: Dict) -> Optional[int]:
        """Add a qualified deal to the database."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        try:
            cursor.execute('''
                INSERT OR IGNORE INTO deals 
                (newsletter_name, author_name, platform, url, subscriber_count, 
                 last_post_date, months_inactive, niche, estimated_revenue, score, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
            ''', (
                data.get('newsletter_name'),
                data.get('author_name'),
                data.get('platform'),
                data.get('url'),
                data.get('subscriber_count'),
                data.get('last_post_date'),
                data.get('months_inactive'),
                data.get('niche'),
                data.get('estimated_revenue'),
                data.get('score')
            ))
            
            deal_id = cursor.lastrowid
            conn.commit()
            return deal_id
            
        except sqlite3.IntegrityError:
            # Deal already exists
            return None
        finally:
            conn.close()
    
    def scout_substack(self) -> List[Dict]:
        """
        Scout Substack for dormant newsletters.
        In production, this would use Substack API or web scraping.
        For now, returns sample data structure.
        """
        # TODO: Implement actual Substack scraping
        # For MVP, we'll manually add deals via the submission form
        return []
    
    def scout_beehiiv(self) -> List[Dict]:
        """
        Scout Beehiiv for dormant newsletters.
        In production, this would use Beehiiv API or web scraping.
        """
        # TODO: Implement actual Beehiiv scraping
        return []
    
    def scout_twitter(self) -> List[Dict]:
        """
        Scout Twitter for newsletter mentions.
        Look for: "taking a break from newsletter", "newsletter on hiatus"
        """
        # TODO: Implement Twitter API scraping
        return []
    
    def generate_deal_memo(self, deal_id: int) -> str:
        """Generate a 1-page deal memo for a specific deal."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM deals WHERE id = ?', (deal_id,))
        deal = cursor.fetchone()
        conn.close()
        
        if not deal:
            return "Deal not found"
        
        memo = f"""
# DEAL MEMO - {deal[1]}

## Overview
- **Newsletter:** {deal[1]}
- **Author:** {deal[2]}
- **Platform:** {deal[3]}
- **URL:** {deal[4]}
- **Subscribers:** {deal[5]:,}
- **Last Post:** {deal[6]}
- **Months Inactive:** {deal[7]}
- **Niche:** {deal[8]}

## Scoring
- **Overall Score:** {deal[9]}/100
- **Status:** {deal[10]}

## Valuation Estimate
Based on subscriber count and niche:
- **Conservative:** ${deal[5] * 0.5:,.0f}
- **Aggressive:** ${deal[5] * 2:,.0f}

## Opportunity
{'High-value niche with significant monetization potential.' if deal[9] >= 70 else 'Moderate opportunity, requires further validation.'}

## Next Steps
1. Initial outreach to author
2. Validate subscriber count
3. Discuss revenue share vs. acquisition
4. Schedule intro call

---
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
        return memo
    
    def get_qualified_deals(self, min_score: int = 60) -> List[Dict]:
        """Get all qualified deals above a certain score."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT * FROM deals 
            WHERE score >= ? AND status = 'new'
            ORDER BY score DESC, created_at DESC
        ''', (min_score,))
        
        columns = ['id', 'newsletter_name', 'author_name', 'platform', 'url', 
                   'subscriber_count', 'last_post_date', 'months_inactive', 
                   'niche', 'estimated_revenue', 'score', 'status', 'contacted', 
                   'notes', 'created_at']
        
        deals = [dict(zip(columns, row)) for row in cursor.fetchall()]
        conn.close()
        
        return deals
    
    def run_scout(self) -> Dict:
        """Run all scouts and return summary."""
        results = {
            'timestamp': datetime.now().isoformat(),
            'substack': len(self.scout_substack()),
            'beehiiv': len(self.scout_beehiiv()),
            'twitter': len(self.scout_twitter()),
            'total_qualified': len(self.get_qualified_deals())
        }
        
        # Log the scout run
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO scout_log (source, newsletters_found, qualified)
            VALUES (?, ?, ?)
        ''', ('manual', sum([results['substack'], results['beehiiv'], results['twitter']]), 
              results['total_qualified']))
        conn.commit()
        conn.close()
        
        return results


def main():
    """Main entry point for deal scout."""
    scout = DealScout()
    
    print("🔍 OffPattern Labs - Deal Scout")
    print("=" * 40)
    
    results = scout.run_scout()
    print(f"Scout completed: {results['timestamp']}")
    print(f"Substack: {results['substack']} found")
    print(f"Beehiiv: {results['beehiiv']} found")
    print(f"Twitter: {results['twitter']} found")
    print(f"Total qualified: {results['total_qualified']}")
    
    # Show top deals
    deals = scout.get_qualified_deals(min_score=70)
    if deals:
        print("\n📊 Top Qualified Deals:")
        for deal in deals[:5]:
            print(f"  - {deal['newsletter_name']} ({deal['score']}/100) - {deal['subscriber_count']:,} subs")
    
    return results


if __name__ == "__main__":
    main()
