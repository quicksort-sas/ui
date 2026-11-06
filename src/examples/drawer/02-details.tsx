import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"

export const title = "Summary"
export const description = "A read-out with one next step."
export const order = 2

const stats = [["−73%", "Review time"], ["96.1%", "Eval score"], ["320", "People using it"]]

export default function DrawerSummary() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="ghost" />}>Weekly summary</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <DrawerHeader>
            <span className="label-mono">Week 45</span>
            <DrawerTitle>Credit review assistant</DrawerTitle>
            <DrawerDescription>Steady week. Usage up 8%, no incidents.</DrawerDescription>
          </DrawerHeader>
          <dl className="mx-6 mt-6 grid grid-cols-3 gap-4 border-y border-border py-4">
            {stats.map(([n, l]) => (
              <div key={l} className="grid gap-1"><dt className="num text-xl font-medium">{n}</dt><dd className="label-mono text-[9.5px]">{l}</dd></div>
            ))}
          </dl>
          <DrawerFooter>
            <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
            <Button>Open report</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
