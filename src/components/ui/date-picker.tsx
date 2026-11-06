"use client"

import * as React from "react"
import { cn } from "cn"
import { format as formatDate, isSameDay } from "date-fns"
import type { DateRange, Matcher } from "react-day-picker"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

/* -------------------------------------------------------------------------- */
/* Shared                                                                      */
/* -------------------------------------------------------------------------- */

/** A shortcut shown in the side list. `value` may be a function so "Today" is computed on click. */
type DatePreset<T> = { label: string; value: T | (() => T) }
type DatePickerPreset = DatePreset<Date>
type DateRangePreset = DatePreset<DateRange>

const resolve = <T,>(v: T | (() => T)): T => (typeof v === "function" ? (v as () => T)() : v)

/** Controlled when `value` is not undefined (pass `null` for a controlled empty value). */
function useControllable<T>(
  value: T | null | undefined,
  defaultValue: T | undefined,
  onChange: ((v: T | undefined) => void) | undefined
) {
  const [inner, setInner] = React.useState<T | undefined>(defaultValue)
  const controlled = value !== undefined
  const current = controlled ? (value ?? undefined) : inner
  const set = React.useCallback(
    (next: T | undefined) => {
      if (!controlled) setInner(next)
      onChange?.(next)
    },
    [controlled, onChange]
  )
  return [current, set] as const
}

function useMediaQuery(query: string) {
  return React.useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query)
      m.addEventListener("change", cb)
      return () => m.removeEventListener("change", cb)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}

/** The field that opens the calendar. Matches the input: 40px, hairline outline, ink focus. */
const triggerClassName =
  "group/date-picker inline-flex h-10 w-full min-w-0 items-center gap-2.5 rounded-lg border border-input bg-transparent px-3 text-left text-[15px] text-foreground transition-[border-color,box-shadow] duration-150 outline-none select-none hover:border-[color-mix(in_srgb,var(--input),var(--foreground)_35%)] focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/15 data-[popup-open]:border-foreground disabled:pointer-events-none disabled:opacity-45 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground"

type TriggerProps = {
  id?: string
  className?: string
  disabled?: boolean
  placeholder: string
  label?: string
  "aria-invalid"?: boolean
  "aria-describedby"?: string
}

function DatePickerTrigger({ className, placeholder, label, ...props }: TriggerProps) {
  return (
    <PopoverTrigger
      data-slot="date-picker-trigger"
      data-placeholder={label ? undefined : ""}
      className={cn(triggerClassName, className)}
      {...props}
    >
      <CalendarIcon aria-hidden />
      <span className="min-w-0 flex-1 truncate">{label ?? placeholder}</span>
    </PopoverTrigger>
  )
}

function DatePickerPresets<T>({
  presets,
  isActive,
  onSelect,
}: {
  presets: DatePreset<T>[]
  isActive: (value: T) => boolean
  onSelect: (value: T) => void
}) {
  return (
    <div
      data-slot="date-picker-presets"
      className="flex shrink-0 flex-row gap-1 overflow-x-auto border-b border-border p-1.5 sm:w-40 sm:flex-col sm:border-r sm:border-b-0"
    >
      <span className="label-mono hidden px-2.5 pt-2 pb-1.5 text-[10px] sm:block">Shortcuts</span>
      {presets.map((preset) => {
        const value = resolve(preset.value)
        const active = isActive(value)
        return (
          <Button
            key={preset.label}
            type="button"
            variant="ghost"
            size="sm"
            data-active={active || undefined}
            aria-pressed={active}
            className="h-8 shrink-0 justify-start rounded-md px-2.5 text-[14px] font-normal text-muted-foreground hover:text-foreground data-active:bg-accent data-active:font-medium data-active:text-foreground"
            onClick={() => onSelect(resolve(preset.value))}
          >
            {preset.label}
          </Button>
        )
      })}
    </div>
  )
}

type CalendarPassThrough = Omit<
  React.ComponentProps<typeof Calendar>,
  "mode" | "selected" | "onSelect" | "disabled" | "month" | "onMonthChange" | "required"
>

type BaseProps = {
  /** Text when nothing is selected. */
  placeholder?: string
  /** A date-fns format string. Default "d MMM yyyy" (7 Nov 2026). */
  format?: string
  /** Days that cannot be picked, e.g. `{ before: new Date() }` or `{ dayOfWeek: [0, 6] }`. */
  disabledDates?: Matcher | Matcher[]
  /** Disables the whole field. */
  disabled?: boolean
  /** Name of a hidden input carrying the ISO date (yyyy-MM-dd), for native forms. */
  name?: string
  id?: string
  className?: string
  align?: "start" | "center" | "end"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  "aria-invalid"?: boolean
  "aria-describedby"?: string
  /** Extra props for the Calendar (locale, weekStartsOn, captionLayout…). */
  calendarProps?: CalendarPassThrough
}

const ISO = "yyyy-MM-dd"

/* -------------------------------------------------------------------------- */
/* DatePicker: one day                                                         */
/* -------------------------------------------------------------------------- */

