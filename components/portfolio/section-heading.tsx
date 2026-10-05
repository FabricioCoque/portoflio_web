export function SectionHeading({
  index,
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
    <div className="mb-10 flex flex-col gap-3 md:mb-14">
      <p
        className={`font-mono text-xs uppercase tracking-widest ${dark ? 'text-background/60' : 'text-muted-foreground'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl ${dark ? 'text-background' : ''}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl leading-relaxed text-pretty ${dark ? 'text-background/70' : 'text-muted-foreground'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
