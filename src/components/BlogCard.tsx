import { Link } from 'react-router-dom'
import type { BlogPost } from '../content/blog'

type BlogCardProps = {
  post: BlogPost
  compact?: boolean
}

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-950/5">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">{post.category}</p>
      <h3 className="mt-2 text-xl font-semibold leading-tight text-neutral-950">{post.title}</h3>
      {!compact ? <p className="thai-readable mt-3 text-sm leading-6 text-neutral-700">{post.excerpt}</p> : null}
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
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900 bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Read Article
        </Link>
      </div>
    </article>
  )
}
