import { CopyIcon, DownloadIcon, RotateCcwIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const title = "Icon buttons"
export const description = "Name every icon-only button. Add the shortcut when there is one."
export const order = 1

const tools = [
  { label: "Copy link", key: "⌘C", Icon: CopyIcon },
  { label: "Download report", key: "⌘S", Icon: DownloadIcon },
  { label: "Roll back", key: null, Icon: RotateCcwIcon },
]

export default function TooltipIcons() {
  return (
    <div className="flex gap-1">
      {tools.map(({ label, key, Icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label={label} />}><Icon /></TooltipTrigger>
          <TooltipContent>{label}{key && <Kbd>{key}</Kbd>}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
