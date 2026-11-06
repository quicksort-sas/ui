import { Pivot } from "@/components/quicksort/pivot"

export const title = "Sizes"
export const description = "A lime dot with a 1.5px ink edge on light grounds. In dark mode the edge goes away."
export const order = 1

export default function PivotSizes() {
  return (
    <div className="flex items-end gap-10">
      {(["xs", "sm", "default", "lg", "xl"] as const).map((size) => (
        <div key={size} className="grid justify-items-center gap-3">
          <div className="grid h-6 place-items-center"><Pivot size={size} /></div>
          <span className="label-mono">{size}</span>
        </div>
      ))}
    </div>
  )
}
