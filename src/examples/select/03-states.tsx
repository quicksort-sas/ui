import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const title = "States"
export const order = 3

const sizes = { s: "1–50 people", m: "51–500 people", l: "More than 500" }

export default function SelectStates() {
  return (
    <div className="grid w-[300px] max-w-full gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="ss-size">Company size</FieldLabel>
        <Select items={sizes}>
          <SelectTrigger id="ss-size" className="w-full" aria-invalid>
            <SelectValue placeholder="Choose a size" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(sizes).map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
        <FieldError>Choose a company size.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="ss-plan">Plan</FieldLabel>
        <Select items={{ ent: "Enterprise" }} defaultValue="ent" disabled>
          <SelectTrigger id="ss-plan" className="w-full"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="ent">Enterprise</SelectItem></SelectContent>
        </Select>
      </Field>
      <Select items={sizes} defaultValue="m">
        <SelectTrigger size="sm" aria-label="Company size, small trigger"><SelectValue /></SelectTrigger>
        <SelectContent>
          {Object.entries(sizes).map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  )
}
