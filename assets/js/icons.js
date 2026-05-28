// SVG icons used in project + hobby cards.
// Each factory returns a DocumentFragment (via <template>) so it can be
// inserted directly. Classes match the keyframes in animations.css.

const INK_SOFT = 'rgba(31, 24, 20, 0.62)';
const INK_FAINT = 'rgba(31, 24, 20, 0.32)';
const INK = '#1f1814';
const PAPER = '#f6f3ec';

const svgNS = 'http://www.w3.org/2000/svg';

function svg(viewBox, size, className, children) {
  const el = document.createElementNS(svgNS, 'svg');
  el.setAttribute('viewBox', viewBox);
  el.setAttribute('width', size);
  el.setAttribute('height', size);
  el.setAttribute('fill', 'none');
  el.setAttribute('stroke', INK);
  el.setAttribute('stroke-width', '1.5');
  el.setAttribute('stroke-linecap', 'round');
  el.setAttribute('stroke-linejoin', 'round');
  if (className) el.setAttribute('class', className);
  el.innerHTML = children;
  return el;
}

export function iconStockGraph(size = 70) {
  return svg('0 0 48 48', size, 'icon-stock', `
    <line x1="7" y1="8" x2="7" y2="40" stroke="${INK_SOFT}" stroke-width="0.9" />
    <line x1="7" y1="40" x2="42" y2="40" stroke="${INK_SOFT}" stroke-width="0.9" />
    <line x1="5" y1="14" x2="7" y2="14" stroke="${INK_SOFT}" stroke-width="0.7" />
    <line x1="5" y1="22" x2="7" y2="22" stroke="${INK_SOFT}" stroke-width="0.7" />
    <line x1="5" y1="30" x2="7" y2="30" stroke="${INK_SOFT}" stroke-width="0.7" />
    <path class="stock-line" pathLength="100" d="M 10 33 L 16 28 L 20 31 L 26 22 L 31 25 L 36 14 L 41 9" />
    <path class="stock-arrow" d="M 37 9 L 41 9 L 41 13" />
    <g class="stock-dots">
      <circle cx="10" cy="33" r="1.1" fill="${INK}" stroke="none" />
      <circle cx="16" cy="28" r="1.1" fill="${INK}" stroke="none" />
      <circle cx="20" cy="31" r="1.1" fill="${INK}" stroke="none" />
      <circle cx="26" cy="22" r="1.1" fill="${INK}" stroke="none" />
      <circle cx="31" cy="25" r="1.1" fill="${INK}" stroke="none" />
      <circle cx="36" cy="14" r="1.1" fill="${INK}" stroke="none" />
    </g>
  `);
}

export function iconCircleStack(size = 70) {
  return svg('0 0 48 48', size, '', `
    <ellipse cx="24" cy="14" rx="14" ry="4" />
    <path d="M 10 14 L 10 22 Q 10 26, 24 26 Q 38 26, 38 22 L 38 14" />
    <path d="M 10 22 L 10 30 Q 10 34, 24 34 Q 38 34, 38 30 L 38 22" />
    <line x1="14" y1="17" x2="14" y2="19" stroke="${INK_SOFT}" stroke-width="0.7" />
    <line x1="20" y1="17.5" x2="20" y2="19.5" stroke="${INK_SOFT}" stroke-width="0.7" />
  `);
}

export function iconWaveform(size = 70) {
  return svg('0 0 48 48', size, '', `
    <rect x="6" y="14" width="36" height="20" rx="2" />
    <path d="M 10 24 L 14 24 L 16 18 L 19 30 L 22 20 L 25 28 L 28 22 L 31 26 L 34 24 L 38 24" />
    <line x1="10" y1="32" x2="38" y2="32" stroke="${INK_SOFT}" stroke-width="0.6" />
  `);
}

export function iconCompass(size = 70) {
  return svg('0 0 48 48', size, '', `
    <circle cx="24" cy="24" r="16" />
    <circle cx="24" cy="24" r="1.5" fill="${INK}" stroke="none" />
    <path d="M 24 11 L 27 24 L 24 37 L 21 24 Z" />
    <line x1="24" y1="24" x2="24" y2="11" stroke="${INK}" stroke-width="1.6" />
    <line x1="11" y1="24" x2="14" y2="24" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="34" y1="24" x2="37" y2="24" stroke="${INK_SOFT}" stroke-width="0.8" />
  `);
}

