import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent, MessageFooter, MessageGroup, MessageHeader, MessageTime } from "@/components/ui/message"

export const title = "Without avatars"
export const description = "For a narrow side panel."
export const order = 2

export default function MessageWithoutAvatars() {
  return (
    <MessageGroup className="w-[420px] max-w-full">
      <Message align="end">
        <MessageContent>
          <Bubble variant="user"><BubbleContent>Draft the memo for Fabre Logistique.</BubbleContent></Bubble>
          <MessageFooter>Sent 14:02</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <MessageHeader>Assistant<MessageTime>14:03</MessageTime></MessageHeader>
          <Bubble variant="assistant">
            <BubbleContent>Done. Two covenants are close to their limits: net leverage at 3.4× against 3.5×, and interest cover at 2.1× against 2.0×. I flagged both in the memo.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
