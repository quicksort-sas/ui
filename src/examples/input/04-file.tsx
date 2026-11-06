import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const title = "File"
export const order = 4

export default function InputFile() {
  return (
    <Field className="w-[360px] max-w-full">
      <FieldLabel htmlFor="in-brief">Your brief</FieldLabel>
      <Input id="in-brief" type="file" accept=".pdf,.docx" />
      <FieldDescription>PDF or Word, up to 20 MB.</FieldDescription>
    </Field>
  )
}
