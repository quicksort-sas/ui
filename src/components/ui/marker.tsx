"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const markerVariants = cva(
  "group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-[13px] text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5 [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:hover:text-foreground [&_a]:hover:decoration-foreground [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:ring-2 [&_a]:focus-visible:ring-ring [&_a]:focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "",
        // a hairline either side of a mono label, e.g. a day or "Context reset"
        separator:
          "gap-3 font-mono text-[10.5px] tracking-[0.06em] text-faint uppercase before:h-px before:min-w-0 before:flex-1 before:bg-border after:h-px after:min-w-0 after:flex-1 after:bg-border",
        border: "border-b border-border pb-2.5",
      },
    },
  }
)

function Marker({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof markerVariants>) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(markerVariants({ variant, className })),
      },
      props
    ),
    render,
    state: {
      slot: "marker",
      variant,
    },
  })
}

function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "flex size-4 shrink-0 items-center justify-center [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    />
  )
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center [&_b]:font-medium [&_b]:text-foreground [&_strong]:font-medium [&_strong]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants }
