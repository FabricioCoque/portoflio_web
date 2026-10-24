'use client'

import Link from 'next/link'
import {
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
import GhostFibers from './GhostFibers'

const icons = [GitMerge, ShoppingCart, FileSearch, Landmark, BarChart3, Wallet]

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* Fondo animado (WebGL) detrás de la sección. Solo en pantallas medianas o más grandes; no intercepta clics */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden opacity-50 md:block">
        <GhostFibers
          glowColor="#1D9BF0"
          secondaryColor="#5aa3ea"
          layers={2}
          threads={44}
          density={0.7}
          particles={0.25}
          fiberStyle="dots"
          depthOfField={0.6}
          hoverEffect="focus"
          glow={0.7}
          brightness={0.9}
          pulseOnClick={false}
          dpr={1}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="projects-title"
          index="02"
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
          tone="dark"
        />

        {/* Rejilla limpia: sin bordes laterales exteriores, usando separación de 1px con el color del borde */}
        <div className="grid grid-cols-1 gap-[1px] bg-[#D5DBDF] lg:grid-cols-2">
          {p.items.map(({ title, description, stack }, i) => {
            const Icon = icons[i] ?? FolderOpen
            const repo = projectLinks[i]?.repo
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden bg-background p-6 text-foreground transition-colors duration-200 hover:bg-muted md:p-8"
              >
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground">{`project_0${i + 1}`}</span>
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance transition-colors group-hover:text-brand md:text-2xl">
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
                        className="relative z-10 inline-flex h-10 flex-1 items-center justify-center rounded-none bg-accent px-5 font-mono text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
                      >
                        {p.viewCode}
                        <span className="sr-only">{p.viewCodeSr(title)}</span>
                      </a>
                    ) : null}
                    <Link
                      href={`/projects/${projectSlug(i)}`}
                      className="inline-flex h-10 flex-1 items-center justify-center rounded-none border border-border bg-card px-5 font-mono text-xs font-medium uppercase tracking-widest transition-colors after:absolute after:inset-0 hover:border-foreground/30"
                    >
                      {p.caseStudy}
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
