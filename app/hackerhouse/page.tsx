export default function HackerHouse() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hacker House Pune</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace;
      background: #0a0a0a;
      color: #fff;
      line-height: 1.6;
      padding: 40px 20px;
    }
    .container {
      max-width: 650px;
      margin: 0 auto;
    }
    h1 {
      font-size: 48px;
      font-weight: 900;
      margin-bottom: 8px;
      letter-spacing: -2px;
      background: linear-gradient(90deg, #00ff88, #00d4ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      font-size: 18px;
      color: #666;
      margin-bottom: 40px;
      font-family: monospace;
    }
    .card {
      background: #111;
      border: 1px solid #222;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 20px;
    }
    .card h2 {
      font-size: 16px;
      margin-bottom: 12px;
      color: #00ff88;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .card p {
      color: #ccc;
      margin-bottom: 12px;
    }
    .card ul {
      list-style: none;
      padding-left: 0;
    }
    .card li {
      padding: 8px 0;
      color: #ccc;
      border-bottom: 1px solid #222;
    }
    .card li:last-child { border-bottom: none; }
    .card li:before {
      content: "→ ";
      color: #00ff88;
    }
    .highlight {
      background: rgba(0, 255, 136, 0.1);
      border-left: 3px solid #00ff88;
      padding: 16px;
      margin: 20px 0;
    }
    .contact {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      padding: 24px;
      border-radius: 8px;
      margin: 30px 0;
      text-align: center;
    }
    .contact a {
      color: #00d4ff;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
    }
    .contact p {
      color: #888;
      margin-top: 8px;
      font-size: 14px;
    }
    .vibe {
      font-size: 14px;
      color: #666;
      font-family: monospace;
      margin-top: 40px;
      text-align: center;
    }
    .emoji {
      font-size: 24px;
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>HACKER HOUSE</h1>
    <p class="subtitle">PUNE // 2026</p>
    
    <div class="highlight">
      <strong>🏠 Building something real with people who get it.</strong>
    </div>
    
    <div class="card">
      <h2>The Vibe</h2>
      <p>No corporate retreat energy. No "networking events." Just founders/builders under one roof, building shit that matters.</p>
      <p>Low ego. High output. No BS.</p>
    </div>
    
    <div class="card">
      <h2>Who This Is For</h2>
      <ul>
        <li>You're already building — not "I have an idea" building</li>
        <li>You're genuinely good at something — code, design, growth, sales</li>
        <li>You move faster with others around</li>
        <li>You want to collide with people who make you better</li>
      </ul>
    </div>
    
    <div class="card">
      <h2>Not For</h2>
      <ul>
        <li>People "exploring startups"</li>
        <li>People who need hand-holding</li>
        <li>People who aren't already in motion</li>
      </ul>
    </div>
    
    <div class="card">
      <h2>The Setup</h2>
      <ul>
        <li><strong>Location:</strong> Pune (exact spot TBD based on who's in)</li>
        <li><strong>Duration:</strong> 2 weeks to 1 month (flexible)</li>
        <li><strong>Housing:</strong> Villa / premium shared housing — good vibes, good wifi, good energy</li>
        <li><strong>Cost:</strong> Split equally. Nothing fancy, everything functional.</li>
        <li><strong>Work:</strong> You do your thing. We do ours. We collide when it makes sense.</li>
      </ul>
    </div>
    
    <div class="card">
      <h2>Why Pune</h2>
      <ul>
        <li>Cheap enough to burn runway for months</li>
        <li>Good food, good weather, good internet</li>
        <li>Growing startup scene but not Bangalore-level chaos</li>
        <li>Central. Accessible.</li>
      </ul>
    </div>
    
    <div class="contact">
      <p style="color: #666; margin-bottom: 16px; font-size: 14px;">INTERESTED?</p>
      <a href="tel:+918076958506">📱 80769 58506</a>
      <p style="margin-top: 8px;">
        <a href="tel:+918133064467" style="font-size: 16px;">📱 81330 64467</a>
      </p>
      <p>Call / WhatsApp / DM</p>
      <p style="margin-top: 16px;">
        <a href="https://linkedin.com/in/joshiljain/" style="font-size: 16px;">LinkedIn →</a>
      </p>
    </div>
    
    <div class="card">
      <h2>When You Reach Out</h2>
      <p>Tell me:</p>
      <ul>
        <li>What are you building right now?</li>
        <li>What are you genuinely good at?</li>
        <li>Why does this sound like your kind of thing?</li>
      </ul>
    </div>
    
    <p class="vibe">
      This isn't for everyone. That's the point.
    </p>
  </div>
</body>
</html>
    ` }} />
  );
}
