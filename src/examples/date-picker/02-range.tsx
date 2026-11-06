import { DateRangePicker } from "@/components/ui/date-picker"

export const title = "Range"
export const description = "From and to. Two months side by side on desktop, one on a phone."
export const order = 2

export default function DatePickerRange() {
  return (
    <DateRangePicker
      className="w-[300px]"
      placeholder="Pilot period"
      aria-label="Pilot period"
      defaultValue={{ from: new Date(2026, 10, 16), to: new Date(2026, 11, 18) }}
    />
  )
}
