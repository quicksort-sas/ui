import { Bubble, BubbleContent } from "@/components/ui/bubble"

export const title = "Variants"
export const description = "user (ink) for the person, assistant (card and hairline) for the model, muted for system notes, destructive for errors."
export const order = 1

export default function BubbleVariants() {
  return (
    <div className="grid w-[560px] max-w-full gap-3">
      <Bubble variant="user" align="end"><BubbleContent>Can it read scanned PDFs?</BubbleContent></Bubble>
      <Bubble variant="assistant"><BubbleContent>Yes. Scans go through OCR on your servers first, then the same review as any other file.</BubbleContent></Bubble>
      <Bubble variant="muted"><BubbleContent>Claire added the risk policy v4.2 to this conversation.</BubbleContent></Bubble>
      <Bubble variant="destructive"><BubbleContent>The file could not be read: the PDF is password protected.</BubbleContent></Bubble>
    </div>
  )
}
