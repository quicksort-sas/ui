import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const title = "Text alignment"
export const description = "Icon toggles, as segmented control and as joined outline buttons."
export const order = 2

const items = [
  { value: "left", label: "Align left", icon: AlignLeftIcon },
  { value: "center", label: "Align centre", icon: AlignCenterIcon },
  { value: "right", label: "Align right", icon: AlignRightIcon },
  { value: "justify", label: "Justify", icon: AlignJustifyIcon },
]

export default function ToggleGroupAlignment() {
  return (
    <>
      <ToggleGroup defaultValue={["left"]} size="sm" aria-label="Text alignment">
        {items.map((i) => (
          <ToggleGroupItem key={i.value} value={i.value} aria-label={i.label}><i.icon /></ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup variant="outline" defaultValue={["left"]} aria-label="Text alignment">
        {items.map((i) => (
          <ToggleGroupItem key={i.value} value={i.value} aria-label={i.label}><i.icon /></ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  )
}
