import { Pivot } from "@/components/quicksort/pivot"

export const title = "Marking the one that matters"
export const description = "Three options in ink and stone; the recommended one carries the dot. One per view."
export const order = 3

const options = [
  { name: "Pilot on one desk", detail: "6 weeks · 20 analysts", pick: false },
  { name: "Roll out to corporate banking", detail: "14 weeks · 320 people", pick: true },
  { name: "Group-wide platform", detail: "9 months · 4 business lines", pick: false },
]

export default function PivotInUse() {
  return (
    <ul className="grid w-[440px] max-w-full divide-y divide-border rounded-lg border border-border bg-background">
      {options.map((o) => (
        <li key={o.name} className="flex items-center gap-4 px-4 py-3.5">
          <span className="grid size-3.5 place-items-center">{o.pick ? <Pivot label="Recommended" /> : <span className="size-1.5 rounded-full bg-input" />}</span>
          <span className="grid flex-1 gap-0.5">
            <span className="text-[15px] font-medium">{o.name}</span>
            <span className="font-mono text-[11px] text-faint">{o.detail}</span>
          </span>
          {o.pick && <span className="label-mono text-foreground">Recommended</span>}
        </li>
      ))}
    </ul>
  )
}
