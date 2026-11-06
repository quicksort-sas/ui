import { Bubble, BubbleContent } from "@/components/ui/bubble"

export const title = "As buttons"
export const description = "Suggested replies. Bubbles rendered as buttons get a hover and a visible focus ring."
export const order = 3

export default function BubbleActions() {
  return (
    <div className="flex w-[560px] max-w-full flex-wrap gap-2">
      {["Summarise the covenants", "Compare with last year", "Draft the memo"].map((t) => (
        <Bubble key={t} variant="outline" className="max-w-none">
          <BubbleContent render={<button type="button" />}>{t}</BubbleContent>
        </Bubble>
      ))}
    </div>
  )
}
