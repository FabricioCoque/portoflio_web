'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import perfil from '@/public/images/perfil.jpg'
import slide1 from '@/public/images/hero/hero-1.jpg'
import slide2 from '@/public/images/hero/hero-2.jpg'
import slide3 from '@/public/images/hero/hero-3.jpg'
import { projectSlug } from '@/lib/projects'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'

// Capturas del hero: imagen y proyecto al que corresponde cada una (0 = proyecto 1, 4 = proyecto 5, 5 = proyecto 6).
// Los nombres que se muestran debajo de cada captura están en lib/i18n.ts (hero.slides), en el mismo orden.
const slides = [
  { image: slide1, project: 0 },
  { image: slide2, project: 4 },
  { image: slide3, project: 5 },
]

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="top" aria-labelledby="hero-title" className="theme-dark relative overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <Image
              src={perfil}
              alt={site.name}
              className="size-14 shrink-0 rounded-full border border-border object-cover object-top"
            />
            <div className="min-w-0">
              <h1 id="hero-title" className="text-base font-semibold tracking-tight">
                {site.name}
              </h1>
              <p className="text-sm text-muted-foreground">{h.subtitle}</p>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            <Highlighted text={h.intro} />
          </p>

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

        </div>

        <Showcase />
      </div>
    </section>
  )
}

// Texto con partes resaltadas: lo que va entre ** ** en lib/i18n.ts se muestra con un marcador de color
function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="box-decoration-clone bg-accent/10 px-1 font-semibold text-foreground">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

// Presentación con fundido suave: cambia sola cada 5 s, se pausa al pasar el mouse o con el teclado,
// y no rota sola si el dispositivo pide reducir el movimiento.
function Showcase() {
  const { t } = useLanguage()
  const h = t.hero
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(query.matches)
    const onChange = () => setReduceMotion(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 5000)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion])

  const current = slides[active]

  return (
    <figure
      className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_40px_-12px_rgba(0,0,0,0.12)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <figcaption className="font-mono text-xs text-muted-foreground">{`Power BI · ${h.slidesNote}`}</figcaption>
        <span className="w-10" aria-hidden="true" />
      </div>

      <div className="relative aspect-video w-full bg-white">
        {slides.map((slide, i) => (
          <Image
            key={i}
            src={slide.image}
            alt={h.slides[i].title}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            priority={i === 0}
            aria-hidden={i !== active}
            className={`object-contain transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <Link
          href={`/projects/${projectSlug(current.project)}`}
          className="group inline-flex min-w-0 items-center gap-1.5 text-sm font-medium"
        >
          <span className="truncate">{h.slides[active].title}</span>
          <ArrowUpRight
            className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <div className="flex shrink-0 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={h.slides[i].title}
              aria-current={i === active ? 'true' : undefined}
              className="flex size-5 items-center justify-center"
            >
              <span className={`size-2 rounded-full transition-colors ${i === active ? 'bg-brand' : 'bg-border'}`} />
            </button>
          ))}
        </div>
      </div>
    </figure>
  )
}
