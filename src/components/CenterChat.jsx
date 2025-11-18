import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Search, Paperclip, Mic, Send, Phone, MoreHorizontal } from 'lucide-react'

function ChatListItem({ active }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${active ? 'bg-[#f0eefe]' : 'hover:bg-gray-100'}`}>
      <img src={`https://i.pravatar.cc/40?img=${active ? 12 : 32}`} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className={`text-sm font-semibold ${active ? 'text-[#7B61FF]' : 'text-gray-900'}`}>Design chat</div>
          <div className="text-[11px] text-gray-500">12:45</div>
        </div>
        <div className="text-xs text-gray-500 truncate">Alice: Updated the button shadows and grid layout…</div>
      </div>
    </div>
  )
}

function Message({ incoming, text, name, avatar, reactions, image }) {
  return (
    <div className={`w-full flex ${incoming ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start gap-3 max-w-[80%]`}>
        {incoming && <img src={avatar} className="w-8 h-8 rounded-full" />}
        <div>
          {incoming && <div className="text-xs font-medium text-[#7B61FF] mb-1">{name}</div>}
          <div className={`${incoming ? 'bg-[#F5F5F7] text-gray-900' : 'bg-[#7B61FF] text-white'} rounded-2xl px-4 py-3 shadow-sm`}> 
            {image ? (
              <img src={image} className="rounded-xl" />
            ) : (
              <div className="text-sm leading-relaxed">{text}</div>
            )}
          </div>
          {reactions && (
            <div className="mt-1 flex items-center gap-1">
              {reactions.map((r, i) => (
                <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">{r.emoji} {r.count}</span>
              ))}
            </div>
          )}
        </div>
        {!incoming && <img src={avatar} className="w-8 h-8 rounded-full" />}
      </div>
    </div>
  )
}

export default function CenterChat() {
  const [value, setValue] = useState('')
  const [msgs, setMsgs] = useState([
    { id: 1, incoming: true, name: 'Alice', avatar: 'https://i.pravatar.cc/32?img=1', text: 'Pushing a new banner concept – check the purple balance.' },
    { id: 2, incoming: false, name: 'You', avatar: 'https://i.pravatar.cc/32?img=5', text: 'Looks good! Can we soften the shadow and add more spacing?' },
    { id: 3, incoming: true, name: 'Mina', avatar: 'https://i.pravatar.cc/32?img=3', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', reactions: [{ emoji: '🔥', count: 3 }, { emoji: '👍', count: 1 }] },
  ])

  const listRef = useRef(null)
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs])

  const send = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    setMsgs((m) => [...m, { id: Date.now(), incoming: false, name: 'You', avatar: 'https://i.pravatar.cc/32?img=5', text: trimmed }])
    setValue('')
    setTimeout(() => {
      setMsgs((m) => [...m, { id: Date.now()+1, incoming: true, name: 'Alice', avatar: 'https://i.pravatar.cc/32?img=1', text: 'Copy – logging task.' }])
    }, 600)
  }

  return (
    <div className="flex-1 grid grid-cols-12 gap-4 h-full">
      {/* Chat List + Search */}
      <div className="col-span-5 border-r border-gray-200 pr-4">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 mb-3">
          <Search size={16} className="text-gray-500" />
          <input placeholder="Search" className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500" />
        </div>
        <div className="space-y-1">
          <ChatListItem active />
          <ChatListItem />
          <ChatListItem />
        </div>
      </div>

      {/* Active Chat */}
      <div className="col-span-7 flex flex-col">
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="font-semibold text-gray-900">Design chat</div>
            <div className="text-xs text-gray-500">23 members, 10 online</div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Search size={18} />
            <Phone size={18} />
            <MoreHorizontal size={18} />
          </div>
        </div>

        <div ref={listRef} className="flex-1 overflow-y-auto space-y-3 py-3">
          {msgs.map((m) => (
            <Message key={m.id} {...m} />
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm">
            <Paperclip size={18} className="text-gray-500" />
            <input
              className="flex-1 outline-none text-sm placeholder:text-gray-500"
              placeholder="Your message"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => { if (e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } }}
            />
            <Mic size={18} className="text-gray-500" />
            <button onClick={send} className="ml-1 px-3 py-1.5 rounded-lg bg-[#7B61FF] text-white text-sm">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
