import { startOfTomorrow } from "date-fns"
import { DatePicker } from "@/components/ui/date-picker"

export const title = "Weekdays, from tomorrow"
export const description = "Pass disabledDates to block weekends and past days."
export const order = 4

const tomorrow = startOfTomorrow()

export default function DatePickerDisabledDays() {
  return (
    <DatePicker
      className="w-[280px]"
      placeholder="Pick a weekday"
      aria-label="Workshop date"
      disabledDates={[{ before: tomorrow }, { dayOfWeek: [0, 6] }]}
      calendarProps={{ weekStartsOn: 1 }}
    />
  )
}
