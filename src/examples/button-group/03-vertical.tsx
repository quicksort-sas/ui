import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export const title = "Vertical"
export const order = 3

export default function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Replicas">
      <Button variant="outline" size="icon-sm" aria-label="Add a replica"><PlusIcon /></Button>
      <Button variant="outline" size="icon-sm" aria-label="Remove a replica"><MinusIcon /></Button>
    </ButtonGroup>
  )
}
