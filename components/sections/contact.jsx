'use client'

import { useState } from 'react'
import { Mail, Phone, Code2, Copy, Check, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { siteConfig } from '@/lib/data'

function CopyRow({ icon: Icon, label, value, copyValue }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyValue || value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <div className="group flex items-center justify-between border-b border-border py-4 transition-colors duration-300 hover:border-primary">
      <div className="flex min-w-0 items-center gap-4">
        <Icon size={16} className="shrink-0 text-gold" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
          <p className="truncate text-sm text-foreground">{value}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? `${label} copied` : `Copy ${label}`}
        className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground opacity-60 transition-all duration-300 hover:border-primary hover:text-primary group-hover:opacity-100"
      >
        {copied ? <Check size={13} className="text-primary" /> : <Copy size={13} />}
      </button>
    </div>
  )
}

function SocialRow({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-border py-4 transition-colors duration-300 hover:border-primary"
    >
      <div className="flex items-center gap-4">
        <Icon size={16} className="text-gold" aria-hidden="true" />
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <ArrowUpRight
        size={15}
        className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        aria-hidden="true"
      />
    </a>
  )
}

export function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const message = data.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${data.get('email')})`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <SectionHeading
          index="08"
          label="Contact"
          title="Let&apos;s Work Together"
          description="Open to software engineering roles, internships, and interesting projects."
        />

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="flex flex-col">
              <CopyRow icon={Mail} label="Email" value={siteConfig.email} />
              <CopyRow icon={Phone} label="Phone" value={siteConfig.phone} />
              <SocialRow icon={GithubIcon} label="GitHub" href={siteConfig.links.github} />
              <SocialRow icon={LinkedinIcon} label="LinkedIn" href={siteConfig.links.linkedin} />
              <SocialRow icon={Code2} label="LeetCode" href={siteConfig.links.leetcode} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="Tell me about your project or opportunity"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {status === 'sent' ? 'Opening your mail app…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
