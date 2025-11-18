import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Animated radial gradients for depth */}
      <motion.div
        aria-hidden
        className="absolute -inset-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background:
            'radial-gradient(800px 800px at 20% 10%, rgba(124,58,237,0.20), transparent 60%), radial-gradient(900px 900px at 80% 90%, rgba(6,182,212,0.18), transparent 60%)',
        }}
      />

      {/* Subtle scanlines / noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* Spline 3D scene */}
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient fog overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_70%_20%,rgba(5,5,5,0.6),transparent_70%)]" />
    </div>
  )
}
