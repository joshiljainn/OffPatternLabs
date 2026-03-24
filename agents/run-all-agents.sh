#!/bin/bash
# FULL AUTONOMOUS SYSTEM — Run all agents in sequence with group chat coordination

echo "🤖 OFFPATTERN LABS — FULL AUTONOMOUS SYSTEM"
echo "=============================================="
echo ""

# Create directories
mkdir -p /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/leads
mkdir -p /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/proposals
mkdir -p /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/invoices

# Clear old output
> /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/group-chat-log.jsonl

# Run Group Chat Coordinator (starts the system)
echo "💬 Starting Group Chat Coordination..."
python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/group-chat.py

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ GROUP CHAT STARTED"
    echo ""
    
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
            
            # Run Outreach Agent
            echo "📧 Running OUTREACH AGENT..."
            python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/outreach-agent.py
            
            if [ $? -eq 0 ]; then
                echo ""
                echo "✅ OUTREACH AGENT COMPLETE"
                echo ""
                
                # Run Closer Agent
                echo "📄 Running CLOSER AGENT..."
                python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/closer-agent.py
                
                if [ $? -eq 0 ]; then
                    echo ""
                    echo "✅ CLOSER AGENT COMPLETE"
                    echo ""
                    
                    # Run Collector Agent
                    echo "💰 Running COLLECTOR AGENT..."
                    python3 /home/ubuntu/.openclaw/workspace/offpatternlabs-repo/agents/collector-agent.py
                    
                    if [ $? -eq 0 ]; then
                        echo ""
                        echo "✅ COLLECTOR AGENT COMPLETE"
                        echo ""
                        echo "🎉 FULL AUTONOMOUS SYSTEM COMPLETE!"
                        echo ""
                        echo "📊 CHECK RESULTS:"
                        echo "   - Leads: /workspace/offpatternlabs-repo/leads/"
                        echo "   - Proposals: /workspace/offpatternlabs-repo/proposals/"
                        echo "   - Invoices: /workspace/offpatternlabs-repo/invoices/"
                        echo "   - Chat Log: /workspace/offpatternlabs-repo/agents/group-chat-log.jsonl"
                    else
                        echo "❌ COLLECTOR AGENT FAILED"
                        exit 1
                    fi
                else
                    echo "❌ CLOSER AGENT FAILED"
                    exit 1
                fi
            else
                echo "❌ OUTREACH AGENT FAILED"
                exit 1
            fi
        else
            echo "❌ ENRICH AGENT FAILED"
            exit 1
        fi
    else
        echo "❌ SCOUT AGENT FAILED"
        exit 1
    fi
else
    echo "❌ GROUP CHAT FAILED"
    exit 1
fi
