import { ChevronRightIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item"

export const title = "A linked list"
export const description = "Render items as links: the whole row is the target."
export const order = 2

const people = [
  { name: "Mohamed Ahmednah", note: "Strategy and banking", initials: "MA" },
  { name: "Renaud Granier", note: "Engineering and deployments", initials: "RG" },
  { name: "Alexandra Beljakov", note: "Research and evaluation", initials: "AB" },
]

export default function ItemList() {
  return (
    <ItemGroup className="w-[440px] max-w-full gap-0 rounded-lg border border-border">
      {people.map((p, i) => (
        <div key={p.name}>
          {i > 0 && <ItemSeparator className="my-0" />}
          <Item size="sm" render={<a href="#team" />}>
            <ItemMedia><Avatar><AvatarFallback>{p.initials}</AvatarFallback></Avatar></ItemMedia>
            <ItemContent>
              <ItemTitle>{p.name}</ItemTitle>
              <ItemDescription>{p.note}</ItemDescription>
            </ItemContent>
            <ItemActions><ChevronRightIcon className="size-4 text-muted-foreground" /></ItemActions>
          </Item>
        </div>
      ))}
    </ItemGroup>
  )
}
