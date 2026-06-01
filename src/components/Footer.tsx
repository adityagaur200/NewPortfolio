import { motion } from 'framer-motion'
import { socialLinks } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[36px] border border-white/10 bg-white/6 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

            <div className="flex flex-col gap-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/45">
                Connect
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    whileHover={{ y: -3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/74 transition-colors hover:border-accent/40 hover:text-white"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="mt-8 flex flex-col gap-3 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} AI Engineer Portfolio. All rights reserved.</p>
            <p>
              Built with <span className="text-accent">React</span> & <span className="text-accent">Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
