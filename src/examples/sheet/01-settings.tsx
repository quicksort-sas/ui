import { SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export const title = "Deployment settings"
export const description = "A sheet keeps the page in view while you edit something that belongs to it. 420px, from the right."
export const order = 1

const toggles = [
  { id: "s-review", label: "Human review above €5M", help: "A credit officer approves every memo over the threshold.", on: true },
  { id: "s-logs", label: "Keep logs for 90 days", help: "Required by the bank's model risk policy.", on: true },
  { id: "s-beta", label: "Early access models", help: "Try new model versions before they reach production.", on: false },
]

export default function SheetSettings() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}><SettingsIcon data-icon="inline-start" />Settings</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Deployment settings</SheetTitle>
          <SheetDescription>Credit review assistant · production</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 content-start gap-6 overflow-y-auto p-6">
          <div className="grid gap-2">
            <Label htmlFor="s-name">Name</Label>
            <Input id="s-name" defaultValue="Credit review assistant" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="s-region">Hosting</Label>
            <NativeSelect className="w-full" id="s-region" defaultValue="onprem">
              <NativeSelectOption value="onprem">Bank servers, Paris</NativeSelectOption>
              <NativeSelectOption value="eu-west-3">Cloud, eu-west-3 (Paris)</NativeSelectOption>
              <NativeSelectOption value="eu-central-1">Cloud, eu-central-1 (Frankfurt)</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="grid gap-1 border-t border-border pt-5">
            <span className="label-mono pb-2">Controls</span>
            {toggles.map((t) => (
              <div key={t.id} className="flex items-start justify-between gap-6 py-2.5">
                <div className="grid gap-0.5">
                  <Label htmlFor={t.id}>{t.label}</Label>
                  <p className="text-[13px] text-muted-foreground">{t.help}</p>
                </div>
                <Switch id={t.id} defaultChecked={t.on} />
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
