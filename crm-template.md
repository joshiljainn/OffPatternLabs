# OffPattern Labs - CRM Template (Notion/Airtable)

## Deal Tracking Spreadsheet

Create this in Notion, Airtable, or Google Sheets:

---

### Columns

| Column Name | Type | Description |
|-------------|------|-------------|
| **Newsletter Name** | Text | Name of the newsletter |
| **Founder Name** | Text | Who you're talking to |
| **Email** | Email | Founder's email |
| **Twitter/LinkedIn** | URL | Social profile |
| **Platform** | Select | Substack, Beehiiv, Ghost, WordPress, Other |
| **URL** | URL | Newsletter website |
| **Subscriber Count** | Number | Total subscribers |
| **Last Post Date** | Date | When they last posted |
| **Months Inactive** | Formula | `DATEDIF(Last Post Date, TODAY(), "M")` |
| **Niche** | Select | Business, Tech, Finance, Lifestyle, Other |
| **Current Revenue** | Select | $0, $500-1k, $1k-5k, $5k-10k, $10k+ |
| **Estimated Value** | Formula | `Subscriber Count * 3` (rough estimate) |
| **Score** | Formula | Auto-calculated (see below) |
| **Status** | Select | New → Contacted → Responded → Valuation Sent → Call Booked → Negotiation → Closed Won / Closed Lost |
| **Structure** | Select | Revenue Share, Acquisition, Hybrid, N/A |
| **Your Cut** | Number | Expected monthly revenue or one-time fee |
| **First Contact Date** | Date | When you sent first DM/email |
| **Last Activity Date** | Date | Last interaction |
| **Next Follow-Up** | Date | When to follow up next |
| **Notes** | Text | Context from conversations |
| **Priority** | Formula | High/Medium/Low based on score + activity |

---

### Scoring Formula (Airtable/Google Sheets)

```
=IF(AND([Subscriber Count] >= 10000, [Months Inactive] >= 3, [Months Inactive] <= 12, OR([Niche] = "Business", [Niche] = "Tech", [Niche] = "Finance")), "High",
IF(AND([Subscriber Count] >= 5000, [Months Inactive] >= 3, [Months Inactive] <= 24), "Medium", "Low"))
```

---

### Views to Create

**1. Pipeline (Kanban)**
- Group by: Status
- See deals moving through funnel

**2. High Priority (Filtered List)**
- Filter: Priority = "High" AND Status != "Closed Won" AND Status != "Closed Lost"
- Sort: Score DESC, Next Follow-Up ASC

**3. Follow-Ups Today (Filtered List)**
- Filter: Next Follow-Up = TODAY()
- Sort: Priority DESC

**4. Closed Won (List)**
- Filter: Status = "Closed Won"
- See all active partnerships

**5. Lost Deals (List)**
- Filter: Status = "Closed Lost"
- Review why deals didn't close

---

## Status Definitions

| Status | What It Means | Next Action |
|--------|---------------|-------------|
| **New** | Just found/added to CRM | Send first DM/email |
| **Contacted** | First outreach sent | Wait 3-4 days, then Follow-Up 1 |
| **Responded** | They replied (interested or not) | If interested → send valuation. If not → Nurture |
| **Valuation Sent** | Valuation delivered | Wait 2-3 days, then follow up |
| **Call Booked** | Call scheduled | Prepare for call, send agenda |
| **Negotiation** | Discussing terms | Send proposal, negotiate |
| **Closed Won** | Deal signed! | Onboard, start operations |
| **Closed Lost** | Not a fit | Move to nurture sequence (optional) |

---

## Pipeline Stages (Visual)

```
New → Contacted → Responded → Valuation Sent → Call Booked → Negotiation → Closed Won
                                         ↓
                                    Closed Lost
```

**Conversion Benchmarks:**
- New → Contacted: 100% (you control this)
- Contacted → Responded: 20-30%
- Responded → Valuation Sent: 50%
- Valuation Sent → Call Booked: 40%
- Call Booked → Negotiation: 50%
- Negotiation → Closed Won: 50%

