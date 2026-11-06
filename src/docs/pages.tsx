import * as React from "react"
import { Link, useParams } from "react-router"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CATALOG, CATEGORIES, bySlug } from "./catalog"
import { examplesFor, type Example } from "./examples"
import { Code } from "./code"

const REGISTRY = "https://quicksort.design/r"

function Preview({ ex }: { ex: Example }) {
  return (
    <section className="grid min-w-0 gap-3" id={ex.id}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-[-0.01em]">{ex.title}</h3>
      </div>
      {ex.description && <p className="-mt-1 max-w-2xl text-[15px] text-muted-foreground">{ex.description}</p>}
      <Tabs defaultValue="preview" className="min-w-0 gap-0">
        <TabsList variant="line" className="mb-3">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="min-w-0">
          <div className="flex min-h-56 items-center justify-center overflow-x-auto rounded-lg border border-border bg-card p-4 sm:p-6 md:p-12">
            <div className="w-full min-w-0"><div className="mx-auto flex w-fit max-w-full min-w-0 flex-wrap items-center justify-center gap-3"><ex.Component /></div></div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="min-w-0"><Code code={ex.code} /></TabsContent>
      </Tabs>
    </section>
  )
}

function Install({ slug }: { slug: string }) {
  return (
    <Tabs defaultValue="shadcn" className="min-w-0 gap-0">
      <TabsList variant="line" className="mb-3">
        <TabsTrigger value="shadcn">shadcn</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
      </TabsList>
      <TabsContent value="shadcn" className="min-w-0"><Code code={`pnpm dlx shadcn@latest add ${REGISTRY}/${slug}.json`} /></TabsContent>
      <TabsContent value="npm" className="min-w-0 grid gap-3"><Code code={`pnpm add @quicksort/ui`} /><Code label="Your main CSS file" code={`@import "tailwindcss";\n@import "@quicksort/ui/theme.css";\n/* path from this CSS file to node_modules, so Tailwind finds the classes the components use */\n@source "../node_modules/@quicksort/ui/dist";`} /></TabsContent>
    </Tabs>
  )
}

export function ComponentPage() {
  const { slug = "" } = useParams()
  const entry = bySlug[slug]
  const examples = examplesFor(slug)
  React.useEffect(() => { document.title = entry ? `${entry.name} · Quicksort components` : "Not found · Quicksort components" }, [entry])
  if (!entry) return <NotFound />
  const i = CATALOG.indexOf(entry); const prev = CATALOG[i - 1]; const next = CATALOG[i + 1]
  const foundation = entry.category === "Foundations"
  return (
    <article className="grid min-w-0 max-w-[920px] gap-12">
      <header className="grid min-w-0 gap-4">
        <span className="label-mono flex items-center gap-2"><span className="size-1.5 rounded-full bg-pivot ring-1 ring-foreground" />{entry.category}</span>
        <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.02] font-medium tracking-[-0.035em]">{entry.name}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{entry.description}</p>
      </header>
      {!foundation && <section className="grid min-w-0 gap-3"><h2 className="label-mono">Install</h2><Install slug={slug} /></section>}
      <div className="grid min-w-0 gap-14">
        {examples.length ? examples.map((ex) => <Preview key={ex.id} ex={ex} />) : <p className="text-muted-foreground">Examples coming soon.</p>}
      </div>
      <nav className="flex justify-between gap-4 border-t border-border pt-6 text-sm" aria-label="Previous and next">
        {prev ? <Link to={`/${prev.slug}`} className="text-muted-foreground hover:text-foreground">← {prev.name}</Link> : <span />}
        {next ? <Link to={`/${next.slug}`} className="text-muted-foreground hover:text-foreground">{next.name} →</Link> : <span />}
      </nav>
    </article>
  )
}

export function Home() {
  React.useEffect(() => { document.title = "Components · Quicksort" }, [])
  return (
    <div className="grid gap-16">
      <header className="grid max-w-3xl gap-5">
        <span className="label-mono flex items-center gap-2"><span className="size-1.5 rounded-full bg-pivot ring-1 ring-foreground" />Quicksort components</span>
        <h1 className="text-[clamp(40px,5.4vw,72px)] leading-[0.98] font-medium tracking-[-0.045em] text-balance">Every interface, in one pass.</h1>
        <p className="text-lg text-muted-foreground">React components in the Quicksort style, built on shadcn/ui and Base UI. Ink, paper and stone carry the interface; lime marks the one thing that matters. Light and dark, accessible, and yours to copy or install.</p>
        <div className="grid min-w-0 gap-3 sm:max-w-2xl">
          <Code label="shadcn registry" code={`pnpm dlx shadcn@latest add ${REGISTRY}/button.json`} />
          <Code label="npm" code={`pnpm add @quicksort/ui`} />
        </div>
      </header>
      {CATEGORIES.map((cat) => (
        <section key={cat} className="grid gap-5">
          <h2 className="label-mono">{cat}</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {CATALOG.filter((e) => e.category === cat).map((e) => (
              <Link key={e.slug} to={`/${e.slug}`} className="group grid min-h-32 content-between gap-6 rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/40 hover:bg-accent/40">
                <span className="grid gap-1.5"><span className="text-[17px] font-medium">{e.name}</span><span className="text-sm text-muted-foreground">{e.description}</span></span>
                <ArrowRightIcon className={cn("size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground")} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export function NotFound() {
  return <div className="grid gap-4"><span className="label-mono">404</span><h1 className="text-4xl font-medium">This component isn't in the list.</h1><Link to="/" className="underline underline-offset-4">All components</Link></div>
}
