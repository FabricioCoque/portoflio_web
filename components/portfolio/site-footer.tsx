'use client'

import { ArrowUpRight, Code2, Mail, UserRound } from 'lucide-react'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'

const contacts = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, external: false },
  { icon: UserRound, label: 'LinkedIn', value: null, href: site.linkedin, external: true },
  { icon: Code2, label: 'GitHub', value: null, href: site.github, external: true },
]

export function SiteFooter() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-background/15 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-background/50">
          <span className="text-accent">04</span> <span aria-hidden="true">—</span> {c.eyebrow}
        </p>
        <h2
          id="contact-title"
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-5xl"
        >
          {c.title}
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-background/60">{c.description}</p>

        <ul className="mt-16 grid gap-3 sm:grid-cols-3">
          {contacts.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full items-center justify-between rounded-xl border border-background/10 px-5 py-4 transition-colors hover:border-background/30 hover:bg-background/5"
              >
                <span className="flex items-center gap-3">
                  <Icon className="size-4 text-background/60" aria-hidden="true" />
                  <span className="flex flex-col">
                    {value ? <span className="text-xs text-background/50">{label}</span> : null}
                    <span className="font-mono text-sm">{value ?? label}</span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 text-background/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background"
                  aria-hidden="true"
                />
                {external ? <span className="sr-only">{c.newTab}</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/10 pt-6 font-mono text-xs text-background/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {c.rights}
          </p>
          <p>{c.built}</p>
        </div>
      </div>
    </footer>
  )
}
