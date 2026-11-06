import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const title = "Several on, with spacing"
export const description = "Pass multiple and a spacing to filter by more than one service."
export const order = 3

const services = ["AI Strategy", "AI for IT & Business", "Voice AI", "Data for AI", "Infrastructure for AI"]

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple spacing={1.5} variant="outline" size="sm" defaultValue={["Voice AI", "Data for AI"]} aria-label="Filter by service" className="max-w-[520px] flex-wrap justify-center">
      {services.map((s) => (
        <ToggleGroupItem key={s} value={s}>{s}</ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
