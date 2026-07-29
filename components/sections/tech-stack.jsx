import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion'
import { techStack } from '@/lib/data'

export function TechStack() {
  return (
    <section id="stack" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <SectionHeading
          index="04"
          label="Tech Stack"
          title="Tools of the Trade"
          description="Technologies I use to design, build, and ship reliable software."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <StaggerItem key={group.category}>
              <div className="h-full rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm italic text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-foreground">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
