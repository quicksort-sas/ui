import * as React from "react"
import { startOfTomorrow } from "date-fns"
import { Calendar } from "@/components/ui/calendar"

export const title = "Weekdays only"
export const description = "Workshops run on weekdays, from tomorrow. Weekends and past days cannot be picked."
export const order = 3

const tomorrow = startOfTomorrow()

export default function CalendarDisabled() {
  const [date, setDate] = React.useState<Date | undefined>()
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={[{ before: tomorrow }, { dayOfWeek: [0, 6] }]}
      weekStartsOn={1}
      className="rounded-lg border border-border"
    />
  )
}
