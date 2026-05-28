# Portfolio

Hand-drawn, ink/engraving-style personal portfolio. Vanilla HTML + CSS + ES modules — no build step, ready for GitHub Pages.

## Structure

```
.
├── index.html              # markup + content (edit text/links here)
├── .nojekyll               # tells GitHub Pages to serve files as-is
└── assets/
    ├── css/
    │   ├── tokens.css      # design tokens (colors, spacing, fonts)
    │   ├── base.css        # reset, paper texture, type
    │   ├── layout.css      # stage + responsive grid
    │   ├── components.css  # frame, hero, card, contact, doodles
    │   └── animations.css  # keyframes for icon hovers, pulse, drift
    ├── js/
    │   ├── icons.js        # SVG factories for project + hobby icons
    │   ├── doodles.js      # decorative doodles + drifting margin column
    │   ├── image-slot.js   # <image-slot> web component (drop a photo on the hero)
    │   └── main.js         # mounts doodles + icons on load
    └── img/                # drop a photo.jpg here for the hero
```

## Customize

- **Text & links** — edit `index.html` directly. Replace `[project one]`, `[email]`, `[github]`, etc. with real content.
- **Photo** — either drop an image onto the hero photo slot in the browser (persisted via `image-slot`), or save a file as `assets/img/photo.jpg` to use as a static fallback.
- **Colors / spacing** — tweak `assets/css/tokens.css`.
- **Add a project / hobby** — copy an `<article class="card frame">…</article>` block in `index.html` and change its `data-icon` value. Available icons: `stock`, `stack`, `waveform`, `compass`, `dumbbell`, `book`, `controller`, `golf`.

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
git push -u origin main
```

In the repo settings → Pages, set the source to the `main` branch root. The `.nojekyll` file ensures the `assets/` directory is served untouched.

## Local preview

Open `index.html` directly, or for the `image-slot` and ES modules to behave correctly:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
