import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export const title = "Single day"
export const description = "Today carries a small lime dot. The chosen day is filled in ink."
export const order = 1

export default function CalendarSingle() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 10, 7))
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 10, 1)}
      className="rounded-lg border border-border"
    />
  )
}
