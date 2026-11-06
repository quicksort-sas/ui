import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const title = "Case studies"
export const description = "Arrow keys move between slides when the carousel has focus."
export const order = 1

const cases = [
  { sector: "Corporate banking", headline: "Credit review from 45 minutes to 12", figure: "−73%", label: "Review time" },
  { sector: "Insurance", headline: "Claims triaged the day they arrive", figure: "11 wks", label: "To production" },
  { sector: "Retail banking", headline: "Advisors find the policy in seconds", figure: "60", label: "Advisors in pilot" },
  { sector: "Asset management", headline: "Fund reports drafted in one pass", figure: "4 h", label: "Saved per report" },
]

export default function CarouselCaseStudies() {
  return (
    <Carousel className="mx-14 w-[420px] max-w-[calc(100vw-10rem)]" opts={{ align: "start" }}>
      <CarouselContent>
        {cases.map((c) => (
          <CarouselItem key={c.headline}>
            <div className="grid aspect-[4/3] content-between rounded-lg border border-border bg-background p-6">
              <div className="grid gap-2">
                <span className="label-mono">{c.sector}</span>
                <p className="text-xl leading-tight font-medium tracking-[-0.02em]">{c.headline}</p>
              </div>
              <div className="grid gap-1 border-t border-border pt-4">
                <span className="num text-3xl font-medium">{c.figure}</span>
                <span className="label-mono text-[10px]">{c.label}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
