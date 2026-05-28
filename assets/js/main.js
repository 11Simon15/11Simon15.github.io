import {
  buildDriftStrip,
  doodleSpiral, doodleSparkle, doodleSquiggle, doodleAsterisk, doodleArrow,
} from './doodles.js';
import { PROJECT_ICONS, HOBBY_ICONS } from './icons.js';

// ── Margin doodle drift ────────────────────────────────────────────────
function mountDriftColumns() {
  const left = document.querySelector('[data-drift="left"]');
  const right = document.querySelector('[data-drift="right"]');
  if (left)  left.appendChild(buildDriftStrip({ count: 14, seed: 51 }));
  if (right) right.appendChild(buildDriftStrip({ count: 14, seed: 62 }));
}

// ── Floating corner ornaments ─────────────────────────────────────────
function mountFloatingDoodles() {
  const map = {
    tl: () => doodleSpiral(32),
    tr: () => doodleSparkle(28),
    bl: () => doodleSquiggle(66),
    br: () => doodleAsterisk(26),
  };
  for (const [key, factory] of Object.entries(map)) {
    const slot = document.querySelector(`[data-float="${key}"]`);
    if (slot) slot.appendChild(factory());
  }
}

// ── Section-head doodles ──────────────────────────────────────────────
const DOODLE_MAP = {
  arrow:   () => doodleArrow(56),
  sparkle: () => doodleSparkle(28),
};

function mountSectionDoodles() {
  document.querySelectorAll('[data-doodle]').forEach((slot) => {
    const factory = DOODLE_MAP[slot.dataset.doodle];
    if (factory) slot.appendChild(factory());
  });
}

// ── Card / hobby icons ────────────────────────────────────────────────
function mountCardIcons() {
  document.querySelectorAll('[data-icon]').forEach((slot) => {
    const name = slot.dataset.icon;
    const factory = PROJECT_ICONS[name] || HOBBY_ICONS[name];
    if (!factory) return;
    const size = parseInt(slot.dataset.iconSize || '0', 10) || undefined;
    slot.appendChild(factory(size));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mountDriftColumns();
  mountFloatingDoodles();
  mountSectionDoodles();
  mountCardIcons();
});
