import { Field, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const title = "Default"
export const order = 1

export default function RadioGroupDefault() {
  return (
    <RadioGroup defaultValue="banking" aria-label="Industry" className="w-fit">
      {["Banking", "Insurance", "Energy", "Public sector"].map((label) => {
        const v = label.toLowerCase().replace(" ", "-")
        return (
          <Field key={v} orientation="horizontal">
            <RadioGroupItem value={v} id={`rg-${v}`} />
            <FieldLabel htmlFor={`rg-${v}`}>{label}</FieldLabel>
          </Field>
        )
      })}
    </RadioGroup>
  )
}
