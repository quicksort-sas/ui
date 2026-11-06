import { EventTicket } from "@/components/quicksort/ticket"

export const title = "Event ticket"
export const description = "The cover for every event: a 2:1 ink ticket. Sizes follow the ticket's own width."
export const order = 1

export default function TicketDefault() {
  return (
    <EventTicket
      className="w-[820px] max-w-full"
      title="Build Night"
      accent="Paris."
      partner="Luo · The AI Collective"
      number="03"
      day="07"
      month="Nov"
      time="3:30 PM"
      place="Paris 12e"
    />
  )
}
