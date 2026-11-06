import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export const title = "In context"
export const description = "Next to the words that say what is happening, inside a busy button, and on ink."
export const order = 2

export default function SpinnerInContext() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner />Indexing 3,232 pages</span>
      <Button disabled><Spinner data-icon="inline-start" />Deploying</Button>
      <span className="flex items-center gap-2.5 rounded-lg bg-primary px-3.5 py-2.5 text-sm text-primary-foreground"><Spinner />Running evaluation</span>
    </div>
  )
}
