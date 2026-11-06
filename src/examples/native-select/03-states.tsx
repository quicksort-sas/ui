import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export const title = "Sizes and states"
export const order = 3

export default function NativeSelectStates() {
  return (
    <div className="grid w-[300px] max-w-full gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="nss-len">Call length</FieldLabel>
        <NativeSelect id="nss-len" className="w-full" defaultValue="" aria-invalid>
          <NativeSelectOption value="" disabled>Choose a length</NativeSelectOption>
          <NativeSelectOption value="30">30 minutes</NativeSelectOption>
          <NativeSelectOption value="60">60 minutes</NativeSelectOption>
        </NativeSelect>
        <FieldError>Choose how long you need.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="nss-lang">Language</FieldLabel>
        <NativeSelect id="nss-lang" className="w-full" disabled defaultValue="fr">
          <NativeSelectOption value="fr">French</NativeSelectOption>
        </NativeSelect>
      </Field>
      <NativeSelect size="sm" defaultValue="10" aria-label="Rows per page">
        <NativeSelectOption value="10">10 per page</NativeSelectOption>
        <NativeSelectOption value="25">25 per page</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
