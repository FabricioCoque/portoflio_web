'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'
import { useLanguage } from './language-provider'
import { LanguageToggle } from './language-toggle'

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-medium tracking-tight">
          <span
            aria-hidden="true"
            className="flex size-6 items-center justify-center rounded-md bg-foreground font-mono text-xs text-background"
          >
            F
          </span>
          <span>{site.name}</span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">{t.nav.tagline}</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="flex items-center gap-1">
            {t.nav.links.map((link) => {
              const className =
                'hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-block'
              return isHome ? (
                <a key={link.href} href={link.href.replace('/#', '#')} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
