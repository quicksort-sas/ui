import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export const title = "Disabled"
export const order = 2

export default function LabelDisabled() {
  return (
    <div className="grid w-[320px] max-w-full gap-6">
      <Field data-disabled>
        <FieldLabel htmlFor="lb-region">Hosting region</FieldLabel>
        <Input id="lb-region" disabled defaultValue="Paris (eu-west-3)" />
      </Field>
      <Field orientation="horizontal" data-disabled>
        <Checkbox id="lb-sso" disabled />
        <FieldLabel htmlFor="lb-sso">Single sign-on (Enterprise plan)</FieldLabel>
      </Field>
    </div>
  )
}
