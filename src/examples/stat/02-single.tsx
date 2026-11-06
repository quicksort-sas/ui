import { Stat, StatLabel, StatSource, StatUnit, StatValue } from "@/components/quicksort/stat"

export const title = "Single stat"
export const description = "Large, for a case study or a slide."
export const order = 2

export default function StatSingle() {
  return (
    <Stat size="lg" className="w-[360px] max-w-full">
      <StatValue>45→12<StatUnit>min</StatUnit></StatValue>
      <StatLabel>Time to review one credit file</StatLabel>
      <StatSource>Corporate banking pilot, 1,140 files, Jun–Sep 2026</StatSource>
    </Stat>
  )
}
