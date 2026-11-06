import * as React from "react"
import { Separator } from "@/components/ui/separator"

export const title = "Between rows"
export const order = 2

const events = [
  ["12 Nov", "AI in credit risk, breakfast at Station F"],
  ["26 Nov", "Voice AI for insurers, roundtable"],
  ["4 Dec", "Data for AI, workshop for IT leads"],
]

export default function SeparatorList() {
  return (
    <div className="w-[440px] max-w-full">
      {events.map(([d, t], i) => (
        <React.Fragment key={d}>
          {i > 0 && <Separator />}
          <div className="flex items-baseline gap-6 py-3">
            <span className="num w-14 shrink-0 text-xs text-muted-foreground">{d}</span>
            <span className="text-[15px]">{t}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
