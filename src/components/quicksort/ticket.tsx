import * as React from "react"
import { cn } from "cn"

/** The mark as it sits on ink: paper circle, ink wedge, lime dot. */
function TicketMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 104 96" aria-hidden="true" className={className}>
      <circle cx="46.77" cy="46.77" r="46.77" fill="#faf8f3" />
      <rect x="36.62" y="53.95" width="30.65" height="62.41" rx="15.33" transform="rotate(-47.64 36.62 53.95)" fill="#141414" />
      <circle cx="82.43" cy="74.63" r="15.78" fill="var(--pivot)" />
    </svg>
  )
}

type EventTicketProps = Omit<React.ComponentProps<"article">, "title"> & {
  /** The title, without its last words. */
  title: React.ReactNode
  /** The last words of the title, set in lime. */
  accent?: React.ReactNode
  /** Co-host, shown as "× Partner" in the top row. Hidden on small tickets. */
  partner?: React.ReactNode
  /** Event number, e.g. "03". */
  number?: React.ReactNode
  /** Day of the month, e.g. "07". */
  day: React.ReactNode
  /** Month, e.g. "Nov". Set in lime, uppercase. */
  month: React.ReactNode
  time?: React.ReactNode
  place?: React.ReactNode
}

/**
 * The event cover: a wide 2:1 ink ticket. Left: logo and partner on top, the title at the bottom ending in lime.
 * Right: a darker stub with the event number, the day in large mono, the month in lime, then time and place.
 * Sizes follow the ticket's own width (container query units), so it works from a list thumbnail to a hero.
 */
function EventTicket({ title, accent, partner, number, day, month, time, place, className, ...props }: EventTicketProps) {
  return (
    <article data-slot="event-ticket" className={cn("@container/ticket w-full min-w-0", className)} {...props}>
      <div className="relative grid aspect-[2/1] grid-cols-[1fr_30%] overflow-hidden rounded-lg bg-[#141414] text-[#faf8f3] @max-[460px]/ticket:aspect-[16/11] dark:ring-1 dark:ring-white/8 dark:ring-inset">
        <div className="grid min-w-0 grid-rows-[auto_1fr] p-[4.5cqi] @max-[460px]/ticket:p-4">
          <div className="flex items-center justify-between gap-[2cqi]">
            <span className="inline-flex items-center gap-[max(1cqi,6px)]">
              <TicketMark className="h-auto w-[max(3cqi,16px)]" />
              <b className="font-mono text-[max(1.9cqi,11px)] font-medium tracking-normal">Quicksort</b>
            </span>
            {partner && (
              <span className="truncate font-mono text-[max(1.5cqi,9px)] tracking-[0.04em] text-[#9a968f] uppercase @max-[460px]/ticket:hidden">
                × {partner}
              </span>
            )}
          </div>
          <h3 className="self-end text-[max(5.4cqi,18px)] leading-none font-medium tracking-[-0.04em] text-balance">
            {title}
            {accent && <> <span className="text-pivot">{accent}</span></>}
          </h3>
        </div>
        <div className="grid min-w-0 grid-rows-[auto_1fr_auto] border-l border-dashed border-[#3a3a3a] bg-[#1a1a1a] px-[3.5cqi] py-[4.5cqi] @max-[460px]/ticket:p-4">
          {number && <span className="font-mono text-[max(1.5cqi,9px)] tracking-[0.04em] text-[#9a968f] uppercase">Event {number}</span>}
          <div className="row-start-2 grid content-center">
            <b className="font-mono text-[13cqi] leading-[0.85] font-medium tracking-[-0.06em]">{day}</b>
            <span className="mt-[1.4cqi] font-mono text-[max(2.4cqi,10px)] leading-none font-medium text-pivot uppercase">{month}</span>
          </div>
          {(time || place) && (
            <div className="row-start-3 grid gap-[1cqi]">
              {time && <span className="font-mono text-[max(1.7cqi,9px)] leading-[1.2] font-medium tracking-[0.04em] uppercase">{time}</span>}
              {place && <span className="font-mono text-[max(1.7cqi,9px)] leading-[1.2] font-medium tracking-[0.04em] uppercase">{place}</span>}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export { EventTicket }
export type { EventTicketProps }
