import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const title = "States"
export const description = "Invalid fields show a red outline and say what to fix. Disabled fields fade to 45%."
export const order = 3

export default function InputStates() {
  return (
    <div className="grid w-[360px] max-w-full gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="in-mail-bad">Work email</FieldLabel>
        <Input id="in-mail-bad" type="email" defaultValue="camille@gmail" aria-invalid />
        <FieldError>Use your work address, for example camille@company.com.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="in-ref">Engagement reference</FieldLabel>
        <Input id="in-ref" defaultValue="QS-2026-0418" disabled />
      </Field>
    </div>
  )
}
