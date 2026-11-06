"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) {
  // One thumb per value: a number is one value, an array is one thumb per entry (a range has two).
  const current = value ?? defaultValue
  const _values = Array.isArray(current) ? current : [current ?? min]

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-45 data-horizontal:h-5 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-5 data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-input select-none data-horizontal:h-0.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-0.5"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="relative block size-4 shrink-0 rounded-full border-[1.5px] border-foreground bg-card ring-ring/15 transition-[box-shadow] duration-150 ease-out select-none after:absolute after:-inset-2 hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-ring/25 active:ring-4 data-dragging:ring-4 data-disabled:pointer-events-none motion-reduce:transition-none"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
