import { ArrowUpRightIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const title = "Case study"
export const order = 1

export default function CardCaseStudy() {
  return (
    <Card className="w-[380px] max-w-full">
      <CardHeader>
        <span className="label-mono">Corporate and investment banking</span>
        <CardTitle>Credit review from 45 minutes to 12</CardTitle>
        <CardDescription>A credit-review assistant on the bank's own servers, used by 320 analysts and bankers.</CardDescription>
        <CardAction><Badge variant="pivot">Live</Badge></CardAction>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-3 gap-4 border-t border-border pt-4">
          {[["−73%", "Review time"], ["14 wks", "To production"], ["320", "People using it"]].map(([n, l]) => (
            <div key={l} className="grid gap-1"><dt className="num text-xl font-medium">{n}</dt><dd className="label-mono text-[9.5px]">{l}</dd></div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-sm text-muted-foreground">Updated 4 Nov 2026</span>
        <Button variant="link" size="sm">Read the case<ArrowUpRightIcon data-icon="inline-end" /></Button>
      </CardFooter>
    </Card>
  )
}
