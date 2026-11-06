"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
})

/**
 * spacing 0 (the default) joins the items:
 * - variant "default" is a segmented control: a muted track, the pressed item raised on the page colour.
 * - variant "outline" is a row of outlined toggles sharing their borders.
 * spacing > 0 lays out free-standing toggles with a gap.
 */
function ToggleGroup({
  className,
  variant = "default",
  size = "default",
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-vertical:flex-col data-vertical:items-stretch",
        "data-[spacing=0]:data-[variant=default]:gap-0.5 data-[spacing=0]:data-[variant=default]:bg-muted data-[spacing=0]:data-[variant=default]:p-[3px]",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)
  const v = context.variant || variant
  const s = context.size || size

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={v}
      data-size={s}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({ variant: v, size: s }),
        "shrink-0 focus-visible:z-10",
        // segmented control (spacing 0, default variant)
        "data-[spacing=0]:data-[variant=default]:rounded-md data-[spacing=0]:data-[variant=default]:hover:bg-transparent data-[spacing=0]:data-[variant=default]:aria-pressed:border-input/70 dark:data-[spacing=0]:data-[variant=default]:aria-pressed:border-border data-[spacing=0]:data-[variant=default]:aria-pressed:bg-background data-[spacing=0]:data-[variant=default]:data-pressed:border-input/70 dark:data-[spacing=0]:data-[variant=default]:data-pressed:border-border data-[spacing=0]:data-[variant=default]:data-pressed:bg-background",
        "data-[spacing=0]:data-[variant=default]:data-[size=default]:h-[34px] data-[spacing=0]:data-[variant=default]:data-[size=sm]:h-[26px] data-[spacing=0]:data-[variant=default]:data-[size=lg]:h-[42px] data-[spacing=0]:data-[variant=default]:focus-visible:ring-offset-0",
        // joined outline buttons (spacing 0, outline variant)
        "data-[spacing=0]:data-[variant=outline]:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:not-first:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:not-first:border-t-0",
        "group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:last:rounded-b-lg",
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
