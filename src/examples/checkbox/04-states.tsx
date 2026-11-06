import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"

export const title = "States"
export const order = 4

export default function CheckboxStates() {
  return (
    <div className="grid w-[360px] max-w-full gap-6">
      <Field orientation="horizontal" data-invalid>
        <Checkbox id="cs-terms" aria-invalid />
        <FieldContent>
          <FieldLabel htmlFor="cs-terms">I accept the data processing agreement</FieldLabel>
          <FieldError>Accept the agreement to start the pilot.</FieldError>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="cs-off" disabled />
        <FieldLabel htmlFor="cs-off">Share anonymised usage with Quicksort</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="cs-on" disabled defaultChecked />
        <FieldLabel htmlFor="cs-on">Encrypt data at rest</FieldLabel>
      </Field>
    </div>
  )
}
