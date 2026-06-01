import { readdir, rename, rm } from 'node:fs/promises'
import { join, dirname, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createWriteStream } from 'node:fs'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imgRoot = join(__dirname, '..', 'public', 'image', 'blog')

const WEBP_QUALITY = 75

function maxWidth(name) {
  if (name.includes('banner-mweb')) return 800
  if (name.includes('banner')) return 1200
  return 900
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

async function main() {
  const all = await walk(imgRoot)
  // Skip SVGs and the duplicate .webp.png files
  const targets = all.filter(f => /\.(png|webp)$/i.test(f) && !f.endsWith('.webp.png'))

  console.log(`Compressing ${targets.length} images to WebP quality ${WEBP_QUALITY}...\n`)

  let saved = 0

  for (const file of targets) {
    const name = basename(file)
    const outPath = file.replace(/\.(png|webp)$/i, '.webp')
    const tmp = outPath + '.tmp'
    const mw = maxWidth(name)

    try {
      const { size, width, height } = await sharp(file)
        .resize({ width: mw, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(tmp)

      // Atomic replace (handles in-place WebP recompression)
      await rename(tmp, outPath)

      const origKB = Math.round((await import('node:fs')).statSync(file).size / 1024)
      const newKB = Math.round(size / 1024)
      saved += origKB - newKB
      console.log(`  ✓ ${name.padEnd(52)} ${origKB.toString().padStart(5)}KB → ${newKB.toString().padStart(4)}KB  (${width}×${height})`)
    } catch (e) {
      console.error(`  ✗ ${name}: ${e.message}`)
    }
  }

  console.log(`\n✓ Done — ~${saved} KB saved across ${targets.length} images`)
}

main().catch(err => {
  console.error('\n✗ Compression failed:', err)
  process.exit(1)
})
