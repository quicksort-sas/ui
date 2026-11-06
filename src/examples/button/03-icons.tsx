import { ArrowRightIcon, DownloadIcon, PlusIcon, SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export const title = "With icons and loading"
export const order = 3

export default function ButtonIcons() {
  return (
    <>
      <Button><PlusIcon data-icon="inline-start" />New project</Button>
      <Button variant="outline">Download report<DownloadIcon data-icon="inline-end" /></Button>
      <Button variant="ghost">Next step<ArrowRightIcon data-icon="inline-end" /></Button>
      <Button size="icon" variant="outline" aria-label="Settings"><SettingsIcon /></Button>
      <Button disabled><Spinner data-icon="inline-start" />Deploying</Button>
    </>
  )
}
