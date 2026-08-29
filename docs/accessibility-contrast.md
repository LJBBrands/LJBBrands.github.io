# Contrast measurements

Foreground colors are composed as `rgba(255, 255, 255, α)` over `#000000` unless noted. WCAG 2.2 AA requires **4.5:1** for normal text and **3:1** for large text (18pt / 14pt bold).

Relative luminance and contrast are computed with the sRGB formula in `src/utils/contrast.js`.

## Confirmed failures (corrected)

| Token                    | Composed gray | Contrast vs `#000`                                   | Decision                                                |
| ------------------------ | ------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| `rgba(255,255,255,0.38)` | `#616161`     | 3.72:1                                               | Raised to `0.52` (`#858585`, 6.36:1)                    |
| `rgba(255,255,255,0.42)` | `#6B6B6B`     | 4.32:1                                               | Raised to `0.52`                                        |
| `text-white/45` / `0.45` | `#737373`     | 4.83:1 on pure black; **4.36:1** on dialog `#070907` | Raised to `text-white/52` / `0.52` for 11px–13px labels |

Affected surfaces: project category labels, dialog section headings, Arbor eyebrow, Awy showcase eyebrow/progress label, contact eyebrow, 404 eyebrow.

`--ljb-muted` (`0.64`) and body copy at `0.55`–`0.68` already meet AA and were left unchanged.

## Passing samples left as-is

| Token                           | Contrast vs `#000` |
| ------------------------------- | ------------------ |
| `text-white/50`                 | 5.32:1             |
| `text-white/55`                 | 6.13:1             |
| `text-white/58`                 | 6.66:1             |
| `text-white/64` (`--ljb-muted`) | 7.83:1             |
| `text-white/68`                 | 8.59:1             |

## Intentionally deferred

- **Separator glyphs** (`rgba(255,255,255,0.22)`) are decorative, not text.
- **Disabled Awy nav** (`opacity: 0.35`) is a disabled control, not primary copy.
- **Hemlock Hollow photographic chrome** (`0.62` eyebrow with text-shadow over a photo) remains cinematic; the shadow keeps the label readable on the hero still. Revisit only if a lighter still is introduced.
- **Give Love fallback panel** (`rgba(0,0,0,0.55)` on white) is an empty decorative plate, not live text.
- **10px status badges** over photography that already sit at `0.55`+ were not globally brightened.
