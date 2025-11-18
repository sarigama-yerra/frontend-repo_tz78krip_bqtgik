import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, LockKeyhole, Eye, EyeOff, ShieldCheck } from 'lucide-react'

const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/60 shadow-[0_0_0_0_rgba(6,182,212,0)] focus:shadow-[0_0_24px_0_rgba(6,182,212,0.35)] transition-all backdrop-blur-sm'

export default function LoginForm() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: would call backend auth endpoint
    alert('Login attempted for ' + email)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md"
    >
      {/* Glass Card */}
      <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(124,58,237,0.25)]">
        {/* Accent border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />

        <div className="relative space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Sign in</h2>
            <p className="text-sm text-white/60 mt-1">Access your secure cockpit</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@aegis.sec"
                  className={`${inputClasses} pl-10`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-white/70 mb-1">Password</label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                <input
                  type={show ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${inputClasses} pl-10 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-3 font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
            >
              <span className="relative z-[1]">Enter the Vault</span>
              <span aria-hidden className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-cyan-500 to-purple-600" />
              <span aria-hidden className="pointer-events-none absolute inset-0 bg-white/10 mix-blend-overlay" />
            </motion.button>
          </form>

          {/* Security Badge */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck size={16} className="text-cyan-400" />
              <span>Zero-Knowledge Architecture</span>
            </div>
            <div className="text-xs text-white/50">v1.0 • The Aegis Protocol</div>
          </div>
        </div>
      </div>

      {/* Glow Rings */}
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-gradient-to-tr from-purple-600 to-cyan-500" />
      </div>
    </motion.div>
  )
}
