import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion'
import { achievements } from '@/lib/data'

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
      <SectionHeading index="05" label="Achievements" title="Milestones" />

      <ol className="relative border-l border-border">
        {achievements.map((item, i) => (
          <li key={item.title} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-gold bg-background"
            />
            <Reveal delay={i * 0.05}>
              <p className="font-serif text-sm italic text-gold">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium tracking-tight text-foreground text-balance md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.detail}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
