import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const title = "Selectable rows, with a total"
export const description = "Set data-state=\"selected\" on a row to mark it. The footer carries the sum."
export const order = 2

const rows = [
  { id: "w1", item: "Strategy sprint", days: 10, rate: 2400 },
  { id: "w2", item: "Pilot build", days: 30, rate: 1900 },
  { id: "w3", item: "Team training", days: 4, rate: 2100 },
]
const eur = (n: number) => n.toLocaleString("fr-FR") + " €"

export default function TableSelectable() {
  const [selected, setSelected] = React.useState<string[]>(["w2"])
  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  const total = rows.filter((r) => selected.includes(r.id)).reduce((t, r) => t + r.days * r.rate, 0)
  return (
    <div className="w-[600px] max-w-full rounded-lg border border-border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10"><span className="sr-only">Select</span></TableHead>
            <TableHead>Workstream</TableHead>
            <TableHead numeric>Days</TableHead>
            <TableHead numeric>Day rate</TableHead>
            <TableHead numeric>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id} data-state={selected.includes(r.id) ? "selected" : undefined}>
              <TableCell><Checkbox checked={selected.includes(r.id)} onCheckedChange={() => toggle(r.id)} aria-label={`Select ${r.item}`} /></TableCell>
              <TableCell className="font-medium">{r.item}</TableCell>
              <TableCell numeric>{r.days}</TableCell>
              <TableCell numeric>{eur(r.rate)}</TableCell>
              <TableCell numeric>{eur(r.days * r.rate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="label-mono text-[11px]">Selected total</TableCell>
            <TableCell numeric>{eur(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
