import { cn } from "cn"

/** A still placeholder block: the design system has no gradients and no looping interface motion. */
function Skeleton({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "rounded-lg bg-muted dark:bg-secondary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Skeleton }
