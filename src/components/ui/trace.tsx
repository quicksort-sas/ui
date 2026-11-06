import * as React from "react"
import { cn } from "cn"
import { ChevronRightIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/**
 * The steps an agent took, as a vertical hairline timeline. Each line gets a node on the rule and a mono step
 * number (counted automatically, or set with `step`). The step that is running carries the lime dot.
 */
function Trace({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="trace"
      className={cn(
        "relative flex w-full min-w-0 flex-col gap-3 [counter-reset:trace]",
        // the rule, through the centre of the nodes
        "before:absolute before:top-2.5 before:bottom-2.5 before:left-[9.5px] before:w-px before:bg-input",
        // clickable rows (buttons, links) wrapping a line
        "*:has-[>[data-slot=trace-line]]:flex *:has-[>[data-slot=trace-line]]:w-fit *:has-[>[data-slot=trace-line]]:max-w-full *:has-[>[data-slot=trace-line]]:min-w-0 *:has-[>[data-slot=trace-line]]:rounded-sm *:has-[>[data-slot=trace-line]]:text-left *:has-[>[data-slot=trace-line]]:outline-none *:has-[>[data-slot=trace-line]]:focus-visible:ring-2 *:has-[>[data-slot=trace-line]]:focus-visible:ring-ring *:has-[>[data-slot=trace-line]]:focus-visible:ring-offset-2 *:has-[>[data-slot=trace-line]]:focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  )
}

type TraceStatus = "done" | "running" | "error" | "pending"

function TraceLine({
  className,
  status = "done",
  step,
  children,
  ...props
}: React.ComponentProps<"span"> & {
  status?: TraceStatus
  /** The step number to show. Defaults to the line's position: 01, 02, 03… */
  step?: React.ReactNode
}) {
  return (
    <span
      data-slot="trace-line"
      data-status={status}
      aria-current={status === "running" ? "step" : undefined}
      className={cn(
        "group/trace-line relative flex w-fit max-w-full min-w-0 items-center gap-2.5 text-sm leading-5 text-muted-foreground transition-colors [counter-increment:trace] in-[a,button]:cursor-pointer in-[a:hover,button:hover]:text-foreground data-[status=running]:text-foreground data-[status=error]:text-destructive data-[status=pending]:text-faint data-[status=running]:*:data-[slot=trace-title]:shimmer",
        className
      )}
      {...props}
    >
      <span data-slot="trace-node" aria-hidden="true" className="relative z-10 flex size-5 shrink-0 items-center justify-center">
        <span className="size-1.5 rounded-full bg-foreground group-data-[status=error]/trace-line:size-2 group-data-[status=error]/trace-line:bg-destructive group-data-[status=pending]/trace-line:bg-input group-data-[status=running]/trace-line:size-2.5 group-data-[status=running]/trace-line:bg-pivot group-data-[status=running]/trace-line:shadow-[0_0_0_1.5px_#141414] dark:group-data-[status=running]/trace-line:shadow-none" />
      </span>
      <span
        data-slot="trace-step"
        className={cn(
          "w-5 shrink-0 font-mono text-[10.5px] tracking-[0.02em] text-faint tabular-nums",
          step == null && "before:content-[counter(trace,decimal-leading-zero)]"
        )}
      >
        {step}
      </span>
      {children}
    </span>
  )
}

function TraceIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-icon"
      aria-hidden="true"
      className={cn(
        "flex size-4 shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5 [[data-slot=trace-title]~&]:-ml-1",
        className
      )}
      {...props}
    />
  )
}

function TraceTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-title"
      className={cn("min-w-0 truncate text-[14px] motion-reduce:shimmer-none", className)}
      {...props}
    />
  )
}

/** Duration, count or other detail, in mono. */
function TraceDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-description"
      className={cn(
        "shrink-0 font-mono text-[10.5px] tracking-[0.02em] text-faint tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function TraceCollapsible({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Collapsible>, "open"> &
  (
    | { open?: undefined }
    | {
        open: boolean
        onOpenChange: NonNullable<
          React.ComponentProps<typeof Collapsible>["onOpenChange"]
        >
      }
  )) {
  return (
    <Collapsible
      data-slot="trace-collapsible"
      className={cn("flex w-full min-w-0 flex-col", className)}
      {...props}
    />
  )
}

function TraceCollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
  return (
    <CollapsibleTrigger
      data-slot="trace-collapsible-trigger"
      className={cn(
        "group/trace-collapsible-trigger flex w-fit max-w-full min-w-0 cursor-pointer items-center gap-1 rounded-sm text-left text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background has-[[data-status=error]]:text-destructive",
        className
      )}
      {...props}
    >
      {children}
      <TraceIcon className="text-faint transition-transform duration-150 group-aria-expanded/trace-collapsible-trigger:rotate-90 motion-reduce:transition-none">
        <ChevronRightIcon />
      </TraceIcon>
    </CollapsibleTrigger>
  )
}

function TraceCollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleContent>) {
  return (
    <CollapsibleContent
      data-slot="trace-collapsible-content"
      className="h-(--collapsible-panel-height) min-w-0 overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none"
      {...props}
    >
      <div
        data-slot="trace-collapsible-content-inner"
        className={cn(
          // aligned with the title: node (20px) + gap + step number (20px) + gap
          "mt-2 mb-1 ml-15 min-w-0 pr-1 text-[13px] leading-relaxed wrap-break-word text-muted-foreground",
          className
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

export {
  Trace,
  TraceLine,
  TraceIcon,
  TraceTitle,
  TraceDescription,
  TraceCollapsible,
  TraceCollapsibleTrigger,
  TraceCollapsibleContent,
}
export type { TraceStatus }
