import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export const title = "Deployment details"
export const description = "Show and hide secondary information. Style the trigger yourself, here with a ghost button."
export const order = 1

const rows = [
  ["Model", "mistral-large-2411"],
  ["Region", "eu-west-3 (Paris)"],
  ["Last deploy", "4 Nov 2026, 09:12"],
  ["Owner", "Credit risk, Banque du Nord"],
]

export default function CollapsibleDefault() {
  return (
    <Collapsible defaultOpen className="w-[420px] max-w-full rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-4">
        <div className="grid">
          <span className="text-sm font-medium">credit-review-eu-west</span>
          <span className="font-mono text-[11px] text-muted-foreground">Running · 3 replicas</span>
        </div>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="sm" className="group/trigger" />}
        >
          Details
          <ChevronDownIcon data-icon="inline-end" className="transition-transform duration-200 group-data-panel-open/trigger:rotate-180" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-border px-4 py-3 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="label-mono self-center">{k}</dt>
              <dd className="font-mono text-xs">{v}</dd>
            </div>
          ))}
        </dl>
      </CollapsibleContent>
    </Collapsible>
  )
}
