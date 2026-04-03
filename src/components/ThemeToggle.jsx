// src/components/ThemeToggle.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useTheme, THEMES } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Theme option cards */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-[rgba(0,0,0,0.07)] p-3 w-[220px]"
          >
            {/* Header */}
            <div className="px-2 pt-1 pb-2.5 border-b border-[#F7F9FC] mb-2">
              <span className="font-mono text-[10px] tracking-[0.16em] text-[#8FA3BF] uppercase">
                Style Variants
              </span>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-1.5">
              {Object.values(THEMES).map((t) => {
                const active = theme === t.id
                return (
                  <button
                    key={t.id}
                    onClick={() => { setTheme(t.id); setOpen(false) }}
                    className="flex items-center gap-3 w-full text-left rounded-xl px-3 py-2.5 transition-colors duration-150"
                    style={{
                      background: active ? 'rgba(27,79,216,0.06)' : 'transparent',
                    }}
                  >
                    {/* Dot */}
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: t.dot }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-[13px] text-[#0B1629] leading-tight">
                        {t.label}
                      </div>
                      <div className="font-mono text-[10px] text-[#8FA3BF] mt-0.5 truncate">
                        {t.description}
                      </div>
                    </div>
                    {active && (
                      <Check size={13} className="text-[#1B4FD8] flex-shrink-0" />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#0B1629] text-white rounded-full px-4 py-2.5
                   shadow-[0_4px_20px_rgba(11,22,41,0.35)] border border-white/10
                   font-mono text-[11px] tracking-[0.12em]"
      >
        <Palette size={13} />
        Themes
      </motion.button>
    </div>
  )
}
