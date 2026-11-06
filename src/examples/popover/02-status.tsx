import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"

export const title = "Status details"
export const order = 2

const rows = [["Started", "14 Oct 2026"], ["Ends", "9 Nov 2026"], ["Owner", "Léa Bernard"], ["Next review", "Fri 8 Nov, 10:00"]]

export default function PopoverStatus() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="ghost" />}>Pilot status<Badge variant="warning" className="ml-1">3 days left</Badge></PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Claims triage pilot</PopoverTitle>
          <PopoverDescription>On track. The go/no-go call is with the claims director.</PopoverDescription>
        </PopoverHeader>
        <dl className="grid border-t border-border pt-1 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-1.5"><dt className="text-muted-foreground">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </PopoverContent>
    </Popover>
  )
}
