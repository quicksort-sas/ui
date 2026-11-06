import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const title = "Several per view"
export const description = "Set a basis on each item to show more than one slide."
export const order = 2

const events = [
  ["7 Nov", "Build Night"],
  ["19 Nov", "AI for credit teams"],
  ["3 Dec", "Evaluation clinic"],
  ["14 Jan", "Pilot to production"],
  ["4 Feb", "Board briefing"],
]

export default function CarouselMultiple() {
  return (
    <Carousel className="mx-14 w-[560px] max-w-[calc(100vw-10rem)]" opts={{ align: "start" }}>
      <CarouselContent className="-ml-3">
        {events.map(([date, name]) => (
          <CarouselItem key={name} className="basis-1/2 pl-3 md:basis-1/3">
            <div className="grid h-32 content-between rounded-lg border border-border bg-background p-4">
              <span className="num text-[13px] text-muted-foreground">{date}</span>
              <span className="text-[15px] font-medium">{name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
