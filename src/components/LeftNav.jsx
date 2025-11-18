import React from 'react'
import { Triangle, Inbox, Briefcase, Users, Newspaper, Archive, Settings, LogOut } from 'lucide-react'

function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <div className={`relative group flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer select-none transition-colors ${active ? 'bg-[#2a2d36]' : 'hover:bg-[#2a2d36]/70'}`}>
      <Icon size={18} className={`shrink-0 ${active ? 'text-white' : 'text-gray-300'}`} />
      <span className={`text-sm ${active ? 'text-white font-medium' : 'text-gray-300'}`}>{label}</span>
      {badge ? (
        <span className="ml-auto inline-flex items-center justify-center text-[10px] font-semibold bg-red-500 text-white rounded-full min-w-[18px] h-[18px] px-1">
          {badge}
        </span>
      ) : null}
    </div>
  )
}

export default function LeftNav() {
  return (
    <aside className="h-full w-20 md:w-64 bg-[#1F2128] text-white flex flex-col px-3 py-4">
      <div className="flex items-center gap-2 px-2 py-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
          <Triangle size={18} className="text-white" />
        </div>
        <span className="hidden md:block font-semibold tracking-tight">Aegis</span>
      </div>

      <div className="space-y-1">
        <NavItem icon={Inbox} label="All chats" />
        <NavItem icon={Briefcase} label="Work" active badge={43} />
        <NavItem icon={Users} label="Friends" badge={4} />
        <NavItem icon={Newspaper} label="News" />
        <NavItem icon={Archive} label="Archive" />
      </div>

      <div className="mt-auto space-y-2 pt-3 border-t border-white/10/"> 
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#2a2d36]/70 cursor-pointer">
          <Settings size={18} className="text-gray-300" />
          <span className="hidden md:inline text-gray-300 text-sm">Edit settings</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#2a2d36]/70 cursor-pointer">
          <LogOut size={18} className="text-gray-300" />
          <span className="hidden md:inline text-gray-300 text-sm">Log out</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <img src="https://i.pravatar.cc/40?img=5" alt="me" className="w-8 h-8 rounded-full object-cover" />
          <div className="hidden md:block">
            <div className="text-sm font-medium">You</div>
            <div className="text-xs text-gray-400">Designer</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
