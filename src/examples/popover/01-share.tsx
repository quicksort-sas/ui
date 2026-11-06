import { CopyIcon, Share2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"

export const title = "Share"
export const description = "A popover holds a small, self-contained task next to the control that opened it."
export const order = 1

export default function PopoverShare() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}><Share2Icon data-icon="inline-start" />Share</PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Share the brief</PopoverTitle>
          <PopoverDescription>Anyone at the bank with this link can read it. Links expire after 14 days.</PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input readOnly aria-label="Link" defaultValue="qsrt.fr/b/cr-q4" className="h-8 font-mono text-xs md:text-xs" />
          <Button size="icon-sm" variant="outline" aria-label="Copy link"><CopyIcon /></Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
