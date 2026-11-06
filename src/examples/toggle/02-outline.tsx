import { BookmarkIcon, EyeIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export const title = "Outline, with text and sizes"
export const order = 2

export default function ToggleOutline() {
  return (
    <>
      <Toggle variant="outline" size="sm" defaultPressed><EyeIcon data-icon="inline-start" />Show sources</Toggle>
      <Toggle variant="outline"><BookmarkIcon data-icon="inline-start" />Save case study</Toggle>
      <Toggle variant="outline" size="lg">Reviewer notes</Toggle>
      <Toggle variant="outline" disabled>Archived</Toggle>
    </>
  )
}