export function iconDumbbell(size = 54) {
  return svg('0 0 48 48', size, 'icon-dumbbell', `
    <line x1="14" y1="24" x2="34" y2="24" />
    <g class="plate">
      <rect x="8" y="18" width="6" height="12" rx="1" />
      <line x1="9.5" y1="19.5" x2="12.5" y2="19.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="9.5" y1="21.5" x2="12.5" y2="21.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="9.5" y1="26.5" x2="12.5" y2="26.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="9.5" y1="28.5" x2="12.5" y2="28.5" stroke="${INK_SOFT}" stroke-width="0.7" />
    </g>
    <g class="plate">
      <rect x="34" y="18" width="6" height="12" rx="1" />
      <line x1="35.5" y1="19.5" x2="38.5" y2="19.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="35.5" y1="21.5" x2="38.5" y2="21.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="35.5" y1="26.5" x2="38.5" y2="26.5" stroke="${INK_SOFT}" stroke-width="0.7" />
      <line x1="35.5" y1="28.5" x2="38.5" y2="28.5" stroke="${INK_SOFT}" stroke-width="0.7" />
    </g>
    <g class="plate"><rect x="4" y="21" width="4" height="6" rx="0.8" /></g>
    <g class="plate"><rect x="40" y="21" width="4" height="6" rx="0.8" /></g>
  `);
}

export function iconBook(size = 54) {
  const rightPage = `
    <path d="M 41 14 Q 41 13, 40 13 L 26 15 Q 25 15.5, 25 16.5 L 25 37 Q 25 38, 26 37.8 L 40 36 Q 41 35.8, 41 35 Z" fill="${PAPER}" />
    <line x1="28" y1="20.8" x2="38" y2="20" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="28" y1="24.8" x2="38" y2="24" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="30" y1="28.6" x2="38" y2="28" stroke="${INK_SOFT}" stroke-width="0.8" />
  `;
  return svg('0 0 48 48', size, 'icon-book', `
    <path d="M 7 14 Q 7 13, 8 13 L 22 15 Q 23 15.5, 23 16.5 L 23 37 Q 23 38, 22 37.8 L 8 36 Q 7 35.8, 7 35 Z" fill="${PAPER}" />
    <line x1="10" y1="20" x2="20" y2="20.8" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="10" y1="24" x2="20" y2="24.8" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="10" y1="28" x2="18" y2="28.6" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="23" y1="16.5" x2="25" y2="16.5" stroke="${INK_SOFT}" stroke-width="0.8" />
    <line x1="23" y1="37" x2="25" y2="37" stroke="${INK_SOFT}" stroke-width="0.8" />
    ${rightPage}
    <g class="book-page-right">${rightPage}</g>
  `);
}

export function iconController(size = 54) {
  return svg('0 0 48 48', size, 'icon-controller', `
    <g class="controller-body">
      <path d="M 12 20 Q 7 20, 7 26 L 7 32 Q 7 36, 11 36 Q 13 36, 14 34 L 16 31 L 32 31 L 34 34 Q 35 36, 37 36 Q 41 36, 41 32 L 41 26 Q 41 20, 36 20 Z" />
      <line x1="12" y1="26" x2="18" y2="26" />
      <line x1="15" y1="23" x2="15" y2="29" />
      <circle cx="32" cy="25" r="1.4" />
      <circle cx="37" cy="28" r="1.4" />
      <circle cx="32" cy="28" r="1.4" fill="${INK_FAINT}" stroke="none" />
      <circle cx="37" cy="25" r="1.4" fill="${INK_FAINT}" stroke="none" />
    </g>
  `);
}

export function iconGolf(size = 54) {
  const el = svg('0 0 48 48', size, 'icon-golf', `
    <line x1="30" y1="9" x2="30" y2="36" />
    <path d="M 30 11 L 41 14 Q 42 14.5, 41 15 L 30 18 Z" />
    <line x1="33" y1="13.5" x2="33" y2="16.5" stroke="${INK_SOFT}" stroke-width="0.7" />
    <line x1="36" y1="13.3" x2="36" y2="16.5" stroke="${INK_SOFT}" stroke-width="0.7" />
    <path d="M 6 38 Q 24 40, 42 38" />
    <line x1="13" y1="37" x2="13" y2="39" stroke="${INK_SOFT}" stroke-width="1" />
    <g class="golf-ball">
      <circle cx="13" cy="34" r="3" />
      <circle cx="11.7" cy="33" r="0.35" fill="${INK}" stroke="none" />
      <circle cx="14.3" cy="33" r="0.35" fill="${INK}" stroke="none" />
      <circle cx="13" cy="35" r="0.35" fill="${INK}" stroke="none" />
    </g>
  `);
  el.style.setProperty('--golf-icon-size', `${size}px`);
  return el;
}

export const PROJECT_ICONS = {
  stock: iconStockGraph,
  stack: iconCircleStack,
  waveform: iconWaveform,
  compass: iconCompass,
};

export const HOBBY_ICONS = {
  dumbbell: iconDumbbell,
  book: iconBook,
  controller: iconController,
  golf: iconGolf,
};
