import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export const title = "Default"
export const order = 1

export default function CheckboxDefault() {
  return (
    <div className="grid gap-4">
      <Label><Checkbox />Send me the case study</Label>
      <Label><Checkbox defaultChecked />I agree to the terms of the pilot</Label>
      <Label><Checkbox indeterminate />Some teams selected</Label>
    </div>
  )
}
