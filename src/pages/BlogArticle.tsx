import { Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import BlogArticleTemplate from '../components/BlogArticleTemplate'
import { getBlogPostBySlug, getRelatedPosts } from '../content/blog'
import { brand } from '../content/site'

export default function BlogArticle() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/blog" replace />
  }

  const post = getBlogPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = getRelatedPosts(post.slug)
  const pageUrl = `https://saralak-search.com/blog/${post.slug}`
  const imageUrl = post.ogImage
    ? `https://saralak-search.com${post.ogImage}`
    : undefined
  const readingMinutes = parseInt(post.readingTime)
  const timeRequired = !isNaN(readingMinutes) ? `PT${readingMinutes}M` : undefined

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.ogImage ?? '/image/og/saralak-search-blog-og.png'}
        ogType="article"
        ogImageWidth={1200}
        ogImageHeight={675}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: post.title,
              description: post.metaDescription,
              image: imageUrl ? [imageUrl] : undefined,
              author: {
                '@type': 'Person',
                name: post.authorName,
                url: `https://saralak-search.com${post.authorUrl}`,
              },
              publisher: {
                '@type': 'Organization',
                name: brand.name,
                url: 'https://saralak-search.com/',
              },
              datePublished: post.publishedDate,
              dateModified: post.lastModifiedDate ?? post.publishedDate,
              ...(timeRequired != null && { timeRequired }),
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': pageUrl,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://saralak-search.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://saralak-search.com/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: post.title,
                  item: pageUrl,
                },
              ],
            },
          ],
        }}
      />
      <BlogArticleTemplate post={post} relatedPosts={relatedPosts} />
    </>
  )
}
