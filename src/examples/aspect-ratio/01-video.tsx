import { PlayIcon } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export const title = "16:9"
export const description = "A video or image keeps its shape at any width."
export const order = 1

export default function AspectRatioVideo() {
  return (
    <div className="w-[520px] max-w-full">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg border border-border bg-[#141413] text-[#ece8df] dark:bg-[#0e0e0d]">
        <div className="absolute inset-0 grid content-between p-5">
          <span className="font-mono text-[10.5px] tracking-[0.06em] text-[#9a968f] uppercase">Build Night recap · 3:42</span>
          <div className="flex items-end justify-between gap-4">
            <p className="max-w-[16rem] text-xl leading-tight font-medium tracking-[-0.02em]">Forty builders, one evening, six working prototypes</p>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25"><PlayIcon className="size-4" /></span>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}
