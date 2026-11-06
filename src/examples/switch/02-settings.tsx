import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export const title = "Settings list"
export const description = "A switch takes effect at once. Use a checkbox when the change waits for a Save button."
export const order = 2

const rows = [
  { id: "audit", t: "Audit log", d: "Record every question and answer for your compliance team.", on: true },
  { id: "pii", t: "Mask personal data", d: "Hide names, IBANs and addresses before they reach the model.", on: true },
  { id: "beta", t: "Early features", d: "Try new tools before general release.", on: false },
]

export default function SwitchSettings() {
  return (
    <FieldGroup className="w-[440px] max-w-full gap-0 divide-y divide-border rounded-lg border border-border">
      {rows.map((r) => (
        <Field key={r.id} orientation="horizontal" className="p-4">
          <FieldContent>
            <FieldLabel htmlFor={`sw-${r.id}`}>{r.t}</FieldLabel>
            <FieldDescription>{r.d}</FieldDescription>
          </FieldContent>
          <Switch id={`sw-${r.id}`} defaultChecked={r.on} />
        </Field>
      ))}
    </FieldGroup>
  )
}
