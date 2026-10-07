'use client'

import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  FileSearch,
  FolderOpen,
  GitMerge,
  Landmark,
  ShoppingCart,
  Wallet,
} from 'lucide-react'
import { projectLinks, projectSlug } from '@/lib/projects'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons = [GitMerge, ShoppingCart, FileSearch, Landmark, BarChart3, Wallet]

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="projects-title"
          index="02"
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-border bg-border gap-[1px]">
          {p.items.map(({ title, description, stack }, i) => {
            const Icon = icons[i] ?? FolderOpen
            const repo = projectLinks[i]?.repo
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden bg-card p-6 transition-colors duration-200 hover:bg-muted/50 md:p-8"
              >
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground">{`project_0${i + 1}`}</span>
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance transition-colors group-hover:text-brand md:text-2xl text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>

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
                    {repo ? (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-none bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      >
                        {p.viewCode}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">{p.viewCodeSr(title)}</span>
                      </a>
                    ) : null}
                    <Link
                      href={`/projects/${projectSlug(i)}`}
                      className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-none border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors after:absolute after:inset-0 hover:border-foreground/30"
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
