'use client'

import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n'
import { useLanguage } from './language-provider'

const options: { value: Locale; label: string; name: string }[] = [
  { value: 'en', label: 'EN', name: 'English' },
  { value: 'es', label: 'ES', name: 'Español' },
]

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.switchLabel}
      className="flex items-stretch border border-foreground font-mono text-xs"
    >
      {/* Celda del icono: indica al visitante que aquí se cambia el idioma */}
      <span className="flex h-9 w-9 items-center justify-center border-r border-foreground" aria-hidden="true">
        <Globe className="size-4 text-foreground" />
      </span>
      {options.map((opt, i) => {
        const active = locale === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            lang={opt.value}
            aria-pressed={active}
            aria-label={opt.name}
            onClick={() => setLocale(opt.value)}
            className={cn(
              'flex h-9 w-11 items-center justify-center font-medium tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background',
              i > 0 && 'border-l border-foreground',
              active ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground/10',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
