import { SiPython } from "react-icons/si"
import { Database, BarChart3 } from "lucide-react"

const technologies = [
  {
    name: "SQL",
    href: "#",
    icon: <Database className="h-6 w-6 text-brand" aria-hidden="true" />,
  },
  {
    name: "Power BI",
    href: "#",
    icon: <BarChart3 className="h-6 w-6 text-[#F2C811]" aria-hidden="true" />,
  },
  {
    name: "Python",
    href: "#",
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
      <div className="mx-auto max-w-6xl border-y-[0.5px] border-accent/60">
        <ul className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {technologies.map((tech) => (
            <li key={tech.name}>
              <a
                href={tech.href}
                className="group flex items-center justify-between px-7 py-6 transition-colors hover:bg-card focus-visible:bg-card focus-visible:outline-2 focus-visible:-outline-offset-2"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-card transition-colors group-hover:border-accent/50">
                    {tech.icon}
                  </div>
                  <span className="text-2xl font-semibold tracking-tight">
                    {tech.name}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
