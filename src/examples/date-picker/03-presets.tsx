import { addDays, endOfQuarter, startOfQuarter, startOfToday } from "date-fns"
import { DatePicker, DateRangePicker, type DatePickerPreset, type DateRangePreset } from "@/components/ui/date-picker"

export const title = "With shortcuts"
export const description = "Common choices in a side list. Shortcuts are computed when clicked, so Today is always today."
export const order = 3

const dayPresets: DatePickerPreset[] = [
  { label: "Today", value: startOfToday },
  { label: "Tomorrow", value: () => addDays(startOfToday(), 1) },
  { label: "In a week", value: () => addDays(startOfToday(), 7) },
]

const rangePresets: DateRangePreset[] = [
  { label: "Next 7 days", value: () => ({ from: startOfToday(), to: addDays(startOfToday(), 6) }) },
  { label: "Next 30 days", value: () => ({ from: startOfToday(), to: addDays(startOfToday(), 29) }) },
  { label: "This quarter", value: () => ({ from: startOfQuarter(new Date()), to: endOfQuarter(new Date()) }) },
  { label: "Next quarter", value: () => ({ from: startOfQuarter(addDays(endOfQuarter(new Date()), 1)), to: endOfQuarter(addDays(endOfQuarter(new Date()), 1)) }) },
]

export default function DatePickerPresets() {
  return (
    <div className="grid w-[300px] gap-3">
      <DatePicker presets={dayPresets} placeholder="Review date" aria-label="Review date" />
      <DateRangePicker presets={rangePresets} placeholder="Reporting period" aria-label="Reporting period" />
    </div>
  )
}
