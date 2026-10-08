import { Link } from 'react-router-dom'
import type { BlogPost } from '../content/blog'
import { ArticleMeta, CategoryBadge } from './blog/BlogUI'

type BlogCardProps = {
  post: BlogPost
  compact?: boolean
}

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
      {post.heroImageDesktop ? (
        <Link to={`/blog/${post.slug}`} className="block shrink-0 overflow-hidden bg-neutral-100">
          <img
            src={post.heroImageDesktop}
            alt={post.heroImageAlt ?? post.title}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition hover:opacity-90"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <CategoryBadge>{post.category}</CategoryBadge>
        <h3
          className="mt-2 break-words text-xl font-semibold leading-tight text-neutral-950"
          style={{ overflowWrap: 'break-word', wordBreak: 'normal' }}
        >
          {post.title}
        </h3>
        {!compact ? (
          <p
            className="thai-readable mt-3 text-sm leading-6 text-neutral-700"
            style={{ overflowWrap: 'break-word', wordBreak: 'normal' }}
          >
            {post.excerpt}
          </p>
        ) : null}
        <ArticleMeta
          publishedDate={post.publishedDate}
          readingTime={post.readingTime}
          compact
        />
        <div className="mt-auto pt-5">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex min-h-11 max-w-full items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            อ่านบทความ
          </Link>
        </div>
      </div>
    </article>
  )
}
