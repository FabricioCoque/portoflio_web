'use client'

import Link from 'next/link'
import {
  BarChart3,
  ChevronRight,
  FileSearch,
  FolderOpen,
  GitMerge,
  Landmark,
  ShoppingCart,
  Wallet,
} from 'lucide-react'
import { projectLinks, projectSlug } from '@/lib/projects'
import { useLanguage } from './language-provider'
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
        {/* Encabezado: título grande y descripción arriba; debajo, la línea con la etiqueta */}
        <div className="mb-10 md:mb-14">
          <h2
            id="projects-title"
            className="max-w-xl text-3xl leading-tight font-semibold tracking-tight text-balance text-background md:text-5xl"
          >
            {p.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-background/60 md:text-base">
            {p.description}
          </p>
          <div className="mt-8 border-t border-background/15 pt-3 md:mt-10">
            <span className="font-mono text-xs uppercase tracking-widest text-background/60">{p.eyebrow}</span>
          </div>
        </div>

        {/* Rejilla limpia: sin bordes laterales exteriores, usando separación de 1px con el color del borde */}
        <div className="grid grid-cols-1 gap-[1px] bg-[#D5DBDF] lg:grid-cols-2">
          {p.items.map(({ title, description, stack }, i) => {
            const Icon = icons[i] ?? FolderOpen
            const repo = projectLinks[i]?.repo
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden bg-background p-6 text-foreground transition-colors duration-200 hover:bg-muted md:p-8 lg:min-h-[22rem]"
              >
                <div className="mb-6 flex items-center justify-start border-b border-border pb-4">
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-balance transition-colors group-hover:text-brand md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted-foreground md:text-sm">{description}</p>

                  <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={p.stackLabel}>
                    {stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-none bg-brand-soft px-2.5 py-0.5 font-mono text-[10px] font-medium text-brand"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                    {repo ? (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex h-10 items-center justify-center rounded-none bg-accent px-5 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
                      >
                        {p.viewCode}
                        <span className="sr-only">{p.viewCodeSr(title)}</span>
                      </a>
                    ) : null}
                    <Link
                      href={`/projects/${projectSlug(i)}`}
                      className="inline-flex h-10 items-center justify-center gap-4 rounded-none border border-foreground bg-transparent px-5 font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground transition-colors after:absolute after:inset-0 hover:bg-foreground/5"
                    >
                      {p.caseStudy}
                      <ChevronRight className="size-3.5" aria-hidden="true" />
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
