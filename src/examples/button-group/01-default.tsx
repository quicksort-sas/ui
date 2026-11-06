import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export const title = "Default"
export const description = "Related actions joined into one control. Neighbours share a single border."
export const order = 1

export default function ButtonGroupDefault() {
  return (
    <>
      <ButtonGroup>
        <Button variant="outline">Draft</Button>
        <Button variant="outline">Review</Button>
        <Button variant="outline">Publish</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Report pages">
        <Button variant="outline" size="icon" aria-label="Previous report"><ChevronLeftIcon /></Button>
        <Button variant="outline" size="icon" aria-label="Next report"><ChevronRightIcon /></Button>
      </ButtonGroup>
    </>
  )
}
