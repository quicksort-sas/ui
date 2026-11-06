import { Skeleton } from "@/components/ui/skeleton"

export const title = "Deployment list"
export const order = 2

export default function SkeletonList() {
  return (
    <div className="grid w-[480px] max-w-full rounded-lg border border-border bg-background">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 border-b border-border px-4 py-3.5 last:border-0">
          <Skeleton className="size-8 rounded-full" />
          <div className="grid flex-1 gap-2"><Skeleton className="h-3.5 w-1/2" /><Skeleton className="h-3 w-1/3" /></div>
          <Skeleton className="h-5 w-12" />
        </div>
      ))}
    </div>
  )
}
