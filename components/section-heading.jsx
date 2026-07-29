import { Reveal } from '@/components/motion'

export function SectionHeading({ index, label, title, description }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-sm italic text-gold">{index}</span>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      <h2 className="mt-6 font-serif text-3xl font-medium tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  )
}
