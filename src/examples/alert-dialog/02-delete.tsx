import { Trash2Icon } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export const title = "Destructive"
export const description = "For what can't be undone, show the cost and use the destructive button."
export const order = 2

export default function AlertDialogDelete() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}><Trash2Icon data-icon="inline-start" />Delete pilot</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="text-destructive"><Trash2Icon /></AlertDialogMedia>
          <AlertDialogTitle>Delete the claims triage pilot?</AlertDialogTitle>
          <AlertDialogDescription>
            This removes 3 deployments, 12 evaluations and the 3,232 pages ingested. It can't be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep pilot</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete pilot</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
