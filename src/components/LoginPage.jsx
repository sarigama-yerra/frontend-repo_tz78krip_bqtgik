import React from 'react'
import { motion } from 'framer-motion'
import BackgroundFX from './BackgroundFX'
import AegisLogo from './AegisLogo'
import SecurityBadge from './SecurityBadge'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFX />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left: Brand + Copy */}
          <div className="text-center lg:text-left space-y-6">
            <AegisLogo size={56} />
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              Project Aegis
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/70 max-w-md"
            >
              High-security messaging with zero-knowledge encryption, built for operatives who demand absolute discretion.
            </motion.p>
            <SecurityBadge />
          </div>

          {/* Right: Login Card */}
          <LoginForm />
        </motion.div>
      </div>

      {/* Bottom gradient edge for depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-transparent" />
    </div>
  )
}
