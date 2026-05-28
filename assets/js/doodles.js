// Decorative doodles used both for floating ornaments and the drifting
// margin columns.

const INK_SOFT = 'rgba(31, 24, 20, 0.62)';
const svgNS = 'http://www.w3.org/2000/svg';

function doodle(w, h, paths, { stroke = INK_SOFT, weight = 1.25 } = {}) {
  const el = document.createElementNS(svgNS, 'svg');
  el.setAttribute('viewBox', `0 0 ${w} ${h}`);
  el.setAttribute('width', w);
  el.setAttribute('height', h);
  el.setAttribute('fill', 'none');
  el.setAttribute('stroke', stroke);
  el.setAttribute('stroke-width', weight);
  el.setAttribute('stroke-linecap', 'round');
  el.setAttribute('stroke-linejoin', 'round');
  el.innerHTML = paths;
  return el;
}

export const doodleStar = (s = 22) => doodle(s, s, `
  <path d="M ${s/2} 3 L ${s*0.6} ${s*0.4} L ${s-3} ${s*0.42} L ${s*0.66} ${s*0.62} L ${s*0.74} ${s-3} L ${s/2} ${s*0.74} L ${s*0.26} ${s-3} L ${s*0.34} ${s*0.62} L 3 ${s*0.42} L ${s*0.4} ${s*0.4} Z" />
`);

export const doodleSquiggle = (w = 50) => doodle(w, 14, `
  <path d="M 2 7 Q 6 1, 10 7 Q 14 13, 18 7 Q 22 1, 26 7 Q 30 13, 34 7 Q 38 1, ${w-2} 7" />
`);

export const doodleSpiral = (s = 28) => doodle(s, s, `
  <path d="M ${s/2} ${s/2} m 0 0 a 1.5 1.5 0 1 1 3 0 a 4 4 0 1 1 -7 1 a 7 7 0 1 1 12 -2 a 10 10 0 1 1 -16 3" />
`);

export const doodlePlus = (s = 18) => doodle(s, s, `
  <line x1="${s/2}" y1="3" x2="${s/2}" y2="${s-3}" />
  <line x1="3" y1="${s/2}" x2="${s-3}" y2="${s/2}" />
`);

export const doodleAsterisk = (s = 22) => doodle(s, s, `
  <line x1="${s/2}" y1="3" x2="${s/2}" y2="${s-3}" />
  <line x1="3" y1="${s/2}" x2="${s-3}" y2="${s/2}" />
  <line x1="5" y1="5" x2="${s-5}" y2="${s-5}" />
  <line x1="${s-5}" y1="5" x2="5" y2="${s-5}" />
`);

export const doodleArrow = (w = 42) => doodle(w, 18, `
  <path d="M 2 9 Q ${w/2} 1, ${w-3} 9" />
  <path d="M ${w-8} 4 L ${w-3} 9 L ${w-7} 14" />
`);

export const doodleCloud = (w = 48) => doodle(w, 26, `
  <path d="M 10 22 Q 4 22, 4 16 Q 4 10, 11 10 Q 13 4, 22 6 Q 30 2, 35 10 Q 46 10, 46 18 Q 46 23, 41 23 L 12 23 Z" />
`);

export const doodleDots = (w = 26) => doodle(w, 6, `
  <circle cx="3" cy="3" r="1.3" fill="${INK_SOFT}" stroke="none" />
  <circle cx="${w/2}" cy="3" r="1.3" fill="${INK_SOFT}" stroke="none" />
  <circle cx="${w-3}" cy="3" r="1.3" fill="${INK_SOFT}" stroke="none" />
`);

export const doodleSparkle = (s = 22) => doodle(s, s, `
  <path d="M ${s/2} 2 Q ${s*0.55} ${s*0.45} ${s-2} ${s/2} Q ${s*0.55} ${s*0.55} ${s/2} ${s-2} Q ${s*0.45} ${s*0.55} 2 ${s/2} Q ${s*0.45} ${s*0.45} ${s/2} 2 Z" />
`);

export const doodleCircle = (s = 22) => doodle(s, s, `
  <path d="M ${s/2} 3 Q ${s-3} ${s*0.3} ${s-3} ${s/2} Q ${s-3} ${s-3} ${s/2} ${s-3} Q 3 ${s-3} 3 ${s/2} Q 3 3 ${s/2} 3 Z" />
`);

export const doodleZigzag = (w = 36) => doodle(w, 12, `
  <path d="M 2 10 L 8 2 L 14 10 L 20 2 L 26 10 L 32 2 L ${w-2} 10" />
`);

export const doodleTriangle = (s = 22) => doodle(s, s, `
  <path d="M ${s/2} 3 L ${s-3} ${s-4} L 3 ${s-4} Z" />
`);

const KIT = [
  doodleStar, doodleSquiggle, doodleSpiral, doodlePlus, doodleAsterisk,
  doodleArrow, doodleCloud, doodleDots, doodleSparkle, doodleCircle,
  doodleZigzag, doodleTriangle,
];

// Deterministic pseudo-random — keeps the doodle layout stable.
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Build a single drifting margin strip (two identical copies for seamless loop).
export function buildDriftStrip({ count = 14, width = 70, seed = 1, rowGap = 60 }) {
  const rng = mulberry32(seed);
  const items = [];
  for (let i = 0; i < count; i++) {
    const factory = KIT[Math.floor(rng() * KIT.length)];
    items.push({
      factory,
      rotate: (rng() - 0.5) * 60,
      offsetX: (rng() - 0.5) * (width * 0.35),
      gap: rowGap + rng() * 36,
    });
  }

  const strip = document.createElement('div');
  strip.className = 'drift__strip';

  const makeCopy = () => {
    const frag = document.createDocumentFragment();
    for (const it of items) {
      const row = document.createElement('div');
      row.className = 'drift__item';
      row.style.paddingTop = `${it.gap}px`;
      row.style.transform = `translateX(${it.offsetX}px) rotate(${it.rotate}deg)`;
      row.appendChild(it.factory());
      frag.appendChild(row);
    }
    return frag;
  };

  strip.appendChild(makeCopy());
  strip.appendChild(makeCopy());
  return strip;
}
