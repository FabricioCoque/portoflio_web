'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

export function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise
  // Fila abierta: la primera al cargar; cambia al pasar el mouse, al enfocar con teclado o al tocar
  const [open, setOpen] = useState(0)

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="bg-foreground text-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="expertise-title"
          index="01"
          eyebrow={e.eyebrow}
          title={e.title}
          description={e.description}
          tone="dark"
        />

        {/* Acordeón: el contenido se despliega hacia abajo al pasar el mouse sobre el título */}
        <ul className="border-y border-background/15">
          {e.categories.map(({ title, description, skills }, i) => {
            const isOpen = open === i
            return (
              <li
                key={i}
                className="border-b border-background/15 last:border-b-0"
                onMouseEnter={() => setOpen(i)}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`expertise-panel-${i}`}
                    onClick={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    className="group flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-8"
                  >
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span
                      className={`flex-1 text-2xl font-semibold tracking-tight transition-colors duration-300 md:text-4xl ${
                        isOpen ? 'text-background' : 'text-background/45 group-hover:text-background/80'
                      }`}
                    >
                      {title}
                    </span>
                    <Plus
                      className={`size-5 shrink-0 text-background/60 transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? 'rotate-45 text-accent' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={`expertise-panel-${i}`}
                  role="region"
                  aria-label={title}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-8 transition-opacity duration-500 motion-reduce:transition-none md:pb-10 md:pl-[3.25rem] ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="max-w-xl text-sm leading-relaxed text-background/60 md:text-base">{description}</p>
                      <ul
                        className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
                        aria-label={`${title} ${e.skillsSuffix}`}
                      >
                        {skills.map((skill) => (
                          <li
                            key={skill}
                            className="font-mono text-[11px] font-medium uppercase tracking-widest text-background/90"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
