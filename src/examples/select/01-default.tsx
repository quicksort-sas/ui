import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const title = "Default"
export const order = 1

const industries = [
  { label: "Banking", value: "banking" },
  { label: "Insurance", value: "insurance" },
  { label: "Energy", value: "energy" },
  { label: "Public sector", value: "public" },
]

export default function SelectDefault() {
  return (
    <Select items={industries}>
      <SelectTrigger className="w-[260px]" aria-label="Industry">
        <SelectValue placeholder="Choose an industry" />
      </SelectTrigger>
      <SelectContent>
        {industries.map((i) => <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}
