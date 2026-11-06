import { Button } from "@/components/ui/button"

export const title = "Sizes"
export const order = 2

export default function ButtonSizes() {
  return (
    <>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </>
  )
}
