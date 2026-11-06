import { QuicksortMark } from "@/components/quicksort/logo"

export const title = "Mark"
export const description = "The mark alone, down to 16px. On dark grounds the dot turns lime."
export const order = 2

export default function LogoMark() {
  return (
    <div className="flex items-end gap-10">
      {[16, 24, 32, 48].map((h) => (
        <div key={h} className="grid justify-items-center gap-3">
          <QuicksortMark style={{ height: h }} className="text-foreground" />
          <span className="label-mono">{h}px</span>
        </div>
      ))}
    </div>
  )
}
