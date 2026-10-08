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
    <header className="sticky top-4 z-50 px-5 md:px-8">
      {/* Contenedor flotante ajustado al ancho exacto del contenido (max-w-6xl) y sin sombras */}
      <div className="theme-dark mx-auto grid h-14 text-foreground max-w-6xl grid-cols-2 md:grid-cols-3 items-center rounded-none border border-border bg-background/90 px-5 backdrop-blur-md md:px-8">

        {/* Columna 1 (Izquierda): Logotipo y marca */}
        <div className="flex items-center justify-start">
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
        </div>

        {/* Columna 2 (Centro exacto): Enlaces de navegación */}
        <div className="hidden md:flex items-center justify-center">
          <nav aria-label="Primary" className="flex items-center gap-1">
            {t.nav.links.map((link) => {
              const className =
                'rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
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

        {/* Columna 3 (Derecha): Selector de idioma */}
        <div className="flex items-center justify-end">
          <LanguageToggle />
        </div>

      </div>
    </header>
  )
}
