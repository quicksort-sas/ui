"use client"

import * as React from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export const title = "Budget"
export const description = "Show the value next to the label, in mono."
export const order = 2

const fmt = (n: number) => `€${n.toLocaleString("en-GB")}k`

export default function SliderBudget() {
  const [value, setValue] = React.useState(120)
  return (
    <Field className="w-[380px] max-w-full gap-3">
      <div className="flex items-baseline justify-between">
        <FieldLabel id="sl-budget-label">Project budget</FieldLabel>
        <span className="num text-sm" aria-hidden>{fmt(value)}</span>
      </div>
      <Slider
        value={value}
        onValueChange={(v) => setValue(v as number)}
        min={40}
        max={400}
        step={10}
        aria-labelledby="sl-budget-label"
      />
      <div className="flex justify-between font-mono text-[11px] text-faint"><span>€40k</span><span>€400k</span></div>
      <FieldDescription>Most pilots land between €80k and €160k.</FieldDescription>
    </Field>
  )
}
