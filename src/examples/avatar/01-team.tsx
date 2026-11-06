import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const title = "Team"
export const description = "Round, with initials in mono when there is no photo."
export const order = 1

const team = [
  { name: "Mohamed Ahmednah", role: "Partner", initials: "MA" },
  { name: "Renaud Granier", role: "Partner", initials: "RG" },
  { name: "Alexandra Beljakov", role: "Principal", initials: "AB" },
  { name: "Guidione Machava", role: "Design lead", initials: "GM" },
]

export default function AvatarTeam() {
  return (
    <ul className="grid w-[320px] gap-4">
      {team.map((p) => (
        <li key={p.name} className="flex items-center gap-3">
          <Avatar size="lg"><AvatarFallback>{p.initials}</AvatarFallback></Avatar>
          <div className="grid">
            <span className="text-[15px] font-medium">{p.name}</span>
            <span className="text-[13px] text-muted-foreground">{p.role}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
