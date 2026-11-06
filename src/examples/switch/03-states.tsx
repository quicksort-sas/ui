import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export const title = "Sizes and states"
export const order = 3

export default function SwitchStates() {
  return (
    <div className="grid w-[380px] max-w-full gap-6">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="ss-sm">Compact view</FieldLabel>
        <Switch id="ss-sm" size="sm" defaultChecked />
      </Field>
      <Field orientation="horizontal" data-disabled>
        <FieldContent>
          <FieldLabel htmlFor="ss-off">Single sign-on</FieldLabel>
          <FieldDescription>Available on the Enterprise plan.</FieldDescription>
        </FieldContent>
        <Switch id="ss-off" disabled />
      </Field>
      <Field orientation="horizontal" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="ss-bad">Export to the data lake</FieldLabel>
          <FieldError>Add a storage bucket first.</FieldError>
        </FieldContent>
        <Switch id="ss-bad" aria-invalid />
      </Field>
    </div>
  )
}
