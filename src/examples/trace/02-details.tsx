import { Trace, TraceCollapsible, TraceCollapsibleContent, TraceCollapsibleTrigger, TraceDescription, TraceLine, TraceTitle } from "@/components/ui/trace"

export const title = "With details"
export const description = "Open a step to see what the agent found. A failed step reads in red and the run continues after a retry."
export const order = 2

export default function TraceDetails() {
  return (
    <Trace className="w-[520px] max-w-full">
      <div><TraceLine><TraceTitle>Read credit file</TraceTitle><TraceDescription>4.1s</TraceDescription></TraceLine></div>
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine><TraceTitle>Extract covenants</TraceTitle><TraceDescription>6 found</TraceDescription></TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <ul className="grid gap-1">
            <li className="flex justify-between gap-6"><span>Net leverage</span><span className="num text-foreground">≤ 3.5×</span></li>
            <li className="flex justify-between gap-6"><span>Interest cover</span><span className="num text-foreground">≥ 2.0×</span></li>
            <li className="flex justify-between gap-6"><span>Capex limit</span><span className="num text-foreground">€12m / yr</span></li>
          </ul>
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <div><TraceLine status="error"><TraceTitle>Fetch guarantee letter</TraceTitle><TraceDescription>password protected</TraceDescription></TraceLine></div>
      <div><TraceLine><TraceTitle>Check against policy</TraceTitle><TraceDescription>1 exception</TraceDescription></TraceLine></div>
      <div><TraceLine><TraceTitle>Draft memo</TraceTitle><TraceDescription>2 pages · 11.2s</TraceDescription></TraceLine></div>
    </Trace>
  )
}
