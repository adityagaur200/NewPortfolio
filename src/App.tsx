import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.08,
    })

    let animationFrame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      animationFrame = window.requestAnimationFrame(raf)
    }

    animationFrame = window.requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-paper text-black"
    >
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_10%_15%,rgba(94,14,215,0.08),transparent_20%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.8),transparent_16%),radial-gradient(circle_at_50%_80%,rgba(94,14,215,0.1),transparent_26%)]" />
      <div className="grain pointer-events-none fixed inset-0 z-[1] opacity-40" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-black/10 to-transparent" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        {/* <Experience /> */}
        {/* <Services /> */}
        <Contact />
      </main>

      {/* <Footer /> */}
    </motion.div>
  )
}
