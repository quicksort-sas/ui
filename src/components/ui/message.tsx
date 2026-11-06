import * as React from "react"
import { cn } from "cn"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("flex min-w-0 flex-col gap-5", className)}
      {...props}
    />
  )
}

/** One message. `align="end"` for the person, `"start"` (default) for the assistant. */
function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "group/message relative flex w-full min-w-0 gap-3 text-[15px] data-[align=end]:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

/** Initials or a mark. Sits at the top of the message, next to the header. */
function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "flex size-8 shrink-0 items-center justify-center self-start overflow-hidden rounded-full border border-border bg-muted font-mono text-[10px] font-medium tracking-[0.02em] text-muted-foreground uppercase [&_svg:not([class*='size-'])]:size-4 *:[img]:size-full *:[img]:object-cover",
        className
      )}
      {...props}
    />
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "flex w-full min-w-0 flex-col gap-2 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      {...props}
    />
  )
}

/** Name and time, above the bubble. */
function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "flex h-8 max-w-full min-w-0 items-center gap-2.5 text-[13px] font-medium text-foreground group-data-[align=end]/message:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

/** A timestamp in mono, e.g. "09:41". */
function MessageTime({ className, ...props }: React.ComponentProps<"time">) {
  return (
    <time
      data-slot="message-time"
      className={cn("font-mono text-[10.5px] font-normal tracking-[0.02em] text-faint tabular-nums", className)}
      {...props}
    />
  )
}

/** Status, actions or sources below the bubble. */
function MessageFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        "flex max-w-full min-w-0 items-center gap-2 font-mono text-[10.5px] tracking-[0.02em] text-faint group-data-[align=end]/message:justify-end",
        className
      )}
      {...props}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
  MessageTime,
}
