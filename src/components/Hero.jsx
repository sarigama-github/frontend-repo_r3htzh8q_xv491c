import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import MagicButton from './MagicButton'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#070a0f]">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to enrich dark theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070a0f]/60 via-[#070a0f]/60 to-[#070a0f]" />

      {/* Spotlight that follows cursor */}
      <Spotlight />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
          Production-ready booking infrastructure
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-gradient-to-br from-sky-200 via-teal-200 to-violet-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
          style={{ textShadow: '0 8px 40px rgba(56,189,248,0.15)' }}
        >
          Axle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-white/70 md:text-xl"
        >
          The developer-first API that powers reservations, inventory, and availability across your entire product surface.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <MagicButton className="text-white">
              Get API Key
            </MagicButton>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <MagicButton className="text-white/90">
              View Docs
            </MagicButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mt-16 w-full max-w-4xl"
        >
          <CodeCard />
        </motion.div>
      </div>

      {/* Animated grid overlay */}
      <GridOverlay />
    </section>
  )
}

function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0" id="spotlight-root">
      <style>{`
        #spotlight-root { --x: 50%; --y: 30%; }
        #spotlight-root::before {
          content: '';
          position: absolute; inset: -10%;
          background: radial-gradient(600px circle at var(--x) var(--y), rgba(59, 130, 246, 0.16), transparent 40%),
                      radial-gradient(400px circle at calc(var(--x) + 10%) calc(var(--y) + 8%), rgba(20, 184, 166, 0.12), transparent 40%);
          pointer-events: none;
          transition: background-position 0.15s ease;
          filter: blur(10px);
        }
      `}</style>
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          const root = document.getElementById('spotlight-root');
          window.addEventListener('pointermove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            root.style.setProperty('--x', x + '%');
            root.style.setProperty('--y', y + '%');
          });
        })();
      `}} />
    </div>
  )
}

function GridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg className="h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.2" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>
    </div>
  )
}

function CodeCard() {
  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-white/5 p-0 backdrop-blur-xl"
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px rgba(0,0,0,0.55)' }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-white/60">
        <span className="h-2 w-2 rounded-full bg-rose-500" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="ml-3 font-geist-mono text-[11px]">terminal — axle curl</span>
      </div>

      <div className="relative overflow-hidden">
        <ScanLines />
        <TypingCode />
      </div>
    </div>
  )
}

function ScanLines() {
  return (
    <div className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 3px' }} />
  )
}

function TypingCode() {
  const code = `curl -X POST https://api.axle.dev/v1/bookings \\
  -H "Authorization: Bearer $AXLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "resourceId": "veh_9zP3Mx",
    "start": "2025-01-14T09:00:00Z",
    "end": "2025-01-14T12:00:00Z",
    "customer": { "name": "A. Lee", "email": "alex@company.com" }
  }'`

  const response = `{
  "id": "bk_8YqkL2",
  "status": "confirmed",
  "price": 129.00,
  "currency": "USD"
}`

  return (
    <div className="grid grid-cols-1 gap-px p-4 sm:grid-cols-2">
      <CodeBlock title="request.sh" code={code} />
      <LiveResponse title="response.json" valueFrom={94} valueTo={129} extra={response} />
    </div>
  )
}

function CodeBlock({ title, code }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-[#0b1220]/60 p-4 text-left shadow-inner">
      <div className="mb-2 flex items-center justify-between text-[11px] text-white/50">
        <span className="font-geist-mono">{title}</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-geist-mono text-[10px] text-white/60">bash</span>
      </div>
      <pre className="m-0 overflow-x-auto whitespace-pre-wrap font-['JetBrains_Mono','Geist_Mono',monospace] text-[12.5px] leading-relaxed text-teal-200/90">
        <code>
          <TypingText text={code} speed={12} />
        </code>
      </pre>
    </div>
  )
}

function LiveResponse({ title, valueFrom, valueTo, extra }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-[#0b1220]/60 p-4 text-left">
      <div className="mb-2 flex items-center justify-between text-[11px] text-white/50">
        <span className="font-geist-mono">{title}</span>
        <span className="rounded bg-white/5 px-2 py-0.5 font-geist-mono text-[10px] text-white/60">json</span>
      </div>
      <div className="font-['JetBrains_Mono','Geist_Mono',monospace] text-[12.5px] leading-relaxed text-sky-200/95">
        {`{\n  "total": $`}<AnimatedNumber from={valueFrom} to={valueTo} />{`.00,\n  "confirmed": true\n}`}
      </div>
      <div className="mt-4 text-[11px] text-white/40">…more</div>
    </div>
  )
}

function AnimatedNumber({ from = 0, to = 100, duration = 1400 }) {
  return (
    <motion.span
      initial={{ number: from }}
      animate={{ number: to }}
      transition={{ duration, ease: 'easeOut' }}
    >
      {({ number }) => <span>{Math.round(number)}</span>}
    </motion.span>
  )
}

function TypingText({ text, speed = 16 }) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: Math.max(1, text.length / speed), ease: 'linear' }}
      className="inline-block overflow-hidden align-top"
    >
      <span>{text}</span>
      <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-teal-300/80 align-baseline shadow-[0_0_12px_rgba(20,184,166,0.8)]" />
    </motion.span>
  )
}
