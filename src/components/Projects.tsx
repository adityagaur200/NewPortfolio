import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import MagneticButton from './MagneticButton'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
  eyebrow="Projects"
  title="Systems I’ve Engineered"
description="Building modern digital systems where intelligence, performance, and design move together."/>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
             
              className="group relative cursor-pointer overflow-hidden rounded-[34px] border border-black/8 bg-white/72 p-5 shadow-card backdrop-blur-xl"
            >
              

              <div className="pointer-events-none relative z-20">
               
                <div className="mt-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
                        {project.eyebrow}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.16em] text-black">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-black/66">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-accent/12 bg-accent/6 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                 

                  <div className="pointer-events-auto mt-6 flex flex-wrap gap-3">
                    <div onClick={(event) => event.stopPropagation()}>
                      <MagneticButton
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        variant="ghost"
                        icon={<FaGithub size={15} />}
                        className="px-4 py-2 text-[10px]"
                      >
                        GitHub
                      </MagneticButton>
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      
    </section>
  )
}
