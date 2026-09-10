import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import App from './App'
import { BlogArticleBodyContext } from './components/BlogArticleBodyContext'

export async function render(url: string): Promise<{ html: string; helmet: HelmetServerState | undefined }> {
  const helmetContext: { helmet?: HelmetServerState } = {}

  // Resolve BlogArticleBody in Node (fast local module load, no network) so
  // blog routes render as plain synchronous HTML instead of a Suspense
  // fallback. Only this file ever does this eager import — the client bundle
  // never sees it, so it stays code-split there.
  const isBlogArticle = /^\/blog\/[^/]+\/?$/.test(url)
  const blogArticleBody = isBlogArticle
    ? (await import('./components/BlogArticleBody')).default
    : null

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <BlogArticleBodyContext.Provider value={blogArticleBody}>
          <App />
        </BlogArticleBodyContext.Provider>
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
