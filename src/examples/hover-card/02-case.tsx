import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export const title = "Case study link"
export const order = 2

export default function HoverCardCase() {
  return (
    <p className="max-w-md text-center text-[15px] text-muted-foreground">
      We did this before for a bank:{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">credit review in 12 minutes</HoverCardTrigger>
        <HoverCardContent side="top" className="grid gap-3">
          <span className="label-mono">Case study · Corporate banking</span>
          <span className="text-[15px] leading-snug font-medium tracking-[-0.01em]">Credit review from 45 minutes to 12</span>
          <dl className="grid grid-cols-3 gap-3 border-t border-border pt-3">
            {[["−73%", "Time"], ["14 wks", "To prod"], ["320", "Users"]].map(([n, l]) => (
              <div key={l} className="grid gap-0.5"><dt className="num text-base font-medium">{n}</dt><dd className="label-mono text-[9.5px]">{l}</dd></div>
            ))}
          </dl>
        </HoverCardContent>
      </HoverCard>
      .
    </p>
  )
}
