'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { siteConfig } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1]

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: 'LeetCode', href: siteConfig.links.leetcode, icon: Code2 },
  { label: 'Email', href: siteConfig.links.email, icon: Mail },
]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_75%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-14 lg:gap-20">
          {/* Left — Text content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="mb-6 flex flex-wrap items-center gap-4"
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Software Engineer
              </span>
              <span aria-hidden="true" className="hidden h-px w-12 bg-gold sm:block" />
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="text-3xl font-semibold leading-snug tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
            >
              Hi, I&apos;m Samir Sah.
              <br />
              <span className="text-muted-foreground">I build software that scales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty"
            >
              Final-year Information Science student passionate about backend systems,
              modern web apps, and production-grade engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: EASE }}
              className="mt-10 flex items-center gap-5"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
              <span aria-hidden="true" className="h-px flex-1 max-w-24 bg-border" />
              <span className="text-xs tracking-wide text-muted-foreground">{siteConfig.location}</span>
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            className="md:col-span-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          >
            <div className="relative w-full max-w-xs md:max-w-none">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-gold/30" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-foreground/5">
                <Image
                  src="/images/profile.jpg"
                  alt="Samir Sah"
                  width={480}
                  height={600}
                  sizes="(max-width: 768px) 320px, 400px"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="text-muted-foreground/60"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
