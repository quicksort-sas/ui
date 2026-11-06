import { Field, FieldContent, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const title = "With description"
export const order = 2

const options = [
  { v: "servers", t: "On your servers", d: "Inside your data centre. Nothing leaves your network." },
  { v: "cloud", t: "Your cloud", d: "Your AWS, Azure or GCP account, in your region." },
  { v: "managed", t: "Managed by Quicksort", d: "Hosted in Paris. Fastest to start." },
]

export default function RadioGroupDescription() {
  return (
    <FieldSet className="w-[380px] max-w-full">
      <FieldLegend variant="label">Deployment</FieldLegend>
      <RadioGroup defaultValue="cloud">
        {options.map((o) => (
          <Field key={o.v} orientation="horizontal">
            <RadioGroupItem value={o.v} id={`rd-${o.v}`} />
            <FieldContent>
              <FieldLabel htmlFor={`rd-${o.v}`}>{o.t}</FieldLabel>
              <FieldDescription>{o.d}</FieldDescription>
            </FieldContent>
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
