import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export const title = "Horizontal"
export const order = 2

const cases = [
  ["Banking", "Credit review from 45 minutes to 12"],
  ["Insurance", "Claims triage on the insurer's own servers"],
  ["Industry", "Maintenance reports searchable in seconds"],
  ["Public sector", "A voice agent for citizen calls"],
  ["Banking", "KYC files checked before the analyst opens them"],
]

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-[520px] max-w-full rounded-lg border border-border bg-background">
      <div className="flex w-max gap-3 p-4">
        {cases.map(([sector, t]) => (
          <figure key={t} className="grid w-52 shrink-0 content-start gap-2 rounded-md border border-border bg-card p-4">
            <span className="label-mono">{sector}</span>
            <span className="text-[15px] leading-snug font-medium">{t}</span>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
