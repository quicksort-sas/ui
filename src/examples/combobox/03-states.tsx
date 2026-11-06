import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

export const title = "States"
export const order = 3

const models = ["Mistral Large", "Llama 3.3 70B", "Claude", "GPT-4.1", "Your fine-tuned model"]

export default function ComboboxStates() {
  return (
    <div className="grid w-[320px] max-w-full gap-6">
      <Field data-invalid>
        <FieldLabel htmlFor="cbs-model">Model</FieldLabel>
        <Combobox items={models}>
          <ComboboxInput id="cbs-model" className="w-full" placeholder="Search a model" aria-invalid showClear />
          <ComboboxContent>
            <ComboboxEmpty>No model found.</ComboboxEmpty>
            <ComboboxList>{(m: string) => <ComboboxItem key={m} value={m}>{m}</ComboboxItem>}</ComboboxList>
          </ComboboxContent>
        </Combobox>
        <FieldError>Choose a model that can run on your servers.</FieldError>
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="cbs-off">Fallback model</FieldLabel>
        <Combobox items={models} defaultValue="Mistral Large">
          <ComboboxInput id="cbs-off" className="w-full" disabled />
        </Combobox>
      </Field>
    </div>
  )
}
