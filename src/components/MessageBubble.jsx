import React from 'react'
import { motion } from 'framer-motion'

export default function MessageBubble({ role = 'user', text, timestamp }) {
  const isUser = role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[72%] rounded-2xl px-4 py-3 backdrop-blur-md border text-sm leading-relaxed shadow-lg ${
          isUser
            ? 'bg-cyan-400/15 border-cyan-300/20 text-cyan-50'
            : 'bg-white/5 border-white/10 text-white/90'
        }`}
      >
        <div className="whitespace-pre-wrap">{text}</div>
        {timestamp && (
          <div className={`mt-1 text-[10px] ${isUser ? 'text-cyan-200/70' : 'text-white/50'}`}>{timestamp}</div>
        )}
      </div>
    </motion.div>
  )
}