type DatePickerProps = BaseProps & {
  value?: Date | null
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  presets?: DatePickerPreset[]
}

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a date",
  format = "d MMM yyyy",
  disabledDates,
  disabled,
  presets,
  name,
  id,
  className,
  align = "start",
  open: openProp,
  onOpenChange,
  calendarProps,
  ...aria
}: DatePickerProps) {
  const [date, setDate] = useControllable(value, defaultValue, onValueChange)
  const [openInner, setOpenInner] = React.useState(false)
  const open = openProp ?? openInner
  const setOpen = (next: boolean) => {
    setOpenInner(next)
    onOpenChange?.(next)
  }
  const [month, setMonth] = React.useState<Date>(date ?? new Date())
  React.useEffect(() => {
    if (open) setMonth(date ?? new Date())
    // Only re-centre on open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const pick = (next: Date | undefined) => {
    setDate(next)
    if (next) setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <DatePickerTrigger
        id={id}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
        label={date ? formatDate(date, format) : undefined}
        {...aria}
      />
      {name && <input type="hidden" name={name} value={date ? formatDate(date, ISO) : ""} />}
      <PopoverContent
        data-slot="date-picker-content"
        align={align}
        className="w-auto flex-col gap-0 overflow-hidden p-0 sm:flex-row"
      >
        {presets?.length ? (
          <DatePickerPresets
            presets={presets}
            isActive={(v) => !!date && isSameDay(v, date)}
            onSelect={(v) => {
              setMonth(v)
              pick(v)
            }}
          />
        ) : null}
        <Calendar
          {...calendarProps}
          mode="single"
          selected={date}
          onSelect={pick}
          month={month}
          onMonthChange={setMonth}
          disabled={disabledDates}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}

/* -------------------------------------------------------------------------- */
/* DateRangePicker: from and to, two months on desktop                         */
/* -------------------------------------------------------------------------- */

type DateRangePickerProps = BaseProps & {
  value?: DateRange | null
  defaultValue?: DateRange
  onValueChange?: (range: DateRange | undefined) => void
  presets?: DateRangePreset[]
  /** Months shown side by side from 768px. Default 2. */
  numberOfMonths?: number
  /** Name prefix for hidden inputs: `<name>_from` and `<name>_to`. */
  name?: string
}

function formatRange(range: DateRange | undefined, fmt: string, custom: boolean) {
  if (!range?.from) return undefined
  if (!range.to) return `${formatDate(range.from, fmt)} –`
  if (isSameDay(range.from, range.to)) return formatDate(range.from, fmt)
  // "3 Nov – 14 Dec 2026": drop the first year when both ends share it (default format only).
  const sameYear = range.from.getFullYear() === range.to.getFullYear()
  const fromFmt = !custom && sameYear ? "d MMM" : fmt
  return `${formatDate(range.from, fromFmt)} – ${formatDate(range.to, fmt)}`
}

function DateRangePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a period",
  format,
  disabledDates,
  disabled,
  presets,
  numberOfMonths = 2,
  name,
  id,
  className,
  align = "start",
  open: openProp,
  onOpenChange,
  calendarProps,
  ...aria
}: DateRangePickerProps) {
  const [range, setRange] = useControllable(value, defaultValue, onValueChange)
  const [openInner, setOpenInner] = React.useState(false)
  const open = openProp ?? openInner
  const setOpen = (next: boolean) => {
    setOpenInner(next)
    onOpenChange?.(next)
  }
  const desktop = useMediaQuery("(min-width: 768px)")
  const [month, setMonth] = React.useState<Date>(range?.from ?? new Date())
  React.useEffect(() => {
    if (open) setMonth(range?.from ?? new Date())
    // Only re-centre on open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <DatePickerTrigger
        id={id}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
        label={formatRange(range, format ?? "d MMM yyyy", !!format)}
        {...aria}
      />
      {name && (
        <>
          <input type="hidden" name={`${name}_from`} value={range?.from ? formatDate(range.from, ISO) : ""} />
          <input type="hidden" name={`${name}_to`} value={range?.to ? formatDate(range.to, ISO) : ""} />
        </>
      )}
      <PopoverContent
        data-slot="date-picker-content"
        align={align}
        className="w-auto max-w-[calc(100vw-1rem)] flex-col gap-0 overflow-hidden p-0 sm:flex-row"
      >
        {presets?.length ? (
          <DatePickerPresets
            presets={presets}
            isActive={(v) =>
              !!range?.from && !!range.to && !!v.from && !!v.to &&
              isSameDay(v.from, range.from) && isSameDay(v.to, range.to)
            }
            onSelect={(v) => {
              setRange(v)
              if (v.from) setMonth(v.from)
              setOpen(false)
            }}
          />
        ) : null}
        <Calendar
          {...calendarProps}
          mode="range"
          selected={range}
          onSelect={setRange}
          month={month}
          onMonthChange={setMonth}
          numberOfMonths={desktop ? numberOfMonths : 1}
          showOutsideDays={!desktop || numberOfMonths < 2}
          disabled={disabledDates}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export {
  DatePicker,
  DateRangePicker,
  type DatePickerProps,
  type DateRangePickerProps,
  type DatePickerPreset,
  type DateRangePreset,
}
