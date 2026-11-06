import { Button } from "@/components/ui/button"

export const title = "Variants"
export const description = "Ink is the default action. Use lime once per screen, for the action that matters most."
export const order = 1

export default function ButtonVariants() {
  return (
    <>
      <Button variant="pivot">Book a call</Button>
      <Button>Continue</Button>
      <Button variant="outline">See case studies</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="link">Read the brief</Button>
    </>
  )
}
