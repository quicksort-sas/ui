export const title = "Theme tokens"
export const description = "Every token in theme.css, light and dark side by side. Use the Tailwind class (bg-card, text-muted-foreground…), never the hex."
export const order = 1

type Token = [name: string, light: string, dark: string, note?: string]

const GROUPS: { name: string; tokens: Token[] }[] = [
  { name: "Surfaces", tokens: [
    ["background", "#f3f0e8", "#141413", "Paper. The page."],
    ["card", "#faf8f3", "#1d1d1b", "Raised surfaces"],
    ["popover", "#faf8f3", "#1d1d1b", "Menus, popovers"],
    ["muted", "#ebe7de", "#222220"],
    ["secondary", "#e9e5db", "#262624"],
    ["accent", "#e4e0d6", "#2a2a28", "Hover"],
  ] },
  { name: "Text", tokens: [
    ["foreground", "#141414", "#ece8df", "Ink"],
    ["muted-foreground", "#55504a", "#b5b0a7", "Secondary text"],
    ["faint", "#736c61", "#918c84", "Tertiary text, sources"],
    ["card-foreground", "#141414", "#ece8df"],
    ["popover-foreground", "#141414", "#ece8df"],
    ["secondary-foreground", "#141414", "#ece8df"],
    ["accent-foreground", "#141414", "#ece8df"],
  ] },
  { name: "Actions and lines", tokens: [
    ["primary", "#141414", "#ece8df", "Default buttons"],
    ["primary-foreground", "#faf8f3", "#141413"],
    ["border", "#e4e1db", "#2a2927", "Hairlines"],
    ["input", "#8a857d", "#76726b", "Control outlines"],
    ["ring", "#141414", "#ece8df", "Focus"],
  ] },
  { name: "Pivot and status", tokens: [
    ["pivot", "#ccff00", "#ccff00", "One per view"],
    ["pivot-foreground", "#141414", "#141414"],
    ["success", "#2f6b3a", "#7fc28b"],
    ["warning", "#9a5b00", "#e0a443"],
    ["destructive", "#b42318", "#f2765f"],
    ["destructive-foreground", "#faf8f3", "#141413"],
  ] },
  { name: "Charts", tokens: [
    ["chart-1", "#141414", "#ece8df"],
    ["chart-2", "#736c61", "#918c84"],
    ["chart-3", "#b8b4ad", "#3f3d3a"],
    ["chart-4", "#ccff00", "#ccff00", "The key value only"],
    ["chart-5", "#55504a", "#b5b0a7"],
  ] },
  { name: "Sidebar", tokens: [
    ["sidebar", "#faf8f3", "#1a1a18"],
    ["sidebar-foreground", "#141414", "#ece8df"],
    ["sidebar-primary", "#141414", "#ece8df"],
    ["sidebar-primary-foreground", "#faf8f3", "#141413"],
    ["sidebar-accent", "#ebe7de", "#262624"],
    ["sidebar-accent-foreground", "#141414", "#ece8df"],
    ["sidebar-border", "#e4e1db", "#2a2927"],
    ["sidebar-ring", "#141414", "#ece8df"],
  ] },
]

function Swatch({ hex, ground }: { hex: string; ground: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-sm border border-black/10" style={{ background: ground }}>
        <span className="size-6 rounded-[1px] ring-1 ring-black/12 ring-inset" style={{ background: hex }} />
      </span>
      <span className="font-mono text-[11px] text-muted-foreground uppercase">{hex}</span>
    </span>
  )
}

export default function ColorTokens() {
  return (
    <div className="grid w-[820px] max-w-full gap-10 text-left">
      {GROUPS.map((g) => (
        <section key={g.name} className="grid gap-3">
          <h4 className="label-mono text-foreground">{g.name}</h4>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] table-fixed border-collapse text-sm">
              <colgroup><col className="w-[34%]" /><col className="w-[20%]" /><col className="w-[20%]" /><col /></colgroup>
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="label-mono py-2 pr-4 font-normal">Token</th>
                  <th className="label-mono py-2 pr-4 font-normal">Light</th>
                  <th className="label-mono py-2 pr-4 font-normal">Dark</th>
                  <th className="label-mono py-2 font-normal">Use</th>
                </tr>
              </thead>
              <tbody>
                {g.tokens.map(([name, light, dark, note]) => (
                  <tr key={name} className="border-b border-border last:border-0">
                    <td className="py-2.5 pr-4">
                      <span className="block font-medium">{name}</span>
                      <code className="font-mono text-[11px] text-faint">var(--{name})</code>
                    </td>
                    <td className="py-2.5 pr-4"><Swatch hex={light} ground="#f3f0e8" /></td>
                    <td className="py-2.5 pr-4"><Swatch hex={dark} ground="#141413" /></td>
                    <td className="py-2.5 text-[13px] text-muted-foreground">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}
