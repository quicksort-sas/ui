import { Kbd, KbdGroup } from "@/components/ui/kbd"

export const title = "In a sentence"
export const order = 2

export default function KbdInline() {
  return (
    <p className="max-w-md text-[15px] text-muted-foreground">
      Press <Kbd>/</Kbd> to search the case studies, or <KbdGroup><Kbd>Ctrl</Kbd>+<Kbd>Enter</Kbd></KbdGroup> to send your brief.
    </p>
  )
}
