export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  tone = 'light',
}: {
  index?: string
  eyebrow: string
  title: string
  description?: string
  id: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1fr_2fr] md:gap-10 lg:gap-16">
      {/* Columna izquierda: línea con la etiqueta (gris en oscuro, azul en claro) */}
      <div
        className={`flex h-fit items-center justify-end border-t pt-3 font-mono text-xs ${
          dark ? 'border-background/15' : 'border-accent'
        }`}
      >
        <span
          className={`uppercase tracking-widest ${
            dark ? 'text-background/60' : 'text-muted-foreground'
          }`}
        >
          {eyebrow}
        </span>
      </div>

      {/* Columna derecha: título y descripción */}
      <div className="flex flex-col gap-3">
        <h2
          id={id}
          className={`max-w-md text-3xl font-semibold tracking-tight text-balance md:text-4xl ${dark ? 'text-background' : ''}`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-2xl leading-relaxed text-pretty ${
              dark ? 'text-background/70' : 'text-muted-foreground'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
