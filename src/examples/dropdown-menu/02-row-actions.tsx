import * as React from "react"
import { CopyIcon, ExternalLinkIcon, FolderInputIcon, MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const title = "Row actions"
export const description = "Destructive actions go last, after a separator, in the destructive colour."
export const order = 2

export default function DropdownRowActions() {
  const [pinned, setPinned] = React.useState(true)
  const [alerts, setAlerts] = React.useState(false)
  return (
    <div className="flex w-[420px] max-w-full items-center justify-between gap-4 rounded-lg border border-border bg-background py-2 pr-2 pl-4">
      <div className="grid">
        <span className="text-[15px] font-medium">Claims triage pilot</span>
        <span className="text-[13px] text-muted-foreground">Axa · 3 deployments</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Pilot actions" />}><MoreHorizontalIcon /></DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem><ExternalLinkIcon />Open<DropdownMenuShortcut>↵</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem><PencilIcon />Rename<DropdownMenuShortcut>R</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuItem><CopyIcon />Duplicate<DropdownMenuShortcut>⌘D</DropdownMenuShortcut></DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><FolderInputIcon />Move to</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>BNP Paribas · credit</DropdownMenuItem>
                <DropdownMenuItem>Quicksort internal</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>Pin to overview</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={alerts} onCheckedChange={setAlerts}>Email me on failures</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive"><Trash2Icon />Delete pilot<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
