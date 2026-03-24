import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

const svgBuffer = Buffer.from(`
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="100" fill="#0f172a"/>
  <text x="256" y="270" font-family="Arial, sans-serif" font-size="280" font-weight="bold" fill="#f59e0b" text-anchor="middle" dominant-baseline="middle">CV</text>
  <text x="256" y="420" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">VİZE</text>
</svg>
`);

async function generateIcons() {
  for (const item of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(item.size, item.size)
        .png()
        .toFile(path.join(publicDir, item.name));
      console.log(`Generated ${item.name}`);
    } catch (e) {
      console.error(`Failed to generate ${item.name}`, e);
    }
  }
  
  try {
    const icoBuffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('Generated favicon.ico proxy');
  } catch(e) {}
}

generateIcons();
