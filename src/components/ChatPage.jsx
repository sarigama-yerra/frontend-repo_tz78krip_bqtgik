import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import MessageBubble from './MessageBubble'
import ChatInput from './ChatInput'
import BackgroundFX from './BackgroundFX'

const initialMessages = [
  { id: 1, role: 'system', text: 'Welcome to Project Aegis. All transmissions are end-to-end encrypted. Zero-Knowledge mode engaged.' },
  { id: 2, role: 'assistant', text: 'How can I assist your operation today?' },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages)

  const handleSend = (content) => {
    const userMsg = { id: Date.now(), role: 'user', text: content, timestamp: new Date().toLocaleTimeString() }
    setMessages((prev) => [...prev, userMsg])

    // Placeholder assistant echo (to be replaced with backend call)
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: 'assistant',
        text: `Acknowledged: ${content}`,
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages((prev) => [...prev, reply])
    }, 500)
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <BackgroundFX />
      <div className="relative z-10 h-screen flex">
        <Sidebar onNewChat={() => setMessages(initialMessages)} />
        <div className="flex-1 flex flex-col">
          <ChatHeader />

          <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-4">
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} text={m.text} timestamp={m.timestamp} />
            ))}
          </main>

          <div className="border-t border-white/10 p-3 lg:p-6 bg-white/5 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto">
              <ChatInput onSend={handleSend} />
              <div className="flex items-center gap-3 mt-2 text-xs text-white/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Zero-Knowledge mode active. Messages are not persisted yet.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
