import { PivotLabel } from "@/components/quicksort/pivot"

export const title = "Label and pulse"
export const description = "A mono label led by the dot. The pulse is for something live; it stops when the user prefers reduced motion."
export const order = 2

export default function PivotWithLabel() {
  return <PivotLabel pulse>Live · credit review assistant</PivotLabel>
}
