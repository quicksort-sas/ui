import { Trace, TraceDescription, TraceLine, TraceTitle } from "@/components/ui/trace"

export const title = "Agent run"
export const description = "A vertical hairline timeline. Steps are numbered in mono; the step that is running carries the lime dot."
export const order = 1

export default function TraceAgentRun() {
  return (
    <Trace className="w-[480px] max-w-full">
      <div><TraceLine><TraceTitle>Read credit file</TraceTitle><TraceDescription>48 pages · 4.1s</TraceDescription></TraceLine></div>
      <div><TraceLine><TraceTitle>Extract covenants</TraceTitle><TraceDescription>6 found · 7.8s</TraceDescription></TraceLine></div>
      <div><TraceLine status="running"><TraceTitle>Check against policy</TraceTitle><TraceDescription>v4.2</TraceDescription></TraceLine></div>
      <div><TraceLine status="pending"><TraceTitle>Draft memo</TraceTitle></TraceLine></div>
    </Trace>
  )
}
