#!/usr/bin/env python3
"""
COLLECTOR AGENT — Handles invoicing and payment collection autonomously
Tracks deals, sends invoices, collects payments
"""

import asyncio
import json
from datetime import datetime, timedelta
from pathlib import Path

# Config
PROPOSALS_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/proposals-generated.jsonl")
DEALS_FILE = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/deals-closed.jsonl")
INVOICES_DIR = Path("/home/ubuntu/.openclaw/workspace/offpatternlabs-repo/invoices")

# Invoice template
INVOICE_TEMPLATE = """
# INVOICE

**Invoice #:** {invoice_number}
**Date:** {date}
**Due Date:** {due_date}

---

## 📧 Bill To

**Newsletter:** {newsletter_name}
**Contact:** {contact_name}
**Email:** {contact_email}

---

## 💰 Services

| Description | Amount |
|-------------|--------|
| Sponsorship Brokerage Service | |
| - Sponsor matching & negotiation | ${matching_fee} |
| - Creative & copywriting | ${creative_fee} |
| - Scheduling & coordination | ${coordination_fee} |
| **Subtotal** | **${subtotal}** |
| OffPattern Labs Commission (20%) | -${commission} |
| **TOTAL DUE** | **${total}** |

---

## 📋 Details

- **Sponsor:** {sponsor_name}
- **Newsletter Issues:** {num_issues} issue(s)
- **Publication Dates:** {publication_dates}
- **Your Revenue (80%):** ${newsletter_revenue}

---

## 💳 Payment Methods

**Stripe:** [Payment Link]
**PayPal:** [Payment Link]
**Bank Transfer:** [Bank Details]

**Payment due within 7 days of invoice date.**

---

## 📞 Questions?

Reply to this invoice or contact:
joshil@offpatternlabs.com
wa.me/918076958506

Thank you for your business!

**OffPattern Labs**
Newsletter Sponsorship Brokerage
"""

def generate_invoice_number():
    """Generate unique invoice number"""
    return f"OPL-{datetime.now().strftime('%Y%m%d')}-{id(datetime.now()) % 10000:04d}"

async def create_invoice(deal):
    """Create invoice for a closed deal"""
    
    newsletter_name = deal.get('newsletter', 'Unknown')
    contact_name = deal.get('contact_name', 'Newsletter Owner')
    contact_email = deal.get('contact_email', '')
    sponsor_name = deal.get('sponsor', 'TBD')
    num_issues = deal.get('num_issues', 1)
    total_value = deal.get('total_value', 0)
    
    # Calculate fees
    matching_fee = int(total_value * 0.10)
    creative_fee = int(total_value * 0.05)
    coordination_fee = int(total_value * 0.05)
    subtotal = matching_fee + creative_fee + coordination_fee
    commission = int(subtotal * 0.20)
    total = subtotal - commission
    newsletter_revenue = int(total_value * 0.80)
    
    # Generate invoice
    invoice = INVOICE_TEMPLATE.format(
        invoice_number=generate_invoice_number(),
        date=datetime.now().strftime('%Y-%m-%d'),
        due_date=(datetime.now() + timedelta(days=7)).strftime('%Y-%m-%d'),
        newsletter_name=newsletter_name,
        contact_name=contact_name,
        contact_email=contact_email,
        sponsor_name=sponsor_name,
        num_issues=num_issues,
        publication_dates=deal.get('publication_dates', 'TBD'),
        matching_fee=matching_fee,
        creative_fee=creative_fee,
        coordination_fee=coordination_fee,
        subtotal=subtotal,
        commission=commission,
        total=total,
        newsletter_revenue=newsletter_revenue
    )
    
    # Save invoice
    INVOICES_DIR.mkdir(exist_ok=True)
    filename = f"invoice_{generate_invoice_number()}.md"
    filepath = INVOICES_DIR / filename
    
    with open(filepath, 'w') as f:
        f.write(invoice)
    
    return {
        'invoice_number': generate_invoice_number(),
        'newsletter': newsletter_name,
        'sponsor': sponsor_name,
        'total': total,
        'commission': commission,
        'newsletter_revenue': newsletter_revenue,
        'invoice_path': str(filepath),
        'created_at': datetime.now().isoformat(),
        'due_date': (datetime.now() + timedelta(days=7)).isoformat(),
        'status': 'sent'
    }

async def run_collector():
    """Create invoices for all closed deals"""
    
    print("💰 COLLECTOR AGENT — Creating invoices...")
    print("=" * 60)
    
    # Load closed deals
    if not DEALS_FILE.exists():
        print(f"❌ No closed deals found at {DEALS_FILE}")
        print("   Add deals manually or integrate with CRM")
        return []
    
    deals = []
    with open(DEALS_FILE, 'r') as f:
        for line in f:
            deals.append(json.loads(line))
    
    print(f"📍 Loaded {len(deals)} closed deals")
    
    invoices = []
    
    for i, deal in enumerate(deals, 1):
        print(f"\n💰 Invoice ({i}/{len(deals)}): {deal.get('newsletter', 'Unknown')}")
        
        invoice = await create_invoice(deal)
        invoices.append(invoice)
        
        print(f"   ✅ Created: {invoice['invoice_number']}")
        print(f"   💰 Total: ${invoice['total']} (Commission: ${invoice['commission']})")
    
    # Save summary
    invoices_summary_file = INVOICES_DIR / "invoices-summary.json"
    with open(invoices_summary_file, 'w') as f:
        json.dump(invoices, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"✅ INVOICES COMPLETE — Created {len(invoices)} invoices")
    print(f"📁 Saved to: {INVOICES_DIR}")
    
    # Total revenue
    total_revenue = sum(inv['total'] for inv in invoices)
    total_commission = sum(inv['commission'] for inv in invoices)
    print(f"\n💰 Total revenue: ${total_revenue}")
    print(f"💰 Total commission: ${total_commission}")
    
    return invoices

if __name__ == "__main__":
    asyncio.run(run_collector())
