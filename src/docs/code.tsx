import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { cn } from "cn"

/** Source code in Martian Mono with a copy button. */
export function Code({ code, className, label }: { code: string; className?: string; label?: string }) {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1400) } catch {}
  }
  return (
    <div className={cn("group/code relative min-w-0 overflow-hidden rounded-lg border border-border bg-[#141413] text-[#ece8df] dark:bg-[#0e0e0d]", className)}>
      {label && <div className="border-b border-white/10 px-4 py-2.5 font-mono text-[10px] tracking-[0.06em] text-[#9a968f] uppercase">{label}</div>}
      <button type="button" onClick={copy} aria-label={copied ? "Copied" : "Copy code"} className="absolute top-2 right-2 grid size-8 place-items-center rounded-md text-[#9a968f] transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-pivot focus-visible:outline-none">
        {copied ? <CheckIcon className="size-4 text-pivot" /> : <CopyIcon className="size-4" />}
      </button>
      <pre className="scrollbar-thin overflow-x-auto px-4 py-4 pr-12 font-mono text-[12.5px] leading-[1.7]"><code>{code}</code></pre>
    </div>
  )
}
