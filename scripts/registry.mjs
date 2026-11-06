// Generates registry.json (shadcn registry) from src/components, src/hooks, src/lib and the theme.
// Each component becomes an item; dependencies are read from its imports. Run: node scripts/registry.mjs
import fs from "node:fs"
import path from "node:path"

const BASE = "https://quicksort.design/r"
const root = path.resolve(import.meta.dirname, "..")
const read = (p) => fs.readFileSync(path.join(root, p), "utf8")
const catalog = read("src/docs/catalog.ts")
const meta = Object.fromEntries([...catalog.matchAll(/slug: "([^"]+)", name: "([^"]+)", category: "([^"]+)", description: "([^"]+)"/g)].map((m) => [m[1], { title: m[2], category: m[3], description: m[4] }]))

const SKIP_NPM = new Set(["react", "react-dom"])
function analyse(file) {
  const s = read(file)
  const npm = new Set(), reg = new Set(), extra = new Set()
  for (const [, spec] of s.matchAll(/from "([^"]+)"/g)) {
    if (spec.startsWith("@/components/ui/")) reg.add(spec.slice("@/components/ui/".length))
    else if (spec.startsWith("@/components/quicksort/")) reg.add(spec.slice("@/components/quicksort/".length))
    else if (spec.startsWith("@/hooks/") || spec.startsWith("@/lib/")) extra.add(spec.slice(2))
    else if (!spec.startsWith(".") && !spec.startsWith("@/")) {
      const r = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0]
      if (!SKIP_NPM.has(r)) npm.add(r)
    }
  }
  return { npm, reg, extra }
}

const tokens = JSON.parse(fs.readFileSync(path.join(root, "scripts/tokens.json"), "utf8"))
const items = [{
  name: "theme",
  type: "registry:style",
  title: "Quicksort theme",
  description: "Ink, paper, stone and the lime pivot as shadcn tokens, Host Grotesk and Martian Mono, light and dark.",
  dependencies: ["@fontsource-variable/host-grotesk", "@fontsource-variable/martian-mono", "tw-animate-css"],
  // cssVars are merged into the project's own :root, .dark and @theme blocks, so they replace shadcn's defaults
  cssVars: tokens.cssVars,
  css: tokens.css,
}]
const helperItems = new Map()
function helper(rel) { // rel like "hooks/use-mobile" or "lib/highlighter"
  if (helperItems.has(rel)) return helperItems.get(rel)
  const ext = fs.existsSync(path.join(root, `src/${rel}.tsx`)) ? "tsx" : "ts"
  const file = `src/${rel}.${ext}`
  const name = rel.replace("/", "-")
  const { npm, extra } = analyse(file)
  const item = { name, type: rel.startsWith("hooks") ? "registry:hook" : "registry:lib", dependencies: [...npm], registryDependencies: [...extra].filter((e) => e !== "lib/utils").map((e) => `${BASE}/${helper(e).name}.json`), files: [{ path: file, type: rel.startsWith("hooks") ? "registry:hook" : "registry:lib" }] }
  helperItems.set(rel, item)
  return item
}

function componentItem(dir, file) {
  const name = path.basename(file, ".tsx")
  const rel = `src/components/${dir}/${file}`
  const { npm, reg, extra } = analyse(rel)
  const m = meta[name] ?? meta[{ icons: "icons" }[name]] ?? {}
  return {
    name,
    type: dir === "ui" ? "registry:ui" : "registry:component",
    title: m.title ?? name,
    description: m.description ?? "",
    categories: m.category ? [m.category.toLowerCase().replace(/ /g, "-")] : undefined,
    dependencies: [...npm],
    registryDependencies: [`${BASE}/theme.json`, ...[...reg].map((r) => `${BASE}/${r}.json`), ...[...extra].filter((e) => e !== "lib/utils").map((e) => `${BASE}/${helper(e).name}.json`)],
    files: [{ path: rel, type: dir === "ui" ? "registry:ui" : "registry:component", ...(dir === "quicksort" ? { target: `@components/quicksort/${file}` } : {}) }],
  }
}

for (const dir of ["ui", "quicksort"]) {
  for (const f of fs.readdirSync(path.join(root, "src/components", dir)).filter((f) => f.endsWith(".tsx")).sort()) items.push(componentItem(dir, f))
}
items.push(...helperItems.values())

const registry = { $schema: "https://ui.shadcn.com/schema/registry.json", name: "quicksort", homepage: "https://quicksort.design/components", items }
fs.writeFileSync(path.join(root, "registry.json"), JSON.stringify(registry, null, 2) + "\n")
console.log(`registry.json: ${items.length} items`)
