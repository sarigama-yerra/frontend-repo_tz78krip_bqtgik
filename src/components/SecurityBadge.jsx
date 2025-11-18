import React from 'react'
import { Lock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SecurityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
    >
      <Lock size={14} className="text-cyan-300" />
      <span className="text-xs">End-to-End Encrypted</span>
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_2px_rgba(6,182,212,0.8)]" />
    </motion.div>
  )
}
