'use client'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'
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
import thumb1 from '@/public/images/proyectos/proyecto-1.jpg'
import thumb3 from '@/public/images/proyectos/proyecto-3.jpg'
import thumb4 from '@/public/images/proyectos/proyecto-4.jpg'
import thumb5 from '@/public/images/proyectos/proyecto-5.jpg'
import thumb6 from '@/public/images/proyectos/proyecto-6.jpg'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

const icons = [GitMerge, ShoppingCart, FileSearch, Landmark, BarChart3, Wallet]

// Miniatura de cada proyecto, en el mismo orden (1 al 6). null = sin miniatura todavía.
const thumbs: (StaticImageData | null)[] = [thumb1, null, thumb3, thumb4, thumb5, thumb6]

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

        {/* Rejilla unida con bordes compartidos (2 columnas desde 1024 px, 3 filas para los 6 proyectos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-border bg-border gap-[1px]">
          {p.items.map(({ title, description, stack }, i) => {
            const Icon = icons[i] ?? FolderOpen
            const repo = projectLinks[i]?.repo
            const thumb = thumbs[i]
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden bg-background p-6 transition-colors duration-200 hover:bg-muted/50 md:p-8 lg:p-10"
              >
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs text-muted-foreground">{`project_0${i + 1}`}</span>
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" aria-hidden="true" />
                </div>

                {/* Marco panorámico 16:9: la imagen se ajusta dentro sin recortarse */}
                <div className="aspect-video w-full border border-border bg-muted p-3 md:p-4">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt=""
                      className="size-full object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center">
                      <Icon className="size-12 text-muted-foreground/30" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-1 flex-col">
                  <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance md:text-2xl">{title}</h3>
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
                        className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-none bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      >
                        {p.viewCode}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">{p.viewCodeSr(title)}</span>
                      </a>
                    ) : null}
                    <Link
                      href={`/projects/${projectSlug(i)}`}
                      className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-none border border-border bg-card px-3 text-sm font-medium transition-colors hover:border-foreground/30"
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
