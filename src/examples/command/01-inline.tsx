import { BookOpenIcon, CalendarIcon, CompassIcon, FilePlusIcon, RocketIcon, UserPlusIcon } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"

export const title = "Command palette"
export const description = "Search pages and actions from the keyboard. Groups carry mono labels; shortcuts sit on the right."
export const order = 1

export default function CommandInline() {
  return (
    <Command className="w-[480px] max-w-full rounded-lg border border-border shadow-[0_12px_32px_-12px_rgb(20_20_20/0.25)] dark:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.6)]">
      <CommandInput placeholder="Search pages and actions" />
      <CommandList>
        <CommandEmpty>Nothing matches. Try “deploy” or “case”.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem><CompassIcon />Strategy</CommandItem>
          <CommandItem><RocketIcon />Deployments</CommandItem>
          <CommandItem><BookOpenIcon />Case studies</CommandItem>
          <CommandItem><CalendarIcon />Events in Paris</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem><FilePlusIcon />New brief<CommandShortcut>⌘N</CommandShortcut></CommandItem>
          <CommandItem><UserPlusIcon />Invite a teammate<CommandShortcut>⌘I</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
