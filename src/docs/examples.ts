import type { ComponentType } from "react"

type Mod = { default: ComponentType; title?: string; description?: string; order?: number }
const mods = import.meta.glob<Mod>("../examples/*/*.tsx", { eager: true })
const srcs = import.meta.glob<string>("../examples/*/*.tsx", { eager: true, query: "?raw", import: "default" })

export type Example = { id: string; title: string; description?: string; Component: ComponentType; code: string; order: number }

const all: Record<string, Example[]> = {}
for (const [path, mod] of Object.entries(mods)) {
  const [, slug, file] = path.match(/examples\/([^/]+)\/([^/]+)\.tsx$/)!
  const code = (srcs[path] ?? "")
    .replace(/^export const (title|description|order)\b.*\n/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
  ;(all[slug] ??= []).push({ id: file, title: mod.title ?? file, description: mod.description, Component: mod.default, code, order: mod.order ?? 99 })
}
for (const list of Object.values(all)) list.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id))

export const examplesFor = (slug: string) => all[slug] ?? []
