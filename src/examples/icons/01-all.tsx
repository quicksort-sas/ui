import { Icon, ICON_NAMES } from "@/components/quicksort/icons"

export const title = "All icons"
export const description = "Fifteen pixel icons on a 16 × 16 grid, in one colour. Agents, chip and compass carry a lime accent; it is turned off here so the page keeps a single pivot."
export const order = 1

export default function IconsAll() {
  return (
    <div className="grid w-[760px] max-w-full grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
      {ICON_NAMES.map((name) => (
        <div key={name} className="grid justify-items-center gap-3 bg-background px-3 pt-6 pb-4">
          <Icon name={name} size={28} accent={false} />
          <span className="label-mono">{name}</span>
        </div>
      ))}
    </div>
  )
}
