import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"

export const title = "Sizes, group and status"
export const order = 2

export default function AvatarSizesGroup() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="flex items-center gap-3">
        <Avatar size="sm"><AvatarFallback>MA</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>RG</AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback>AB</AvatarFallback><AvatarBadge className="bg-success" aria-label="Online" /></Avatar>
      </div>
      <AvatarGroup>
        <Avatar><AvatarFallback>MA</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>RG</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>GM</AvatarFallback></Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
