type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionHeaderProps) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-neutral-950'
  const bodyColor = tone === 'light' ? 'text-teal-50' : 'text-neutral-700'
  const eyebrowColor = tone === 'light' ? 'text-teal-100' : 'text-teal-800'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold uppercase ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`break-words text-3xl font-semibold leading-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-8 ${bodyColor}`}>{description}</p>
      ) : null}
    </div>
  )
}
