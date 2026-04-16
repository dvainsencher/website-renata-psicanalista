import sharp from 'sharp'
import { readFileSync, existsSync } from 'fs'

const INPUT = process.argv[2]

if (!INPUT) {
  console.error('Usage: node scripts/optimize-image.mjs <input-image>')
  process.exit(1)
}

if (!existsSync(INPUT)) {
  console.error(`File not found: ${INPUT}`)
  process.exit(1)
}

const image = sharp(INPUT)
const meta = await image.metadata()
console.log(`Input: ${meta.width}x${meta.height}, format: ${meta.format}`)

// Desktop: 1920px wide, WebP
await sharp(INPUT)
  .resize(1920, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('src/assets/hero-desktop.webp')

// Mobile: 800px wide, WebP (portrait crops well at this width)
await sharp(INPUT)
  .resize(800, null, { withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('src/assets/hero-mobile.webp')

// Fallback JPG for browsers that don't support WebP
await sharp(INPUT)
  .resize(1920, null, { withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('src/assets/hero-fallback.jpg')

console.log('Done. Files written to src/assets/:')

import { statSync } from 'fs'
const files = ['hero-desktop.webp', 'hero-mobile.webp', 'hero-fallback.jpg']
for (const f of files) {
  const size = (statSync(`src/assets/${f}`).size / 1024).toFixed(0)
  console.log(`  ${f}: ${size} KB`)
}
