import { Spinner } from "@/components/ui/spinner"

export const title = "Sizes"
export const description = "A thin ring in the current text colour. Size it with size-*."
export const order = 1

export default function SpinnerSizes() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-muted-foreground" />
    </div>
  )
}
