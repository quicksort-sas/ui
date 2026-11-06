import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export const title = "With label and description"
export const order = 2

export default function TextareaField() {
  return (
    <Field className="w-[420px] max-w-full">
      <FieldLabel htmlFor="ta-context">Context</FieldLabel>
      <Textarea id="ta-context" placeholder="Credit review takes our analysts 45 minutes per file. We want to know what an assistant could change, and what it would take to run it on our own servers." />
      <FieldDescription>A few lines are enough. We read it before the call.</FieldDescription>
    </Field>
  )
}
