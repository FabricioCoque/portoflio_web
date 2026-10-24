'use client'

import { useState } from 'react'
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

        {/* Lista de áreas: la línea bajo el título se resalta en la fila abierta y el contenido se despliega debajo */}
        <ul>
          {e.categories.map(({ title, description, skills }, i) => {
            const isOpen = open === i
            return (
              <li key={i} onMouseEnter={() => setOpen(i)}>
                <h3
                  className={`border-b transition-colors duration-300 ${
                    isOpen ? 'border-background/70' : 'border-background/15'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`expertise-panel-${i}`}
                    onClick={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    className="block w-full py-4 text-left text-2xl font-bold tracking-tight text-background uppercase md:py-5 md:text-4xl"
                  >
                    {title}
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
                      className={`grid gap-6 pt-6 pb-8 transition-opacity duration-500 motion-reduce:transition-none md:grid-cols-2 md:gap-10 md:pb-10 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="max-w-lg text-sm leading-relaxed font-medium text-background/80 md:text-base">
                        {description}
                      </p>
                      <ul
                        className="flex flex-col gap-1.5 text-sm text-background/90 md:text-base"
                        aria-label={`${title} ${e.skillsSuffix}`}
                      >
                        {skills.map((skill) => (
                          <li key={skill}>{skill}</li>
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
