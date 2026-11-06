import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export const title = "Default"
export const order = 1

export default function NativeSelectDefault() {
  return (
    <NativeSelect className="w-[260px]" defaultValue="" aria-label="Industry">
      <NativeSelectOption value="" disabled>Choose an industry</NativeSelectOption>
      <NativeSelectOption value="banking">Banking</NativeSelectOption>
      <NativeSelectOption value="insurance">Insurance</NativeSelectOption>
      <NativeSelectOption value="energy">Energy</NativeSelectOption>
      <NativeSelectOption value="public">Public sector</NativeSelectOption>
    </NativeSelect>
  )
}
