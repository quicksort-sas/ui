import { AgentsIcon } from "@/components/quicksort/icons"

export const title = "Sizes and accent"
export const description = "Use 20, 24 or 28px. Pixels stay crisp. The accent group is drawn in var(--pivot)."
export const order = 2

export default function IconsSizes() {
  return (
    <div className="flex items-end gap-10">
      {([20, 24, 28] as const).map((size) => (
        <div key={size} className="grid justify-items-center gap-3">
          <AgentsIcon size={size} accent={size === 28} />
          <span className="label-mono">{size}px</span>
        </div>
      ))}
    </div>
  )
}
