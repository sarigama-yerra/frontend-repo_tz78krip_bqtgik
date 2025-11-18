import React from 'react'
import { Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AegisLogo({ size = 48 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3"
    >
      <div className="relative">
        <Shield className="text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]" size={size} />
        <Zap size={14} className="text-cyan-400 absolute -bottom-1 -right-1 animate-pulse" />
      </div>
      <span
        className="text-white font-bold tracking-tight"
        style={{ fontSize: size * 0.6 }}
      >
        Aegis
      </span>
    </motion.div>
  )
}
