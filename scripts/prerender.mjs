import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const routes = [
  '/',
  '/about',
  '/services',
  '/discovery-audit',
  '/case-studies',
  '/proof',
  '/contact',
]

/**
 * Helmet renders <title>, <meta>, <link>, <script> tags inline into the appHtml
 * string before the first <div> (the Layout root). Split there so we can move
 * them to <head> where crawlers expect them.
 */
function splitAppHtml(appHtml) {
  const firstDiv = appHtml.indexOf('<div')
  if (firstDiv <= 0) return { headTags: '', bodyContent: appHtml }
  return {
    headTags: appHtml.slice(0, firstDiv),
    bodyContent: appHtml.slice(firstDiv),
  }
}

function buildPageHtml(template, appHtml) {
  const { headTags, bodyContent } = splitAppHtml(appHtml)

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
  const template = readFileSync(templatePath, 'utf-8')

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

    console.log(`  ✓ ${route}`)
  }

  console.log('\n✓ Prerender complete — 7 static routes')
}

main().catch(err => {
  console.error('\n✗ Prerender failed:', err)
  process.exit(1)
})
