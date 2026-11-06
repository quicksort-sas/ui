import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export const title = "Deployment log"
export const description = "A thin, quiet scrollbar that firms up on hover."
export const order = 1

const log = Array.from({ length: 24 }, (_, i) => {
  const m = String(12 + i).padStart(2, "0")
  const msgs = ["Health check passed", "Scaled to 3 replicas", "Evaluation set run: 412/420", "Cache warmed", "Model loaded: mistral-large-2411", "Reviewer feedback synced"]
  return { t: `09:${m}`, msg: msgs[i % msgs.length] }
})

export default function ScrollAreaDefault() {
  return (
    <ScrollArea className="h-72 w-[380px] max-w-full rounded-lg border border-border bg-background">
      <div className="p-4">
        <span className="label-mono">credit-review-eu-west · 4 Nov</span>
        <div className="mt-3">
          {log.map((l, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Separator />}
              <div className="flex gap-4 py-2 text-sm">
                <span className="num shrink-0 text-xs leading-5 text-muted-foreground">{l.t}</span>
                <span>{l.msg}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}
