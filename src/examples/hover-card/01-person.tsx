import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export const title = "Person"
export const description = "A preview on hover or focus. Keep it to what helps you decide whether to open the link."
export const order = 1

export default function HoverCardPerson() {
  return (
    <p className="text-[15px] text-muted-foreground">
      Brief reviewed by{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">Camille Durand</HoverCardTrigger>
        <HoverCardContent className="grid gap-3">
          <div className="flex items-center gap-3">
            <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
            <div className="grid">
              <span className="text-[15px] font-medium">Camille Durand</span>
              <span className="text-[13px] text-muted-foreground">Lead strategist, banking</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">Ran the credit review programme at BNP Paribas, from first brief to 320 users in production.</p>
          <span className="label-mono">Paris · since 2023</span>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}
