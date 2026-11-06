import { Separator } from "@/components/ui/separator"

export const title = "Default"
export const description = "A 1px hairline, horizontal or vertical."
export const order = 1

export default function SeparatorDefault() {
  return (
    <div className="w-[380px] max-w-full">
      <div className="grid gap-1">
        <span className="label-mono">Quicksort</span>
        <p className="text-[15px] text-muted-foreground">AI strategy and deployment for banks, insurers and industry.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <a href="#" className="hover:underline underline-offset-4">Services</a>
        <Separator orientation="vertical" />
        <a href="#" className="hover:underline underline-offset-4">Case studies</a>
        <Separator orientation="vertical" />
        <a href="#" className="hover:underline underline-offset-4">Insights</a>
      </div>
    </div>
  )
}
