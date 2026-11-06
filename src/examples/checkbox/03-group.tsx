import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"

export const title = "Group"
export const order = 3

const sources = [
  { id: "credit", label: "Credit files", checked: true },
  { id: "policies", label: "Internal policies", checked: true },
  { id: "emails", label: "Client emails", checked: false },
  { id: "market", label: "Market data feeds", checked: false },
]

export default function CheckboxGroup() {
  return (
    <FieldSet className="w-[340px] max-w-full">
      <FieldLegend variant="label">Sources the assistant can read</FieldLegend>
      <FieldDescription>Each source is indexed on your servers.</FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {sources.map((s) => (
          <Field key={s.id} orientation="horizontal">
            <Checkbox id={`cg-${s.id}`} defaultChecked={s.checked} />
            <FieldLabel htmlFor={`cg-${s.id}`}>{s.label}</FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
