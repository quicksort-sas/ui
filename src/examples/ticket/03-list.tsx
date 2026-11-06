import { EventTicket } from "@/components/quicksort/ticket"

export const title = "In a list"
export const order = 3

export default function TicketList() {
  return (
    <div className="grid w-[820px] max-w-full gap-4 sm:grid-cols-2">
      <EventTicket title="AI in credit review," accent="in practice." partner="Paris Fintech Forum" number="04" day="21" month="Nov" time="9:00 AM" place="Paris 2e" />
      <EventTicket title="Agents on your" accent="own servers." number="05" day="04" month="Dec" time="6:30 PM" place="Paris 9e" />
    </div>
  )
}
