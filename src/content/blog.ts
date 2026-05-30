export type BlogPost = {
  title: string
  slug: string
  category: string
  excerpt: string
  readingTime: string
  publishedDate: string
  authorName: string
  authorRole: string
  authorUrl: string
  metaTitle: string
  metaDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'What Is GEO (Generative Engine Optimization)?',
    slug: 'what-is-geo',
    category: 'GEO',
    excerpt:
      'A practical introduction to GEO and how brands can become more visible in AI Search results.',
    readingTime: '4 min read',
    publishedDate: '2026-05-30',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'What Is GEO (Generative Engine Optimization)? | Saralak Search',
    metaDescription:
      'Understand GEO and how it supports AI Search visibility for brands across ChatGPT, Gemini, Perplexity and other answer engines.',
  },
  {
    title: 'AEO vs SEO: What’s the Difference?',
    slug: 'aeo-vs-seo',
    category: 'AEO',
    excerpt:
      'Learn how AEO and SEO work together and why answer visibility matters in modern search.',
    readingTime: '5 min read',
    publishedDate: '2026-05-27',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'AEO vs SEO: What’s the Difference? | Saralak Search',
    metaDescription:
      'Compare AEO and SEO, and see how answer engine optimization supports visibility in AI Overviews and search results.',
  },
  {
    title: 'How to Get Mentioned in AI Search Results',
    slug: 'get-mentioned-in-ai-search-results',
    category: 'AI Search',
    excerpt:
      'A checklist of the signals, content patterns and entity work that improve AI Search mentions.',
    readingTime: '6 min read',
    publishedDate: '2026-05-24',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'How to Get Mentioned in AI Search Results | Saralak Search',
    metaDescription:
      'Learn the practical steps to improve mentions in AI Search, including entity clarity, content structure and trust signals.',
  },
  {
    title: 'SEO, AEO and GEO: Building a Modern Search Strategy',
    slug: 'modern-search-strategy',
    category: 'Strategy',
    excerpt:
      'A simple framework for combining SEO, AEO and GEO into one practical search strategy.',
    readingTime: '5 min read',
    publishedDate: '2026-05-20',
    authorName: 'Saralak Kaewkum',
    authorRole: 'SEO, AEO & GEO Consultant',
    authorUrl: '/about',
    metaTitle: 'SEO, AEO and GEO: Building a Modern Search Strategy | Saralak Search',
    metaDescription:
      'See how SEO, AEO and GEO fit together in a modern search strategy for visibility, leads and AI readability.',
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit)
}

export function getLatestBlogPosts(limit = 4) {
  return [...blogPosts]
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .slice(0, limit)
}
