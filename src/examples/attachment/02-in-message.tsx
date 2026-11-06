import { FileTextIcon, FileSpreadsheetIcon } from "lucide-react"
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle, AttachmentTrigger } from "@/components/ui/attachment"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageContent, MessageHeader, MessageTime } from "@/components/ui/message"

export const title = "In a message"
export const description = "A row of files above the person's message. Each one opens the file."
export const order = 2

const files = [
  { name: "Credit file.pdf", meta: "PDF · 2.4 MB", Icon: FileTextIcon },
  { name: "Statements 2025.xlsx", meta: "XLSX · 380 KB", Icon: FileSpreadsheetIcon },
  { name: "Risk policy v4.2.pdf", meta: "PDF · 1.1 MB", Icon: FileTextIcon },
]

export default function AttachmentInMessage() {
  return (
    <Message align="end" className="w-[600px] max-w-full">
      <MessageContent>
        <MessageHeader>Claire Lemoine<MessageTime>10:12</MessageTime></MessageHeader>
        <AttachmentGroup className="max-w-full">
          {files.map(({ name, meta, Icon }) => (
            <Attachment key={name} size="sm">
              <AttachmentMedia><Icon /></AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>{name}</AttachmentTitle>
                <AttachmentDescription>{meta}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentTrigger aria-label={`Open ${name}`} />
            </Attachment>
          ))}
        </AttachmentGroup>
        <Bubble variant="user"><BubbleContent>Check these against the policy and draft the memo.</BubbleContent></Bubble>
      </MessageContent>
    </Message>
  )
}
