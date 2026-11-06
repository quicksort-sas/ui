import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const title = "Validation"
export const description = "Mark the field with data-invalid and the control with aria-invalid, then say how to fix it."
export const order = 2

export default function FieldValidation() {
  return (
    <FieldGroup className="w-[380px] max-w-full">
      <Field data-invalid>
        <FieldLabel htmlFor="fv-mail">Work email</FieldLabel>
        <Input id="fv-mail" type="email" defaultValue="camille.durand@gmail.com" aria-invalid aria-describedby="fv-mail-err" />
        <FieldError id="fv-mail-err">Use your company address. We don't book calls from personal email.</FieldError>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="fv-size">Team size</FieldLabel>
        <Input id="fv-size" inputMode="numeric" defaultValue="0" aria-invalid className="num" />
        <FieldDescription>People who would use the tool every week.</FieldDescription>
        <FieldError errors={[{ message: "Enter at least 1 person." }]} />
      </Field>
    </FieldGroup>
  )
}
