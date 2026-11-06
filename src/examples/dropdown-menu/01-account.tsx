import * as React from "react"
import { ChevronsUpDownIcon, LogOutIcon, SettingsIcon, UserPlusIcon, UserRoundIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const title = "Account and workspace"
export const description = "Group labels in mono, shortcuts on the right, a check on the current workspace."
export const order = 1

export default function DropdownAccount() {
  const [workspace, setWorkspace] = React.useState("bnp")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="h-12 gap-3 px-2.5" />}>
        <Avatar size="sm"><AvatarFallback>CD</AvatarFallback></Avatar>
        <span className="grid text-left leading-tight"><span className="text-sm">Camille Durand</span><span className="text-xs font-normal text-muted-foreground">BNP Paribas · credit</span></span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem><UserRoundIcon />Profile<DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
          <DropdownMenuItem><SettingsIcon />Settings<DropdownMenuShortcut>⌘,</DropdownMenuShortcut></DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspace</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={workspace} onValueChange={setWorkspace}>
            <DropdownMenuRadioItem value="bnp">BNP Paribas · credit</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="axa">Axa · claims triage</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="qs">Quicksort internal</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuItem><UserPlusIcon />Invite a teammate</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem><LogOutIcon />Log out<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
