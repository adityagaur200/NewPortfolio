import { motion } from 'framer-motion'
import type { ProjectData, ProjectSlide } from '../data/portfolio'

interface ProjectVisualProps {
  project: ProjectData
  slide: ProjectSlide
  compact?: boolean
}

export default function ProjectVisual({
  project,
  slide,
  compact = false,
}: ProjectVisualProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/12 ${
        compact ? 'min-h-[240px]' : 'min-h-[420px]'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-black/30" />
      <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

      <div className={`relative z-10 flex h-full flex-col ${compact ? 'p-5' : 'p-8 md:p-10'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
              {project.eyebrow}
            </p>
            <h3 className={`${compact ? 'mt-3 text-xl' : 'mt-4 text-3xl'} font-semibold uppercase tracking-[0.18em] text-white`}>
              {slide.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80"
          >
            AI
          </motion.div>
        </div>

        <p className={`mt-5 max-w-xl ${compact ? 'text-xs leading-6' : 'text-sm leading-7'} text-white/72`}>
          {slide.caption}
        </p>

        <div className={`mt-auto grid ${compact ? 'grid-cols-2 gap-3 pt-8' : 'grid-cols-[1.1fr_0.9fr] gap-4 pt-12'} items-end`}>
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
            <div className="flex items-end gap-2">
              {[42, 64, 56, 78, 96].map((height, index) => (
                <motion.span
                  key={height}
                  initial={{ scaleY: 0.2 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height }}
                  className="w-full origin-bottom rounded-full bg-gradient-to-t from-accent via-[#b388ff] to-white/90"
                />
              ))}
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-white/48">
              System signal strength
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/55">Performance stat</p>
              <p className={`${compact ? 'text-lg' : 'text-2xl'} mt-2 font-semibold uppercase tracking-[0.16em] text-white`}>
                {slide.stat}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {slide.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
