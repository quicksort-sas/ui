import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export const title = "Messages"
export const description = "An ink panel, bottom right. Say what happened in a few words; offer one action when it helps."
export const order = 1

export default function ToastMessages() {
  return (
    <>
      <Button onClick={() => toast.add({ title: "Brief sent.", description: "We'll reply within a day." })}>Send brief</Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            title: "Pilot archived.",
            actionProps: { children: "Undo", onClick: () => toast.add({ title: "Pilot restored." }) },
          })
        }
      >
        Archive pilot
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast.promise(new Promise((r) => setTimeout(r, 2000)), {
            loading: { title: "Deploying v2.4…" },
            success: { title: "v2.4 is live.", description: "320 people moved over.", type: "success" },
            error: { title: "Deploy failed.", type: "error" },
          })
        }
      >
        Deploy
      </Button>
    </>
  )
}
