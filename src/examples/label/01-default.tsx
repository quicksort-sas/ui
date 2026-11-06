import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const title = "Default"
export const description = "Labels name a control. Click the label to focus or toggle it."
export const order = 1

export default function LabelDefault() {
  return (
    <div className="grid w-[320px] max-w-full gap-6">
      <div className="grid gap-2">
        <Label htmlFor="lb-name">Full name</Label>
        <Input id="lb-name" placeholder="Camille Durand" />
      </div>
      <Label>
        <Checkbox defaultChecked />
        Send me the case study after the call
      </Label>
    </div>
  )
}
