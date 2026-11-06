import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const title = "View switch"
export const description = "A segmented control: one option on, raised on the page colour."
export const order = 1

export default function ToggleGroupSegmented() {
  return (
    <ToggleGroup defaultValue={["quarterly"]} aria-label="Reporting period">
      <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
      <ToggleGroupItem value="quarterly">Quarterly</ToggleGroupItem>
    </ToggleGroup>
  )
}
