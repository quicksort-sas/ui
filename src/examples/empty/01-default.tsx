import { FolderOpenIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

export const title = "No deployments yet"
export const order = 1

export default function EmptyDefault() {
  return (
    <Empty className="w-[520px] max-w-full border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><FolderOpenIcon /></EmptyMedia>
        <EmptyTitle>No deployments yet</EmptyTitle>
        <EmptyDescription>When a pilot goes live it shows up here, with its users and weeks to production.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Start a pilot</Button>
        <Button variant="ghost">Read how it works</Button>
      </EmptyContent>
    </Empty>
  )
}
