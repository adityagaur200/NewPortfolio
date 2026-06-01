import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { serviceItems } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Build Support Across The Product Stack"
          description="The service cards keep the same futuristic restraint while expanding on hover into concrete outcomes and engineering leverage."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-black/8 bg-white/72 p-6 shadow-card backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,14,215,0.14),transparent_42%,rgba(94,14,215,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/14 bg-accent/6 text-accent transition-transform duration-300 group-hover:scale-105">
                    <service.icon size={24} />
                  </div>
                  <span className="rounded-full border border-black/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/48">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold uppercase tracking-[0.16em] text-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/66">{service.description}</p>

                <div className="mt-6 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-[18px] border border-black/8 bg-white/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/62 transition-all duration-300 group-hover:border-accent/18 group-hover:text-black/78"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
