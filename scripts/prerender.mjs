import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const blogSlugs = [
  'what-is-geo',
  'aeo-vs-seo',
  'get-mentioned-in-ai-search-results',
  'modern-search-strategy',
]

const routes = [
  '/',
  '/about',
  '/services',
  '/discovery-audit',
  '/case-studies',
  '/proof',
  '/blog',
  ...blogSlugs.map(slug => `/blog/${slug}`),
  '/contact',
  '/privacy',
]

/**
 * Strip any Helmet-managed tags and prerendered body content left over from a
 * previous run. Makes the script idempotent when re-run without a fresh
 * `vite build` first.
 */
function sanitizeTemplate(raw) {
  let html = raw
    // Remove all title tags (incl. injected ones from previous runs)
    .replace(/<title>[^<]*<\/title>/g, '')
    // Remove Helmet-managed per-page meta / link tags
    .replace(/<meta\s+name="description"[^>]*\/?>/ig, '')
    .replace(/<meta\s+name="robots"[^>]*\/?>/ig, '')
    .replace(/<meta\s+name="author"[^>]*\/?>/ig, '')
    .replace(/<meta\s+name="publisher"[^>]*\/?>/ig, '')
    .replace(/<link\s+rel="canonical"[^>]*\/?>/ig, '')
    .replace(/<meta\s+property="og:title"[^>]*\/?>/ig, '')
    .replace(/<meta\s+property="og:description"[^>]*\/?>/ig, '')
    .replace(/<meta\s+property="og:url"[^>]*\/?>/ig, '')
    .replace(/<meta\s+name="twitter:title"[^>]*\/?>/ig, '')
    .replace(/<meta\s+name="twitter:description"[^>]*\/?>/ig, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')

  // Reset root div — replaces everything from <div id="root"> onward
  const rootStart = html.indexOf('<div id="root">')
  if (rootStart !== -1) {
    html = `${html.slice(0, rootStart)}<div id="root"></div>\n  </body>\n</html>`
  }

  return html
}

/**
 * react-helmet-async with prioritizeSeoTags:true hoists <title>, <meta>, and
 * <link rel="canonical"> to the START of the rendered string (before the first
 * <div>). However, <script type="application/ld+json"> renders inline at the
 * JSX position of the <SEO> component (inside <main>).
 *
 * This function separates head-level tags from body content and pulls out
 * any ld+json scripts so everything lands in <head>.
 */
function extractHeadContent(appHtml) {
  // Everything before the first <div is hoisted head tags from Helmet
  const firstDiv = appHtml.indexOf('<div')
  const hoisted = firstDiv > 0 ? appHtml.slice(0, firstDiv) : ''
  let bodyContent = firstDiv > 0 ? appHtml.slice(firstDiv) : appHtml

  // Pull ld+json scripts from body and add them to the head section
  const ldScripts = []
  bodyContent = bodyContent.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    match => { ldScripts.push(match); return '' },
  )

  return {
    headTags: hoisted + (ldScripts.length ? '\n    ' + ldScripts.join('\n    ') : ''),
    bodyContent,
  }
}

function buildPageHtml(template, appHtml) {
  const { headTags, bodyContent } = extractHeadContent(appHtml)

  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyContent}</div>`,
  )

  if (headTags.trim()) {
    html = html.replace('</head>', `    ${headTags.trim()}\n  </head>`)
  }

  return html
}

async function main() {
  const serverEntry = pathToFileURL(resolve(root, 'dist/server/entry-server.js')).href
  const templatePath = resolve(root, 'dist/client/index.html')

  const { render } = await import(serverEntry)

  // Sanitize the template before use — removes stale tags from any previous run
  const template = sanitizeTemplate(readFileSync(templatePath, 'utf-8'))

  console.log('Prerendering routes...')

  for (const route of routes) {
    const { html: appHtml } = render(route)
    const pageHtml = buildPageHtml(template, appHtml)

    const outDir =
      route === '/'
        ? resolve(root, 'dist/client')
        : resolve(root, `dist/client${route}`)

    mkdirSync(outDir, { recursive: true })
    writeFileSync(resolve(outDir, 'index.html'), pageHtml)

    if (route !== '/') {
      const cleanUrlPath = resolve(root, `dist/client${route}.html`)
      mkdirSync(dirname(cleanUrlPath), { recursive: true })
      writeFileSync(cleanUrlPath, pageHtml)
    }

    console.log(`  ✓ ${route}`)
  }

  console.log(`\n✓ Prerender complete — ${routes.length} static routes`)
}

main().catch(err => {
  console.error('\n✗ Prerender failed:', err)
  process.exit(1)
})
