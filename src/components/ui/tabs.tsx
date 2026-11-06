"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-3 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:items-stretch",
  {
    variants: {
      variant: {
        // segmented control: muted track, the active tab raised on the page colour
        default:
          "gap-0.5 rounded-lg bg-muted p-[3px] group-data-horizontal/tabs:h-9",
        // underline tabs: label only, a 1.5px ink rule under the active tab
        line: "gap-5 rounded-none bg-transparent group-data-horizontal/tabs:h-9 group-data-vertical/tabs:gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // shared
        "relative inline-flex items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,background-color,border-color] duration-150 ease-out outline-none select-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45 data-active:text-foreground motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-vertical/tabs:justify-start",
        // default: segmented control
        "group-data-[variant=default]/tabs-list:h-full group-data-[variant=default]/tabs-list:flex-1 group-data-[variant=default]/tabs-list:rounded-md group-data-[variant=default]/tabs-list:border group-data-[variant=default]/tabs-list:border-transparent group-data-[variant=default]/tabs-list:px-3 group-data-vertical/tabs:group-data-[variant=default]/tabs-list:h-8 group-data-[variant=default]/tabs-list:data-active:border-input/70 group-data-[variant=default]/tabs-list:data-active:bg-background dark:group-data-[variant=default]/tabs-list:data-active:border-border",
        // line: label with an ink underline
        "group-data-[variant=line]/tabs-list:h-full group-data-[variant=line]/tabs-list:px-0 group-data-[variant=line]/tabs-list:focus-visible:ring-offset-4",
        "after:pointer-events-none after:absolute after:bg-foreground after:opacity-0 after:transition-opacity after:duration-150 group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:-bottom-px group-data-horizontal/tabs:after:h-[1.5px] group-data-vertical/tabs:after:inset-y-1 group-data-vertical/tabs:after:-left-3 group-data-vertical/tabs:after:w-[1.5px] group-data-vertical/tabs:group-data-[variant=line]/tabs-list:h-8 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:pl-0 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "flex-1 text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
