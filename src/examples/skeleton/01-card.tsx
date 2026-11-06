import { Skeleton } from "@/components/ui/skeleton"

export const title = "Case study card"
export const description = "Match the shape of what is loading. The shimmer stops when reduced motion is on."
export const order = 1

export default function SkeletonCard() {
  return (
    <div className="grid w-[380px] max-w-full gap-5 rounded-lg border border-border bg-card p-6">
      <div className="grid gap-2.5">
        <Skeleton className="h-3 w-40" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="grid gap-2"><Skeleton className="h-6 w-14" /><Skeleton className="h-2.5 w-16" /></div>
        ))}
      </div>
    </div>
  )
}
