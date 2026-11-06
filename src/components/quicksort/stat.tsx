import * as React from "react"
import { cn } from "cn"

/**
 * A figure, set in Martian Mono: the number, its unit, a label and the source it comes from.
 * Mark the one stat that matters with `pivot`: it gets a lime bar. One per view.
 */
function Stat({
  className,
  size = "default",
  pivot = false,
  ...props
}: React.ComponentProps<"div"> & { size?: "sm" | "default" | "lg"; pivot?: boolean }) {
  return (
    <div
      data-slot="stat"
      data-size={size}
      data-pivot={pivot || undefined}
      className={cn(
        "group/stat relative flex min-w-0 flex-col gap-3 text-foreground",
        // the pivot bar: lime, with an ink edge on light grounds
        // (in a group with a pivot, the others keep the same space so the numbers line up)
        "before:mb-1 before:hidden before:h-1.5 before:w-10 before:rounded-[1px] data-pivot:before:block data-pivot:before:bg-pivot data-pivot:before:shadow-[0_0_0_1.5px_#141414] dark:data-pivot:before:shadow-none [[data-slot=stat-group]:has([data-pivot])_&]:before:block",
        className
      )}
      {...props}
    />
  )
}

function StatValue({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-value"
      className={cn(
        "num flex items-baseline gap-1 text-[44px] leading-[0.95] font-medium tracking-[-0.05em] whitespace-nowrap group-data-[size=lg]/stat:text-[64px] group-data-[size=sm]/stat:text-[28px] group-data-[size=sm]/stat:tracking-[-0.04em]",
        className
      )}
      {...props}
    />
  )
}

/** The unit next to the number ("%", "wks"). Smaller and quieter than the figure. */
function StatUnit({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="stat-unit"
      className={cn("font-mono text-[0.42em] font-normal tracking-[-0.01em] text-muted-foreground", className)}
      {...props}
    />
  )
}

function StatLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-label"
      className={cn("label-mono max-w-[24ch] leading-[1.4] text-foreground group-data-[size=sm]/stat:text-[10px]", className)}
      {...props}
    />
  )
}

/** Where the figure comes from and when. Every figure carries one. */
function StatSource({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="stat-source"
      className={cn("font-mono text-[10px] leading-[1.4] tracking-[0.02em] text-faint", className)}
      {...props}
    />
  )
}

/**
 * A row of stats split by hairlines. Stacks with horizontal hairlines when its container is narrow.
 */
function StatGroup({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="stat-group" className={cn("@container/stat-group w-full", className)} {...props}>
      <div className="grid grid-cols-1 divide-y divide-border @xl/stat-group:auto-cols-fr @xl/stat-group:grid-flow-col @xl/stat-group:divide-x @xl/stat-group:divide-y-0 *:data-[slot=stat]:py-5 @xl/stat-group:*:data-[slot=stat]:px-6 @xl/stat-group:*:data-[slot=stat]:py-1 @xl/stat-group:*:data-[slot=stat]:first:pl-0 @xl/stat-group:*:data-[slot=stat]:last:pr-0 *:data-[slot=stat]:first:pt-0 *:data-[slot=stat]:last:pb-0">
        {children}
      </div>
    </div>
  )
}

export { Stat, StatValue, StatUnit, StatLabel, StatSource, StatGroup }
