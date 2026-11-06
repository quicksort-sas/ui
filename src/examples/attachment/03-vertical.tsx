import { FileTextIcon, ImageIcon, XIcon } from "lucide-react"
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentMedia, AttachmentTitle } from "@/components/ui/attachment"

export const title = "Vertical"
export const description = "For thumbnails in a composer."
export const order = 3

export default function AttachmentVertical() {
  return (
    <div className="flex gap-3">
      <Attachment orientation="vertical">
        <AttachmentMedia><FileTextIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Term sheet.pdf</AttachmentTitle>
          <AttachmentDescription>6 pages</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions><AttachmentAction aria-label="Remove" variant="secondary"><XIcon /></AttachmentAction></AttachmentActions>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia><ImageIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Org chart.png</AttachmentTitle>
          <AttachmentDescription>PNG · 840 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
