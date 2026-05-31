import { Link } from 'react-router-dom'
import type { BlogPost } from '../content/blog'

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
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">{post.category}</p>
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
        <dl className="mt-4 grid gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:grid-cols-2">
          <div>
            <dt>Published</dt>
            <dd className="mt-1 text-sm font-semibold uppercase tracking-normal text-neutral-900">
              {post.publishedDate}
            </dd>
          </div>
          <div>
            <dt>Reading time</dt>
            <dd className="mt-1 text-sm font-semibold uppercase tracking-normal text-neutral-900">
              {post.readingTime}
            </dd>
          </div>
        </dl>
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
