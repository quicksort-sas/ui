import { Stat, StatGroup, StatLabel, StatUnit, StatValue } from "@/components/quicksort/stat"

export const title = "Small, in a card"
export const order = 3

export default function StatInCard() {
  return (
    <div className="grid w-[400px] max-w-full gap-5 rounded-lg border border-border bg-background p-6">
      <div className="grid gap-1">
        <span className="label-mono">Insurance · claims triage</span>
        <p className="text-lg font-medium tracking-[-0.01em]">Claims sorted on arrival, on the insurer's own servers.</p>
      </div>
      <StatGroup className="border-t border-border pt-5">
        <Stat size="sm"><StatValue>−58<StatUnit>%</StatUnit></StatValue><StatLabel>Handling time</StatLabel></Stat>
        <Stat size="sm"><StatValue>9<StatUnit>wks</StatUnit></StatValue><StatLabel>To production</StatLabel></Stat>
        <Stat size="sm"><StatValue>140</StatValue><StatLabel>Handlers</StatLabel></Stat>
      </StatGroup>
    </div>
  )
}
