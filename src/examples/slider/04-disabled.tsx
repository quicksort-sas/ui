import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export const title = "Disabled"
export const order = 4

export default function SliderDisabled() {
  return (
    <Field className="w-[380px] max-w-full gap-3" data-disabled>
      <FieldLabel id="sl-temp-label">Creativity</FieldLabel>
      <Slider defaultValue={[20]} disabled aria-labelledby="sl-temp-label" />
      <FieldDescription>Locked by your administrator for credit decisions.</FieldDescription>
    </Field>
  )
}
