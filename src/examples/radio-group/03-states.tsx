import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const title = "States"
export const order = 3

export default function RadioGroupStates() {
  return (
    <div className="grid w-[360px] max-w-full gap-8">
      <FieldSet data-invalid>
        <FieldLegend variant="label">Call length</FieldLegend>
        <RadioGroup aria-invalid>
          {["30 minutes", "60 minutes"].map((l, i) => (
            <Field key={l} orientation="horizontal">
              <RadioGroupItem value={String(i)} id={`rs-${i}`} aria-invalid />
              <FieldLabel htmlFor={`rs-${i}`}>{l}</FieldLabel>
            </Field>
          ))}
        </RadioGroup>
        <FieldError>Choose how long you need.</FieldError>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Language</FieldLegend>
        <RadioGroup defaultValue="fr" disabled>
          {[["fr", "French"], ["en", "English"]].map(([v, l]) => (
            <Field key={v} orientation="horizontal" data-disabled>
              <RadioGroupItem value={v} id={`rl-${v}`} />
              <FieldLabel htmlFor={`rl-${v}`}>{l}</FieldLabel>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
