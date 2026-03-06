export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-32 pb-20 px-6 text-center">
        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-500 bg-clip-text text-transparent italic">
          AAMIR AKRAM
        </h1>
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer & Algorithmic Trader. Building high-performance 
          trading bots and scalable web applications.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">
        <div className="group border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-all duration-300">
          <h3 className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Trading Systems</h3>
          <h2 className="text-3xl font-bold mb-4">Golden Phantom Bot</h2>
          <p className="text-gray-400 mb-6">Advanced MT5 bot for XAUUSD utilizing Martingale & Scalping strategies with automated risk management.</p>
          <div className="flex gap-3 text-xs font-mono text-zinc-500">
            <span>MQL5</span> <span>PYTHON</span> <span>ALGO</span>
          </div>
        </div>

        <div className="group border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-all duration-300">
          <h3 className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2">Web Engineering</h3>
          <h2 className="text-3xl font-bold mb-4">Full Stack Solutions</h2>
          <p className="text-gray-400 mb-6">Developing secure, lightning-fast web apps using Laravel and Next.js for complex business logic.</p>
          <div className="flex gap-3 text-xs font-mono text-zinc-500">
            <span>LARAVEL</span> <span>NEXT.JS</span> <span>POSTGRES</span>
          </div>
        </div>
      </section>
    </main>
  );
}