**Overall: 100 New → 2-3 Closed Won**

---

## Daily Workflow

**Morning (10 min):**
1. Open CRM
2. Filter: Next Follow-Up = TODAY()
3. Send follow-ups (use email templates)
4. Update Status + Next Follow-Up date

**Afternoon (10 min):**
1. Add 5-10 new prospects (from Substack, Twitter, etc.)
2. Send first outreach to new prospects
3. Update Status to "Contacted"

**Evening (5 min):**
1. Review today's activity
2. Set Next Follow-Up dates for tomorrow
3. Celebrate wins (even small ones)

---

## Weekly Review (30 min, Friday)

**Questions to ask:**
1. How many new prospects added? (Target: 50/week)
2. How many first outreach sent? (Target: 50/week)
3. How many responses? (Target: 10-15/week)
4. How many valuations sent? (Target: 5/week)
5. How many calls booked? (Target: 2-3/week)
6. How many deals closed? (Target: 1-2/month)

**Adjust:**
- If low responses → Improve first outreach message
- If low valuation → call conversion → Improve valuation email
- If low call → negotiation conversion → Improve call script
- If low negotiation → close conversion → Improve proposal/terms

---

## Sample CRM Entry

```
Newsletter Name: Tech Insights Weekly
Founder Name: Sarah Chen
Email: sarah@techinsights.co
Twitter: @sarahtech
Platform: Substack
URL: techinsights.substack.com
Subscriber Count: 18000
Last Post Date: 2025-10-15
Months Inactive: 5
Niche: Tech
Current Revenue: $0
Estimated Value: $54,000
Score: 85/100
Status: Valuation Sent
Structure: Revenue Share
Your Cut: $4,000/month (est.)
First Contact Date: 2026-03-20
Last Activity Date: 2026-03-22
Next Follow-Up: 2026-03-25
Notes: 
- Replied to first email, seemed interested
- Said she's "burnt out" from weekly posting
- Open to passive income, wants to keep creative control
- Sent valuation on 3/22 ($54k-90k range, $4k-8k/mo potential)
- Follow up 3/25 if no response
Priority: High
```

---

## Automation Ideas (If Using Airtable/Notion)

**1. Auto-calculate Months Inactive**
```
DATEDIF({Last Post Date}, TODAY(), 'M')
```

**2. Auto-calculate Estimated Value**
```
{Subscriber Count} * 3
```

**3. Auto-set Priority**
```
IF(AND({Subscriber Count} >= 10000, {Months Inactive} >= 3), 'High',
IF(AND({Subscriber Count} >= 5000, {Months Inactive} >= 3), 'Medium', 'Low'))
```

**4. Auto-set Next Follow-Up**
```
IF({Status} = 'Contacted', DATEADD({Last Activity Date}, 4, 'days'),
IF({Status} = 'Valuation Sent', DATEADD({Last Activity Date}, 3, 'days'),
IF({Status} = 'Negotiation', DATEADD({Last Activity Date}, 2, 'days'), '')))
```

**5. Email Notifications**
- When Status changes to "Call Booked" → Send calendar invite
- When Next Follow-Up = TODAY() → Send email reminder
- When Status changes to "Closed Won" → Send celebration email + onboarding checklist

---

## Notion Template (Copy-Paste Structure)

```
# OffPattern Labs CRM

## 🎯 Pipeline

[Kanban Board - Group by Status]

## 📊 High Priority Deals

[Table View - Filter: Priority = High, Status != Closed]

## ⏰ Follow-Ups Today

[Table View - Filter: Next Follow-Up = Today]

## ✅ Closed Won

[Table View - Filter: Status = Closed Won]

## 📈 Weekly Metrics

- New Prospects This Week: [Formula]
- Outreach Sent This Week: [Formula]
- Responses This Week: [Formula]
- Calls Booked This Week: [Formula]
- Deals Closed This Week: [Formula]
```

---

**Start simple. A Google Sheet works fine for the first 50 deals. Upgrade to Airtable/Notion when you need automation.**

The tool doesn't matter. Consistency does.

Update your CRM every single day.
