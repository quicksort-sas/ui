import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"

export const title = "With text"
export const order = 2

export default function InputGroupWithText() {
  return (
    <div className="grid w-[360px] max-w-full gap-6">
      <Field>
        <FieldLabel htmlFor="ig-budget">Budget</FieldLabel>
        <InputGroup>
          <InputGroupAddon><InputGroupText>€</InputGroupText></InputGroupAddon>
          <InputGroupInput id="ig-budget" inputMode="numeric" placeholder="120 000" className="num" />
          <InputGroupAddon align="inline-end"><InputGroupText>excl. VAT</InputGroupText></InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-domain">Workspace address</FieldLabel>
        <InputGroup>
          <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
          <InputGroupInput id="ig-domain" placeholder="your-bank" />
          <InputGroupAddon align="inline-end"><InputGroupText>.quicksort.fr</InputGroupText></InputGroupAddon>
        </InputGroup>
        <FieldDescription>Lowercase letters and hyphens only.</FieldDescription>
      </Field>
    </div>
  )
}
