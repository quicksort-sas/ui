import * as React from "react"
import { cn } from "cn"

/** The Quicksort mark: a circle with a wedge cut out and the pivot dot set apart. */
export function QuicksortMark({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 104 96" aria-hidden="true" data-slot="quicksort-mark" className={cn("h-6 w-auto", className)} {...props}>
      <circle cx="46.77" cy="46.77" r="46.77" fill="currentColor" />
      <rect x="36.62" y="53.95" width="30.65" height="62.41" rx="15.33" transform="rotate(-47.64 36.62 53.95)" fill="var(--background)" />
      <circle cx="82.43" cy="74.63" r="15.78" className="fill-current dark:fill-pivot" />
    </svg>
  )
}

/** Mark and wordmark. The wordmark is set in Martian Mono. */
export function QuicksortLogo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span data-slot="quicksort-logo" className={cn("inline-flex items-center gap-2 text-foreground", className)} {...props}>
      <QuicksortMark className="h-[1.6em]" />
      <b className="font-mono text-[0.95em] font-medium tracking-normal">Quicksort</b>
    </span>
  )
}
