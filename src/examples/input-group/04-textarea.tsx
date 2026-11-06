import { ArrowUpIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

export const title = "With a textarea"
export const description = "Addons can sit above or below the control, for a composer or a note."
export const order = 4

export default function InputGroupTextareaExample() {
  return (
    <InputGroup className="w-[440px] max-w-full">
      <InputGroupTextarea placeholder="Ask about the credit-review pilot…" aria-label="Question" />
      <InputGroupAddon align="block-end" className="justify-between border-t">
        <InputGroupText className="font-mono text-[11px] text-faint">Runs on your servers</InputGroupText>
        <InputGroupButton size="icon-xs" variant="default" aria-label="Send"><ArrowUpIcon /></InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
