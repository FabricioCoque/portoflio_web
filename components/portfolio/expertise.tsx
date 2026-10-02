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
      className="border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="expertise-title"
          index="01"
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
          tone="dark"
        />

        {/* Contenedor de la rejilla unida sin espacios */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-background/15 bg-background/15 gap-[1px]">
          {e.categories.map(({ title, description, skills }, i) => {
            const { icon: Icon, code } = visuals[i]
            return (
              <article
                key={code}
                className="group flex flex-col bg-foreground p-8 transition-colors duration-200 hover:bg-background/[0.03]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-background/15 bg-background/5 transition-colors group-hover:border-[#5aa3ea]/40 group-hover:bg-[#5aa3ea]/10">
                    <Icon
                      className="size-5 text-background transition-colors group-hover:text-[#5aa3ea]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-mono text-xs text-background/50">{code}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-background">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={`${title} ${e.skillsSuffix}`}>
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-background/15 bg-background/5 px-2 py-1 font-mono text-xs text-background/90"
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
