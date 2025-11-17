import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070a0f] text-white font-sans">
      <Hero />
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-12 md:grid-cols-3">
          <Card title="Unified availability" body="Real-time inventory and availability APIs that sync across channels and regions with atomic consistency." />
          <Card title="Reliable webhooks" body="Exactly-once delivery with retries, signatures, and replay—built for mission-critical bookings." />
          <Card title="SDKs for speed" body="Typed clients for TypeScript, Python, and Go so you can ship in hours, not weeks." />
        </div>
      </section>
      <Footer />

      <style>{`
        @keyframes ripple { from { transform: translate(-50%, -50%) scale(0); opacity: 0.8 } to { transform: translate(-50%, -50%) scale(8); opacity: 0 } }
      `}</style>
    </div>
  )
}

function Card({ title, body }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-transform">
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
        background:
          'radial-gradient( 400px 200px at 20% 0%, rgba(20,184,166,0.15), transparent 60%), radial-gradient( 400px 200px at 80% 100%, rgba(56,189,248,0.15), transparent 60%)',
        filter: 'blur(18px)'
      }} />
      <h3 className="mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-xl font-semibold text-transparent">{title}</h3>
      <p className="text-white/60">{body}</p>
    </div>
  )
}

export default App
