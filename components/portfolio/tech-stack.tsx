'use client'

import { SiPython } from "react-icons/si"
import { MdBarChart } from "react-icons/md"
import { Database } from "lucide-react"
import { useLanguage } from './language-provider'

const technologies = [
  {
    name: "SQL",
    icon: <Database className="h-5 w-5 text-accent" aria-hidden="true" />,
  },
  {
    name: "Power BI",
    icon: <MdBarChart className="h-6 w-6 text-accent" aria-hidden="true" />,
  },
  {
    name: "Python",
    icon: <SiPython className="h-5 w-5 text-accent" aria-hidden="true" />,
  },
]

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section
      id="tecnologias"
      aria-label={t.techStack.eyebrow}
      className="theme-dark relative overflow-hidden bg-background px-5 pt-6 pb-16 text-foreground md:px-8"
    >
      {/* Dos líneas (arriba y abajo) al ancho del contenido, con la fila en medio */}
      <div className="relative mx-auto max-w-6xl border-y border-border">
        <div className="grid gap-4 py-14 md:grid-cols-[1fr_2fr] md:items-center md:gap-10 lg:gap-16">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:text-right">
            {t.techStack.eyebrow}
          </span>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
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
