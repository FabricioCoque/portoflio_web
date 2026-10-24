'use client'

import { SiPython } from "react-icons/si"
import { Database, BarChart3 } from "lucide-react"
import { useLanguage } from './language-provider'

const technologies = [
  {
    name: "SQL",
    icon: <Database className="h-5 w-5 text-brand" aria-hidden="true" />,
  },
  {
    name: "Power BI",
    icon: <BarChart3 className="h-5 w-5 text-[#F2C811]" aria-hidden="true" />,
  },
  {
    name: "Python",
    icon: <SiPython className="h-5 w-5 text-[#4B8BBE]" aria-hidden="true" />,
  },
]

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section
      id="tecnologias"
      aria-label={t.techStack.eyebrow}
      className="theme-dark bg-background px-5 pt-6 pb-8 text-foreground md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Misma estructura que las otras secciones: línea + etiqueta a la izquierda, tecnologías a la derecha */}
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-10 lg:gap-16">
          <div className="flex h-fit items-center justify-end border-t border-border pt-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-muted-foreground">
              {t.techStack.eyebrow}
            </span>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 md:pt-2">
            {technologies.map((tech) => (
              <li key={tech.name} className="flex items-center gap-2.5">
                {tech.icon}
                <span className="text-base font-medium tracking-tight">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
