'use client'

import Image from 'next/image'
import perfil from '@/public/images/perfil.jpg'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

export function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-foreground text-background"
    >
      {/* Línea divisoria: solo el ancho del contenido */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border-t-[0.5px] border-[#1D9BF0]/60" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="about-title" index="03" eyebrow={a.eyebrow} title={a.title} tone="dark" />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-5 leading-relaxed text-background/70">
            <Image
              src={perfil}
              alt={site.name}
              className="size-36 self-center rounded-full border border-background/15 object-cover object-top sm:size-40"
            />
            {a.paragraphs.map((text, i) => (
              <p key={i} className="text-pretty">
                {text}
              </p>
            ))}
          </div>

          <ol className="relative flex flex-col gap-8 border-l border-background/15 pl-8">
            {a.timeline.map((item, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[37px] size-2.5 rounded-full border-2 border-foreground bg-background ring-1 ring-background/30"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-background/50">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-background">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
