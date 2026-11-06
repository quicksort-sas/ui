import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const title = "Read-only details"
export const description = "When there is nothing to decide, a single close action is enough."
export const order = 2

const rows = [
  ["Model", "Mistral Large 2, on the bank's servers"],
  ["Version", "v2.4 · deployed 4 Nov 2026"],
  ["Users", "320 analysts and bankers"],
  ["Median review", "12 min (was 45)"],
]

export default function DialogDetails() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>View deployment</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <span className="label-mono">Production</span>
          <DialogTitle>Credit review assistant</DialogTitle>
          <DialogDescription>Drafts the credit memo from the client file and flags the covenants to check.</DialogDescription>
        </DialogHeader>
        <dl className="grid border-t border-border">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[140px_1fr] gap-4 border-b border-border py-2.5 text-sm">
              <dt className="text-muted-foreground">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[140px_1fr] items-center gap-4 py-2.5 text-sm">
            <dt className="text-muted-foreground">Status</dt>
            <dd><Badge variant="success">Healthy</Badge></dd>
          </div>
        </dl>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}
