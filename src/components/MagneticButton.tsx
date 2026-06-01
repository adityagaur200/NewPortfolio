import { type ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'dark' | 'ghost'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  icon?: ReactNode
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-halo hover:shadow-[0_0_70px_rgba(94,14,215,0.45)]',
  secondary:
    'border border-white/35 bg-white/8 text-white hover:border-accent/60 hover:bg-white/12',
  dark:
    'border border-black/10 bg-black text-white hover:bg-accent hover:border-accent',
  ghost:
    'border border-black/10 bg-white text-black hover:border-accent hover:text-accent',
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export default function MagneticButton({
  children,
  href,
  target,
  rel,
  onClick,
  icon,
  variant = 'primary',
  className,
  type = 'button',
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16
    setOffset({ x, y })
  }

  const sharedClassName = joinClasses(
    'group inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300',
    variantClasses[variant],
    className,
  )

  const content = (
    <>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.24), transparent 60%)',
        }}
      />
      <motion.span
        className="relative flex items-center gap-2"
        animate={{ x: offset.x * 0.35, y: offset.y * 0.35 }}
        transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.25 }}
      >
        <span>{children}</span>
        {icon}
      </motion.span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={sharedClassName}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={sharedClassName}
    >
      {content}
    </motion.button>
  )
}
