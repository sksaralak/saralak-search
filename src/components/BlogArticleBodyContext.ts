import { createContext, type ComponentType } from 'react'
import type { BlogPost } from '../content/blog'

// Populated only by entry-server.tsx (never bundled into the client build) with
// an already-resolved BlogArticleBody so SSR/prerender output is plain, immediate
// HTML instead of a Suspense fallback. On the client this stays null and
// BlogArticleTemplate falls back to React.lazy() to code-split the bundle.
export const BlogArticleBodyContext = createContext<ComponentType<{ post: BlogPost }> | null>(null)
