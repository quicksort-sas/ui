import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export const title = "Activity log"
export const description = "Read-only content: no footer, the close button is enough."
export const order = 2

const events = [
  ["18:02", "v2.4 deployed to production", "Camille Durand"],
  ["17:40", "Evaluation passed: 96.1% on 412 cases", "Nightly run"],
  ["15:12", "Prompt change approved", "Thomas Martin"],
  ["11:05", "2,350 of 3,232 pages ingested", "Ingestion"],
  ["09:30", "Pilot review with the credit committee", "Léa Bernard"],
]

export default function SheetActivity() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" />}>Activity</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Activity</SheetTitle>
          <SheetDescription>Today, 6 Nov 2026</SheetDescription>
        </SheetHeader>
        <ol className="grid overflow-y-auto px-6 py-2">
          {events.map(([time, what, who]) => (
            <li key={time} className="grid grid-cols-[52px_1fr] gap-3 border-b border-border py-3.5 last:border-0">
              <span className="num pt-0.5 text-xs text-muted-foreground">{time}</span>
              <span className="grid gap-0.5"><span className="text-sm">{what}</span><span className="text-[13px] text-muted-foreground">{who}</span></span>
            </li>
          ))}
        </ol>
      </SheetContent>
    </Sheet>
  )
}
