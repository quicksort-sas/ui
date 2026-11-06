import { SearchIcon } from "lucide-react"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

export const title = "No results"
export const description = "Inside a panel, without a border."
export const order = 2

export default function EmptySearch() {
  return (
    <Empty className="w-[420px] max-w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon"><SearchIcon /></EmptyMedia>
        <EmptyTitle>No case studies match "telecom"</EmptyTitle>
        <EmptyDescription>Try a sector such as banking or insurance, or <a href="#all">see all case studies</a>.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
