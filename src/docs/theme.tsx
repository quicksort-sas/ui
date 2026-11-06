import * as React from "react"

type Theme = "light" | "dark"
const Ctx = React.createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} })

/** Light or dark: the saved choice, otherwise the system setting. Set on <html class="dark">. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(() => (document.documentElement.classList.contains("dark") ? "dark" : "light"))
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  React.useEffect(() => {
    const m = matchMedia("(prefers-color-scheme: dark)")
    const on = (e: MediaQueryListEvent) => { if (!localStorage.getItem("theme")) setTheme(e.matches ? "dark" : "light") }
    m.addEventListener("change", on)
    return () => m.removeEventListener("change", on)
  }, [])
  const toggle = React.useCallback(() => {
    setTheme((t) => { const n = t === "dark" ? "light" : "dark"; try { localStorage.setItem("theme", n) } catch {} return n })
  }, [])
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}
export const useTheme = () => React.useContext(Ctx)
