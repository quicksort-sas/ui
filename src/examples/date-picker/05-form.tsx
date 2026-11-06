import { startOfToday } from "date-fns"
import { Button } from "@/components/ui/button"
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"

export const title = "In a form"
export const description = "Each picker writes ISO dates to hidden inputs, so a plain form submit just works."
export const order = 5

const today = startOfToday()

export default function DatePickerForm() {
  return (
    <form className="grid w-[360px] max-w-full gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-1">
        <span className="label-mono">Event</span>
        <p className="text-[15px] font-medium">Build Night, 7 Nov 2026</p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dp-workshop">Workshop date</Label>
        <DatePicker
          id="dp-workshop"
          name="workshop"
          aria-describedby="dp-workshop-help"
          defaultValue={new Date(2026, 10, 7)}
          disabledDates={[{ before: today }, { dayOfWeek: [0] }]}
        />
        <p id="dp-workshop-help" className="text-[13px] text-muted-foreground">Half a day with your team, at our Paris office.</p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dp-pilot">Pilot period</Label>
        <DateRangePicker id="dp-pilot" name="pilot" placeholder="Start and end" />
        <p className="text-[13px] text-muted-foreground">Most pilots run six to ten weeks.</p>
      </div>
      <Button type="submit" className="justify-self-start">Continue</Button>
    </form>
  )
}
