import * as React from "react"
import { BookOpenIcon, CompassIcon, FilePlusIcon, RocketIcon, SearchIcon, UserPlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CommandDialog, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

export const title = "In a dialog"
export const description = "Open with ⌘K from anywhere. The palette sits in the upper third of the screen."
export const order = 2

export default function CommandInDialog() {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen((o) => !o) }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])
  return (
    <>
      <Button variant="outline" className="w-64 justify-start text-muted-foreground" onClick={() => setOpen(true)}>
        <SearchIcon data-icon="inline-start" />Search<Kbd className="ml-auto">⌘K</Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Search pages and actions" />
          <CommandList>
            <CommandEmpty>Nothing matches.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem onSelect={() => setOpen(false)}><CompassIcon />Strategy</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><RocketIcon />Deployments</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><BookOpenIcon />Case studies</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}><FilePlusIcon />New brief<CommandShortcut>⌘N</CommandShortcut></CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><UserPlusIcon />Invite a teammate<CommandShortcut>⌘I</CommandShortcut></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
