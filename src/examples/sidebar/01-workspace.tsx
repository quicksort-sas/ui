import { FileTextIcon, LayoutGridIcon, LifeBuoyIcon, ServerIcon, SettingsIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export const title = "Client workspace"
export const description = "The active page gets a small lime dot and ink text, not a filled block. Collapses to icons with the trigger or ⌘B."
export const order = 1

const workspace = [
  { label: "Overview", icon: LayoutGridIcon, active: true },
  { label: "Deployments", icon: ServerIcon, badge: "3" },
  { label: "Reports", icon: FileTextIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarWorkspace() {
  return (
    <div className="relative h-[520px] w-[820px] max-w-full overflow-hidden rounded-lg border border-border bg-background text-left">
      <SidebarProvider className="min-h-0 h-full">
        {/* in an app, drop the className below: the sidebar is fixed to the viewport */}
        <Sidebar collapsible="icon" className="absolute h-full">
          <SidebarHeader>
            <div className="flex h-10 items-center gap-2.5 px-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-[11px] text-primary-foreground">BN</span>
              <div className="grid min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate text-sm font-medium">Banque du Nord</span>
                <span className="truncate font-mono text-[11px] text-muted-foreground">Credit review</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {workspace.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active} tooltip={item.label} render={<a href="#" />}>
                        <item.icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Contact Quicksort" render={<a href="#" />}>
                  <LifeBuoyIcon />
                  <span>Contact Quicksort</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="min-w-0">
          <header className="flex h-14 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger />
            <span className="label-mono">Overview</span>
          </header>
          <div className="grid gap-6 p-6">
            <div className="grid gap-1">
              <h2 className="text-xl font-medium tracking-[-0.02em]">Credit review assistant</h2>
              <p className="text-[15px] text-muted-foreground">Live in three regions since February. Next review with the credit committee on 18 November.</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-border pt-4">
              {[["320", "People using it"], ["12 min", "Average review"], ["99.9%", "Uptime, 30 days"]].map(([n, l]) => (
                <div key={l} className="grid gap-1"><dt className="num text-xl font-medium">{n}</dt><dd className="label-mono">{l}</dd></div>
              ))}
            </dl>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
