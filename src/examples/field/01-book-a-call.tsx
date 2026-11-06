import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const title = "Book a strategy call"
export const description = "Fields stack label, control and help text with the same rhythm everywhere."
export const order = 1

export default function FieldBookACall() {
  return (
    <form className="w-[420px] max-w-full" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Book a strategy call</FieldLegend>
        <FieldDescription>Thirty minutes with a senior strategist. We read your brief first.</FieldDescription>
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="f-first">First name</FieldLabel>
              <Input id="f-first" placeholder="Camille" autoComplete="given-name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="f-last">Last name</FieldLabel>
              <Input id="f-last" placeholder="Durand" autoComplete="family-name" />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="f-mail">Work email</FieldLabel>
            <Input id="f-mail" type="email" placeholder="camille@company.com" autoComplete="email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="f-brief">What should we know?</FieldLabel>
            <Textarea id="f-brief" placeholder="The decision you face, the data you have, the deadline." />
            <FieldDescription>Optional. A few lines are enough.</FieldDescription>
          </Field>
          <Field orientation="horizontal" className="justify-end">
            <Button type="button" variant="ghost">Cancel</Button>
            <Button type="submit" variant="pivot">Book a call</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
