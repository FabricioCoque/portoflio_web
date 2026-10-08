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
    <header
      className={`sticky top-4 z-50 px-5 md:px-8 ${isHome ? '-mb-16' : ''}`}
    >
      {/* Barra flotante azul, del ancho exacto del contenido (max-w-6xl) */}
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-2 items-center bg-accent px-5 text-foreground md:grid-cols-3 md:px-8">

        {/* Izquierda: logotipo y marca */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium tracking-tight">
            <span
              aria-hidden="true"
              className="flex size-6 items-center justify-center rounded-md bg-foreground font-mono text-xs text-background"
            >
              F
            </span>
            <span>{site.name}</span>
            <span className="hidden font-mono text-xs text-foreground/80 sm:inline">{t.nav.tagline}</span>
          </Link>
        </div>

        {/* Centro: enlaces en mayúsculas y monoespaciada */}
        <div className="hidden items-center justify-center md:flex">
          <nav aria-label="Primary" className="flex items-center gap-1">
            {t.nav.links.map((link) => {
              const className =
                'px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:underline hover:underline-offset-4'
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
        </div>

        {/* Derecha: selector de idioma */}
        <div className="flex items-center justify-end">
          <LanguageToggle />
        </div>

      </div>
    </header>
  )
}
