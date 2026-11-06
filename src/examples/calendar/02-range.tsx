import * as React from "react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

export const title = "Range"
export const description = "A pilot period across two months. Both ends in ink, the days between on a quiet band."
export const order = 2

export default function CalendarRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 16),
    to: new Date(2026, 11, 18),
  })
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      showOutsideDays={false}
      defaultMonth={new Date(2026, 10, 1)}
      className="rounded-lg border border-border"
    />
  )
}
