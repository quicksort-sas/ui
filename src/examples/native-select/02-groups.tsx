import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select"

export const title = "Groups, in a field"
export const description = "Use the native select on mobile-heavy forms: the phone shows its own picker."
export const order = 2

export default function NativeSelectGroups() {
  return (
    <Field className="w-[300px] max-w-full">
      <FieldLabel htmlFor="ns-deploy">Deployment</FieldLabel>
      <NativeSelect id="ns-deploy" className="w-full" defaultValue="paris">
        <NativeSelectOptGroup label="On your servers">
          <NativeSelectOption value="dc">Your data centre</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Your cloud">
          <NativeSelectOption value="paris">Paris (eu-west-3)</NativeSelectOption>
          <NativeSelectOption value="frankfurt">Frankfurt (eu-central-1)</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
      <FieldDescription>You can move it later. Migration takes about a week.</FieldDescription>
    </Field>
  )
}
