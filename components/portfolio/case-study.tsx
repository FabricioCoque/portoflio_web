'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { PROJECT_COUNT, projectSlug, projectSnippets } from '@/lib/projects'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
      <span className="text-brand">{index}</span> <span aria-hidden="true">—</span> {children}
    </p>
  )
}

export function CaseStudy({ index }: { index: number }) {
  const { t } = useLanguage()
  const cs = t.caseStudy
  const project = t.projects.items[index]
  const study = cs.items[index]
  const snippet = projectSnippets[index]
  const prevIndex = (index - 1 + PROJECT_COUNT) % PROJECT_COUNT
  const nextIndex = (index + 1) % PROJECT_COUNT
  const code = `project_0${index + 1}`

  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 md:px-8 md:pt-14 md:pb-20">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground/30"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            {cs.back}
          </Link>

          <p className="mt-12 font-mono text-xs text-muted-foreground">
            {code} <span aria-hidden="true">/</span> {cs.label.toLowerCase()}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-pretty text-muted-foreground md:text-lg">
            {project.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label={t.projects.stackLabel}>
            {project.stack.map((tag) => (
              <li key={tag} className="bg-brand-soft px-2.5 py-1 font-mono text-xs font-medium text-brand">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t.projects.viewCode}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only">{t.contact.newTab}</span>
            </a>
          </div>
        </div>
      </header>

      <section aria-labelledby="problem-title" className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:px-8 md:py-20">
          <div>
            <Eyebrow index="01">{cs.problemEyebrow}</Eyebrow>
            <h2 id="problem-title" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {cs.problemTitle}
            </h2>
          </div>
          <div>
            <p className="leading-relaxed text-pretty text-muted-foreground md:text-lg">{study.problem}</p>
            <ul className="mt-8 flex flex-col border border-border bg-background">
              {study.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-4 border-b border-border px-5 py-4 last:border-b-0">
                  <span className="font-mono text-xs leading-6 text-brand">{`0${i + 1}`}</span>
                  <span className="text-sm leading-6">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="solution-title" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow index="02">{cs.solutionEyebrow}</Eyebrow>
              <h2 id="solution-title" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {cs.solutionTitle}
              </h2>
            </div>
            <p className="leading-relaxed text-pretty text-muted-foreground md:text-lg">{study.solution}</p>
          </div>

          <figure className="mt-12">
            <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {cs.architectureLabel}
            </figcaption>
            <ol className="mt-4 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
              {study.architecture.map((step, i) => (
                <li key={i} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
                  <div className="group flex flex-1 flex-col border border-border bg-card px-4 py-4 transition-colors hover:border-brand">
                    <span className="font-mono text-[11px] text-muted-foreground">{`step_${i + 1}`}</span>
                    <span className="mt-2 text-sm font-semibold tracking-tight">{step.title}</span>
                    <span className="mt-1 font-mono text-xs text-brand">{step.detail}</span>
                  </div>
                  {i < study.architecture.length - 1 ? (
                    <ArrowRight
                      className="mx-auto my-1 size-4 rotate-90 text-muted-foreground lg:mx-2 lg:my-0 lg:rotate-0"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </figure>

          <figure className="mt-12 border border-foreground bg-foreground text-background">
            <figcaption className="flex items-center justify-between border-b border-background/10 px-5 py-3">
              <span className="font-mono text-xs text-background/60">{snippet.file}</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-background/40">
                {cs.codeLabel}
              </span>
            </figcaption>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-background/85">
              <code>{snippet.code}</code>
            </pre>
          </figure>
        </div>
      </section>

      <section aria-labelledby="results-title" className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Eyebrow index="03">{cs.resultsEyebrow}</Eyebrow>
          <h2 id="results-title" className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {cs.resultsTitle}
          </h2>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {study.results.map((result, i) => (
              <div
                key={i}
                className="flex flex-col-reverse border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)]"
              >
                <dt className="mt-2 text-sm text-muted-foreground">{result.label}</dt>
                <dd className="font-mono text-4xl font-medium tracking-tight text-brand">{result.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 flex max-w-3xl gap-3 leading-relaxed text-pretty">
            <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
            {study.outcome}
          </p>
        </div>
      </section>

      <nav aria-label={cs.label} className="border-b border-border">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
          <Link
            href={`/projects/${projectSlug(prevIndex)}`}
            className="group flex flex-col gap-1 border-b border-border px-5 py-8 transition-colors hover:bg-card sm:border-r sm:border-b-0 md:px-8"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              {cs.prev}
            </span>
            <span className="font-medium tracking-tight">{t.projects.items[prevIndex].title}</span>
          </Link>
          <Link
            href={`/projects/${projectSlug(nextIndex)}`}
            className="group flex flex-col items-end gap-1 px-5 py-8 text-right transition-colors hover:bg-card md:px-8"
          >
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              {cs.next}
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
            <span className="font-medium tracking-tight">{t.projects.items[nextIndex].title}</span>
          </Link>
        </div>
      </nav>
    </article>
  )
}
