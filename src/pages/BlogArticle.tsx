import { Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import BlogArticleTemplate from '../components/BlogArticleTemplate'
import { getBlogPostBySlug, getRelatedPosts } from '../content/blog'

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

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: post.title,
              description: post.metaDescription,
              author: {
                '@type': 'Person',
                name: post.authorName,
              },
              datePublished: post.publishedDate,
              dateModified: post.publishedDate,
              mainEntityOfPage: `https://saralak-search.com/blog/${post.slug}`,
            },
          ],
        }}
      />
      <BlogArticleTemplate post={post} relatedPosts={relatedPosts} />
    </>
  )
}
