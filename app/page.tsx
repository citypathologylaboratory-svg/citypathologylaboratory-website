'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function Home() {
  // subtle visual improvements only
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Services data (unchanged content/order as previous working arc version)
  const services = useMemo(
    () => [
      { label: 'CBC' },
      { label: 'Blood Sugar' },
      { label: 'Lipid Profile' },
      { label: 'Liver Function' },
      { label: 'Kidney Function' },
      { label: 'Thyroid Profile' },
      { label: 'Urine Routine' },
      { label: 'HbA1c' },
      { label: 'CRP' },
      { label: 'Electrolytes' },
      { label: 'Vitamin D' },
      { label: 'Vitamin B12' },
    ],
    []
  )

  // Arc layout geometry (restored exactly)
  const radius = 180 // px
  const center = { x: 0, y: 0 }

  // rotation animation (restored)
  const [angle, setAngle] = useState(0)
  const rafRef = useRef<number | null>(null)
  useEffect(() => {
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(32, now - last)
      last = now
      setAngle((a) => (a + (dt * 0.006)) % 360) // subtle speed
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const itemCount = services.length
  const arcSpan = 220 // degrees for arc layout (restored)
  const startDeg = -110 // centered arc

  return (
    <div className="antialiased text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Hero (restored structure; no modern nav/header insertions) */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="relative h-16 w-16">
              <Image src="/logo.png" alt="City Pathology Laboratory" fill priority sizes="64px" />
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              City Pathology Laboratory
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-slate-600">
              Accurate, reliable and timely diagnostics for your health decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services (RESTORED ARC LAYOUT) */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
            <p className="mt-2 text-slate-600">Comprehensive test menu with quality assurance</p>
          </div>

          {/* Arc container (restored exact structure) */}
          <div className="relative flex items-center justify-center" style={{ height: 420 }}>
            {/* center node (subtle card) */}
            <div className="relative z-10 rounded-2xl shadow-sm ring-1 ring-black/5 bg-white/80 backdrop-blur px-5 py-4">
              <div className="text-center">
                <div className="text-sm uppercase tracking-wide text-slate-500">Laboratory</div>
                <div className="text-lg font-medium">City Pathology</div>
              </div>
            </div>

            {/* items on arc */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{ transform: `rotate(${angle}deg)`, transition: mounted ? 'transform 120ms linear' : undefined }}
            >
              {services.map((s, i) => {
                const t = i / Math.max(1, itemCount - 1)
                const deg = startDeg + t * arcSpan
                const rad = (deg * Math.PI) / 180
                const x = center.x + radius * Math.cos(rad)
                const y = center.y + radius * Math.sin(rad)
                return (
                  <div
                    key={s.label}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(${x}px, ${y}px) rotate(${-angle}deg)` }}
                  >
                    <div className="pointer-events-auto whitespace-nowrap rounded-full bg-white shadow-sm ring-1 ring-black/5 px-4 py-2 text-sm font-medium text-slate-700 hover:shadow-md">
                      {s.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* subtle arc guide (no structural change) */}
            <svg className="absolute inset-0 m-auto" width="520" height="260" viewBox="0 0 520 260" aria-hidden>
              <path d="M20,240 A240,240 0 0,1 500,240" fill="none" stroke="rgba(15,23,42,0.06)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* About (structure preserved) */}
      <section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">About</h2>
          <p className="mt-4 text-slate-600 text-center">
            NABL-compliant workflow, maintained by experienced pathologists with calibrated instrumentation.
          </p>
        </div>
      </section>

      {/* Contact (structure preserved) */}
      <section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Contact</h2>
          <p className="mt-4 text-slate-600 text-center">Call: +91-XXXXXXXXXX · Email: contact@citypathlab.com</p>
        </div>
      </section>
    </div>
  )
}
