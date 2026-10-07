'use client'

import { BarChart3, Database, Landmark } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const visuals = [
  { icon: Database, code: 'DE' },
  { icon: BarChart3, code: 'BI' },
  { icon: Landmark, code: 'FA' },
]

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="border-t border-border bg-card text-card-foreground"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="expertise-title"
          index="01"
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
        />

        {/* Rejilla con líneas horizontales arriba/abajo y divisores verticales */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-border bg-border gap-[1px]">
          {e.categories.map(({ title, description, skills }, i) => {
            const { icon: Icon, code } = visuals[i]
            return (
              <article
                key={code}
                className="group flex flex-col bg-background p-8 transition-colors duration-200 hover:bg-muted/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon
                      className="size-5 text-foreground transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{code}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${title} ${e.skillsSuffix}`}>
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
