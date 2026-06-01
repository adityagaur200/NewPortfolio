import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const smoothX = useSpring(x, { stiffness: 110, damping: 22, mass: 0.7 })
  const smoothY = useSpring(y, { stiffness: 110, damping: 22, mass: 0.7 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 160)
      y.set(event.clientY - 160)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden lg:block"
      style={{
        background: useMotionTemplate`radial-gradient(320px circle at ${smoothX}px ${smoothY}px, rgba(94,14,215,0.12), transparent 62%)`,
      }}
    />
  )
}
