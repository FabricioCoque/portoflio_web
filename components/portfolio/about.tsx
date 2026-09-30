'use client'

import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="about-title" index="03" eyebrow={a.eyebrow} title={a.title} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
            {a.paragraphs.map((text, i) => (
              <p key={i} className="text-pretty">
                {text}
              </p>
            ))}
            <dl className="mt-4 overflow-hidden rounded-xl border border-border bg-card font-mono text-sm">
              {a.principles.map((p) => (
                <div
                  key={p.k}
                  className="flex flex-col gap-1 border-b border-border px-5 py-3 last:border-b-0 sm:flex-row sm:gap-4"
                >
                  <dt className="w-24 shrink-0 text-brand">{p.k}:</dt>
                  <dd className="text-foreground/80">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
            {a.timeline.map((item, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[37px] size-2.5 rounded-full border-2 border-background bg-foreground ring-1 ring-border"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
