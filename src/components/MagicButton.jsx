import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagicButton({ children, className = '', onClick }) {
  const btnRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  // Ripple effect
  const [ripples, setRipples] = useState([])

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPos({ x, y })
  }

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Math.random().toString(36)
    setRipples((r) => [...r, { id, x, y }])
    setTimeout(() => {
      setRipples((r) => r.filter((i) => i.id !== id))
    }, 600)
    onClick && onClick(e)
  }

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-xl px-6 py-3 font-semibold tracking-tight transition-transform will-change-transform select-none ${className}`}
      style={{
        WebkitTapHighlightColor: 'transparent',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow:
          hover
            ? '0 10px 30px rgba(0, 200, 255, 0.25), inset 0 0 0 1px rgba(0,255,220,0.15)'
            : '0 4px 16px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)'
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Magnetic glow following cursor */}
      <span
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 160 : 120,
          height: hover ? 160 : 120,
          background:
            'radial-gradient( circle at center, rgba(0,255,209,0.25), rgba(0,255,209,0.08) 40%, transparent 60%)',
          filter: 'blur(18px)',
          opacity: hover ? 1 : 0
        }}
      />

      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            left: r.x,
            top: r.y,
            width: 12,
            height: 12,
            borderColor: 'rgba(0,255,209,0.5)',
            animation: 'ripple 600ms ease-out forwards'
          }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 bg-clip-text text-transparent" style={{
        backgroundImage: 'linear-gradient(90deg, #7dd3fc, #22d3ee, #a78bfa)'
      }}>
        {children}
      </span>

      {/* Border glow */}
      <span className="pointer-events-none absolute inset-0 rounded-xl" style={{
        boxShadow: hover ? '0 0 0 2px rgba(0,255,209,0.3)' : 'none'
      }} />
    </motion.button>
  )
}
