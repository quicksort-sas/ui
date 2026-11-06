import { DatePicker } from "@/components/ui/date-picker"

export const title = "Single date"
export const description = "A field that opens a calendar and closes on the chosen day."
export const order = 1

export default function DatePickerSingle() {
  return <DatePicker className="w-[280px]" placeholder="Pick a date" aria-label="Date" />
}
