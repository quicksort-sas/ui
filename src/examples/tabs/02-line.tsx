import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const title = "Line"
export const description = "Underline tabs for page sections. The active tab carries a 1.5px ink rule."
export const order = 2

const sections = [
  { value: "overview", label: "Overview", body: "A credit-review assistant deployed on the bank's own servers, used by 320 analysts and bankers across three regions." },
  { value: "approach", label: "Approach", body: "Two weeks of diagnostic with the credit team, a six-week pilot on live files, then a phased roll-out region by region." },
  { value: "results", label: "Results", body: "Review time down from 45 minutes to 12. Every draft is checked by an analyst before it reaches the committee." },
  { value: "team", label: "Team", body: "Two Quicksort engineers, one strategist and a product owner from the bank's credit risk department." },
]

export default function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-[520px] max-w-full">
      <TabsList variant="line" className="w-full justify-start border-b border-border">
        {sections.map((s) => (
          <TabsTrigger key={s.value} value={s.value}>{s.label}</TabsTrigger>
        ))}
      </TabsList>
      {sections.map((s) => (
        <TabsContent key={s.value} value={s.value} className="pt-2 text-muted-foreground">
          {s.body}
        </TabsContent>
      ))}
    </Tabs>
  )
}
