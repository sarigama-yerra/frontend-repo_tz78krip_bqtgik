import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Paperclip, Send, Image as ImageIcon, Mic, Sparkles } from 'lucide-react'

const inputBase =
  'w-full bg-white/5 border border-white/10 text-white placeholder-white/50 rounded-2xl outline-none resize-none p-4 pr-28 backdrop-blur-md focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = '0px'
    const scrollH = el.scrollHeight
    el.style.height = Math.min(scrollH, 160) + 'px'
  }, [value])

  const handleSend = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend?.(trimmed)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Transmit a zero-knowledge message…"
        className={inputBase}
      />

      <div className="absolute right-2 bottom-2 flex items-center gap-1">
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Attach file">
          <Paperclip size={18} />
        </button>
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Insert image">
          <ImageIcon size={18} />
        </button>
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors" title="Voice">
          <Mic size={18} />
        </button>
        <button
          onClick={handleSend}
          className="ml-1 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-400 text-white shadow-[0_0_30px_-10px_#06b6d4] hover:shadow-[0_0_40px_-6px_#06b6d4] transition-shadow flex items-center gap-1"
        >
          <Sparkles size={16} />
          <span className="text-sm font-medium">Send</span>
        </button>
      </div>
    </div>
  )
}
