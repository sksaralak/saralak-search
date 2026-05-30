import { Link } from 'react-router-dom'
import CTAButton from './CTAButton'
import type { BlogPost } from '../content/blog'
import BlogCard from './BlogCard'
import { brand } from '../content/site'
import BlogArticleBody from './BlogArticleBody'

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
        <h1
          className="text-3xl font-semibold leading-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
        >
          {post.title}
        </h1>
        <p
          className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700"
          style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
        >
          {post.excerpt}
        </p>
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

      {post.heroImageDesktop ? (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <picture className="block overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm shadow-neutral-950/5">
            {post.heroImageMobile ? (
              <source media="(max-width: 767px)" srcSet={post.heroImageMobile} />
            ) : null}
            <img
              src={post.heroImageDesktop}
              alt={post.heroImageAlt ?? post.title}
              width="1280"
              height="720"
              fetchPriority="high"
              className="aspect-[16/9] w-full object-cover"
            />
          </picture>
        </section>
      ) : null}

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <BlogArticleBody post={post} />
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
          {post.cta ? (
            <div className="rounded-lg border border-teal-100 bg-[#fbfaf6] p-6 shadow-sm shadow-neutral-950/5 md:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
                    Brand Visibility Audit
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-tight text-neutral-950">
                    {post.cta.headline}
                  </h2>
                  <p className="thai-readable mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
                    {post.cta.description}
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <CTAButton to={post.cta.href}>{post.cta.buttonText}</CTAButton>
                </div>
              </div>
            </div>
          ) : post.ctaPlaceholderOnly ? (
            <div className="rounded-lg border border-dashed border-neutral-300 bg-[#fbfaf6] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                CTA placeholder
              </p>
            </div>
          ) : (
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
                    Start with Brand Visibility Audit
                  </CTAButton>
                </div>
              </div>
              <div className="rounded-lg border border-teal-100 bg-teal-950 p-6 text-white shadow-sm shadow-neutral-950/10">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">LINE</p>
                <h2 className="mt-2 text-2xl font-semibold">Chat on LINE</h2>
                <p className="mt-3 max-w-sm text-teal-50">
                  Ask a question or send the website URL directly before booking a call.
                </p>
                <div className="mt-5 grid gap-3">
                  <a
                    href={brand.lineUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#06C755] bg-[#06C755] px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white transition hover:bg-[#05b84f]"
                  >
                    Chat on LINE
                  </a>
                  <a
                    href="tel:+66622944999"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-white px-5 py-2.5 text-center text-sm font-semibold leading-6 text-teal-950 transition hover:bg-teal-50"
                  >
                    โทรปรึกษา
                  </a>
                </div>
              </div>
            </div>
          )}
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
