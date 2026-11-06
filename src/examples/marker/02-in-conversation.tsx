import { CheckIcon } from "lucide-react"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

export const title = "In a conversation"
export const order = 2

export default function MarkerInConversation() {
  return (
    <div className="grid w-[560px] max-w-full gap-4">
      <Bubble variant="assistant"><BubbleContent>The memo is ready for review.</BubbleContent></Bubble>
      <Marker variant="separator"><MarkerContent>Thu 6 Nov</MarkerContent></Marker>
      <Marker>
        <MarkerIcon><CheckIcon className="text-success" /></MarkerIcon>
        <MarkerContent>Memo approved by <b>Marc Aubert</b>, credit committee · <a href="#">open the memo</a></MarkerContent>
      </Marker>
      <Bubble variant="user" align="end"><BubbleContent>Send it to the client team.</BubbleContent></Bubble>
    </div>
  )
}
