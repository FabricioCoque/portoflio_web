'use client'

import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-60"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-border bg-card px-3 py-1 text-xs font-medium shadow-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {h.badge}
          </div>

          <h1
            id="hero-title"
            className="text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            {h.titleLead} <span className="text-brand">{h.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">{h.bio(site.name)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              {h.ctaProjects}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium transition-colors hover:border-foreground/30"
            >
              {h.ctaContact}
              <ArrowUpRight
                className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <dl className="mt-12 grid w-full max-w-xl grid-cols-3 divide-x divide-border border-y border-border">
            {h.metrics.map((m) => (
              <div key={m.value} className="flex flex-col gap-1 px-3 py-4 first:pl-0">
                <dt className="order-2 text-xs leading-snug text-muted-foreground">{m.label}</dt>
                <dd className="order-1 font-mono text-2xl font-medium tracking-tight">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CodePanel code={h.code} />
      </div>
    </section>
  )
}

function CodePanel({ code }: { code: { comment: string; processed: string; matched: string; flagged: string } }) {
  return (
    <figure className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <figcaption className="font-mono text-xs text-muted-foreground">reconcile.py</figcaption>
        <span className="w-10" aria-hidden="true" />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        <code>
          <span className="text-brand">import</span> pandas <span className="text-brand">as</span> pd{'\n'}
          <span className="text-brand">from</span> pipeline <span className="text-brand">import</span> load, match
          {'\n\n'}
          bank = load(<span className="text-success">{'"bank_statements"'}</span>){'\n'}
          ledger = load(<span className="text-success">{'"general_ledger"'}</span>){'\n\n'}
          result = match(bank, ledger,{'\n'}
          {'    '}keys=[<span className="text-success">{'"amount"'}</span>,{' '}
          <span className="text-success">{'"date"'}</span>],{'\n'}
          {'    '}tolerance=<span className="text-brand">0.01</span>){'\n'}
          <span className="text-muted-foreground">{code.comment}</span>
        </code>
      </pre>
      <div className="border-t border-border bg-background/60 px-5 py-4 font-mono text-xs leading-6">
        <p className="text-muted-foreground">
          <Check className="inline size-3.5 -translate-y-px text-success" aria-hidden="true" /> {code.processed}
        </p>
        <p className="text-muted-foreground">
          <Check className="inline size-3.5 -translate-y-px text-success" aria-hidden="true" /> {code.matched}{' '}
          <span className="text-foreground">(99.7%)</span>
        </p>
        <p className="text-muted-foreground">
          <span className="text-brand">→</span> {code.flagged}
        </p>
      </div>
    </figure>
  )
}
