import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '../../content/blog'
import type { FAQItem } from '../../content/faqs'
import CTAButton from '../CTAButton'

export function CategoryBadge({ children }: { children: ReactNode }) {
  return <span className="blog-category-badge">{children}</span>
}

type ArticleMetaProps = {
  publishedDate: string
  updatedDate?: string
  readingTime: string
  authorName?: string
  authorUrl?: string
  compact?: boolean
}

function formatThaiDate(value: string) {
  const date = new Date(`${value}T00:00:00+07:00`)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('th-TH-u-ca-gregory', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Bangkok',
  }).format(date)
}

function formatThaiReadingTime(value: string) {
  const minutes = Number.parseInt(value, 10)
  return Number.isNaN(minutes) ? value : `ใช้เวลาอ่าน ${minutes} นาที`
}

export function ArticleMeta({
  publishedDate,
  updatedDate,
  readingTime,
  authorName,
  authorUrl,
  compact = false,
}: ArticleMetaProps) {
  if (compact) {
    return (
      <dl className="blog-meta blog-meta--compact">
        <div>
          <dt>Published</dt>
          <dd>{publishedDate}</dd>
        </div>
        <div>
          <dt>Reading time</dt>
          <dd>{readingTime}</dd>
        </div>
      </dl>
    )
  }

  return (
    <dl className="blog-meta blog-meta--article">
      <div>
        <dt>เผยแพร่</dt>
        <dd>{formatThaiDate(publishedDate)}</dd>
        {updatedDate && updatedDate !== publishedDate ? (
          <dd className="blog-meta__updated">อัปเดต {formatThaiDate(updatedDate)}</dd>
        ) : null}
      </div>
      <div>
        <dt>เวลาอ่าน</dt>
        <dd>{formatThaiReadingTime(readingTime)}</dd>
      </div>
      {authorName ? (
        <div>
          <dt>ผู้เขียน</dt>
          <dd>
            {authorUrl ? <Link to={authorUrl}>{authorName}</Link> : authorName}
          </dd>
        </div>
      ) : null}
    </dl>
  )
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="blog-breadcrumb">
      <ol>
        <li><Link to="/">หน้าแรก</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link to="/blog">บทความ</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}

type FigureImageProps = {
  src: string
  mobileSrc?: string
  alt: string
  caption?: ReactNode
  className?: string
  width?: number
  height?: number
  priority?: boolean
  hero?: boolean
}

export function FigureImage({
  src,
  mobileSrc,
  alt,
  caption,
  className = '',
  width = 900,
  height = 507,
  priority = false,
  hero = false,
}: FigureImageProps) {
  return (
    <figure className={`blog-figure ${hero ? 'blog-figure--hero' : ''} ${className}`.trim()}>
      <picture>
        {mobileSrc ? <source media="(max-width: 767px)" srcSet={mobileSrc} /> : null}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </picture>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="blog-article-header">
        <Breadcrumb current={post.title} />
        <CategoryBadge>{post.category}</CategoryBadge>
        <h1>{post.title}</h1>
        <p data-speakable className="blog-article-header__excerpt">{post.excerpt}</p>
        <ArticleMeta
          publishedDate={post.publishedDate}
          updatedDate={post.lastModifiedDate}
          readingTime={post.readingTime}
          authorName={post.authorName}
          authorUrl={post.authorUrl}
        />
      </section>
      {post.heroImageDesktop ? (
        <section className="blog-hero">
          <FigureImage
            src={post.heroImageDesktop}
            mobileSrc={post.heroImageMobile}
            alt={post.heroImageAlt ?? post.title}
            width={1280}
            height={720}
            priority
            hero
          />
        </section>
      ) : null}
    </>
  )
}

export function BlogProse({ children }: { children: ReactNode }) {
  return <div className="blog-prose">{children}</div>
}

export function SummaryBox({
  items,
  title,
  heading,
  id,
}: {
  items: ReactNode[]
  title?: ReactNode
  heading?: ReactNode
  id?: string
}) {
  const resolvedTitle = title ?? heading ?? 'สรุป AI Overview ใน 30 วินาที'

  return (
    <section className="blog-summary">
      <h2 id={id}>{resolvedTitle}</h2>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </section>
  )
}

