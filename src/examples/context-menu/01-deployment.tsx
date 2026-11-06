import * as React from "react"
import { CopyIcon, ExternalLinkIcon, FolderInputIcon, LinkIcon, Trash2Icon } from "lucide-react"
import {
  ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator,
  ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
} from "@/components/ui/context-menu"

export const title = "Right-click a deployment"
export const description = "The same menu styling as the dropdown, opened at the pointer."
export const order = 1

export default function ContextMenuDeployment() {
  const [overview, setOverview] = React.useState(true)
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-44 w-[420px] max-w-full place-content-center gap-1 rounded-lg border border-dashed border-input bg-background text-center">
        <span className="text-[15px] font-medium">Credit review assistant · v2.4</span>
        <span className="text-sm text-muted-foreground">Right-click for actions</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Deployment</ContextMenuLabel>
          <ContextMenuItem><ExternalLinkIcon />Open<ContextMenuShortcut>⌘O</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem><LinkIcon />Copy link<ContextMenuShortcut>⌘L</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuItem><CopyIcon />Duplicate<ContextMenuShortcut>⌘D</ContextMenuShortcut></ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger><FolderInputIcon />Move to</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Staging</ContextMenuItem>
              <ContextMenuItem>Archive</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={overview} onCheckedChange={setOverview}>Show on overview</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive"><Trash2Icon />Delete<ContextMenuShortcut>⌘⌫</ContextMenuShortcut></ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
