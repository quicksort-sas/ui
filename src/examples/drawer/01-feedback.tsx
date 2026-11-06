import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const title = "Pilot feedback"
export const description = "A drawer rises from the bottom and can be swiped away. Good on small screens and for short tasks."
export const order = 1

export default function DrawerFeedback() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>Give feedback</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <DrawerHeader>
            <DrawerTitle>How is the pilot going?</DrawerTitle>
            <DrawerDescription>Two minutes. Your answers shape the next sprint of the claims triage pilot.</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-4 px-6 pt-6">
            <div className="grid gap-2">
              <span className="label-mono">Time saved per claim</span>
              <div className="grid grid-cols-4 gap-2">
                {["None", "< 5 min", "5–15 min", "> 15 min"].map((v, i) => (
                  <Button key={v} variant={i === 2 ? "default" : "outline"} size="sm">{v}</Button>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="d-note">What should we fix first?</Label>
              <Textarea id="d-note" placeholder="The summary misses the policy number on scanned forms." />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button variant="ghost" />}>Skip</DrawerClose>
            <Button>Send feedback</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
