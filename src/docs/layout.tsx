import * as React from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import { MoonIcon, SunIcon, MenuIcon, XIcon, ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"
import { QuicksortLogo } from "@/components/quicksort/logo"
import { CATALOG, CATEGORIES } from "./catalog"
import { useTheme } from "./theme"

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === "dark"
  return (
    <button type="button" onClick={toggle} aria-pressed={dark} aria-label="Dark mode" className="inline-flex h-8 items-center gap-2 rounded-md px-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
      <SunIcon className={cn("size-3.5", !dark && "text-foreground")} />
      <MoonIcon className={cn("size-3.5", dark && "text-foreground")} />
    </button>
  )
}

function Nav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Components" className="grid gap-7 pb-16">
      <NavLink to="/" end onClick={onNavigate} className={({ isActive }) => cn("text-[15px] font-medium", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>Overview</NavLink>
      {CATEGORIES.map((cat) => (
        <div key={cat} className="grid gap-1.5">
          <span className="label-mono mb-1">{cat}</span>
          {CATALOG.filter((e) => e.category === cat).map((e) => (
            <NavLink key={e.slug} to={`/${e.slug}`} onClick={onNavigate}
              className={({ isActive }) => cn("relative -ml-3 rounded-md py-1 pl-3 text-[14px] transition-colors", isActive ? "text-foreground before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-pivot before:ring-1 before:ring-foreground" : "text-muted-foreground hover:text-foreground")}>
              {e.name}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  )
}

export function Layout() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])
  return (
    <div className="min-h-svh">
      <div className="border-b border-white/5 bg-[#141414] text-[#faf8f3] dark:bg-[#0b0b0a]">
        <div className="mx-auto flex h-8 max-w-[1440px] items-center justify-between px-5 font-mono text-[10px] tracking-[0.04em] md:px-8">
          <span className="flex min-w-0 items-center text-[#9a968f]">
            <span className="mr-2.5 size-[7px] shrink-0 rounded-full bg-pivot" />
            <a href="https://quicksort.design" className="hover:text-white">~/quicksort.design</a>
            <Link to="/" className="hover:text-white">/components</Link>
            {pathname !== "/" && <span className="truncate text-[#faf8f3]">{pathname}</span>}
          </span>
          <a href="https://quicksort.design/toolkit" className="hidden items-center gap-1 text-[#9a968f] hover:text-white sm:inline-flex">Brand toolkit <ArrowUpRightIcon className="size-3" /></a>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Quicksort components home">
            <QuicksortLogo className="text-[15px]" />
            <span className="label-mono hidden sm:inline">Components</span>
          </Link>
          <div className="flex items-center gap-2">
            <a href="https://github.com/quicksort-sas/ui" className="hidden rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground sm:inline">GitHub</a>
            <ThemeToggle />
            <button type="button" className="grid size-9 place-items-center rounded-md lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-12 px-5 md:px-8">
        <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] overflow-y-auto pt-10 scrollbar-thin lg:block">
          <Nav />
        </aside>
        {open && (
          <div className="fixed inset-x-0 top-16 bottom-0 z-20 overflow-y-auto bg-background px-5 pt-6 lg:hidden"><Nav onNavigate={() => setOpen(false)} /></div>
        )}
        <main className="min-w-0 py-10 md:py-14"><Outlet /></main>
      </div>
    </div>
  )
}
