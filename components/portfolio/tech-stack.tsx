import { SiPython } from "react-icons/si"
import { Database, BarChart3 } from "lucide-react"

const technologies = [
  {
    name: "SQL",
    icon: <Database className="h-6 w-6 text-brand" aria-hidden="true" />,
  },
  {
    name: "Power BI",
    icon: <BarChart3 className="h-6 w-6 text-[#F2C811]" aria-hidden="true" />,
  },
  {
    name: "Python",
    icon: <SiPython className="h-6 w-6 text-[#4B8BBE]" aria-hidden="true" />,
  },
]

export function TechStack() {
  return (
    <section
      id="tecnologias"
      aria-label="Tecnologías que uso"
      className="theme-dark bg-background px-5 pt-10 pb-0 text-foreground md:px-8"
    >
      <div className="mx-auto max-w-6xl border-y border-border">
        <ul className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {technologies.map((tech) => (
            <li key={tech.name}>
              <div className="group flex items-center px-7 py-6 transition-colors hover:bg-card">
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-card transition-colors group-hover:border-accent/50">
                    {tech.icon}
                  </div>
                  <span className="text-2xl font-semibold tracking-tight">
                    {tech.name}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
