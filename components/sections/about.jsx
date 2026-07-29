import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { interests } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
      <SectionHeading index="01" label="About" title="About Me" />

      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground text-pretty">
              I&apos;m Samir Sah, a final-year Information Science student and Software Engineer
              passionate about building production-grade software systems.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              I enjoy designing scalable backend architectures, building reliable REST APIs,
              creating clean frontend experiences, and understanding how software works beneath
              the surface.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              Outside software, I enjoy solving Data Structures &amp; Algorithms problems, playing
              badminton, and continuously improving my engineering skills.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal delay={0.15}>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Interests
            </h3>
          </Reveal>
          <Stagger className="mt-6 flex flex-col" delayChildren={0.2}>
            {interests.map((interest, i) => (
              <StaggerItem key={interest}>
                <div className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors duration-300 hover:border-primary">
                  <span className="font-serif text-sm italic text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-foreground transition-transform duration-300 group-hover:translate-x-1">
                    {interest}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
