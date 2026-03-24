// src/components/ui/InteractiveGradient.jsx
import React, { useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const InteractiveGradient = ({ className = "" }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring config for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to viewport
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      
      mouseX.set(moveX)
      mouseY.set(moveY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary Blob */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
      />
      
      {/* Secondary Blob (Moving faster/slower for parallax effect) */}
      <motion.div
        style={{
          x: useSpring(mouseX, { damping: 30, stiffness: 100 }),
          y: useSpring(mouseY, { damping: 30, stiffness: 100 }),
        }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"
      />

      {/* Tertiary Blob (Opposite movement) */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(0), springConfig), // Placeholder for separate logic if needed
          y: useSpring(useMotionValue(0), springConfig),
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[110px]"
      />

      {/* Subtle Grid Overlay (Optional but adds tech feel) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  )
}

export default InteractiveGradient
