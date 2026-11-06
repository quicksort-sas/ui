import * as React from "react"
import { addDays, endOfQuarter, isSameDay, startOfQuarter } from "date-fns"
import type { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export const title = "The open panel"
export const description = "What the range picker shows when it opens: shortcuts on the left, two months on the right."
export const order = 6

const base = new Date(2026, 10, 6)
const presets: { label: string; value: DateRange }[] = [
  { label: "Today", value: { from: base, to: base } },
  { label: "Next 7 days", value: { from: base, to: addDays(base, 6) } },
  { label: "Next 30 days", value: { from: base, to: addDays(base, 29) } },
  { label: "This quarter", value: { from: startOfQuarter(base), to: endOfQuarter(base) } },
]

export default function DatePickerOpenPanel() {
  const [range, setRange] = React.useState<DateRange | undefined>(presets[1].value)
  const same = (v: DateRange) => !!range?.from && !!range.to && isSameDay(v.from!, range.from) && isSameDay(v.to!, range.to)
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-popover shadow-[0_12px_32px_-12px_rgb(20_20_20/0.25)] sm:flex-row">
      <div className="flex shrink-0 flex-row gap-1 overflow-x-auto border-b border-border p-1.5 sm:w-40 sm:flex-col sm:border-r sm:border-b-0">
        <span className="label-mono hidden px-2.5 pt-2 pb-1.5 text-[10px] sm:block">Shortcuts</span>
        {presets.map((p) => (
          <Button
            key={p.label}
            variant="ghost"
            size="sm"
            data-active={same(p.value) || undefined}
            aria-pressed={same(p.value)}
            className="h-8 shrink-0 justify-start rounded-md px-2.5 text-[14px] font-normal text-muted-foreground hover:text-foreground data-active:bg-accent data-active:font-medium data-active:text-foreground"
            onClick={() => setRange(p.value)}
          >
            {p.label}
          </Button>
        ))}
      </div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        showOutsideDays={false}
        defaultMonth={new Date(2026, 10, 1)}
        className="bg-transparent"
      />
    </div>
  )
}
