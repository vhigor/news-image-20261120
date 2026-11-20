// Draw src/frontpage.html at exactly 1024x1024 and save it as entry.png.
// Run from ~/workspace/makefun so playwright resolves from its node_modules:
//   node news-image-20261120-entry/tools/render.mjs
import { chromium } from 'playwright';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const entryRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlFile = join(entryRoot, 'src', 'frontpage.html');
const pngFile = join(entryRoot, 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1024, height: 1024 });
await page.goto('file://' + htmlFile);
await page.waitForLoadState('load');
await page.waitForTimeout(500);
await page.screenshot({ path: pngFile });
await browser.close();

const size = statSync(pngFile).size;
console.log(`rendered ${pngFile} (${size} bytes, limit 1048576)`);
if (size > 1048576) throw new Error('entry.png is over the 1 MiB limit');
