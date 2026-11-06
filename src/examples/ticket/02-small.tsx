import { EventTicket } from "@/components/quicksort/ticket"

export const title = "Small"
export const description = "Below 460px the ticket gets taller and the partner leaves the top row; list it under the ticket instead."
export const order = 2

export default function TicketSmall() {
  return (
    <div className="grid w-[360px] max-w-full gap-3">
      <EventTicket title="Build Night" accent="Paris." partner="Luo · The AI Collective" number="03" day="07" month="Nov" time="3:30 PM" place="Paris 12e" />
      <div className="grid gap-1">
        <span className="text-[15px] font-medium">Build Night Paris</span>
        <span className="font-mono text-[11px] text-faint">With Luo · The AI Collective</span>
      </div>
    </div>
  )
}
