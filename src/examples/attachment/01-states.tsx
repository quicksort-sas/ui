import { FileTextIcon, FileSpreadsheetIcon, RotateCwIcon, XIcon, UploadIcon } from "lucide-react"
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentMedia, AttachmentTitle } from "@/components/ui/attachment"
import { Spinner } from "@/components/ui/spinner"

export const title = "States"
export const description = "Done, uploading, processing, error and the empty drop target. File details in mono."
export const order = 1

export default function AttachmentStates() {
  return (
    <div className="grid w-[380px] max-w-full gap-2.5 *:w-full">
      <Attachment>
        <AttachmentMedia><FileTextIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Fabre Logistique — credit file.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 48 pages · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions><AttachmentAction aria-label="Remove"><XIcon /></AttachmentAction></AttachmentActions>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia><Spinner /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Financial statements 2025.xlsx</AttachmentTitle>
          <AttachmentDescription>Uploading · 62%</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="processing">
        <AttachmentMedia><FileSpreadsheetIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Covenant schedule.xlsx</AttachmentTitle>
          <AttachmentDescription>Reading · 3 sheets</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia><FileTextIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Guarantee letter.pdf</AttachmentTitle>
          <AttachmentDescription>Password protected</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions><AttachmentAction aria-label="Try again"><RotateCwIcon /></AttachmentAction></AttachmentActions>
      </Attachment>
      <Attachment state="idle">
        <AttachmentMedia><UploadIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Drop a credit file</AttachmentTitle>
          <AttachmentDescription>PDF, XLSX or DOCX · up to 50 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  )
}
