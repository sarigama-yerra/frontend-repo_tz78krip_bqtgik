import React from 'react'
import { Shield, MessageSquare, Settings, Plus, LogOut, Lock, Sparkles } from 'lucide-react'

export default function Sidebar({ onNewChat }) {
  return (
    <aside className="h-full w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl text-white hidden lg:flex flex-col">
      <div className="p-5 border-b border-white/10 flex items-center gap-2">
        <Shield className="text-cyan-400" size={20} />
        <div className="font-semibold tracking-wide">Aegis Cockpit</div>
      </div>

      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600/70 to-cyan-400/70 hover:from-purple-600 hover:to-cyan-400 transition-colors shadow-[0_0_30px_-10px_#06b6d4]"
        >
          <Plus size={16} />
          New Transmission
        </button>
      </div>

      <div className="px-4 space-y-1">
        {["Deep Space Relay", "Vault Diagnostics", "Threat Intel"].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 cursor-pointer">
            <MessageSquare size={16} />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-white/10 space-y-2">
        <div className="flex items-center gap-2 text-white/60 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white cursor-pointer">
          <Settings size={16} />
          Settings
        </div>
        <div className="flex items-center gap-2 text-white/60 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white cursor-pointer">
          <Lock size={16} />
          Lock Vault
        </div>
        <div className="flex items-center gap-2 text-white/60 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white cursor-pointer">
          <LogOut size={16} />
          Sign out
        </div>
      </div>
    </aside>
  )
}
