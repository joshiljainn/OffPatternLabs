export default function VoiceAiLanding() {
  return (
    <main className="relative z-10 w-full flex flex-col items-center min-h-screen bg-transparent">
      {/* Hero */}
      <section className="w-full py-24 px-6 bg-[#0a1628] text-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Never Miss a Patient Call Again
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-400 max-w-3xl mx-auto">
            AI voice receptionist that answers every call, books appointments, and takes messages — 24/7.
          </p>
          <a href="#demo" className="inline-block px-8 py-4 bg-[#0066cc] hover:bg-[#0052a3] text-white rounded-lg font-semibold text-lg transition-colors">
            Hear It Live
          </a>
          <p className="mt-5 text-sm text-gray-500">
            7-day free trial · No credit card required
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="w-full py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Your Phone Is Costing You Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">30%</div>
              <p className="text-lg text-gray-600">Of dental calls go unanswered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">$200-500</div>
              <p className="text-lg text-gray-600">Revenue lost per missed call</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0066cc] mb-3">62%</div>
              <p className="text-lg text-gray-600">Of callers hang up and never call back</p>
            </div>
          </div>
          <p className="text-center mt-12 text-lg text-gray-600 max-w-3xl mx-auto">
            When your front desk is busy with patients, calls go to voicemail. Most don't leave a message — they just call the next dentist on Google.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
            Meet Your New Front Desk Assistant
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Offpatterns AI answers every call, even after hours. It books appointments, answers questions, and sends you detailed message summaries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Never Goes to Voicemail</h3>
              <p className="text-gray-600">Answers every call instantly, 24/7/365. Weekends, holidays, lunch breaks — covered.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Books Appointments Directly</h3>
              <p className="text-gray-600">Connects to your calendar and schedules new patients while they're on the line.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Answers Common Questions</h3>
              <p className="text-gray-600">Insurance accepted? Emergency appointments? Location? Hours? It knows your practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Takes Detailed Messages</h3>
              <p className="text-gray-600">When a call needs you, it captures everything and sends you a summary via text or email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="w-full py-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Hear It For Yourself
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Call our demo line right now. Try booking an appointment or asking questions.
          </p>
          <div className="bg-[#0a1628] text-white py-10 px-8 rounded-lg inline-block">
            <p className="text-sm mb-3 text-gray-400">Call to hear the demo</p>
            <p className="text-3xl font-bold tracking-widest mb-5">+1 (415) 369-4728</p>
            <p className="text-sm text-gray-400">
              Our AI receptionist will answer<br/>
              Try asking about appointments or insurance
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Up and Running in 15 Minutes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0066cc] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Forward Your Phone</h3>
              <p className="text-gray-600">Set up call forwarding to your dedicated AI number. Takes 2 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0066cc] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Tell Us About Your Practice</h3>
              <p className="text-gray-600">Share your services, insurance info, hours, and booking preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0066cc] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Connect Your Calendar</h3>
              <p className="text-gray-600">Link your scheduling system so appointments book directly into your calendar.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0066cc] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Start Catching Calls</h3>
              <p className="text-gray-600">Every call gets answered. You'll get transcripts and summaries in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="w-full py-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Start Your 7-Day Free Trial
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            No credit card required. See how many calls you catch in the first week. Most practices recover 10x the cost in recovered appointments.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="mailto:joshil@offpatternslabs.com?subject=Start Voice AI Trial" className="px-8 py-4 bg-[#0066cc] hover:bg-[#0052a3] text-white rounded-lg font-semibold text-lg transition-colors inline-block">
              Start Free Trial
            </a>
            <a href="tel:+14153694728" className="px-8 py-4 bg-[#2d3748] hover:bg-[#1a202c] text-white rounded-lg font-semibold text-lg transition-colors inline-block">
              Call Demo: (415) 369-4728
            </a>
          </div>
          <p className="text-sm text-gray-500">
            $199/month after trial · Cancel anytime · Setup included
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="w-full py-10 px-6 bg-[#0a1628] text-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2026 Offpatterns Labs. Built for dental practices.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            <a href="/privacy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy</a> ·
            <a href="/terms" className="text-gray-400 hover:text-gray-300 mx-2">Terms</a> ·
            <a href="mailto:joshil@offpatternslabs.com" className="text-gray-400 hover:text-gray-300 mx-2">Contact</a>
          </p>
        </div>
      </section>
    </main>
  );
}
