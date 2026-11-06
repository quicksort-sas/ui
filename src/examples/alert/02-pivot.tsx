import { ArrowRightIcon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const title = "Pivot"
export const description = "The one message that matters on the screen gets the lime bar. Once per view."
export const order = 2

export default function AlertPivot() {
  return (
    <div className="grid w-[560px] max-w-full">
      <Alert variant="pivot">
        <AlertTitle>One decision left before go-live</AlertTitle>
        <AlertDescription>Approve the human-review threshold for loans above €5M.</AlertDescription>
        <AlertAction><Button size="sm">Review<ArrowRightIcon data-icon="inline-end" /></Button></AlertAction>
      </Alert>
    </div>
  )
}
