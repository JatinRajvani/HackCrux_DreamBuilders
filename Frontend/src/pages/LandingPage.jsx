import React from "react";
import { Link } from "react-router-dom";
import { PlayCircle, ShieldCheck, AudioLines, ChartSpline, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: AudioLines,
    title: "Upload Any Sales Call",
    desc: "Drop audio files and let AI process every important moment from intro to close.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Deal Signals",
    desc: "Spot objections, buying intent, urgency, and competitor mentions in seconds.",
  },
  {
    icon: ChartSpline,
    title: "Team Performance Dashboard",
    desc: "Track sentiment, conversion probability, and coaching opportunities in one view.",
  },
];

const stats = [
  { label: "Calls analyzed", value: "12k+" },
  { label: "Insight accuracy", value: "92%" },
  { label: "Avg. analysis time", value: "< 45s" },
];

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-gray-300" style={{ background: "linear-gradient(180deg, #090b13 0%, #0f1222 48%, #0a0b14 100%)" }}>
      
      {/* Background Gradients & Grid Overlay */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#4cc9f0] opacity-[0.14] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[0%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#ffb347] opacity-[0.1] rounded-full blur-[100px] pointer-events-none" />
      
      <div 
        className="absolute inset-0 opacity-35 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
        aria-hidden="true" 
      />

      {/* Navigation */}
      <header className="sticky top-0 z-20 flex items-center justify-between py-5 px-6 lg:px-12 backdrop-blur-md bg-[#0a0b14]/55 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <h3 className="text-[1.1rem] font-bold text-white">SalesIQ</h3>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-[0.9rem] font-medium text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#flow" className="text-[0.9rem] font-medium text-gray-400 hover:text-white transition-colors">How It Works</a>
          <a href="#security" className="text-[0.9rem] font-medium text-gray-400 hover:text-white transition-colors">Security</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-[0.9rem] font-medium text-gray-300 hover:text-white transition-colors">Login</Link>
          <Link to="/signup" className="px-4 py-2 text-[0.9rem] font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">Start Free Trial</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12">
        <div>
          <p className="uppercase tracking-[0.14em] text-[0.74rem] text-cyan-400 font-bold mb-3.5">AI Sales Call Intelligence Platform</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-4 max-w-[18ch] animate-[fade-in-up_0.7s_ease-out]">
            Turn Raw Sales Calls Into
            <span className="bg-gradient-to-r from-[#4cc9f0] via-[#00d4aa] to-[#ffb347] bg-clip-text text-transparent"> Revenue Decisions</span>
          </h1>
          <p className="text-base text-gray-300 max-w-[62ch] mt-4 mb-6 leading-relaxed">
            Analyze every sales conversation with transcription, risk scoring, and coaching insights.
            Your team gets clear next actions, not just call recordings.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6 mb-8">
            <Link to="/signup" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started <ArrowRight size={16} />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors" type="button">
              <PlayCircle size={16} /> Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-7">
            {stats.map((s) => (
              <div key={s.label} className="p-3.5 rounded-lg bg-[#161829]/45 border border-gray-800">
                <strong className="block text-[1.1rem] font-bold text-white mb-0.5" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{s.value}</strong>
                <span className="text-[0.8rem] text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[380px] pt-4 lg:pt-0 animate-[fade-in-up_0.9s_ease-out_0.2s_both]">
          <div className="p-5 rounded-xl bg-[#161829]/90 border border-gray-800 shadow-2xl backdrop-blur-md">
            <h4 className="text-white font-semibold mb-4 text-basis">Live Insight Snapshot</h4>
            
            <div className="flex items-center justify-between text-[0.86rem] text-gray-400 mt-3 mb-2">
              <span>Deal Probability</span>
              <strong className="text-white text-base">78%</strong>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-800 mb-5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: "78%" }} />
            </div>

            <div className="flex items-center justify-between text-[0.86rem] text-gray-400 mt-3 mb-2">
              <span>Customer Sentiment</span>
              <span className="px-2 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/20 rounded-full">Positive</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              <span className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-500/20 rounded-full">Pricing Objection</span>
              <span className="px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/20 rounded-full">Strong Buying Signal</span>
              <span className="px-2 py-1 text-xs font-medium text-orange-400 bg-orange-500/20 rounded-full">Follow-up in 2 days</span>
            </div>
          </div>

          {/* Floating Panel */}
          <div className="absolute right-[-20px] bottom-[-18px] w-full max-w-[300px] p-4 rounded-xl bg-[#161829]/95 border border-[#4cc9f0]/25 shadow-xl backdrop-blur animate-[bounce_3s_ease-in-out_infinite]">
            <p className="text-[0.76rem] tracking-[0.1em] uppercase text-gray-400 font-medium">AI Coach Suggestion</p>
            <strong className="block mt-1.5 text-[0.9rem] text-white">Lead with ROI story before feature pitch in next call.</strong>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="mb-6">
          <h2 className="text-[1.8rem] md:text-3xl font-bold text-white mb-2 max-w-[24ch]">Everything your reps need after every call</h2>
          <p className="text-gray-400 text-base max-w-[70ch] mt-2">Built for sales teams that want faster deal movement and better coaching loops.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="p-6 rounded-xl bg-[#161829]/40 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-3 shadow-lg">
                <Icon size={18} />
              </div>
              <h3 className="text-[1.1rem] font-bold text-white mb-2">{title}</h3>
              <p className="text-[0.95rem] text-gray-400 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="flow" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl md:text-[1.8rem] font-bold text-white mb-6 text-center">How it works in 3 simple steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-[#10111e]/70 border border-gray-800 relative">
              <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#6c63ff]/20 text-indigo-400 font-bold mb-2.5">01</span>
              <h4 className="text-[1.1rem] text-white font-bold mb-1.5">Upload a Call</h4>
              <p className="text-[0.95rem] text-gray-400">Support common audio formats and start processing instantly.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#10111e]/70 border border-gray-800 relative">
              <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#6c63ff]/20 text-indigo-400 font-bold mb-2.5">02</span>
              <h4 className="text-[1.1rem] text-white font-bold mb-1.5">AI Analyzes Context</h4>
              <p className="text-[0.95rem] text-gray-400">Extracts sentiment, objections, deal fit, and recommendations.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#10111e]/70 border border-gray-800 relative">
              <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#6c63ff]/20 text-indigo-400 font-bold mb-2.5">03</span>
              <h4 className="text-[1.1rem] text-white font-bold mb-1.5">Act with Confidence</h4>
              <p className="text-[0.95rem] text-gray-400">Use dashboards, risks, and top-deal views for your next action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-8 rounded-2xl bg-gradient-to-r from-[#10111e] to-[#161829] border border-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Built with enterprise-grade security mindset</h2>
            <p className="text-[0.95rem] text-gray-400 max-w-[60ch]">Encrypted storage, role-based visibility, and controlled data access for your team.</p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium whitespace-nowrap">
            <ShieldCheck size={20} />
            <span>Secure by design</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="text-[1.8rem] md:text-3xl font-bold text-white mb-2">Ready to analyze your first call?</h2>
        <p className="text-[1rem] text-gray-400 mb-6">Start your workspace in minutes and invite your team later.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link to="/signup" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">Create Account</Link>
          <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors">Login</Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
