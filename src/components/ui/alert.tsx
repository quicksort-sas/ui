import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const alertVariants = cva(
  "group/alert relative grid w-full gap-1 rounded-lg border border-border bg-card px-4 py-3.5 text-left text-sm text-card-foreground has-data-[slot=alert-action]:pr-28 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 *:[svg]:row-span-2 *:[svg]:mt-px *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // neutral information
        default: "*:[svg]:text-foreground",
        // something failed or will be lost
        destructive: "border-l-2 border-l-destructive *:[svg]:text-destructive",
        // something worked
        success: "border-l-2 border-l-success *:[svg]:text-success",
        // needs attention soon
        warning: "border-l-2 border-l-warning *:[svg]:text-warning",
        // the one message that matters on the screen (use once per view)
        pivot:
          "overflow-hidden pl-5 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-pivot before:shadow-[1px_0_0_#141414] *:[svg]:text-foreground dark:before:shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "text-[15px] leading-snug font-medium tracking-[-0.01em] group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:hover:decoration-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm leading-relaxed text-pretty text-muted-foreground group-has-[>svg]/alert:col-start-2 [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a]:hover:decoration-foreground [&_p:not(:last-child)]:mb-3",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-1/2 right-3 -translate-y-1/2", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
