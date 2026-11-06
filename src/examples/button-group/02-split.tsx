import { ChevronDownIcon, CopyIcon, DownloadIcon, Share2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export const title = "Split, nested and with text"
export const order = 2

export default function ButtonGroupSplit() {
  return (
    <>
      <ButtonGroup>
        <Button>Deploy to production</Button>
        <ButtonGroupSeparator className="bg-primary-foreground/25" />
        <Button size="icon" aria-label="More deploy options"><ChevronDownIcon /></Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm"><CopyIcon data-icon="inline-start" />Copy link</Button>
          <Button variant="outline" size="sm"><Share2Icon data-icon="inline-start" />Share</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Download PDF"><DownloadIcon /></Button>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText render={<label htmlFor="slug" />} className="font-mono text-xs">quicksort.fr/</ButtonGroupText>
        <Input id="slug" defaultValue="case-studies" className="w-40" />
      </ButtonGroup>
    </>
  )
}
