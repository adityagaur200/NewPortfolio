import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { aboutBadges, aboutNarrative } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Story"
          title="Premium Engineering With System-Level Thinking"
          description="The same cinematic energy from the hero carries through here: calm surfaces, sharp hierarchy, and a backend-minded story about scale, clarity, and AI readiness."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {[aboutNarrative.intro, aboutNarrative.focus, aboutNarrative.mindset].map((copy) => (
              <p key={copy} className="max-w-2xl text-base leading-8 text-black/72">
                {copy}
              </p>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Backend architecture mindset',
                'AI engineering with retrieval focus',
                'Realtime systems and event flows',
                'Microservices and cloud delivery',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[24px] border border-black/8 bg-white/70 p-5 shadow-card backdrop-blur-xl"
                >
                  <span className="mt-0.5 rounded-full bg-accent/10 p-2 text-accent">
                    <ChevronRight size={16} />
                  </span>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-black/76">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-8 top-12 h-28 w-28 rounded-full bg-accent/18 blur-3xl" />
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-black/8 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-black/10 bg-black px-6 py-8 text-white shadow-[0_35px_80px_rgba(6,6,12,0.24)] sm:px-8">
              <div className="absolute inset-0 bg-mesh-dark opacity-80" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-15" />

              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                  Engineer Profile
                </p>
                <div className="mt-10 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/12 bg-white/6 shadow-[0_0_70px_rgba(94,14,215,0.22)] backdrop-blur-xl"
                  >
                    <div className="absolute inset-6 rounded-full border border-white/12" />
                    <div className="absolute inset-12 rounded-full border border-accent/20" />
                    <div className="text-center">
                      <span className="text-[10px] uppercase tracking-[0.36em] text-white/46">
                        AI / Systems / Delivery
                      </span>
                      <h3 className="mt-5 text-5xl font-semibold uppercase tracking-[0.22em]">
                        AK
                      </h3>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {aboutBadges.map((badge, index) => (
                    <motion.div
                      key={badge.label}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                      className="rounded-full border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-3">
                        <badge.icon size={18} className="text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/78">
                          {badge.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
                    Current focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Shipping scalable backend services, integrating trustworthy AI retrieval, and crafting premium interfaces that make complex systems feel clean and immediate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
