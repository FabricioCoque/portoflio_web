'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries, type Dictionary, type Locale } from '@/lib/i18n'

type LanguageContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// Idioma con el que se genera la página y al que se vuelve si no se puede detectar nada
const DEFAULT_LOCALE: Locale = 'es'
const STORAGE_KEY = 'portfolio-locale'

// Orden de prioridad:
// 1) Enlace con ?lang=en o ?lang=es (sirve para compartir la web en un idioma concreto y para probarla).
// 2) El idioma que la persona eligió antes con el selector.
// 3) El idioma principal de su navegador: español -> 'es', cualquier otro -> 'en'.
function detectLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'es' || fromUrl === 'en') {
    try {
      window.localStorage.setItem(STORAGE_KEY, fromUrl)
    } catch {
      // si no se puede guardar, igual se usa en esta visita
    }
    return fromUrl
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // el navegador puede bloquear el almacenamiento; se sigue con la detección
  }
  const preferred = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase()
  if (!preferred) return DEFAULT_LOCALE
  return preferred.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // El primer render usa siempre el idioma por defecto (así coincide con la página ya generada);
  // al cargar en el navegador se ajusta al idioma detectado o guardado.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const detected = detectLocale()
    setLocaleState(detected)
    setReady(true)
    document.documentElement.lang = detected
  }, [])

  // Cuando el idioma ya está aplicado, se muestra la página (ver el script de layout.tsx y globals.css)
  useEffect(() => {
    if (ready) document.documentElement.classList.remove('lang-pending')
  }, [ready])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    document.documentElement.lang = next
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // si no se puede guardar, el cambio sigue valiendo para esta visita
    }
  }, [])

  const value = useMemo(() => ({ locale, t: dictionaries[locale], setLocale }), [locale, setLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
