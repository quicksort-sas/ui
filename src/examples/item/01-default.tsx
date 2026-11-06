import { ArrowUpRightIcon, FileTextIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

export const title = "Variants"
export const description = "Plain, outlined or on a muted surface."
export const order = 1

export default function ItemVariants() {
  return (
    <div className="grid w-[520px] max-w-full gap-4">
      <Item variant="outline">
        <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>AI readiness brief</ItemTitle>
          <ItemDescription>Twelve pages on where AI pays off in your credit process.</ItemDescription>
        </ItemContent>
        <ItemActions><Button variant="outline" size="sm">Download</Button></ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Claims triage pilot <Badge variant="warning">Pilot</Badge></ItemTitle>
          <ItemDescription>Week 6 of 10. Next review on 13 Nov.</ItemDescription>
        </ItemContent>
        <ItemActions><Button variant="ghost" size="icon-sm" aria-label="Open pilot"><ArrowUpRightIcon /></Button></ItemActions>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>Plain item</ItemTitle>
          <ItemDescription>No border, for dense lists.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
