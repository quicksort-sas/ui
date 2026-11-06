import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const title = "Open"
export const description = "The popup lists every option. The selected one carries a check."
export const order = 4

const stages = { idea: "Exploring an idea", pilot: "Running a pilot", scale: "Scaling to production" }

export default function SelectOpen() {
  return (
    <div className="h-48">
      <Select items={stages} defaultValue="pilot" defaultOpen modal={false}>
        <SelectTrigger className="w-[260px]" aria-label="Project stage"><SelectValue /></SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {Object.entries(stages).map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  )
}
