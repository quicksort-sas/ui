import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

export const title = "With an icon"
export const order = 1

export default function InputGroupIcon() {
  return (
    <InputGroup className="w-[340px] max-w-full">
      <InputGroupInput placeholder="Search case studies" aria-label="Search case studies" />
      <InputGroupAddon><SearchIcon /></InputGroupAddon>
    </InputGroup>
  )
}
