import { Field, FieldContent, FieldDescription, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const title = "Choice cards"
export const description = "Wrap a whole field in a label to make a selectable card. The chosen card takes an ink edge."
export const order = 3

const options = [
  { value: "servers", title: "On your servers", body: "Runs inside your data centre. Nothing leaves your network." },
  { value: "cloud", title: "Your cloud", body: "Deployed in your AWS, Azure or GCP account, in your region." },
  { value: "managed", title: "Managed by Quicksort", body: "Hosted in Paris, ISO 27001. Fastest to start." },
]

export default function FieldChoiceCards() {
  return (
    <FieldSet className="w-[420px] max-w-full">
      <FieldLegend variant="label">Where should it run?</FieldLegend>
      <RadioGroup defaultValue="servers">
        {options.map((o) => (
          <FieldLabel key={o.value} htmlFor={`fc-${o.value}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{o.title}</FieldTitle>
                <FieldDescription>{o.body}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={o.value} id={`fc-${o.value}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
