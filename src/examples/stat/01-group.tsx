import { Stat, StatGroup, StatLabel, StatSource, StatUnit, StatValue } from "@/components/quicksort/stat"

export const title = "Stat group"
export const description = "Figures split by hairlines. The one that matters carries the lime bar. Every figure has a source."
export const order = 1

export default function StatGroupExample() {
  return (
    <StatGroup className="w-[820px] max-w-full">
      <Stat pivot>
        <StatValue>−73<StatUnit>%</StatUnit></StatValue>
        <StatLabel>Review time per credit file</StatLabel>
        <StatSource>Client data, Sep 2026</StatSource>
      </Stat>
      <Stat>
        <StatValue>14<StatUnit>wks</StatUnit></StatValue>
        <StatLabel>From brief to production</StatLabel>
        <StatSource>Project plan, 2026</StatSource>
      </Stat>
      <Stat>
        <StatValue>320</StatValue>
        <StatLabel>People using it every week</StatLabel>
        <StatSource>Usage logs, Oct 2026</StatSource>
      </Stat>
    </StatGroup>
  )
}
