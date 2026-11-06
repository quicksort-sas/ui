import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

export const title = "Adoption over months"
export const description = "Weekly active users of a credit-review assistant after go-live. Ink for the key series, stone for the reference."
export const order = 2

const data = [
  { month: "Apr", users: 18, invited: 60 },
  { month: "May", users: 52, invited: 120 },
  { month: "Jun", users: 96, invited: 180 },
  { month: "Jul", users: 141, invited: 240 },
  { month: "Aug", users: 158, invited: 260 },
  { month: "Sep", users: 224, invited: 300 },
  { month: "Oct", users: 286, invited: 340 },
  { month: "Nov", users: 320, invited: 360 },
]

const config = {
  users: { label: "Weekly active", color: "var(--chart-1)" },
  invited: { label: "Invited", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function ChartArea() {
  return (
    <div className="grid w-[640px] max-w-full gap-4">
      <div className="flex items-end justify-between gap-4">
        <div className="grid gap-1">
          <span className="label-mono">Corporate banking, 2026</span>
          <p className="text-[15px] font-medium">Weekly active users</p>
        </div>
        <span className="num text-2xl font-medium">320</span>
      </div>
      <ChartContainer config={config} className="aspect-[16/7] w-full">
        <AreaChart data={data} margin={{ top: 8, right: 4, left: -16, bottom: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis tickLine={false} axisLine={false} tickCount={5} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area isAnimationActive={false} dataKey="invited" type="monotone" stroke="var(--color-invited)" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" />
          <Area isAnimationActive={false} dataKey="users" type="monotone" stroke="var(--color-users)" strokeWidth={2} fill="var(--color-users)" fillOpacity={0.08} />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
