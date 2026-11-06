import { Kbd, KbdGroup } from "@/components/ui/kbd"

export const title = "Keys and shortcuts"
export const order = 1

export default function KbdKeys() {
  return (
    <div className="grid w-[340px] gap-3 text-[14px]">
      {[
        ["Search components", ["⌘", "K"]],
        ["Toggle dark mode", ["⌘", "⇧", "L"]],
        ["Copy code", ["⌘", "C"]],
        ["Close panel", ["Esc"]],
      ].map(([label, keys]) => (
        <div key={label as string} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
          <span>{label}</span>
          <KbdGroup>{(keys as string[]).map((k) => <Kbd key={k} className={/^[⌘⇧⌥⌃]$/.test(k) ? "font-sans text-[13px]" : undefined}>{k}</Kbd>)}</KbdGroup>
        </div>
      ))}
    </div>
  )
}
