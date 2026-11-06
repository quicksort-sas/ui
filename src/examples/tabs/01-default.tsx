import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const title = "Segmented"
export const description = "The default tabs: a segmented control for switching views of the same data."
export const order = 1

export default function TabsDefault() {
  return (
    <Tabs defaultValue="monthly" className="w-[420px] max-w-full">
      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="grid gap-1">
        <span className="label-mono">Assistant usage · October</span>
        <span className="num text-3xl font-medium">18,240</span>
        <span className="text-sm text-muted-foreground">Credit reviews drafted, up 6% on September.</span>
      </TabsContent>
      <TabsContent value="quarterly" className="grid gap-1">
        <span className="label-mono">Assistant usage · Q3 2026</span>
        <span className="num text-3xl font-medium">51,906</span>
        <span className="text-sm text-muted-foreground">Credit reviews drafted, up 22% on Q2.</span>
      </TabsContent>
      <TabsContent value="yearly" className="grid gap-1">
        <span className="label-mono">Assistant usage · 2026 to date</span>
        <span className="num text-3xl font-medium">163,480</span>
        <span className="text-sm text-muted-foreground">Credit reviews drafted since go-live in February.</span>
      </TabsContent>
    </Tabs>
  )
}
