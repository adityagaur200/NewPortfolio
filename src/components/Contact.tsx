import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { contactHighlights, contactLinks } from '../data/portfolio'

export default function Contact() {
  const emailLink = contactLinks.find((item) => item.href.startsWith('mailto:'))?.href

  return (
    <section id="contact" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great together"
          
        />

        <div className="mt-10 px-0 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full overflow-hidden rounded-none md:rounded-[34px] border border-black/8 bg-gradient-to-br from-[#071022] via-[#071427] to-[#04101a] p-6 md:p-8 text-white shadow-[0_35px_80px_rgba(6,6,12,0.24)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-white/2 to-black/30 opacity-60" />
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Reach out
              </p>
              <h3 className="mt-5 text-3xl font-semibold uppercase tracking-[0.18em]">
                Project-ready communication
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/68">
                For freelance builds, architecture support, AI product work, or backend-heavy MVP delivery.
              </p>

              <div className="mt-8 space-y-3">
                {contactHighlights.map((highlight) => (
                  <div
                  key={highlight}
                  className="inline-flex rounded-[20px] border border-white/10 bg-white/8 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72"
                  >
                  {highlight}
              </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/6 p-4 transition-transform hover:scale-[1.02] hover:border-accent/35"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/10 to-white/4 text-accent">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-medium text-white/82">{item.value}</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-white/38" />
                  </a>
                ))}

                {emailLink && (
                  <div className="mt-4">
                    <a
                      href={emailLink}
                      className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
                    >
                      Send a message
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
