import { CircleAlertIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const title = "Variants"
export const description = "Neutral by default. Status variants tint the icon and add a 2px edge in their colour."
export const order = 1

export default function AlertVariants() {
  return (
    <div className="grid w-[560px] max-w-full gap-3">
      <Alert>
        <InfoIcon />
        <AlertTitle>Evaluations run nightly at 02:00 CET</AlertTitle>
        <AlertDescription>Results appear on the overview by 06:00.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheckIcon />
        <AlertTitle>v2.4 is live</AlertTitle>
        <AlertDescription>320 analysts moved over at 18:02. No errors so far.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Pilot ends in 3 days</AlertTitle>
        <AlertDescription>Book the go/no-go review with the claims director before Friday.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>14 documents failed to ingest</AlertTitle>
        <AlertDescription>Scanned PDFs without a text layer. <a href="#">See the list</a>.</AlertDescription>
      </Alert>
    </div>
  )
}
