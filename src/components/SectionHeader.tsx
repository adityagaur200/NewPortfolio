import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div className={centered ? 'flex justify-center' : 'flex'}>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 text-4xl font-semibold uppercase tracking-[0.18em] text-black md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-black/68 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
