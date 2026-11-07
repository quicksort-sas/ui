"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

function Progress({
  className,
  children,
  value,
  variant = "default",
  ...props
}: ProgressPrimitive.Root.Props & {
  /** "pivot" paints the bar lime: use it for the one key or completed figure on a screen. */
  variant?: "default" | "pivot"
}) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      data-variant={variant}
      className={cn("group/progress flex flex-wrap items-baseline gap-x-3 gap-y-2", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-1 w-full items-center overflow-hidden rounded-[1px] bg-border dark:bg-input/70",
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "h-full bg-primary transition-[width] duration-200 ease-out motion-reduce:transition-none group-data-[variant=pivot]/progress:bg-pivot group-data-[variant=pivot]/progress:shadow-[inset_0_0_0_1.5px_#141414] dark:group-data-[variant=pivot]/progress:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium text-foreground", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn("num ml-auto text-xs text-muted-foreground", className)}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
