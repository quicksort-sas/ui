import { QuicksortMark } from "@/components/quicksort/logo"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader, MessageTime } from "@/components/ui/message"

export const title = "Conversation"
export const description = "The assistant writes on a card with a hairline; the person writes in ink. Names and times above, status below in mono."
export const order = 1

export default function MessageConversation() {
  return (
    <MessageGroup className="w-[640px] max-w-full">
      <Message align="end">
        <MessageAvatar>CL</MessageAvatar>
        <MessageContent>
          <MessageHeader>Claire Lemoine<MessageTime dateTime="09:41">09:41</MessageTime></MessageHeader>
          <Bubble variant="user">
            <BubbleContent>Where are we on the credit-review rollout for the corporate desk?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar><QuicksortMark className="h-3.5 text-foreground" /></MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant<MessageTime dateTime="09:41">09:41</MessageTime></MessageHeader>
          <Bubble variant="assistant">
            <BubbleContent>
              <p>Week 11 of 14. The assistant runs on the bank's own servers and 212 of the 320 analysts use it daily.</p>
              <ul>
                <li>Covenant extraction is signed off by the risk team.</li>
                <li>Policy checks pass on 1,140 test files.</li>
                <li>Open: the memo template for leveraged loans.</li>
              </ul>
            </BubbleContent>
          </Bubble>
          <MessageFooter>3 sources · 2.4s</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
