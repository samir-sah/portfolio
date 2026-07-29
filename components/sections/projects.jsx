'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, ImageReveal } from '@/components/motion'
import { projects } from '@/lib/data'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const reversed = index % 2 === 1

  return (
    <Reveal delay={0.05}>
      <article className="group grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <ImageReveal
          className={`rounded-xl border border-border bg-card ${reversed ? 'md:order-2' : ''}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={`${project.title} interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </ImageReveal>

        <div className={reversed ? 'md:order-1' : ''}>
          <p className="font-serif text-sm italic text-gold">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-foreground text-balance md:text-4xl">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            {expanded ? <Minus size={15} /> : <Plus size={15} />}
            {expanded ? 'Hide highlights' : 'Key highlights'}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="list-none">
                      <span className="inline-block rounded-full bg-card px-3 py-1.5 text-xs text-foreground">
                        {h}
                      </span>
                    </li>
                  ))}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Live Demo
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
      <SectionHeading
        index="03"
        label="Projects"
        title="Selected Work"
        description="Production-oriented systems built with attention to architecture, reliability, and detail."
      />
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
