import sharp from 'sharp'
import { existsSync } from 'fs'

const INPUT = process.argv[2]

if (!INPUT || !existsSync(INPUT)) {
  console.error('Usage: node scripts/create-og-image.mjs <path/to/original-photo.jpg>')
  process.exit(1)
}

const WIDTH = 1200
const HEIGHT = 630

// SVG overlay: gradient on right + name/title text
const overlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="35%" stop-color="rgb(250,240,236)" stop-opacity="0" />
      <stop offset="65%" stop-color="rgb(250,240,236)" stop-opacity="0.97" />
      <stop offset="100%" stop-color="rgb(250,240,236)" stop-opacity="1" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)" />

  <!-- Name -->
  <text
    x="820" y="255"
    font-family="Georgia, serif"
    font-size="58"
    font-weight="400"
    font-style="italic"
    fill="#C4567E"
    text-anchor="middle"
  >Renata Druck</text>

  <!-- Subtitle -->
  <text
    x="820" y="295"
    font-family="Arial, sans-serif"
    font-size="15"
    font-weight="400"
    fill="#7A5C68"
    text-anchor="middle"
    letter-spacing="5"
  >PSICANALISTA · SÃO PAULO</text>

  <!-- Divider dots -->
  <circle cx="800" cy="340" r="4" fill="#C4567E" opacity="0.4" />
  <circle cx="820" cy="340" r="4" fill="#C4567E" opacity="0.4" />
  <circle cx="840" cy="340" r="4" fill="#C4567E" opacity="0.4" />

  <!-- Tagline -->
  <text
    x="820" y="400"
    font-family="Georgia, serif"
    font-size="26"
    font-weight="300"
    font-style="italic"
    fill="#4A3040"
    text-anchor="middle"
  >Um espaço de escuta</text>
  <text
    x="820" y="435"
    font-family="Georgia, serif"
    font-size="26"
    font-weight="300"
    font-style="italic"
    fill="#4A3040"
    text-anchor="middle"
  >e transformação.</text>
</svg>
`

await sharp(INPUT)
  .resize(WIDTH, HEIGHT, {
    fit: 'cover',
    position: 'top',
  })
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile('public/og-image.jpg')

console.log('Done: public/og-image.jpg (1200×630)')
