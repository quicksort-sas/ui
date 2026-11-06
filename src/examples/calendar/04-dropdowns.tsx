import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export const title = "Month and year menus"
export const description = "For dates far from today, such as a contract start."
export const order = 4

export default function CalendarDropdowns() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2027, 0, 4))
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      defaultMonth={new Date(2027, 0, 1)}
      startMonth={new Date(2024, 0)}
      endMonth={new Date(2030, 11)}
      className="rounded-lg border border-border"
    />
  )
}
