import { QuicksortMark } from "@/components/quicksort/logo"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Message, MessageAvatar, MessageContent, MessageHeader, MessageTime } from "@/components/ui/message"
import {
  MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport,
} from "@/components/ui/message-scroller"

export const title = "Conversation"
export const description = "Opens at the latest message and keeps to it as new ones arrive. Scroll up and a button brings you back."
export const order = 1

const thread: { id: string; from: "user" | "assistant"; time: string; text: string }[] = [
  { id: "1", from: "user", time: "09:02", text: "We want to start the credit-review pilot on the corporate desk. What do you need from us?" },
  { id: "2", from: "assistant", time: "09:02", text: "Three things: read access to the credit folder, the current risk policy, and two analysts for a week of testing." },
  { id: "3", from: "user", time: "09:05", text: "The policy is v4.2. Access goes through IT, it usually takes a week." },
  { id: "4", from: "assistant", time: "09:05", text: "Then we can start testing on 10 November and be in production by mid-February: 14 weeks end to end." },
  { id: "5", from: "user", time: "09:07", text: "What happens to the files? Compliance will ask." },
  { id: "6", from: "assistant", time: "09:07", text: "They never leave the bank. The models run on your servers, and every answer links back to the page it came from." },
  { id: "7", from: "user", time: "09:09", text: "And how do we know it works?" },
  { id: "8", from: "assistant", time: "09:09", text: "We measure review time per file before and after. In the last pilot it went from 45 minutes to 12, on 1,140 files." },
]

export default function MessageScrollerExample() {
  return (
    <div className="h-[440px] w-[600px] max-w-full overflow-hidden rounded-lg border border-border bg-background">
      <MessageScrollerProvider defaultScrollPosition="end">
        <MessageScroller>
          <MessageScrollerViewport aria-label="Conversation with the assistant" className="px-5">
            <MessageScrollerContent className="py-5">
              <MessageScrollerItem><Marker variant="separator"><MarkerContent>Mon 3 Nov</MarkerContent></Marker></MessageScrollerItem>
              {thread.map((m) => (
                <MessageScrollerItem key={m.id} messageId={m.id} scrollAnchor={m.from === "user"}>
                  <Message align={m.from === "user" ? "end" : "start"}>
                    {m.from === "assistant" && <MessageAvatar><QuicksortMark className="h-3.5 text-foreground" /></MessageAvatar>}
                    <MessageContent>
                      <MessageHeader>{m.from === "user" ? "Claire Lemoine" : "Assistant"}<MessageTime>{m.time}</MessageTime></MessageHeader>
                      <Bubble variant={m.from}><BubbleContent>{m.text}</BubbleContent></Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
