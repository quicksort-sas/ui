import { Badge } from "@/components/ui/badge"

export const title = "Variants"
export const order = 1

export default function BadgeVariants() {
  return (
    <>
      <Badge>In production</Badge>
      <Badge variant="pivot">Live</Badge>
      <Badge variant="secondary">Pilot</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">In review</Badge>
      <Badge variant="destructive">Blocked</Badge>
    </>
  )
}
