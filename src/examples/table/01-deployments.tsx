import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const title = "Deployments"
export const description = "Labels in mono, figures right-aligned in tabular mono, hairlines between rows."
export const order = 1

const rows = [
  { sector: "Corporate banking", useCase: "Credit review assistant", status: "live", weeks: 14, users: 320 },
  { sector: "Insurance", useCase: "Claims triage", status: "live", weeks: 11, users: 145 },
  { sector: "Retail banking", useCase: "Advisor knowledge search", status: "pilot", weeks: 8, users: 60 },
  { sector: "Asset management", useCase: "Fund report drafting", status: "pilot", weeks: 9, users: 24 },
  { sector: "Energy", useCase: "Contract clause review", status: "scoping", weeks: null, users: null },
] as const

const status = {
  live: <Badge variant="success">Live</Badge>,
  pilot: <Badge variant="warning">Pilot</Badge>,
  scoping: <Badge variant="outline">Scoping</Badge>,
}

export default function TableDeployments() {
  return (
    <div className="w-[760px] max-w-full rounded-lg border border-border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client sector</TableHead>
            <TableHead>Use case</TableHead>
            <TableHead>Status</TableHead>
            <TableHead numeric>Weeks to production</TableHead>
            <TableHead numeric>Users</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.useCase}>
              <TableCell className="text-muted-foreground">{r.sector}</TableCell>
              <TableCell className="font-medium">{r.useCase}</TableCell>
              <TableCell>{status[r.status]}</TableCell>
              <TableCell numeric>{r.weeks ?? <span className="text-faint">—</span>}</TableCell>
              <TableCell numeric>{r.users ?? <span className="text-faint">—</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
