import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export const title = "Default"
export const order = 1

export default function SwitchDefault() {
  return (
    <div className="grid gap-4">
      <Label><Switch defaultChecked />Keep answers in French</Label>
      <Label><Switch />Show confidence scores</Label>
    </div>
  )
}
