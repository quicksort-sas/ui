import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const title = "Services mega-menu"
export const description = "The quicksort.fr header: a Services panel listing each service with a one-line description."
export const order = 1

const services = [
  { title: "AI Strategy", href: "#", body: "Find where AI pays off, and in what order to build it." },
  { title: "AI for IT & Business", href: "#", body: "Assistants and agents inside the tools your teams already use." },
  { title: "Voice AI", href: "#", body: "Phone and voice agents that answer, route and follow up." },
  { title: "Data for AI", href: "#", body: "Get your documents and data ready for models to use safely." },
  { title: "Infrastructure for AI", href: "#", body: "Run models on your own servers or your cloud, under your control." },
]

const sectors = ["Banking", "Insurance", "Industry", "Public sector"]

export default function NavigationMenuServices() {
  return (
    <div className="h-[380px] w-[760px] max-w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-[1fr_168px]">
                <ul className="grid gap-0.5">
                  {services.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink href={s.href} className="flex-col items-start gap-0.5 py-2.5">
                        <span className="text-sm font-medium">{s.title}</span>
                        <span className="text-[13px] leading-snug text-muted-foreground">{s.body}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                <div className="ml-1.5 grid content-start gap-1 border-l border-border pl-3">
                  <span className="label-mono px-3 pt-2.5 pb-1.5">Sectors</span>
                  {sectors.map((s) => (
                    <NavigationMenuLink key={s} href="#">{s}</NavigationMenuLink>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>Case studies</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>Insights</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
