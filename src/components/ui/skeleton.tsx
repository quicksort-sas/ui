import { cn } from "cn"

/** A placeholder block. A slow, soft shimmer passes over it; with reduced motion it stays still. */
function Skeleton({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden rounded-lg bg-muted dark:bg-secondary",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[skeleton-shimmer_1.6s_ease-in-out_infinite] before:bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--background)_55%,transparent),transparent)] before:content-[''] dark:before:bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--foreground)_6%,transparent),transparent)] motion-reduce:before:hidden",
        className
      )}
      {...props}
    >
      <style href="qs-skeleton-shimmer" precedence="default">{"@keyframes skeleton-shimmer{100%{transform:translateX(100%)}}"}</style>
      {children}
    </div>
  )
}

export { Skeleton }
