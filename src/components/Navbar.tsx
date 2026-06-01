import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from './MagneticButton'
import { heroLinks, navItems } from '../data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : previous

    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled
              ? 'border-black/8 bg-white/78 shadow-[0_18px_45px_rgba(8,8,18,0.12)] backdrop-blur-xl'
              : 'border-white/20 bg-white/12 backdrop-blur-md'
          }`}
        >
          <motion.a
            href="#top"
            whileHover={{ scale: 1.04 }}
            className="group relative flex h-11 w-11 items-center justify-center"
          >
            {/* <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-accent/40"
            /> */}
            {/* <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute inset-1 rounded-full border border-accent/25"
            />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-halo">
              AI
            </span> */}
          </motion.a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`group relative text-[11px] font-semibold uppercase tracking-[0.32em] transition-colors ${
                  scrolled ? 'text-black/72 hover:text-accent' : 'text-white/82 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen((value) => !value)}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full  text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition-colors hover:bg-accent"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -18 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 18 }}
                transition={{ duration: 0.22 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black/62 backdrop-blur-2xl"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden px-6 pb-8 pt-28 sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,14,215,0.24),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_50%_90%,rgba(94,14,215,0.16),transparent_28%)]" />

              <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
                {navItems.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-white"
                  >
                    <span className="text-3xl font-semibold uppercase tracking-[0.24em] sm:text-5xl lg:text-6xl">
                      {link.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.36em] text-white/48 transition-colors group-hover:text-accent">
                      Section
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl lg:flex-row lg:items-center"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                    Let&apos;s build the next system
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                    Backend infrastructure, AI workflows, and polished product surfaces designed as one coherent delivery.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div onClick={() => setIsOpen(false)}>
                    <MagneticButton href={heroLinks.projects}>
                      View Projects
                    </MagneticButton>
                  </div>
                  <div onClick={() => setIsOpen(false)}>
                    <MagneticButton href={heroLinks.contact} variant="secondary">
                      Contact
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
