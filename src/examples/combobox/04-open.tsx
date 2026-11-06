import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator } from "@/components/ui/combobox"

export const title = "Open, with groups"
export const order = 4

type Group = { value: string; items: string[] }
const groups: Group[] = [
  { value: "Financial services", items: ["Banking", "Insurance", "Asset management"] },
  { value: "Public and regulated", items: ["Energy", "Public sector"] },
]

export default function ComboboxOpen() {
  return (
    <div className="h-80">
      <Combobox items={groups} defaultValue="Insurance" defaultOpen modal={false}>
        <ComboboxInput className="w-[280px]" placeholder="Search an industry" aria-label="Industry" />
        <ComboboxContent>
          <ComboboxEmpty>No industry found.</ComboboxEmpty>
          <ComboboxList>
            {(group: Group, index: number) => (
              <ComboboxGroup key={group.value} items={group.items}>
                {index > 0 && <ComboboxSeparator />}
                <ComboboxLabel>{group.value}</ComboboxLabel>
                {group.items.map((item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>)}
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
