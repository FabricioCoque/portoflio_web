'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FileSearch, FolderOpen, GitMerge, ShoppingCart } from 'lucide-react'
import { projectSlug } from '@/lib/projects'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons = [GitMerge, ShoppingCart, FileSearch]

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="projects-title"
          index="02"
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {p.items.map(({ title, description, metric, stack }, i) => {
            const Icon = icons[i] ?? FolderOpen
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-none border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <span className="font-mono text-xs text-muted-foreground">{`project_0${i + 1}`}</span>
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-balance">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

                  <div className="mt-6 rounded-none border border-border bg-card px-4 py-3">
                    <p className="font-mono text-2xl font-medium tracking-tight text-brand">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={p.stackLabel}>
                    {stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-none bg-brand-soft px-2.5 py-0.5 font-mono text-[11px] font-medium text-brand"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 pt-8">
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-none bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      {p.viewCode}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">{p.viewCodeSr(title)}</span>
                    </a>
                    <Link
                      href={`/projects/${projectSlug(i)}`}
                      className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-none border border-border bg-card px-3 text-sm font-medium transition-colors hover:border-foreground/30"
                    >
                      {p.caseStudy}
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">{`: ${title}`}</span>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
