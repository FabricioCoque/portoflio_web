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
    <div className="flex items-center gap-2">
      {/* Icono suelto, fuera del marco: indica al visitante que aquí se cambia el idioma */}
      <Globe className="size-3.5 text-foreground" aria-hidden="true" />
      <div
        role="group"
        aria-label={t.nav.switchLabel}
        className="flex items-stretch border border-foreground font-mono text-[11px]"
      >
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
                'flex h-6 items-center justify-center px-2 font-medium tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background',
                i > 0 && 'border-l border-foreground',
                active ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground/10',
              )}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
