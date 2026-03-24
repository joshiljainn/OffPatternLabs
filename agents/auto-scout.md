# AUTO SCOUT — Using OpenClaw Auto Research

**Run this command to scout newsletters autonomously:**

```bash
openclaw run "Find 50 newsletters on Substack with 5K-20K subscribers in tech, business, finance, and marketing niches. For each newsletter, extract: name, author, subscriber count, URL, niche, and whether they have sponsors. Save results to leads/auto-scout-output.jsonl"
```

**What it does:**
- Uses `autonomous-research` skill
- Scrapes Substack top lists
- Finds qualified newsletters
- Extracts key data
- Saves to JSONL

**Expected output:** 50 leads in 10-15 minutes (faster than browser-use)

---

# AUTO ENRICH — Using OpenClaw Auto Research

**Run this command to enrich leads:**

```bash
openclaw run "Take leads from leads/auto-scout-output.jsonl. For each newsletter, visit their page and extract: contact email, sponsorship rates, open rates, recent post topics, posting frequency, and social media links. Save enriched data to leads/auto-enriched-leads.jsonl"
```

**What it does:**
- Uses `market-research-agent` skill
- Visits each newsletter page
- Extracts contact info + rates
- Saves enriched data

**Expected output:** 30-40 enriched leads with emails in 20-30 minutes

---

## 🚀 RUN BOTH IN SEQUENCE

```bash
cd /home/ubuntu/.openclaw/workspace/offpatternlabs-repo

# Step 1: Scout
openclaw run "Find 50 newsletters on Substack with 5K-20K subscribers in tech, business, finance, and marketing niches. For each newsletter, extract: name, author, subscriber count, URL, niche, and whether they have sponsors. Save results to leads/auto-scout-output.jsonl"

# Step 2: Enrich
openclaw run "Take leads from leads/auto-scout-output.jsonl. For each newsletter, visit their page and extract: contact email, sponsorship rates, open rates, recent post topics, posting frequency, and social media links. Save enriched data to leads/auto-enriched-leads.jsonl"
```

**Total time:** 30-45 minutes
**Expected output:** 30-40 enriched leads with contact emails

---

## 📊 COMPARED TO BROWSER-USE AGENTS

| Metric | browser-use | Auto Research |
|--------|-------------|---------------|
| **Speed** | 20-40 leads/hour | 50-100 leads/hour |
| **Error Handling** | Basic | Advanced (retry, fallback) |
| **Parallel** | No (sequential) | Yes (parallel) |
| **Setup** | Works now | Needs OpenClaw |
| **Best For** | Immediate leads | Scale + reliability |

---

## 🎯 RECOMMENDATION

**Use BOTH in parallel:**
- **browser-use agents** — Getting leads NOW (already running)
- **Auto Research agents** — Better scale for tomorrow

**Run Auto Research tonight for tomorrow's outreach!**
