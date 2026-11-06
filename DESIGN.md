# Quicksort components: design rules

Every component in `src/components/ui` is a shadcn/ui (Base UI, "base-nova") component restyled to the Quicksort design.
Read this before changing or adding a component. The theme lives in `src/styles/theme.css`; do not edit it from a component task (ask instead).

## The brand in one paragraph
Quicksort sorts everything in one pass around a single pivot. Ink (#141414), paper (#F3F0E8) and the stone greys carry the
interface. Lime (`pivot`, #CCFF00) marks the ONE thing that matters on a screen: one dot, one bar, one button. Never two.
Precision over decoration: no gradients, no glows, no heavy shadows, no emoji.

## Tokens (Tailwind classes)
- Surfaces: `bg-background` (page), `bg-card` / `bg-popover` (raised), `bg-muted`, `bg-accent` (hover), `bg-secondary`.
- Text: `text-foreground`, `text-muted-foreground` (secondary), `text-faint` (tertiary).
- Lines: `border-border` (hairlines), `border-input` (control outlines), `ring-ring` (focus).
- Status: `destructive`, `success`, `warning` (use as text or 12% tints: `bg-success/12 text-success`).
- Pivot: `bg-pivot text-pivot-foreground`. On a light surface give lime shapes a 1.5px ink edge: `border-[1.5px] border-[#141414]` or `ring-1 ring-foreground`.
- Radius: `--radius` is 2px. Use `rounded-lg` (2px), `rounded-md`, `rounded-sm`. Never large pill radii, except true circles
  (`rounded-full` for avatars, switch thumbs, radio dots, the pivot dot).
- Dark mode: class `.dark` on <html>. Every component must look designed in dark, not just inverted. Check both.

## Type
- Words: Host Grotesk (`font-sans`), weights 400 and 500 only (`font-normal`, `font-medium`). Never bold.
- Numbers, labels, keys, codes, timestamps: Martian Mono (`font-mono`). Utilities: `label-mono` (11px, uppercase, +6% tracking,
  muted) for small labels and table/section headers; `num` for figures (tabular).
- Sentence case for text, Title Case for button/nav labels ("Save Draft" is NOT used: buttons are short, e.g. "Continue",
  "Book a call" — follow the existing examples).
- Body 15px in components, 14px in dense UI (menus, tables), 12–13px for help text.

## Shape and spacing
- Controls: height 40px default (`h-10`), 32px small (`h-8`), 48px large (`h-12`). Inputs match buttons.
- Borders are hairlines (1px). Focus: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` (or the input pattern: `focus-visible:border-foreground` + `ring-2 ring-ring/15`).
- Popovers/menus: `bg-popover`, `border border-border`, `rounded-lg`, a soft shadow at most `shadow-[0_12px_32px_-12px_rgb(20_20_20/0.25)]`, padding 4–6px, items 32–36px tall with `rounded-md` hover `bg-accent`. The selected/checked item may carry a small lime dot.
- Overlays: backdrop `bg-[#141414]/40` with a light `backdrop-blur-[2px]`; panels `bg-background` or `bg-card`, border hairline.
- Motion: quick and calm (150–200ms, ease-out). Respect `motion-reduce:`.

## Examples (docs)
- One file per example: `src/examples/<slug>/NN-name.tsx`, default export the example, plus `export const title`,
  optional `export const description`, `export const order`. Imports via `@/components/...`.
- Content is realistic Quicksort content (AI strategy, deployments, banks, insurers, credit review, case studies, events in Paris),
  never lorem ipsum. Plain, calm copy. 2–4 examples per component: the default, the important variants, a real use.
- Use lime at most once per example.

## Checks before you finish
1. `npx tsc -b` passes.
2. Look at the page in light AND dark (dev server http://localhost:5190/components/<slug>; dark: headless Chrome with
   `--force-dark-mode --blink-settings=preferredColorScheme=0`, or add class `dark` on html).
3. Keyboard: focus is visible on every interactive element.
