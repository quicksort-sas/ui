import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const title = "With label and description"
export const order = 2

export default function InputWithField() {
  return (
    <Field className="w-[360px] max-w-full">
      <FieldLabel htmlFor="in-company">Company</FieldLabel>
      <Input id="in-company" placeholder="Banque Delorme" />
      <FieldDescription>We use it to prepare the call. It stays between us.</FieldDescription>
    </Field>
  )
}
