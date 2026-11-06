export const title = "Type scale"
export const description = "Host Grotesk for words, weights 400 and 500 only. Martian Mono for labels and figures. Desktop sizes; scale down on small screens."
export const order = 1

const scale = [
  { name: "Display", spec: "92 / 0.98 / −4.5%", cls: "text-[clamp(48px,7vw,92px)] leading-[0.98] tracking-[-0.045em] font-medium", text: "One pass." },
  { name: "H1", spec: "64 / 1.04 / −3.5%", cls: "text-[clamp(40px,5vw,64px)] leading-[1.04] tracking-[-0.035em] font-medium", text: "AI that reaches production" },
  { name: "H2", spec: "56 / 1.06 / −3%", cls: "text-[clamp(36px,4.4vw,56px)] leading-[1.06] tracking-[-0.03em] font-medium", text: "Credit review, rebuilt" },
  { name: "H3", spec: "32 / 1.15 / −2%", cls: "text-[32px] leading-[1.15] tracking-[-0.02em] font-medium", text: "From 45 minutes to 12, on the bank's own servers" },
  { name: "H4", spec: "26 / 1.2 / −1%", cls: "text-[26px] leading-[1.2] tracking-[-0.01em] font-medium", text: "What happens in the first 14 weeks" },
  { name: "Lead", spec: "20 / 1.5", cls: "text-[20px] leading-[1.5] text-muted-foreground", text: "We find the one decision that matters, then build the system that makes it faster." },
  { name: "Body", spec: "17 / 1.5 · 15 in components", cls: "text-[17px] leading-[1.5]", text: "The assistant reads each credit file, extracts the covenants and checks them against your policy. Analysts review the memo, not the paperwork." },
  { name: "Small", spec: "13 / 1.45", cls: "text-[13px] leading-[1.45] text-muted-foreground", text: "Help text, captions and table notes." },
  { name: "label-mono", spec: "Mono 11 / +6% / upper", cls: "label-mono", text: "Corporate and investment banking" },
  { name: "num", spec: "Mono · tabular", cls: "num text-[40px] leading-none font-medium tracking-[-0.05em]", text: "−73% · 14 wks · 320" },
]

export default function TypeScale() {
  return (
    <div className="grid w-[820px] max-w-full text-left">
      {scale.map((s) => (
        <div key={s.name} className="grid gap-2 border-b border-border py-5 first:pt-0 last:border-0 md:grid-cols-[160px_1fr] md:gap-8">
          <div className="grid content-start gap-1">
            <span className="text-[13px] font-medium">{s.name}</span>
            <span className="font-mono text-[10.5px] text-faint">{s.spec}</span>
          </div>
          <p className={`min-w-0 text-pretty ${s.cls}`}>{s.text}</p>
        </div>
      ))}
    </div>
  )
}
