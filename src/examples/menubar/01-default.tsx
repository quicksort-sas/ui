import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export const title = "Report editor"
export const description = "A compact 32px bar. Menus share the dropdown style: 34px items, shortcuts in mono."
export const order = 1

export default function MenubarDefault() {
  return (
    <div className="h-[340px] w-[520px] max-w-full">
      <Menubar className="w-fit">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>New report<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarItem>Open<MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Export as</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>PDF</MenubarItem>
                  <MenubarItem>Word</MenubarItem>
                  <MenubarItem>Slides</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarItem>Share with client<MenubarShortcut>⇧⌘S</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">Delete draft</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
            <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Find in report<MenubarShortcut>⌘F</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem defaultChecked>Show sources</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show reviewer notes</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel>Period</MenubarLabel>
              <MenubarRadioGroup defaultValue="quarterly">
                <MenubarRadioItem value="monthly">Monthly</MenubarRadioItem>
                <MenubarRadioItem value="quarterly">Quarterly</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Keyboard shortcuts<MenubarShortcut>⌘/</MenubarShortcut></MenubarItem>
            <MenubarItem>Contact Quicksort</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
