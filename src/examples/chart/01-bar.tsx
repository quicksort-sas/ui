import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

export const title = "Answers fully correct"
export const description = "One bar in lime: the result that matters. Everything else in stone."
export const order = 1

const data = [
  { system: "Off-the-shelf chatbot", correct: 41 },
  { system: "Vendor search", correct: 58 },
  { system: "Generic RAG", correct: 64 },
  { system: "Quicksort pipeline", correct: 91 },
]

const config = {
  correct: { label: "Fully correct", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function ChartBar() {
  return (
    <div className="grid w-[640px] max-w-full gap-4">
      <div className="grid gap-1">
        <span className="label-mono">Credit questions, 400 asked</span>
        <p className="text-[15px] font-medium">Share of answers fully correct, by system</p>
      </div>
      <ChartContainer config={config} className="aspect-[16/8] w-full">
        <BarChart data={data} margin={{ top: 24, right: 0, left: -16, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="system" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          <Bar dataKey="correct" radius={2} maxBarSize={72} isAnimationActive={false}>
            {data.map((d, i) => {
              const winner = i === data.length - 1
              return <Cell key={d.system} fill={winner ? "var(--chart-4)" : "var(--color-correct)"} stroke={winner ? "#141414" : undefined} strokeWidth={winner ? 1.5 : 0} />
            })}
            <LabelList dataKey="correct" position="top" offset={8} formatter={(v) => `${v}%`} className="fill-foreground font-mono text-[12px]" />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  )
}
