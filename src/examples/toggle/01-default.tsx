import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export const title = "Default"
export const description = "Ghost by default. Pressed toggles sit on the accent surface in ink."
export const order = 1

export default function ToggleDefault() {
  return (
    <>
      <Toggle aria-label="Bold" defaultPressed><BoldIcon /></Toggle>
      <Toggle aria-label="Italic"><ItalicIcon /></Toggle>
      <Toggle aria-label="Underline"><UnderlineIcon /></Toggle>
    </>
  )
}
