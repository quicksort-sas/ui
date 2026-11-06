import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export const title = "Confirm a deployment"
export const description = "Ask before an action that changes what people use. Say what will happen, then name the action on the button."
export const order = 1

export default function AlertDialogDeploy() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>Deploy v2.4</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deploy to production?</AlertDialogTitle>
          <AlertDialogDescription>
            Credit review assistant v2.4 replaces v2.3 for 320 analysts at 18:00 CET. You can roll back for 30 days.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Deploy</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
