// Generate the dotted world map once, at build time, as a static asset.
//
// It used to be inlined into the page as a data: URI, which put 341 KB of
// URI-encoded SVG directly into about/index.html (385 KB total, ~10x every
// other page). As a file it is fetched once, compressed on the wire, and
// cached across pages instead of re-downloaded inside every HTML response.
//
// Keep these options in sync with src/components/ui/world-map.tsx.
import { writeFile } from 'node:fs/promises';
import DottedMap from 'dotted-map';

export const MAP_OPTIONS = { height: 60, grid: 'diagonal' };
export const SVG_OPTIONS = {
  radius: 0.22,
  color: '#94A3B8',
  shape: 'circle',
  backgroundColor: 'transparent',
};

const map = new DottedMap(MAP_OPTIONS);
const svg = map.getSVG(SVG_OPTIONS);
await writeFile('public/world-map.svg', svg);
console.log(
  `gen-world-map: public/world-map.svg (${(svg.length / 1024).toFixed(0)} KB, ` +
    `viewBox ${map.image.width}x${map.image.height})`,
);
