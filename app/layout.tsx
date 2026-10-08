import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { LanguageProvider } from '@/components/portfolio/language-provider'
import './globals.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

// Se ejecuta antes de pintar la página: si el idioma que corresponde es inglés, oculta la página un instante
// para que no se vea primero en español. Si algo falla, a los 2,5 s se muestra igual.
const languageScript = `(function(){try{var d=document.documentElement;var p=new URLSearchParams(location.search).get('lang');var s=null;try{s=localStorage.getItem('portfolio-locale')}catch(e){}var l=(p==='es'||p==='en')?p:(s==='es'||s==='en')?s:null;if(!l){var n=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();l=(n&&n.indexOf('es')!==0)?'en':'es'}d.lang=l;if(l==='en'){d.classList.add('lang-pending');setTimeout(function(){d.classList.remove('lang-pending')},2500)}}catch(e){}})();`

export const metadata: Metadata = {
  title: 'Fabricio Coque — Financial Data Analyst · BI & Automation',
  description:
    'Analista de datos financieros: conciliaciones automatizadas, extracción de facturas y reportes en Power BI para equipos de contabilidad y finanzas.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0F1419',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
