import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export const title = "Horizontal fields"
export const order = 4

export default function FieldSettings() {
  return (
    <FieldSet className="w-[440px] max-w-full">
      <FieldLegend>Assistant settings</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="fs-cite">Cite sources in every answer</FieldLabel>
            <FieldDescription>Links each claim to the page of the credit file it came from.</FieldDescription>
          </FieldContent>
          <Switch id="fs-cite" defaultChecked />
        </Field>
        <Field orientation="horizontal" data-disabled>
          <FieldContent>
            <FieldLabel htmlFor="fs-web">Search the web</FieldLabel>
            <FieldDescription>Turned off by your administrator.</FieldDescription>
          </FieldContent>
          <Switch id="fs-web" disabled />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="fs-weekly" defaultChecked />
          <FieldLabel htmlFor="fs-weekly">Email me a weekly usage report</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
