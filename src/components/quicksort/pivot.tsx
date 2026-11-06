import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/**
 * The pivot: a lime dot that marks the one thing that matters on a screen. Use it once per view.
 * On light grounds it carries a 1.5px ink edge so it stays visible; on dark and ink grounds it stands alone.
 */
const pivotVariants = cva(
  "relative inline-block shrink-0 rounded-full bg-pivot align-middle shadow-[0_0_0_1.5px_#141414] dark:shadow-none",
  {
    variants: {
      size: {
        xs: "size-1.5",
        sm: "size-2",
        default: "size-2.5",
        lg: "size-3.5",
        xl: "size-5",
      },
      /** Drop the ink edge, e.g. when the dot sits on an ink surface in light mode. */
      edge: {
        true: "",
        false: "shadow-none",
      },
    },
    defaultVariants: { size: "default", edge: true },
  }
)

type PivotProps = React.ComponentProps<"span"> &
  VariantProps<typeof pivotVariants> & {
    /** A slow ring that grows out of the dot, for something live. Off when the user prefers reduced motion. */
    pulse?: boolean
    /** Accessible name. Without it the dot is decorative. */
    label?: string
  }

function Pivot({ className, size, edge, pulse = false, label, ...props }: PivotProps) {
  return (
    <span
      data-slot="pivot"
      data-pulse={pulse || undefined}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(pivotVariants({ size, edge }), className)}
      {...props}
    >
      {pulse && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-pivot opacity-70 [animation-duration:2.4s] motion-reduce:hidden"
        />
      )}
    </span>
  )
}

/** A mono label led by the pivot dot, e.g. "Live" or "Event 03". */
function PivotLabel({ className, children, pulse, ...props }: React.ComponentProps<"span"> & { pulse?: boolean }) {
  return (
    <span data-slot="pivot-label" className={cn("label-mono inline-flex items-center gap-2.5 text-foreground", className)} {...props}>
      <Pivot size="sm" pulse={pulse} />
      {children}
    </span>
  )
}

export { Pivot, PivotLabel, pivotVariants }
