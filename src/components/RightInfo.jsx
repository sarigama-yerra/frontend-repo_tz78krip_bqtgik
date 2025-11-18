import React from 'react'
import { ChevronDown } from 'lucide-react'

function InfoSection({ title, count, children, defaultOpen=false }) {
  const [open, setOpen] = React.useState(defaultOpen)
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <ChevronDown size={16} className={`text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className="text-xs text-gray-500 mb-2">{count}</div>
      {open && <div className="space-y-2">{children}</div>}
    </div>
  )
}

export default function RightInfo() {
  return (
    <div className="w-80 hidden xl:flex flex-col gap-3">
      <InfoSection title="Files" count="265 photos" defaultOpen>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map(i => (
            <img key={i} src={`https://images.unsplash.com/photo-15${20+i}202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop`} className="w-full h-16 object-cover rounded-lg" />
          ))}
        </div>
      </InfoSection>

      <InfoSection title="Members" count="23 members" defaultOpen>
        <div className="space-y-2">
          {[{name:'Alice', tag:'admin', img:1},{name:'Mina', img:3},{name:'You', img:5}].map((m, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={`https://i.pravatar.cc/32?img=${m.img}`} className="w-8 h-8 rounded-full" />
                <div className="text-sm text-gray-900">{m.name}</div>
              </div>
              {m.tag && <span className="text-xs text-[#7B61FF]">{m.tag}</span>}
            </div>
          ))}
        </div>
      </InfoSection>
    </div>
  )
}
