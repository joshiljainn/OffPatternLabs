#!/bin/bash
# Run Scout + Enrich agents in sequence

echo "🤖 OFFPATTERN LABS — Newsletter Scout + Enrich Agents"
echo "======================================================="
echo ""

# Create leads directory
mkdir -p /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads

# Clear old output
> /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/scout-output.jsonl
> /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads/enriched-leads.jsonl

# Run Scout Agent
echo "🔍 Running SCOUT AGENT..."
python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/scout-agent.py

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SCOUT AGENT COMPLETE"
    echo ""
    
    # Run Enrich Agent
    echo "📊 Running ENRICH AGENT..."
    python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/enrich-agent.py
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ ENRICH AGENT COMPLETE"
        echo ""
        echo "🎯 NEXT STEPS:"
        echo "1. Open enriched-leads.jsonl"
        echo "2. Review leads with contact emails"
        echo "3. Start outreach!"
        echo ""
        echo "📁 Output files:"
        echo "   - scout-output.jsonl (raw leads)"
        echo "   - enriched-leads.jsonl (with contact info)"
    else
        echo "❌ ENRICH AGENT FAILED"
        exit 1
    fi
else
    echo "❌ SCOUT AGENT FAILED"
    exit 1
fi
