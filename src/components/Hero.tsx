import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import MagneticButton from './MagneticButton'
import { heroLinks, heroStats, heroWords } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)] [will-change:transform]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent,rgba(0,0,0,0.58)_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/72" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="grain absolute inset-0 opacity-50" />
      </div>

      <div className="absolute inset-x-0 top-[20%] mx-auto hidden max-w-7xl px-8 2xl:block">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-[220px] rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur-xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
            Systems Focus
          </p>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Backend architecture, AI retrieval systems, and realtime product delivery with modern frontend polish.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.16, delayChildren: 0.22 },
            },
          }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.38em] text-white/56"
          >
            Java Full Stack Engineer / AI Systems Builder
          </motion.p>

          {heroWords.map((word) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: '110%' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-[14vw] font-semibold uppercase leading-[0.9] tracking-[0.2em] text-white sm:text-[10vw] md:text-[8vw] lg:text-[5rem] xl:text-[6rem]"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-white/76 sm:text-base md:text-lg"
        >
          Java Full Stack Engineer building scalable backend systems, AI-powered applications,
          real-time communication systems, and modern frontend experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href={heroLinks.projects}
            icon={<ArrowRight size={16} />}
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            href="https://drive.google.com/file/d/1dqZ9mAE0UY1iDwlm4XX9Ru_O0kIlZh7T/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            icon={<ArrowUpRight size={16} />}
            variant="secondary"
          >
            Resume
          </MagneticButton>
          <MagneticButton href={heroLinks.contact} variant="secondary">
            Contact
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 grid w-full max-w-5xl gap-4 md:grid-cols-3"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 + index * 0.1, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-white/14 bg-white/10 p-6 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="text-3xl font-semibold uppercase tracking-[0.16em] md:text-4xl">
                <span className="text-accent">+</span>
                {stat.value.replace('+', '')}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/78">
                {stat.label}
              </p>
              <p className="mt-3 text-xs leading-6 text-white/48">{stat.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex items-center gap-3"
        >
          <a
            href={heroLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/72 backdrop-blur-lg transition-colors hover:border-accent/60 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={heroLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/72 backdrop-blur-lg transition-colors hover:border-accent/60 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
        </motion.div>
      </div>

      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/28 p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div> */}
    </section>
  )
}
