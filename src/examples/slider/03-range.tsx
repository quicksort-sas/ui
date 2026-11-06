"use client"

import * as React from "react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export const title = "Range"
export const order = 3

export default function SliderRange() {
  const [range, setRange] = React.useState<number[]>([20, 80])
  return (
    <Field className="w-[380px] max-w-full gap-3">
      <div className="flex items-baseline justify-between">
        <FieldLabel id="sl-team-label">Team size</FieldLabel>
        <span className="num text-sm" aria-hidden>{range[0]}–{range[1]} people</span>
      </div>
      <Slider value={range} onValueChange={(v) => setRange(v as number[])} min={5} max={200} step={5} aria-labelledby="sl-team-label" />
    </Field>
  )
}
