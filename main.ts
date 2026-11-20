// The Daily Globe — Friday 20 November 2026.
// Node 22, standard library only. The finished front page lives beside this
// file as entry.png; running this program copies it byte for byte into the
// output directory the grader provides (/output, or MAKEFUN_OUTPUT_DIR when
// set for a local run) and then proves the copy is exact before it exits.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const from = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const to = join(outDir, 'entry.png');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(from);
writeFileSync(to, bytes);

const digest = (buf) => createHash('sha256').update(buf).digest('hex');
const written = readFileSync(to);
if (!written.equals(bytes)) throw new Error('copy mismatch: bytes differ');
if (digest(written) !== digest(bytes)) throw new Error('copy mismatch: sha256 differs');
if (written.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('copy mismatch: target is not a PNG');
}

console.log(`wrote ${to}: ${written.length} bytes, sha256 ${digest(written).slice(0, 16)}…`);
