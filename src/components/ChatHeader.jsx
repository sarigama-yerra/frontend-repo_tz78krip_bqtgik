import React from 'react'
import { Shield, Wifi, Lock, Zap } from 'lucide-react'

export default function ChatHeader() {
  return (
    <header className="h-16 border-b border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-4 lg:px-8 text-white">
      <div className="flex items-center gap-3">
        <Shield className="text-cyan-400" size={20} />
        <div className="font-semibold tracking-wide">Secure Transmission</div>
        <span className="text-xs text-white/50">Zero-Knowledge Mode</span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1 text-cyan-300/80"><Wifi size={14}/> Online</div>
        <div className="flex items-center gap-1 text-white/60"><Lock size={14}/> Encrypted</div>
        <div className="flex items-center gap-1 text-purple-300/80"><Zap size={14}/> Quantum-Ready</div>
      </div>
    </header>
  )
}
