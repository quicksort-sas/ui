import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export const title = "Invite a teammate"
export const description = "A focused task in a modal. Title, one line of context, the fields, and the actions on the right."
export const order = 1

export default function DialogInvite() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Invite a teammate</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a teammate</DialogTitle>
          <DialogDescription>They get access to the BNP Paribas credit review workspace, its deployments and evaluations.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="invite-email">Work email</Label>
            <Input id="invite-email" type="email" placeholder="camille@company.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="invite-role">Role</Label>
            <NativeSelect className="w-full" id="invite-role" defaultValue="reviewer">
              <NativeSelectOption value="viewer">Viewer: reads results</NativeSelectOption>
              <NativeSelectOption value="reviewer">Reviewer: approves answers</NativeSelectOption>
              <NativeSelectOption value="admin">Admin: manages deployments</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
