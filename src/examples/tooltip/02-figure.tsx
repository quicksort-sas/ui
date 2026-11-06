import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const title = "Explain a figure"
export const description = "Short, plain help for a number. If it needs more than a sentence, use a hover card."
export const order = 2

export default function TooltipFigure() {
  return (
    <div className="grid gap-1 text-center">
      <Tooltip>
        <TooltipTrigger render={<button type="button" className="num cursor-help rounded-sm text-4xl font-medium underline decoration-border decoration-dotted underline-offset-8 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" />}>
          −73%
        </TooltipTrigger>
        <TooltipContent side="bottom">Median review time, Sept–Oct 2026, 1,840 files</TooltipContent>
      </Tooltip>
      <span className="label-mono">Review time</span>
    </div>
  )
}
