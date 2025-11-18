import React from 'react'
import LeftNav from './LeftNav'
import CenterChat from './CenterChat'
import RightInfo from './RightInfo'

export default function DashboardShell() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#D8D8F5' }}>
      <div className="relative w-[1200px] max-w-[92vw] h-[78vh] bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ backgroundImage: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.9), rgba(255,255,255,1))' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(https://uploads-ssl.webflow.com/5fdbd5f1c3f8af6b9f1f86a2/6101cf60cf5b5e2b3c3e6f2d_topo.svg)', opacity: 0.15 }} />
        <div className="relative h-full grid grid-cols-[auto_1fr_auto]">
          <LeftNav />
          <div className="p-5 bg-white">
            <CenterChat />
          </div>
          <div className="p-5 bg-white border-l border-gray-200">
            <RightInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
