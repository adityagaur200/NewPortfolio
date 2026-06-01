import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'
import { marqueeItems, skillCategories } from '../data/portfolio'

export default function Skills() {
  const duplicatedMarquee = [...marqueeItems, ...marqueeItems]

  return (
    <section id="skills" className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Expertise"
          title="Interactive Skill Architecture"
          description="Each capability is presented like part of the same motion system: cinematic surfaces, glow edges, hover depth, and a clean technical narrative."
        />

        <div className="mt-12 overflow-hidden rounded-full border border-black/8 bg-white/70 py-3 shadow-card backdrop-blur-xl">
          <div className="marquee-track flex min-w-max gap-4 px-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/70">
            {duplicatedMarquee.map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-accent/12 bg-accent/5 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: categoryIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[34px] border border-black/8 bg-white/70 p-6 shadow-card backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-3 rounded-full border border-accent/12 bg-accent/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                    <category.icon size={16} />
                    {category.title}
                  </span>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-black/68">{category.lead}</p>
                </div>
                <div className="rounded-full border border-black/8 bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white">
                  {category.skills.length} Skills
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <TiltCard
                    key={skill.name}
                    className="skill-tilt group relative overflow-hidden rounded-[28px] border border-black/8 bg-white p-5 shadow-[0_20px_45px_rgba(10,10,18,0.08)]"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4.2 + skillIndex * 0.18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[linear-gradient(135deg,rgba(94,14,215,0.16),transparent_48%,rgba(94,14,215,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/14 bg-accent/6 text-accent">
                          <skill.icon size={22} />
                        </div>
                        <span className="rounded-full border border-black/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/55">
                          {skill.level}
                        </span>
                      </div>
                      <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.26em] text-black">
                        {skill.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-black/64">{skill.description}</p>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-full border border-black/8 bg-black py-3 shadow-[0_26px_60px_rgba(5,5,12,0.14)]">
          <div className="marquee-track-reverse flex min-w-max gap-4 px-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/72">
            {duplicatedMarquee.map((item, index) => (
              <span key={`reverse-${item}-${index}`} className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
