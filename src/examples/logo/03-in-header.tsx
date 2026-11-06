import { QuicksortLogo } from "@/components/quicksort/logo"
import { Button } from "@/components/ui/button"

export const title = "In a header"
export const description = "Clear space equals the diameter of the dot on every side."
export const order = 3

export default function LogoInHeader() {
  return (
    <header className="flex w-[720px] max-w-full items-center justify-between rounded-lg border border-border bg-background px-5 py-3">
      <QuicksortLogo className="text-[15px]" />
      <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
        <a href="#" className="hover:text-foreground">Services</a>
        <a href="#" className="hover:text-foreground">Case studies</a>
        <a href="#" className="hover:text-foreground">Events</a>
      </nav>
      <Button size="sm">Book a call</Button>
    </header>
  )
}
