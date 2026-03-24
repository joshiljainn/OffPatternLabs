# 🤖 Autonomous Lead Generation Agents

**Two agents that find and enrich newsletter leads 24/7**

---

## 🎯 WHAT THEY DO

### **Agent 1: SCOUT**
- Scrapes Substack top lists (Tech, Business, Finance, Marketing)
- Finds newsletters with 5K-20K subscribers
- Extracts: name, author, subs, URL, niche
- Output: `leads/scout-output.jsonl`

### **Agent 2: ENRICH**
- Visits each newsletter page
- Extracts: contact email, sponsorship rates, open rates, recent topics
- Output: `leads/enriched-leads.jsonl`

---

## 🚀 HOW TO RUN

### **Quick Start (Both Agents)**

```bash
cd /home/ubuntu/.openclaw/workspace/offpatternlabs-repo
./agents/run-agents.sh
```

**Takes:** 30-60 minutes (scrapes 40+ newsletters)
**Output:** 20-40 enriched leads with contact emails

### **Run Individually**

```bash
# Just scout
python3 agents/scout-agent.py

# Just enrich (needs scout output first)
python3 agents/enrich-agent.py
```

---

## 📁 OUTPUT FILES

### `leads/scout-output.jsonl`
```json
{
  "name": "The AI Maker",
  "author": "Wyndo",
  "subs": "14K+",
  "url": "https://substack.com/@wyndo",
  "niche": "AI/ML",
  "source": "https://substack.com/top/technology",
  "scraped_at": "2026-03-24T14:52:00Z",
  "status": "new"
}
```

### `leads/enriched-leads.jsonl`
```json
{
  "name": "The AI Maker",
  "author": "Wyndo",
  "subs": "14K+",
  "url": "https://substack.com/@wyndo",
  "niche": "AI/ML",
  "contact_email": "wyndo@aimaker.com",
  "sponsorship_rate": "$400/issue",
  "open_rate": "65%",
  "recent_topics": ["AI agents", "LLM tuning", "GPT-5"],
  "posting_frequency": "Weekly",
  "twitter": "@wyndo",
  "enriched_at": "2026-03-24T15:30:00Z",
  "enrichment_status": "complete"
}
```

---

## ⚙️ CONFIGURATION

### Add More Sources

Edit `agents/scout-agent.py`:

```python
SOURCES = [
    "https://substack.com/top/technology",
    "https://substack.com/top/business",
    "https://substack.com/top/finance",
    "https://substack.com/top/marketing",
    # Add more:
    "https://substack.com/top/health",
    "https://substack.com/top/education",
]
```

### Change Subscriber Range

Edit the task prompt in `agents/scout-agent.py`:

```python
task=f"""Go to {source_url} and find newsletters with 5K-20K subscribers.
# Change to your range:
# "find newsletters with 10K-50K subscribers"
```

---

## 🔄 SCHEDULE (Run 24/7)

### Option 1: Cron Job

```bash
# Run every 6 hours
0 */6 * * * cd /home/ubuntu/.openclaw/workspace/offpatternlabs-repo && ./agents/run-agents.sh
```

### Option 2: Python Loop

```python
# agents/continuous-run.py
import time
import subprocess

while True:
    subprocess.run(['./agents/run-agents.sh'])
    time.sleep(21600)  # 6 hours
```

### Option 3: VPS Service

Create systemd service to run continuously.

---

## 📊 EXPECTED OUTPUT

| Run Time | Leads Found | With Emails | With Rates |
|----------|-------------|-------------|------------|
| 1 hour | 20-40 | 15-30 | 10-20 |
| 6 hours | 60-120 | 45-90 | 30-60 |
| 24 hours | 200-400 | 150-300 | 100-200 |

---

## 🎯 NEXT STEPS (After Running)

1. **Review enriched leads:**
   ```bash
   cat leads/enriched-leads.jsonl | jq '. | select(.contact_email != null)'
   ```

2. **Export to Google Sheets:**
   - Open `leads/enriched-leads.jsonl`
   - Copy leads with contact emails
   - Paste into Google Sheets

3. **Start outreach:**
   - Use outreach templates
   - Send DMs/emails
   - Track responses

---

## 🛠️ TROUBLESHOOTING

### Browser Crashes
- Increase timeout in agent
- Run with fewer sources
- Add retry logic

### API Rate Limits
- Add delays between requests
- Use multiple API keys
- Run during off-peak hours

### No Leads Found
- Check source URLs are valid
- Adjust subscriber range
- Try different sources (Beehiiv, LinkedIn)

---

## 💡 PRO TIPS

1. **Run at night** — Less API contention, faster scraping
2. **Save after each lead** — Don't lose progress if it crashes
3. **Deduplicate** — Check for duplicates before adding to outreach
4. **Prioritize by score** — Enrich high-score leads first
5. **Combine with manual research** — Agents find 80%, you find the best 20%

---

## 🚀 READY TO RUN?

```bash
cd /home/ubuntu/.openclaw/workspace/offpatternlabs-repo
./agents/run-agents.sh
```

**Let it run. Come back to enriched leads.** 🎯
