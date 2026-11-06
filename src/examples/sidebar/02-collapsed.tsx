import { FileTextIcon, LayoutGridIcon, ServerIcon, SettingsIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export const title = "Collapsed to icons"
export const description = "Labels move into tooltips; the lime dot stays on the active icon."
export const order = 2

const items = [
  { label: "Overview", icon: LayoutGridIcon },
  { label: "Deployments", icon: ServerIcon, active: true },
  { label: "Reports", icon: FileTextIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarCollapsed() {
  return (
    <div className="relative h-[300px] w-[560px] max-w-full overflow-hidden rounded-lg border border-border bg-background text-left">
      <SidebarProvider defaultOpen={false} className="min-h-0 h-full">
        <Sidebar collapsible="icon" className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active} tooltip={item.label} render={<a href="#" />}>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="min-w-0">
          <header className="flex h-14 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger />
            <span className="label-mono">Deployments</span>
          </header>
          <p className="p-6 text-[15px] text-muted-foreground">credit-review-eu-west · last deployed 4 Nov 2026, 09:12</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
