import { AspectRatio } from "@/components/ui/aspect-ratio"

export const title = "1:1 and 4:5"
export const order = 2

export default function AspectRatioSquare() {
  return (
    <div className="grid w-[420px] max-w-full grid-cols-2 gap-4">
      {[[1, "1:1"], [4 / 5, "4:5"]].map(([r, l]) => (
        <AspectRatio key={l} ratio={r as number} className="grid place-items-center rounded-lg border border-dashed border-input bg-muted">
          <span className="num text-[13px] text-muted-foreground">{l}</span>
        </AspectRatio>
      ))}
    </div>
  )
}
