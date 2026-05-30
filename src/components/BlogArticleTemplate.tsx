import { Link } from 'react-router-dom'
import CTAButton from './CTAButton'
import type { BlogPost } from '../content/blog'
import BlogCard from './BlogCard'
import { brand } from '../content/site'

type BlogArticleTemplateProps = {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogArticleTemplate({ post, relatedPosts }: BlogArticleTemplateProps) {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-800">
          {post.category}
        </p>
        <h1 className="break-words text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">{post.excerpt}</p>
        <dl className="mt-8 grid gap-4 rounded-lg border border-neutral-200 bg-white p-5 text-sm text-neutral-700 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Published
            </dt>
            <dd className="mt-1 font-semibold text-neutral-950">{post.publishedDate}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Reading time
            </dt>
            <dd className="mt-1 font-semibold text-neutral-950">{post.readingTime}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Author
            </dt>
            <dd className="mt-1 font-semibold text-neutral-950">
              <Link to={post.authorUrl} className="text-teal-900 hover:text-teal-700">
                {post.authorName}
              </Link>
            </dd>
          </div>
        </dl>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <article className="grid gap-10">
            <section>
              <h2 className="text-2xl font-semibold text-neutral-950">Article placeholder</h2>
              <p className="thai-readable mt-4 text-lg leading-8 text-neutral-700">
                This is a lightweight placeholder body for the blog system. Replace this section with
                the full article copy when the post is ready to publish.
              </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {['Search intent', 'AI readability', 'Business visibility'].map((item) => (
                <article key={item} className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-5">
                  <h3 className="font-semibold text-neutral-950">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Placeholder notes for the final article structure.
                  </p>
                </article>
              ))}
            </section>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-950/5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">About the author</p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-950">{post.authorName}</h2>
            <p className="mt-2 text-neutral-700">{post.authorRole}</p>
            <p className="thai-readable mt-3 text-neutral-700">
              Helps brands improve visibility across Google Search, AI Overviews, ChatGPT, and other AI
              search platforms.
            </p>
          </div>
          <div>
            <CTAButton to={post.authorUrl} variant="secondary">
              View About Page
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="rounded-lg border border-neutral-200 bg-[#fbfaf6] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">Need help</p>
              <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
                Need help improving your visibility on Google and AI Search?
              </h2>
              <p className="thai-readable mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
                Explore SEO, AEO &amp; GEO services with Saralak Search.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton to="/services">View Services</CTAButton>
                <CTAButton to="/discovery-audit" variant="secondary">
                  Start with Discovery Audit
                </CTAButton>
              </div>
            </div>
            <a
              href={brand.lineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-teal-100 bg-teal-950 p-6 text-white shadow-sm shadow-neutral-950/10"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">LINE</p>
              <h2 className="mt-2 text-2xl font-semibold">Chat on LINE</h2>
              <p className="mt-3 max-w-sm text-teal-50">
                Ask a question or send the website URL directly before booking a call.
              </p>
            </a>
          </div>
        </div>
      </section>

      {relatedPosts.length ? (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
                Related articles
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-neutral-950">Continue reading</h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-teal-900 hover:text-teal-700">
              Back to Blog
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} compact />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}