export function BulletList({ items }: { items: readonly ReactNode[] }) {
  return <ul className="blog-list">{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
}

export type TableOfContentsItem = {
  id: string
  label: ReactNode
  children?: readonly TableOfContentsItem[]
}

export function TableOfContents({
  items,
  title = 'สารบัญบทความ',
}: {
  items: readonly TableOfContentsItem[]
  title?: ReactNode
}) {
  return (
    <nav aria-label="สารบัญบทความ" className="blog-toc">
      <p>{title}</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
            {item.children?.length ? (
              <ol>
                {item.children.map((child) => (
                  <li key={child.id}><a href={`#${child.id}`}>{child.label}</a></li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

type ResponsiveTableProps = {
  headers?: readonly ReactNode[]
  rows?: readonly (readonly ReactNode[])[]
  caption?: ReactNode
  label?: string
  minWidth?: string
  firstColumnHeader?: boolean
  children?: ReactNode
}

export function ResponsiveTable({
  headers,
  rows,
  caption,
  label,
  minWidth = '44rem',
  firstColumnHeader = true,
  children,
}: ResponsiveTableProps) {
  return (
    <div className="blog-table-scroll" role="region" aria-label={label} tabIndex={0}>
      {children ?? (
        <table style={{ minWidth }}>
          {caption ? <caption>{caption}</caption> : null}
          {headers ? (
            <thead><tr>{headers.map((header, index) => <th key={index} scope="col">{header}</th>)}</tr></thead>
          ) : null}
          {rows ? (
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    firstColumnHeader && cellIndex === 0
                      ? <th key={cellIndex} scope="row">{cell}</th>
                      : <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      )}
    </div>
  )
}

type StepItem = ReactNode | { title: ReactNode; description?: ReactNode; eyebrow?: ReactNode }

export function StepList({
  items,
  variant = 'cards',
}: {
  items: readonly StepItem[]
  variant?: 'cards' | 'plain'
}) {
  return (
    <ol className={`blog-steps blog-steps--${variant}`}>
      {items.map((item, index) => {
        const structured = typeof item === 'object' && item !== null && !Array.isArray(item) && 'title' in item
          ? item as { title: ReactNode; description?: ReactNode; eyebrow?: ReactNode }
          : null
        return (
          <li key={index}>
            <span className="blog-steps__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div>
              {structured?.eyebrow ? <p className="blog-steps__eyebrow">{structured.eyebrow}</p> : null}
              {structured ? <h3>{structured.title}</h3> : <p>{item as ReactNode}</p>}
              {structured?.description ? <p>{structured.description}</p> : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

type CalloutProps = { title?: ReactNode; children: ReactNode; className?: string }

function Callout({ title, children, tone, className = '' }: CalloutProps & { tone: string }) {
  return (
    <aside className={`blog-callout blog-callout--${tone} ${className}`.trim()}>
      {title ? <h3>{title}</h3> : null}
      <div>{children}</div>
    </aside>
  )
}

export function DecisionBox(props: CalloutProps) { return <Callout {...props} tone="decision" /> }
export function RuleBox(props: CalloutProps) { return <Callout {...props} tone="decision" /> }
export function NoteBox(props: CalloutProps) { return <Callout {...props} tone="note" /> }
export function WarningBox(props: CalloutProps) { return <Callout {...props} tone="warning" /> }

export function SourceBox({
  items,
  heading = 'แหล่งข้อมูล / Data Checked',
}: {
  items: readonly ReactNode[]
  heading?: ReactNode
}) {
  return (
    <aside className="blog-sources">
      <h2>{heading}</h2>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </aside>
  )
}

export const ReferenceBox = SourceBox
export const SourceList = SourceBox
export const ReferenceBlock = SourceBox

export function CTABox({
  headline,
  description,
  href = '/services',
  buttonText = 'ดูบริการที่เหมาะ',
  eyebrow = 'Saralak Search Services',
  headingTag = 'h2',
  children,
}: {
  headline: ReactNode
  description: ReactNode
  href?: string
  buttonText?: string
  eyebrow?: ReactNode
  headingTag?: 'h2' | 'h3' | 'p'
  children?: ReactNode
}) {
  return (
    <aside className="blog-cta">
      <p className="blog-cta__eyebrow">{eyebrow}</p>
      {headingTag === 'h2' ? <h2>{headline}</h2> : headingTag === 'h3' ? <h3>{headline}</h3> : <p className="blog-cta__heading">{headline}</p>}
      <p>{description}</p>
      <div className="blog-cta__actions">
        <CTAButton to={href}>{buttonText}</CTAButton>
        {children}
      </div>
    </aside>
  )
}

export function CaseStudyBox({ title, children }: { title?: ReactNode; children: ReactNode }) {
  return <aside className="blog-case-study">{title ? <h3>{title}</h3> : null}{children}</aside>
}

type GridItem = { label?: ReactNode; value?: ReactNode; title?: ReactNode; description?: ReactNode }

export function MetricGrid({ items }: { items: readonly GridItem[] }) {
  return (
    <div className="blog-metric-grid">
      {items.map((item, index) => (
        <div key={index}>
          {item.value ? <strong>{item.value}</strong> : null}
          {item.label ? <span>{item.label}</span> : null}
          {item.title ? <h3>{item.title}</h3> : null}
          {item.description ? <p>{item.description}</p> : null}
        </div>
      ))}
    </div>
  )
}

export const StatPanel = MetricGrid

export function InfoGrid({ items }: { items: readonly GridItem[] }) {
  return (
    <div className="blog-info-grid">
      {items.map((item, index) => (
        <article key={index}>
          {item.label ? <p className="blog-info-grid__label">{item.label}</p> : null}
          {item.title ? <h3>{item.title}</h3> : null}
          {item.description ? <p>{item.description}</p> : null}
        </article>
      ))}
    </div>
  )
}

export const InsightGrid = InfoGrid
export const ComparisonCards = InfoGrid

export function InsightPair({
  left,
  right,
}: {
  left: { title: ReactNode; children: ReactNode; tone?: 'positive' | 'negative' | 'neutral' }
  right: { title: ReactNode; children: ReactNode; tone?: 'positive' | 'negative' | 'neutral' }
}) {
  return (
    <div className="blog-insight-pair">
      {[left, right].map((item, index) => (
        <section key={index} className={`blog-insight-pair--${item.tone ?? 'neutral'}`}>
          <h3>{item.title}</h3>
          <div>{item.children}</div>
        </section>
      ))}
    </div>
  )
}

export function DoDontBox({
  doItems,
  dontItems,
  doTitle = 'ควรทำ',
  dontTitle = 'ไม่ควรทำ',
}: {
  doItems: readonly ReactNode[]
  dontItems: readonly ReactNode[]
  doTitle?: ReactNode
  dontTitle?: ReactNode
}) {
  return (
    <InsightPair
      left={{ title: doTitle, tone: 'positive', children: <ul>{doItems.map((item, index) => <li key={index}>{item}</li>)}</ul> }}
      right={{ title: dontTitle, tone: 'negative', children: <ul>{dontItems.map((item, index) => <li key={index}>{item}</li>)}</ul> }}
    />
  )
}

export function FAQSection({
  post,
  items,
  heading = 'คำถามที่พบบ่อย',
  id,
}: {
  post?: Pick<BlogPost, 'faqs'>
  items?: readonly FAQItem[]
  heading?: ReactNode
  id?: string
}) {
  const faqs = items ?? post?.faqs
  if (!faqs?.length) return null

  return (
    <section className="blog-faq">
      <p className="blog-faq__eyebrow">FAQ</p>
      <h2 id={id}>{heading}</h2>
      <div>
        {faqs.map((item) => (
          <details key={item.question}>
            <summary><span>{item.question}</span><span aria-hidden="true">+</span></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function RelatedLinks({ items }: { items: readonly { to: string; label: ReactNode }[] }) {
  return (
    <nav aria-label="บทความและหน้าที่เกี่ยวข้อง" className="blog-related-links">
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const InternalLinkBlock = RelatedLinks
