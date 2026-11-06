import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"

export const title = "Groups, in a field"
export const order = 2

const regions = {
  "eu-paris": "Paris (eu-west-3)",
  "eu-frankfurt": "Frankfurt (eu-central-1)",
  "eu-dublin": "Dublin (eu-west-1)",
  "onprem-paris": "Your data centre, Paris",
  "onprem-lyon": "Your data centre, Lyon",
}

export default function SelectGroups() {
  return (
    <Field className="w-[300px] max-w-full">
      <FieldLabel htmlFor="sel-region">Hosting region</FieldLabel>
      <Select items={regions} defaultValue="eu-paris">
        <SelectTrigger id="sel-region" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Your cloud</SelectLabel>
            <SelectItem value="eu-paris">Paris (eu-west-3)</SelectItem>
            <SelectItem value="eu-frankfurt">Frankfurt (eu-central-1)</SelectItem>
            <SelectItem value="eu-dublin">Dublin (eu-west-1)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>On your servers</SelectLabel>
            <SelectItem value="onprem-paris">Your data centre, Paris</SelectItem>
            <SelectItem value="onprem-lyon">Your data centre, Lyon</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>Data never leaves the region you choose.</FieldDescription>
    </Field>
  )
}
