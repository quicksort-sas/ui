import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"

export const title = "With description"
export const order = 2

export default function CheckboxDescription() {
  return (
    <Field orientation="horizontal" className="w-[380px] max-w-full">
      <Checkbox id="cb-nda" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="cb-nda">Sign an NDA before the call</FieldLabel>
        <FieldDescription>We send our standard mutual NDA. Your legal team can redline it.</FieldDescription>
      </FieldContent>
    </Field>
  )
}
