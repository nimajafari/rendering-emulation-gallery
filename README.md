# Rendering Emulation Gallery

A small, dependency-free HTML/CSS/JS gallery for demonstrating Chrome DevTools' **Rendering** tab emulations — built for technical SEO and frontend audiences who need to *see* how a page behaves under different CSS media features and vision deficiencies, without owning the hardware or OS settings that would normally trigger them.

No build step, no frameworks, no npm install. Open any file directly in a browser, or browse the [live demo on GitHub Pages](https://nimajafari.github.io/rendering-emulation-gallery/).

## Why this exists

Chrome DevTools ships two related but different emulation tools under **More tools → Rendering**:

- **Emulate CSS media feature** — toggles real CSS media features (`prefers-color-scheme`, `prefers-reduced-motion`, `prefers-contrast`, `prefers-reduced-transparency`, `forced-colors`). Pages can detect and react to these via `@media` and `matchMedia`.
- **Emulate vision deficiencies** — applies a display-level filter (blurred vision, protanopia, deuteranopia, tritanopia, achromatopsia, reduced contrast) over the whole rendered page. There is **no CSS media feature or JS API** for this — a page cannot detect it or respond to it. It's purely a visual filter for humans to look through.

It's easy to conflate the two when teaching or auditing. This gallery keeps them in separate sections and makes the distinction explicit on every page, so you can demo the right expectation for each: "this page can adapt" vs. "this page can only be *designed defensively* so it still works when viewed through the filter."

## Categories

### CSS media features (`media-features/`)

Each page reads and displays your browser's **actual live** system setting, then shows a side-by-side comparison of a component that ignores the preference vs. one that respects it via `@media`.

| Page | Media feature |
|---|---|
| `prefers-color-scheme.html` | `prefers-color-scheme` |
| `prefers-contrast.html` | `prefers-contrast` |
| `prefers-reduced-motion.html` | `prefers-reduced-motion` |
| `prefers-reduced-transparency.html` | `prefers-reduced-transparency` |
| `forced-colors.html` | `forced-colors` |

**To test:** open a page, then in DevTools go to `More tools → Rendering → Emulate CSS media feature`, and toggle the matching dropdown. The banner at the top of the page updates live to reflect the emulated value.

### Vision deficiency emulation (`vision-deficiencies/`)

These pages have no live-status banner and no JS detection — there's nothing to detect. Instead, each shows a "bad" pattern (relies on color alone, tiny text, thin strokes, low contrast) stacked directly above a "good" pattern (adds shape, labels, size, or contrast) so you can toggle the DevTools filter and visually compare both at once.

| Page | Condition(s) covered |
|---|---|
| `color-vision-deficiency.html` | Protanopia, deuteranopia, tritanopia |
| `achromatopsia.html` | Achromatopsia (no color perception) |
| `blurred-vision.html` | Blurred vision |
| `low-contrast-vision.html` | Reduced contrast |

**To test:** open a page, then in DevTools go to `More tools → Rendering → Emulate vision deficiencies`, and pick the matching condition from the dropdown.

### The conditions we simulate

- **[Protanopia](https://en.wikipedia.org/wiki/Protanopia)** — a form of red-green color blindness caused by the absence of red-sensing (L-cone) photoreceptors, making reds appear darker and harder to distinguish from greens and oranges.
- **[Deuteranopia](https://en.wikipedia.org/wiki/Deuteranopia)** — the most common form of red-green color blindness, caused by the absence of green-sensing (M-cone) photoreceptors, which similarly collapses reds, greens, and browns into overlapping hues.
- **[Tritanopia](https://en.wikipedia.org/wiki/Tritanopia)** — a rarer blue-yellow color blindness caused by the absence of blue-sensing (S-cone) photoreceptors, making blues and yellows hard to tell apart.
- **[Achromatopsia](https://en.wikipedia.org/wiki/Achromatopsia)** — total color blindness, where the visitor sees only in shades of gray; any information conveyed by hue alone is lost entirely.
- **[Blurred vision](https://en.wikipedia.org/wiki/Blurred_vision)** — reduced visual acuity from causes like uncorrected refractive error or cataracts, which can make small text and thin strokes illegible.
- **[Contrast sensitivity](https://en.wikipedia.org/wiki/Contrast_sensitivity)** loss — a reduced ability to distinguish an object from its background, which low-contrast text and UI fail even faster than normal vision would.

## Who this is for

Built as teaching material for technical SEO / frontend audits — showing clients, students, or teammates *why* a design decision (color-only status indicators, motion-heavy transitions, low-contrast text) fails a real user, using nothing but Chrome's built-in emulation and no assistive hardware.

## Running locally

No install needed:

```bash
git clone https://github.com/nimajafari/rendering-emulation-gallery.git
cd rendering-emulation-gallery
open index.html
```

Or serve it with any static file server (`npx serve`, `python3 -m http.server`, etc.) — useful mainly for testing GitHub Pages routing locally.

## Contributing

Issues and PRs for new emulation cases, accessibility fixes, or corrections to browser-support notes are welcome.

## License

[MIT](LICENSE)
