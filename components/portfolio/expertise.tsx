'use client'

import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="bg-foreground text-background"
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

        {/* Columnas abiertas: una línea arriba y divisores verticales finos entre columnas, sin tarjetas */}
        <div className="grid grid-cols-1 divide-y divide-background/15 border-t border-background/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {e.categories.map(({ title, description, skills }, i) => (
            <article
              key={i}
              className="flex flex-col py-8 md:px-8 md:pt-12 md:pb-4 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="text-lg font-medium tracking-tight text-background">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/60">{description}</p>
              <ul
                className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5"
                aria-label={`${title} ${e.skillsSuffix}`}
              >
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-[11px] font-medium uppercase tracking-widest text-background/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
