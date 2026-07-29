import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <SectionHeading index="02" label="Experience" title="Where I&apos;ve Worked" />

        <ol className="relative border-l border-border pl-8 md:pl-12">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-4">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:-left-[53px]"
              />
              <Reveal>
                <p className="font-serif text-sm italic text-gold">{job.period}</p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} aria-hidden="true" />
                  {job.location}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                  {job.description}
                </p>
              </Reveal>
              <Stagger className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-2" delayChildren={0.15}>
                {job.points.map((point) => (
                  <StaggerItem key={point}>
                    <div className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-colors duration-300 hover:border-primary/50">
                      <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span className="text-sm leading-relaxed text-foreground">{point}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
