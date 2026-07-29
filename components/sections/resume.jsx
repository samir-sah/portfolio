import { Download, Eye, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { siteConfig } from '@/lib/data'

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
      <SectionHeading index="07" label="Resume" title="Curriculum Vitae" />

      <Reveal>
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <FileText size={20} aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight text-card-foreground md:text-3xl">
              A concise summary of my work, skills, and education.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              View it in your browser or download a copy for later. Updated regularly to reflect
              current experience and projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.resumeUrl}
                download="Samir-Sah-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Eye size={15} aria-hidden="true" />
                View Resume
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-border bg-background/60" />
            <div className="relative flex aspect-[3/4] flex-col rounded-lg border border-border bg-background p-6 shadow-sm">
              <p className="font-serif text-lg font-semibold text-foreground">Samir Sah</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-primary">
                Software Engineer
              </p>
              <div className="mt-5 h-px w-full bg-gold/60" />
              <div className="mt-5 flex flex-col gap-2.5">
                <div className="h-1.5 w-full rounded-full bg-muted" />
                <div className="h-1.5 w-5/6 rounded-full bg-muted" />
                <div className="h-1.5 w-4/6 rounded-full bg-muted" />
              </div>
              <div className="mt-6 h-px w-1/3 bg-border" />
              <div className="mt-4 flex flex-col gap-2.5">
                <div className="h-1.5 w-full rounded-full bg-muted" />
                <div className="h-1.5 w-3/4 rounded-full bg-muted" />
                <div className="h-1.5 w-5/6 rounded-full bg-muted" />
                <div className="h-1.5 w-2/3 rounded-full bg-muted" />
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="h-1.5 w-1/4 rounded-full bg-muted" />
                <span className="font-serif text-xs italic text-gold">SS</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
