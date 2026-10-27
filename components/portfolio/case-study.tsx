'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Plus } from 'lucide-react'
import { PROJECT_COUNT, projectLinks, projectSlug, projectSnippets } from '@/lib/projects'
import { useLanguage } from './language-provider'

// Acepta el enlace completo de YouTube (youtu.be/..., watch?v=..., embed/...) o solo el identificador
function youtubeId(value: string): string {
  const match = value.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/)
  return match ? match[1] : value.trim()
}

const pad = (n: number) => String(n).padStart(2, '0')

export function CaseStudy({ index }: { index: number }) {
  const { t } = useLanguage()
  const cs = t.caseStudy
  const project = t.projects.items[index]
  const study = cs.items[index]
  const snippet = projectSnippets[index]
  const links = projectLinks[index] ?? {}
  const prevIndex = (index - 1 + PROJECT_COUNT) % PROJECT_COUNT
  const nextIndex = (index + 1) % PROJECT_COUNT
  const code = `project_${pad(index + 1)}`

  const sections = [
    { id: 'problem', label: cs.problemEyebrow },
    { id: 'solution', label: cs.solutionEyebrow },
    { id: 'results', label: cs.resultsEyebrow },
  ]
  const [active, setActive] = useState(sections[0].id)

  // Resalta en el índice la sección que se está leyendo
  useEffect(() => {
    const ids = ['problem', 'solution', 'results']
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [index])

  return (
    <article className="mx-auto max-w-6xl px-5 pt-10 pb-20 md:px-8 md:pt-14 md:pb-28">
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground/30"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
        {cs.back}
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        {/* Barra lateral: índice "En esta página" para navegar por las secciones */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="border-y border-border px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground">
              {cs.onThisPage}
            </p>
            <nav aria-label={cs.onThisPage} className="mt-2">
              <ul className="flex flex-col gap-1">
                {sections.map((section) => {
                  const current = section.id === active
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={current ? 'location' : undefined}
                        className={`block px-4 py-2.5 text-sm leading-snug transition-colors ${
                          current
                            ? 'bg-accent/10 font-medium text-accent'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {section.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Encabezado del proyecto */}
          <header>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{pad(index + 1)}</span> / {pad(PROJECT_COUNT)}
              <span aria-hidden="true"> — </span>
              {code} <span aria-hidden="true">/</span> {cs.label.toLowerCase()}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/75 md:text-xl">
              {study.summary ?? project.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-1.5" aria-label={t.projects.stackLabel}>
              {project.stack.map((tag) => (
                <li key={tag} className="bg-brand-soft px-2.5 py-1 font-mono text-xs font-medium text-brand">
                  {tag}
                </li>
              ))}
            </ul>

            {links.repo ? (
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-1.5 bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  {t.projects.viewCode}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{t.contact.newTab}</span>
                </a>
              </div>
            ) : null}
          </header>

          {/* 01 · Problema */}
          <section id="problem" aria-labelledby="problem-title" className="mt-16 scroll-mt-28 border-t border-border pt-10">
            <h2 id="problem-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {cs.problemTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-foreground/80 md:text-[17px]">{study.problem}</p>
            <ul className="mt-8 max-w-2xl border-y border-accent/50">
              {study.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 border-b border-dashed border-accent/50 py-4 last:border-b-0"
                >
                  <Plus className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[15px] leading-6">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 02 · Solución */}
          <section id="solution" aria-labelledby="solution-title" className="mt-16 scroll-mt-28 border-t border-border pt-10">
            <h2 id="solution-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {cs.solutionTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-foreground/80 md:text-[17px]">{study.solution}</p>

            <figure className="mt-10">
              <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {cs.architectureLabel}
              </figcaption>
              <ol className="mt-4 flex flex-col gap-2 xl:flex-row xl:items-stretch xl:gap-0">
                {study.architecture.map((step, i) => (
                  <li key={i} className="flex flex-col xl:flex-1 xl:flex-row xl:items-center">
                    <div className="group flex flex-1 flex-col border border-border bg-card px-4 py-4 transition-colors hover:border-accent">
                      <span className="font-mono text-xs text-muted-foreground">{`step_${i + 1}`}</span>
                      <span className="mt-2 text-[15px] font-semibold tracking-tight">{step.title}</span>
                      <span className="mt-1 font-mono text-xs text-accent">{step.detail}</span>
                    </div>
                    {i < study.architecture.length - 1 ? (
                      <ArrowRight
                        className="mx-auto my-1 size-4 rotate-90 text-muted-foreground xl:mx-2 xl:my-0 xl:rotate-0"
                        aria-hidden="true"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </figure>

            {/* Subsecciones de la solución (opcionales): título, texto y lista de puntos */}
            {study.details && study.details.length > 0 ? (
              <div className="mt-12 flex flex-col gap-10">
                {study.details.map((detail, i) => (
                  <div key={i} className="max-w-2xl border-t border-border pt-6">
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">{detail.title}</h3>
                    <p className="mt-3 text-base leading-7 text-pretty text-foreground/80 md:text-[17px]">{detail.body}</p>
                    {detail.bullets && detail.bullets.length > 0 ? (
                      <ul className="mt-4 flex flex-col gap-2.5">
                        {detail.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-[15px] leading-relaxed">
                            <span aria-hidden="true" className="mt-[0.45rem] size-1.5 shrink-0 bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}

            {links.video ? (
              <figure className="mt-10 border border-border bg-card">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId(links.video)}?rel=0`}
                    title={project.title}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="size-full"
                  />
                </div>
              </figure>
            ) : links.dashboard ? (
              <figure className="mt-10 border border-border bg-card">
                <div className="h-[480px] w-full sm:aspect-video sm:h-auto">
                  <iframe
                    src={links.dashboard}
                    title={project.title}
                    loading="lazy"
                    allowFullScreen
                    className="size-full"
                  />
                </div>
              </figure>
            ) : (
              <figure className="mt-10 border border-foreground bg-foreground text-background">
                <figcaption className="flex items-center justify-between border-b border-background/10 px-5 py-3">
                  <span className="font-mono text-xs text-background/60">{snippet.file}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-background/40">
                    {cs.codeLabel}
                  </span>
                </figcaption>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-background/85">
                  <code>{snippet.code}</code>
                </pre>
              </figure>
            )}
          </section>

          {/* 03 · Resultados */}
          <section id="results" aria-labelledby="results-title" className="mt-16 scroll-mt-28 border-t border-border pt-10">
            <h2 id="results-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {cs.resultsTitle}
            </h2>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {study.results.map((result, i) => (
                <div
                  key={i}
                  className="flex flex-col-reverse border border-border bg-card p-6 transition-colors duration-300 hover:border-accent"
                >
                  <dt className="mt-2 text-sm text-muted-foreground">{result.label}</dt>
                  <dd className="font-mono text-4xl font-medium tracking-tight text-accent tabular-nums">{result.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 flex max-w-2xl gap-3 text-base leading-7 text-pretty md:text-[17px]">
              <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
              {study.outcome}
            </p>
          </section>

          {/* Navegación al proyecto anterior / siguiente */}
          <nav aria-label={cs.label} className="mt-20 grid border-y border-border sm:grid-cols-2">
            <Link
              href={`/projects/${projectSlug(prevIndex)}`}
              className="group flex flex-col gap-1 border-b border-border px-5 py-7 transition-colors hover:bg-card sm:border-r sm:border-b-0"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                {cs.prev}
              </span>
              <span className="font-medium tracking-tight">{t.projects.items[prevIndex].title}</span>
            </Link>
            <Link
              href={`/projects/${projectSlug(nextIndex)}`}
              className="group flex flex-col items-end gap-1 px-5 py-7 text-right transition-colors hover:bg-card"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {cs.next}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="font-medium tracking-tight">{t.projects.items[nextIndex].title}</span>
            </Link>
          </nav>
        </div>
      </div>
    </article>
  )
}
