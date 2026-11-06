import { Pivot } from "@/components/quicksort/pivot"

export const title = "The pivot rule"
export const description = "Ink, paper and stone carry the interface. Lime marks the one thing that matters: one dot, one bar, one button per view. Never two."
export const order = 2

const share = [
  { name: "Paper", hex: "#F3F0E8", pct: 60, cls: "bg-[#f3f0e8] text-[#141414]" },
  { name: "Ink", hex: "#141414", pct: 35, cls: "bg-[#141414] text-[#faf8f3]" },
  { name: "Lime", hex: "#CCFF00", pct: 5, cls: "bg-pivot text-pivot-foreground" },
]

export default function PivotRule() {
  return (
    <div className="grid w-[820px] max-w-full gap-8 text-left">
      <div className="grid gap-3">
        <span className="label-mono">A typical page</span>
        <div className="flex h-24 overflow-hidden rounded-lg border border-border">
          {share.map((s) => (
            <div key={s.name} className={`flex flex-col justify-between p-3 ${s.cls}`} style={{ flexBasis: `${s.pct}%` }}>
              <span className="font-mono text-[11px] uppercase">{s.pct > 5 ? s.name : ""}</span>
              <span className="num text-[13px]">{s.pct}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-6 font-mono text-[11px] text-muted-foreground">
          {share.map((s) => <span key={s.name}>{s.name} {s.hex} · {s.pct}%</span>)}
        </div>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3">
        <li className="grid content-start gap-2 border-t border-foreground pt-3">
          <span className="flex items-center gap-2 text-[15px] font-medium"><Pivot size="sm" />One per view</span>
          <span className="text-sm text-muted-foreground">A dot, a bar or a button. If two things want lime, decide which one matters.</span>
        </li>
        <li className="grid content-start gap-2 border-t border-border pt-3">
          <span className="text-[15px] font-medium">An ink edge on paper</span>
          <span className="text-sm text-muted-foreground">On light grounds lime shapes carry a 1.5px ink edge. On ink they stand alone.</span>
        </li>
        <li className="grid content-start gap-2 border-t border-border pt-3">
          <span className="text-[15px] font-medium">Never text on paper</span>
          <span className="text-sm text-muted-foreground">Lime text only on ink: the last words of an event title, a month on a ticket.</span>
        </li>
      </ul>
    </div>
  )
}
