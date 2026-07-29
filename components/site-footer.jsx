import { Mail, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { siteConfig } from '@/lib/data'

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: 'LeetCode', href: siteConfig.links.leetcode, icon: Code2 },
  { label: 'Email', href: siteConfig.links.email, icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between lg:px-8">
        <p className="text-sm text-muted-foreground">
          Designed &amp; Built by{' '}
          <span className="font-serif italic text-foreground">Samir Sah</span>
          <span aria-hidden="true" className="mx-2 text-gold">
            ·
          </span>
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon size={17} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
