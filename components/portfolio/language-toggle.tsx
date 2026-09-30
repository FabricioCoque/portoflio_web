'use client'

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
      className="flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5 font-mono text-xs transition-colors hover:border-foreground/25"
    >
      {options.map((opt) => {
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
              'rounded-none px-2.5 py-1 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand',
              active ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
