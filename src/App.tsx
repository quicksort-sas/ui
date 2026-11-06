import { BrowserRouter, Route, Routes } from "react-router"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toast"
import { ThemeProvider } from "@/docs/theme"
import { Layout } from "@/docs/layout"
import { ComponentPage, Home, NotFound } from "@/docs/pages"

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter basename="/components">
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path=":slug" element={<ComponentPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}
