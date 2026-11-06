import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const title = "Simple lists"
export const order = 2

const groups = {
  Insights: ["Research papers", "Articles", "Events in Paris", "Newsletter"],
  Company: ["About", "Team", "Careers", "Contact"],
}

export default function NavigationMenuSimple() {
  return (
    <div className="h-[260px] w-[520px] max-w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {Object.entries(groups).map(([label, links]) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-52 gap-0.5">
                  {links.map((l) => (
                    <li key={l}><NavigationMenuLink href="#" >{l}</NavigationMenuLink></li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
