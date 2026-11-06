export const title = "Two typefaces"
export const description = "Words in Host Grotesk. Numbers, labels, keys, codes and timestamps in Martian Mono. Never bold."
export const order = 2

const faces = [
  {
    name: "Host Grotesk",
    role: "Headlines and text",
    cls: "font-sans",
    weights: [["400", "font-normal"], ["500", "font-medium"]],
    sample: "Sort everything in one pass around a single pivot.",
  },
  {
    name: "Martian Mono",
    role: "Numbers, labels, the wordmark",
    cls: "font-mono",
    weights: [["400", "font-normal"], ["500", "font-medium"]],
    sample: "0123456789 −73% 14 wks 09:41",
  },
]

export default function Typefaces() {
  return (
    <div className="grid w-[820px] max-w-full gap-4 text-left md:grid-cols-2">
      {faces.map((f) => (
        <div key={f.name} className="grid content-start gap-6 rounded-lg border border-border bg-background p-6">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[15px] font-medium">{f.name}</span>
            <span className="label-mono">{f.role}</span>
          </div>
          <span className={`${f.cls} text-[88px] leading-none font-medium tracking-[-0.04em]`}>Aa</span>
          <div className="grid gap-3 border-t border-border pt-4">
            {f.weights.map(([w, cls]) => (
              <div key={w} className="grid grid-cols-[40px_1fr] items-baseline gap-3">
                <span className="font-mono text-[10.5px] text-faint">{w}</span>
                <span className={`${f.cls} ${cls} text-[17px] leading-snug`}>{f.sample}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
