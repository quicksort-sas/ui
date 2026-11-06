import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full rounded-lg border border-input bg-transparent px-3 py-2.5 text-base leading-relaxed text-foreground transition-[border-color,box-shadow] duration-150 ease-out outline-none placeholder:text-faint hover:border-faint focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:opacity-45 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/15 md:text-[15px] motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
