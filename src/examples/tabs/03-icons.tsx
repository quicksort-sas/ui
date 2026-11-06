import { BarChart3Icon, FileTextIcon, ServerIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const title = "With icons and disabled"
export const order = 3

export default function TabsIcons() {
  return (
    <Tabs defaultValue="deployments">
      <TabsList>
        <TabsTrigger value="deployments"><ServerIcon />Deployments</TabsTrigger>
        <TabsTrigger value="reports"><FileTextIcon />Reports</TabsTrigger>
        <TabsTrigger value="usage" disabled><BarChart3Icon />Usage</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
