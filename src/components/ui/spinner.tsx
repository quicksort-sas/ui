import { cn } from "cn"

/** A thin ink ring with a turning arc. Inherits the text colour, so it works inside buttons and on ink surfaces. */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-4 shrink-0 animate-spin [animation-duration:900ms] motion-reduce:[animation-duration:2.4s]", className)}
      {...props}
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
      <path d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export { Spinner }
