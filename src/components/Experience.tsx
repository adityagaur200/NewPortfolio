import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { experienceItems } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="A Timeline Built Around Systems, Delivery, And AI"
          description="This vertical narrative keeps the same premium motion language while highlighting backend architecture, full-stack shipping, and applied AI exploration."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent/30 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experienceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.78, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid gap-6 sm:grid-cols-2 ${
                  index % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1'
                }`}
              >
                <div className="hidden sm:block" />
                <div className="absolute left-0 top-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent/25 bg-white shadow-halo sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-3 w-3 rounded-full bg-accent" />
                </div>

                <div className="ml-10 rounded-[30px] border border-black/8 bg-white/75 p-6 shadow-card backdrop-blur-xl sm:ml-0">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.16em] text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-black/56">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-black/68">{item.summary}</p>

                  <div className="mt-6 space-y-3">
                    {item.achievements.map((achievement) => (
                      <div key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <p className="text-sm leading-7 text-black/66">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
