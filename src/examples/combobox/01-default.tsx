import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"

export const title = "Default"
export const order = 1

const industries = ["Banking", "Insurance", "Asset management", "Energy", "Utilities", "Public sector", "Healthcare", "Retail", "Telecoms"]

export default function ComboboxDefault() {
  return (
    <Combobox items={industries}>
      <ComboboxInput className="w-[280px]" placeholder="Search an industry" aria-label="Industry" />
      <ComboboxContent>
        <ComboboxEmpty>No industry found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
