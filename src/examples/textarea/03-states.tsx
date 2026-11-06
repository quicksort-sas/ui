import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export const title = "States"
export const order = 3

export default function TextareaStates() {
  return (
    <div className="grid w-[420px] max-w-full gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="ta-goal">Goal of the project</FieldLabel>
        <Textarea id="ta-goal" defaultValue="AI" aria-invalid />
        <FieldError>Tell us a little more: at least 20 characters.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="ta-notes">Strategist notes</FieldLabel>
        <Textarea id="ta-notes" disabled defaultValue="Shared after the call." />
      </Field>
    </div>
  )
}
